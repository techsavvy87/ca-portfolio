import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import contactHandler from './api/contact'

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [
      react(),
      {
        name: 'local-contact-api',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (request, response) => {
            const chunks: Buffer[] = []

            for await (const chunk of request) {
              chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
            }

            let body: unknown
            try {
              body = JSON.parse(Buffer.concat(chunks).toString() || '{}')
            } catch {
              response.statusCode = 422
              response.setHeader('Content-Type', 'application/json')
              response.end(JSON.stringify({ error: 'Invalid request body' }))
              return
            }

            const contactResponse = {
              setHeader(name: string, value: string) {
                response.setHeader(name, value)
              },
              status(statusCode: number) {
                response.statusCode = statusCode
                return contactResponse
              },
              json(payload: unknown) {
                response.setHeader('Content-Type', 'application/json')
                response.end(JSON.stringify(payload))
              },
            }

            await contactHandler({ method: request.method, body }, contactResponse)
          })
        },
      },
    ],
  }
})

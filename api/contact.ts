import nodemailer from 'nodemailer'

type ContactRequest = {
  method?: string
  body?: unknown
}

type ContactResponse = {
  setHeader: (name: string, value: string) => void
  status: (statusCode: number) => ContactResponse
  json: (body: unknown) => void
}

type ContactBody = {
  email?: unknown
  message?: unknown
}

function isContactBody(body: unknown): body is ContactBody {
  return typeof body === 'object' && body !== null
}

export default async function handler(
  request: ContactRequest,
  response: ContactResponse,
) {
  response.setHeader('Allow', 'POST')

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!isContactBody(request.body)) {
    return response.status(422).json({ error: 'Invalid request body' })
  }

  const { email, message } = request.body
  const emailIsValid =
    typeof email === 'string' &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const messageIsValid =
    typeof message === 'string' && message.trim().length > 0 && message.length <= 5000

  if (!emailIsValid || !messageIsValid) {
    return response.status(422).json({ error: 'Invalid contact details' })
  }

  const host = process.env.MAIL_HOST
  const port = Number(process.env.MAIL_PORT ?? 587)
  const username = process.env.MAIL_USERNAME
  const password = process.env.MAIL_PASSWORD
  const fromAddress = process.env.MAIL_FROM_ADDRESS
  const recipient = process.env.CONTACT_EMAIL ?? fromAddress

  if (!host || !Number.isInteger(port) || !username || !password || !fromAddress || !recipient) {
    console.error('Contact mail environment variables are incomplete')
    return response.status(500).json({ error: 'Email service is not configured' })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.MAIL_SCHEME === 'smtps',
    auth: {
      user: username,
      pass: password,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM_NAME
        ? `${process.env.MAIL_FROM_NAME} <${fromAddress}>`
        : fromAddress,
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact from ${email}`,
      text: message.trim(),
    })
  } catch (error) {
    console.error('Contact email delivery failed', error)
    return response.status(502).json({ error: 'Unable to send email' })
  }

  return response.status(200).json({ message: 'Email sent' })
}
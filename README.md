# Catherine Regato Portfolio

<img src ="https://github.com/CodeVinayak/CodeVinayak/blob/5920a79f4c5977332a67caf91125241cf0fc46b5/www.vinayaksingh.in.png" />

Personal portfolio website for Catherine Regato, Full Stack AI Engineer.

The site highlights my experience, projects, technical skills, resume, and contact details. It is built with React, TypeScript, Vite, and styled-components.

## Tech Stack

- React 19
- TypeScript
- Vite
- styled-components
- tsParticles
- Nodemailer and Vercel Functions
- Vercel Analytics

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Contact Form

The contact form posts to the Vercel serverless endpoint at `/api/contact`.
Set the following environment variables in Vercel before deploying:

```text
MAIL_HOST
MAIL_PORT
MAIL_SCHEME
MAIL_USERNAME
MAIL_PASSWORD
MAIL_FROM_ADDRESS
MAIL_FROM_NAME
CONTACT_EMAIL
```

Use `.env.example` as the local configuration template. Keep `.env.local` private; do not expose SMTP credentials through `VITE_` variables.

## Resume

The downloadable resume is served from:

```text
public/Vinayak_FullStackAI_Engineer.pdf
```

## Notes

- This project uses npm and `package-lock.json`.
- `Profile.pdf` is local-only and ignored by Git.
- Generated build output in `dist/` is ignored.

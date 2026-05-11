---
title: Getting Started
description: Clone, configure, and deploy SNC Scheduler.
---

## Prerequisites

- Node.js 18+
- A PostgreSQL database ([Render](https://render.com), [Neon](https://neon.tech), [Supabase](https://supabase.com), or self-hosted)

## 1. Clone and install

```bash
git clone https://github.com/minetdd/snc-scheduler.git
cd snc-scheduler
npm install
```

## 2. Run the setup wizard

```bash
npm run setup
```

The wizard will prompt you for:

- **DATABASE_URL** — your PostgreSQL connection string (connection is tested before continuing)
- **AUTH_SECRET** — auto-generated if you press Enter
- **AUTH_URL** — the URL where the app will run (default: `http://localhost:3000`)
- **Owner name, email, and password** — your admin account
- **Resend credentials** — optional, skip to disable email notifications
- **Google Calendar credentials** — optional, skip to disable calendar sync

It writes `.env`, pushes the database schema, and seeds your owner account automatically.

## 3. Start the dev server

```bash
npm run serve
```

Open [http://localhost:3000](http://localhost:3000) and sign in at `/login`.

## 4. Set your username

Go to **Admin → Profile** and set a username (e.g. `jane`). Your public booking URL will be:

```
http://localhost:3000/book/jane
```

## Deploying to production

### Render (recommended)

1. Push the repo to GitHub
2. Create a **Web Service** on [Render](https://render.com)
3. Add a **PostgreSQL** database service
4. Set environment variables in the Render dashboard (same keys as your `.env`)
5. Build command: `npm run build` — Start command: `npm start`

### Vercel + external Postgres

1. Push to GitHub and import on [Vercel](https://vercel.com)
2. Add environment variables in project settings
3. Use any hosted Postgres (Neon, Supabase, Railway)

## Using the booking form on another site

Once your instance is deployed, you can embed the booking form into any website with a single `<iframe>` — no additional setup required.

import { LinkCard } from '@astrojs/starlight/components';

<LinkCard title="Embedding" href="/embedding/" description="Drop the booking form into any website using a single iframe snippet." />

### Environment variables reference

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `AUTH_SECRET` | ✅ | Random secret for signing sessions |
| `AUTH_URL` | ✅ | Full URL of the deployed app |
| `RESEND_API_KEY` | Optional | Enables email notifications |
| `RESEND_FROM_EMAIL` | Optional | From address for outgoing emails |
| `GOOGLE_CLIENT_ID` | Optional | Enables Google Calendar sync |
| `GOOGLE_CLIENT_SECRET` | Optional | Google OAuth client secret |
| `GOOGLE_REDIRECT_URI` | Optional | Must match your Google Cloud Console setting |
| `OPENROUTESERVICE_API_KEY` | Optional | Enables travel time auto-calculation on booking confirmation |

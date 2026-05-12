---
title: Morning Summary Email
description: A daily digest of that day's bookings sent to the admin each morning.
---

The morning summary is a daily email sent to each active admin listing all confirmed bookings for that day. If there are no bookings, no email is sent.

## Email format

The email shows a table with each booking's **time**, **client name**, **service**, and **location**, sorted by start time.

## Setting up on Render

### 1. Generate a secret

```bash
openssl rand -hex 32
```

Copy the output — this is your `CRON_SECRET`.

### 2. Add the environment variable

In your Render web service → **Environment**, add:

| Key | Value |
|---|---|
| `CRON_SECRET` | the string you generated above |

Save and let Render redeploy.

### 3. Create a Cron Job on Render

In your Render dashboard, create a new **Cron Job** with:

| Setting | Value |
|---|---|
| **Schedule** | `0 7 * * *` — runs at 7 AM UTC daily |
| **Command** | `curl -X POST https://<your-app>.onrender.com/api/cron/morning-summary -H "Authorization: Bearer $CRON_SECRET"` |

Adjust the hour (`7`) to match your preferred send time in UTC. For example, if you're in UTC-5 and want the email at 7 AM local time, use `0 12 * * *`.

:::note
`$CRON_SECRET` in the Render Cron Job command automatically resolves to the environment variable you set — no need to paste the value directly.
:::

## Testing manually

Once deployed, you can trigger the endpoint yourself:

```bash
curl -X POST https://<your-app>.onrender.com/api/cron/morning-summary \
  -H "Authorization: Bearer <your-CRON_SECRET>"
```

The response shows how many bookings were found per user and whether an email was sent:

```json
{
  "ok": true,
  "results": [
    { "userId": "...", "email": "you@example.com", "bookings": 3, "sent": true }
  ]
}
```

A `sent: false` result means no confirmed bookings were found for that day — no email is sent.

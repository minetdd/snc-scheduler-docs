---
title: Resend (Email)
description: Send booking confirmation emails via Resend.
---

SNC Scheduler uses [Resend](https://resend.com) to send transactional emails. Without it configured, no emails are sent — bookings still work, clients just won't receive notifications.

## Setup

### 1. Create a Resend account

Sign up at [resend.com](https://resend.com). The free tier covers 3,000 emails per month.

### 2. Get your API key

In the Resend dashboard, go to **API Keys** and create a new key with **Full access**. Copy the key — you won't be able to see it again.

### 3. Verify your sending domain

By default Resend sandboxes all outgoing emails — they only deliver to your Resend account email address. To send to real clients you must verify a domain you own.

#### In Resend

1. Go to **Domains** → **Add Domain**
2. Enter your domain (e.g. `yourdomain.com`) and click **Add**
3. Resend will show you three DNS records to add — keep this page open

#### In Squarespace

1. Log in to Squarespace and go to **Domains**
2. Click your domain → **DNS Settings** → **Add Record**
3. Add each record Resend gives you:

| Resend record type | Squarespace type | What to copy |
|---|---|---|
| TXT | TXT | Host → **Host**, Value → **Data** |
| CNAME (×2) | CNAME | Name → **Host**, Value → **Data** |

:::tip
Squarespace calls the fields **Host** and **Data** — Resend may label them **Name** and **Value**. They mean the same thing.
:::

4. Save each record
5. Back in Resend, click **Verify DNS Records** — propagation usually takes a few minutes but can take up to 24 hours
6. Status will change to **Verified** ✓

### 4. Add to your environment

Once the domain is verified, update your `.env` (or Render environment variables):

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=bookings@yourdomain.com
```

Common choices for the from address: `bookings@`, `hello@`, or `noreply@yourdomain.com`.

If you used `npm run setup`, re-run it or edit `.env` directly and restart the app.

## Emails sent

| Trigger | Recipient | Notes |
|---|---|---|
| Client submits a booking request | Client + Admin | Client receives a "request received" notice; admin receives a new booking alert |
| Admin confirms a booking | Client | Includes an `.ics` calendar file attachment so the client can add the session to their calendar |
| Admin cancels a booking | Client | Includes an optional reason if the admin entered one |
| Admin reschedules a booking | Client | |
| Admin creates a booking directly | Client | |
| Admin invites a new user | Invited user | |
| Admin triggers a password reset | User | |

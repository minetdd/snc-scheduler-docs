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

By default Resend sandboxes all outgoing emails — they only deliver to your Resend account email address. To send to real clients you **must** verify a domain you own.

#### In Resend

1. Go to **Domains** → **Add Domain**
2. Enter your domain (e.g. `yourdomain.com`) and click **Add**
3. Resend will show you DNS records to add — keep this page open

The records you need to add are:

| Type | Name | Purpose |
|---|---|---|
| TXT | `resend._domainkey` | DKIM — proves emails are authentic |
| MX | `send` | Handles bounce/feedback emails |
| TXT | `send` | SPF — authorises Resend to send on your behalf |
| TXT | `_dmarc` | DMARC — optional but recommended |

#### Find your DNS provider

Before adding records, you need to know **where your DNS is actually managed**. This is not always the same as where you registered your domain.

:::caution
If your domain uses custom nameservers (e.g. Netlify DNS, Cloudflare), changes must be made at the nameserver provider — not at your domain registrar. Adding records in the wrong place has no effect.
:::

**How to check:** Contact your registrar's support, or look up your domain's nameservers at [whatsmydns.net](https://www.whatsmydns.net). Common scenarios:

- **Squarespace registered + Squarespace nameservers** → add records in Squarespace
- **Squarespace registered + Netlify nameservers** → add records in Netlify (see below)
- **Squarespace registered + Cloudflare nameservers** → add records in Cloudflare
- **Netlify DNS** → add records in Netlify (see below)

#### Adding records in Netlify DNS

If your domain shows **Netlify DNS** in your site's domain settings:

1. Go to your Netlify site → **Domain management**
2. Click **Netlify DNS** next to your domain
3. Click **Add new record** for each of the following:

| Type | Name | Value | Priority |
|---|---|---|---|
| TXT | `resend._domainkey` | *(full DKIM value from Resend)* | — |
| MX | `send` | `feedback-smtp.us-east-1.amazonses.com` | `10` |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` | — |
| TXT | `_dmarc` | `v=DMARC1; p=none;` | — |

:::tip
Copy the DKIM value directly from the Resend dashboard — it is a long key and must be exact. Do not truncate it.
:::

#### Adding records in Squarespace

If your domain is using Squarespace nameservers:

1. Log in to Squarespace → **Domains** → click your domain → **DNS Settings**
2. Scroll to **Custom Records** → **Add Record**
3. Add each record Resend gives you using the field mapping below:

| Resend label | Squarespace field |
|---|---|
| Name / Host | **Host** |
| Value / Content | **Data** |

4. Save each record

#### Adding records in Cloudflare

1. Log in to Cloudflare → select your domain → **DNS** → **Records**
2. Click **Add record** for each entry
3. Set **Proxy status** to **DNS only** (grey cloud) — do not proxy DNS records

#### After adding records

Once all records are saved, go back to Resend and click **Verify DNS Records** (or **Restart**). Propagation usually takes a few minutes but can take up to 48 hours depending on your DNS provider.

Status will change from **Failed** → **Verified** ✓ automatically.

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
| Admin reschedules a booking | Client | Notifies client of the new time |
| Client reschedules via manage link | Client + Admin | Booking returns to **Pending** — admin must re-confirm |
| Client cancels via manage link | Client + Admin | Both parties receive a cancellation notice |
| Admin creates a booking directly | Client | |
| Admin invites a new user | Invited user | |
| Admin triggers a password reset | User | |

## Troubleshooting

**Status stuck on Failed after 48 hours**

1. Double-check you added the records to the correct DNS provider (the one hosting your nameservers, not necessarily your registrar)
2. Verify the DKIM record name is exactly `resend._domainkey` — a common typo is `resend._domain`
3. Confirm the full DKIM value was copied without truncation
4. Use [MXToolbox TXT lookup](https://mxtoolbox.com/TXTLookup.aspx) to check if your records are visible publicly

**Emails still only arriving at my Resend account email**

Your domain is not yet verified. Check the **Domains** page in Resend — the status must show **Verified** (green) before emails deliver to any address.

**Emails going to spam**

Ensure all four records (DKIM, MX, SPF, DMARC) are added and verified. Missing DMARC or SPF records increase the chance of spam classification.

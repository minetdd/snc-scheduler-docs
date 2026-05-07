---
title: Resend (Email)
description: Send booking confirmation emails via Resend.
---

SNC Scheduler uses [Resend](https://resend.com) to send transactional emails. Without it configured, no emails are sent — bookings still work, clients just won't receive notifications.

## Setup

### 1. Create a Resend account

Sign up at [resend.com](https://resend.com). The free tier covers 3,000 emails per month.

### 2. Get your API key

In the Resend dashboard, go to **API Keys** and create a new key with **Full access**.

### 3. Add to your environment

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=bookings@yourdomain.com
```

### 4. Verify your sending domain (recommended)

By default Resend sandboxes outgoing emails — they only deliver to your Resend account email address. To send to real clients:

1. In the Resend dashboard go to **Domains**
2. Add your domain and follow the DNS verification steps
3. Update `RESEND_FROM_EMAIL` to an address on your verified domain

## Emails sent

| Trigger | Recipient |
|---|---|
| Client submits a booking request | Client (confirmation) + Admin (new booking alert) |
| Admin confirms a booking | Client |
| Admin cancels a booking | Client |
| Admin reschedules a booking | Client |
| Admin creates a booking directly | Client |

---
title: Settings
description: Manage your calendar feed, Google Calendar connection, and embed code.
---

## Google Calendar

Connect your Google Calendar to automatically sync confirmed bookings.

1. Click **Connect Google Calendar**
2. Sign in and grant access
3. Confirmed bookings will appear in your calendar automatically

Cancellations and reschedules update or remove the event. To disconnect, click **Disconnect** — future bookings will no longer sync, but existing events are not removed.

:::note
Google Calendar sync also reads your existing events to block any slots that overlap with them. See [Availability](/admin/availability/) for details.
:::

## Booking Link & Embed

Once you've set a username on your [Profile](/admin/settings/#profile) page, this card shows:

- **Booking Link** — your direct booking URL to share with clients
- **Embed Code** — a ready-to-copy `<iframe>` snippet for embedding on your website
- **Primary colour** — a live colour picker; changing it updates the embed URL preview

See the [Embedding guide](/embedding/) for full details.

## Calendar Subscribe URL (iCal)

Subscribe to your bookings from any calendar app:

- **Apple Calendar** — File → New Calendar Subscription → paste URL
- **Google Calendar** — Other calendars + → From URL → paste URL
- **Outlook** — Add calendar → Subscribe from web → paste URL

Click **Regenerate Token** if you think your URL has been compromised. This invalidates the old URL immediately — update any existing subscriptions.

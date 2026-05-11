---
title: Settings
description: Manage your profile, calendar feed, Google Calendar connection, and embed code.
---

## Profile

Update your name, username, password, and timezone at **Admin → Profile**.

### Timezone

Set your timezone so booking slots are generated at the correct wall-clock times. Clients see slots converted to their own browser timezone automatically.

1. Go to **Admin → Profile**
2. Open the **Timezone** dropdown and select your timezone
3. Click **Save Changes**

:::caution
If you change your timezone, any availability you've already entered is still stored as the same wall-clock times (e.g. "8:00 AM") — they will simply be interpreted in the new timezone going forward. Review your availability after changing this setting.
:::

### Travel Time Buffer

Set your base address so the app can automatically calculate drive time when you confirm bookings.

1. Go to **Admin → Profile**
2. Enter your **base address** (e.g. your studio or home) — start typing and suggestions will appear
3. Click **Save Changes**

When you confirm a booking that has a client location, the **Travel to** and **Travel from** fields in the confirm dialog are automatically filled with the estimated drive time plus a 10-minute buffer. You can adjust the values before confirming.

Travel time is also auto-calculated when you open the **Reschedule** or **New Booking** dialog if a location is already set.

:::note
Travel time calculation requires `OPENROUTESERVICE_API_KEY` to be set. Address suggestions work without it.
:::

### Booking Window

Control how far in advance clients can book.

| Setting | Description | Default |
|---|---|---|
| **Minimum notice** | How many hours ahead a client must book. Set to `24` to require a day's notice. | 0 (same-day allowed) |
| **Max advance booking** | How many days into the future a client can book. | 60 days |

Dates outside the allowed window return no available slots on the public booking page — clients simply won't see those dates as selectable.

1. Go to **Admin → Profile**
2. Set **Minimum notice** (hours) and/or **Max advance booking** (days)
3. Click **Save Changes**

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

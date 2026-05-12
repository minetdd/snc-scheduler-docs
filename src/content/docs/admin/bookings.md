---
title: Bookings
description: View and manage incoming bookings.
---

The bookings page lists all bookings across all statuses — pending, confirmed, and cancelled.

## Booking statuses

| Status | Meaning |
|---|---|
| **Pending** | Submitted by the client, not yet reviewed |
| **Confirmed** | Accepted — client receives a confirmation email, event written to Google Calendar |
| **Cancelled** | Cancelled by you — client receives a cancellation email, Google Calendar event deleted |

## Actions

- **Confirm** — accepts a pending booking. If the booking has a client location and you have a base address set in your Profile, the travel time fields are auto-filled with the estimated drive time (+ 10 min buffer). You can adjust before confirming.
- **Cancel** — cancels any booking; an optional reason field is shown in the cancel dialog. If filled in, the reason appears in the cancellation email sent to the client.
- **Reschedule** — change the date and time of a confirmed booking; client receives a reschedule email and the Google Calendar event is updated. Travel time is auto-calculated when the dialog opens.
- **Rebook** — available on past or cancelled bookings. Opens the reschedule dialog pre-filled with the client's details (name, email, phone, location, service). The existing booking record is updated — no duplicate is created.
- **Create booking** — create a booking directly for a client without going through the public booking page. Travel time is auto-calculated when you fill in the session location.

## Client self-service (cancel & reschedule)

Every booking confirmation email sent to the client includes a **Manage My Booking** button. Clicking it takes them to a secure page where they can:

- **Cancel** their booking — with an optional reason sent back to you
- **Reschedule** — pick a new date and available slot for the same service

The manage page respects your booking window settings (minimum notice, maximum advance days) and blocked dates. Clients cannot reschedule to a blocked date or a slot within your minimum notice period. They also cannot modify a booking that has already passed.

When a client cancels or reschedules, the relevant email is sent to both parties automatically.

:::note
The manage link is unique and unguessable — no login is required. If a booking was created before this feature was introduced it will not have a manage link in its emails.
:::

## Client confirmation screen

After a client submits a booking, the confirmation screen shows an **Add to Calendar** button. Clicking it downloads an `.ics` file they can open in Apple Calendar, Google Calendar, Outlook, or any calendar app. A calendar file is also attached to the confirmation email sent when you confirm the booking.

## Filtering

Use the tabs at the top of the page to filter by status (Upcoming / Past / Cancelled). Bookings are paginated — use the navigation at the bottom to move between pages.

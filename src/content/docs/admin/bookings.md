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
- **Create booking** — create a booking directly for a client without going through the public booking page. Travel time is auto-calculated when you fill in the session location.

## Client confirmation screen

After a client submits a booking, the confirmation screen shows an **Add to Calendar** button. Clicking it downloads an `.ics` file they can open in Apple Calendar, Google Calendar, Outlook, or any calendar app. A calendar file is also attached to the confirmation email sent when you confirm the booking.

## Filtering

Use the tabs at the top of the page to filter by status (Upcoming / Past / Cancelled). Bookings are paginated — use the navigation at the bottom to move between pages.

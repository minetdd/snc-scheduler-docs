---
title: Client Experience
description: What your clients see from booking request through to confirmation.
---

This page walks through the full journey a client goes through — from landing on your booking page to receiving their confirmation email.

## 1. The booking page

Clients visit your public booking URL:

```
https://yourapp.com/book/yourusername
```

The page shows:

- Your available **services** (name, description, duration, price if set)
- A **date picker** showing only days that have available slots
- **Time slots** for the selected date, sized to the chosen service duration
- A **booking form** to collect name, email, phone, and session location

Dates that are fully booked, blocked, or outside your booking window are not selectable.

## 2. Submitting a request

After filling in their details and selecting a time, the client clicks **Book**. At this point:

- The slot is reserved and marked **Pending**
- The client sees a confirmation screen with an **Add to Calendar** button (downloads an `.ics` file)
- The client receives a **"Booking Request Received"** email from your domain
- You receive a **"New Booking Request"** email (if admin notifications are enabled)

:::note
At this stage the booking is **not yet confirmed**. The client's email makes this clear — it tells them you'll review the request and send a confirmation shortly.
:::

## 3. Admin confirmation

You review the pending booking in **Admin → Dashboard** or **Admin → Bookings** and click **Confirm**.

- If the booking has a client location and you have a base address set, travel time is auto-calculated
- The booking status changes to **Confirmed**
- A **"Booking Confirmed"** email is sent to the client, including:
  - Service, date, time, and location
  - A **Manage My Booking** button for self-service changes
  - An `.ics` calendar file attachment

## 4. The Manage My Booking link

Every confirmation email includes a **Manage My Booking** button. This link is unique and unguessable — the client does not need to log in.

From the manage page, the client can:

### Cancel

The client can cancel their booking at any time before the appointment, with an optional reason. When cancelled:

- Both you and the client receive a cancellation email
- The slot is freed and becomes available again for new bookings

### Reschedule

The client can pick a new date and time for the same service. The manage page respects:

- Your **minimum notice** setting (can't book within your notice window)
- Your **maximum advance booking** setting
- Your **blocked dates**
- Slots already taken by other clients

When rescheduled:

- The booking moves to the new time slot
- The status resets to **Pending** — you must confirm it again
- The client receives a reschedule notification email
- You receive a new booking alert (if enabled)

:::note
Requiring re-confirmation after a reschedule ensures you're always aware of changes to your schedule before they're locked in.
:::

## 5. Past bookings

Once the appointment time has passed, the manage link becomes read-only — the client can view their booking details but cannot cancel or reschedule.

## What the client never sees

- The admin panel
- Other clients' bookings
- Your Google Calendar events (these just silently block slots)
- Any internal notes or travel time fields

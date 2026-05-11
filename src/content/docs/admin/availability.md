---
title: Availability
description: Set your weekly availability so clients can see your open slots.
---

The availability editor lets you define when you're open for bookings on a recurring weekly schedule.

## Creating time blocks

1. Go to **Admin → Availability**
2. Click and drag on the calendar to create a time block
3. Drag the top or bottom edge of a block to resize it
4. Click a block to delete it

Each block represents a window of time on a specific day of the week when you're available for bookings. Blocks repeat every week.

## How slots are generated

When a client visits your booking page and selects a date, the app generates available time slots from your blocks for that day. Each slot is sized to the duration of the selected service, with buffer time added between slots.

For example: a 2-hour block with a 60-minute service and 15-minute buffer produces slots at 09:00, 10:15.

## Google Calendar busy times

If you've connected Google Calendar (**Admin → Settings**), the slot generator also checks your existing Google Calendar events and removes any slots that overlap with them. This prevents double-booking across your personal and professional calendars.

## Blocked Dates

Block specific dates or date ranges — holidays, vacations, or any day you're unavailable. Clients will see no available slots on blocked dates.

1. Go to **Admin → Availability** and scroll down to the **Blocked Dates** card
2. Set a **Start date** (and optionally an **End date** for a multi-day range)
3. Add an optional **Label** (e.g. *Christmas*, *Vacation*) to remind yourself why the date is blocked
4. Click **Add**

Blocked dates appear in an upcoming list with delete buttons. Past blocks move to a dimmed history section at the bottom.

### Conflict warning

If any active bookings already exist within the date range you're about to block, a warning banner appears listing each booking (client name, service, and time). You can cancel those bookings inline — click **Cancel booking**, enter an optional reason, and click **Confirm**. The cancellation email is sent to the client automatically.

:::caution
Blocking a date does not automatically cancel existing bookings on that date. The warning prompts you to handle them manually before adding the block.
:::

---
title: API Reference
description: Public API routes for the booking widget and integrations.
---

All public routes support CORS and can be called from any origin. Admin routes require a valid session cookie.

## Public routes

### `GET /api/public/user/[username]`

Resolves a username to a user ID.

**Response**
```json
{ "id": "uuid", "name": "Jane Smith", "timezone": "America/Denver" }
```

Returns `404` if the username does not exist.

---

### `GET /api/public/services`

Returns active service types for a user.

**Query parameters**

| Parameter | Required | Description |
|---|---|---|
| `userId` | ✅ | User ID from `/api/public/user/[username]` |

**Response**
```json
[
  {
    "id": "uuid",
    "name": "Standard Session",
    "description": "60-minute portrait session",
    "duration": 60,
    "bufferTime": 15,
    "price": 150,
    "color": "#1976d2"
  }
]
```

---

### `GET /api/public/slots`

Returns available booking slots for a service on a given date. Excludes already-booked slots and, if Google Calendar is connected, existing calendar events. Also enforces the admin's booking window — dates outside the minimum notice period or maximum advance days return an empty array.

**Query parameters**

| Parameter | Required | Description |
|---|---|---|
| `serviceTypeId` | ✅ | Service ID |
| `date` | ✅ | Date in `YYYY-MM-DD` format |

**Response**
```json
[
  { "start": "2026-05-10T09:00:00.000Z", "end": "2026-05-10T10:00:00.000Z" },
  { "start": "2026-05-10T10:15:00.000Z", "end": "2026-05-10T11:15:00.000Z" }
]
```

Returns an empty array `[]` if the date falls on a blocked date or is outside the booking window. Returns `400` if parameters are missing, `404` if the service does not exist or is inactive.

---

### `POST /api/public/bookings`

Creates a booking. Returns `409` if the slot is already taken, `429` if the rate limit is exceeded (20 requests per 15 minutes per IP).

**Request body**
```json
{
  "serviceTypeId": "uuid",
  "slotStart": "2026-05-10T09:00:00.000Z",
  "slotEnd": "2026-05-10T10:00:00.000Z",
  "bookerName": "Alex Smith",
  "bookerEmail": "alex@example.com",
  "bookerPhone": "+1 555 000 0000",
  "location": "Central Park, NYC",
  "notes": "Bringing two kids"
}
```

`bookerPhone` and `notes` are optional.

**Response** (`201`)
```json
{ "id": "uuid" }
```

---

---

## Admin routes — Blocked Dates

All routes require an authenticated admin session.

### `GET /api/admin/exceptions`

Returns all blocked date ranges for the authenticated user, ordered by start date.

**Response**
```json
[
  { "id": "uuid", "startDate": "2026-12-24T00:00:00.000Z", "endDate": "2026-12-26T23:59:59.999Z", "label": "Christmas" }
]
```

---

### `POST /api/admin/exceptions`

Creates a blocked date range.

**Request body**
```json
{
  "startDate": "2026-12-24",
  "endDate": "2026-12-26",
  "label": "Christmas"
}
```

`endDate` and `label` are optional. If `endDate` is omitted, the block covers the single day of `startDate`.

**Response** (`201`) — the created exception object.

---

### `DELETE /api/admin/exceptions/[id]`

Removes a blocked date range. Returns `404` if the exception does not belong to the authenticated user.

---

### `GET /api/admin/exceptions/conflicts`

Checks whether any active bookings fall within a date range, before committing to blocking those dates.

**Query parameters**

| Parameter | Required | Description |
|---|---|---|
| `startDate` | ✅ | Start of range (`YYYY-MM-DD`) |
| `endDate` | | End of range (`YYYY-MM-DD`). Defaults to `startDate`. |

**Response**
```json
{
  "count": 1,
  "bookings": [
    {
      "id": "uuid",
      "bookerName": "Alex Smith",
      "serviceName": "Standard Session",
      "slotStart": "2026-12-24T14:00:00.000Z"
    }
  ]
}
```

---

## Health check

### `GET /api/health`

```json
{ "status": "ok", "db": "ok" }
```

Returns `500` if the database is unreachable.

---

## iCal feed

### `GET /api/feed/[token].ics`

Returns all confirmed and pending bookings as a valid `.ics` calendar file. The token is unique per user and available from **Admin → Settings**.

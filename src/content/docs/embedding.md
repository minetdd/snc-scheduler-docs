---
title: Embedding
description: Embed the booking form on your own website.
---

You can put the booking form directly on your website using a single `<iframe>`. The embedded version has no header bar or page chrome — it blends into your existing layout.

## Prerequisites

Set a username on your **Admin → Profile** page. Your booking URLs are derived from it.

## Direct booking link

For linking from a "Book Now" button or sharing via email:

```
https://yourapp.com/book/[username]
```

This is a full standalone page.

## Embed URL

For embedding in an iframe:

```
https://yourapp.com/embed/[username]
https://yourapp.com/embed/[username]?primary=%231976d2
```

The `primary` parameter accepts a URL-encoded hex colour to match your brand. Any invalid or missing value falls back to the default blue (`#1976d2`).

## Getting the embed code

The quickest way is **Admin → Settings → Booking Link & Embed**:

1. Pick a primary colour with the colour picker
2. The iframe snippet updates live
3. Click **Copy embed code**

## Example

```html
<iframe
  src="https://yourapp.com/embed/jane?primary=%234f46e5"
  width="100%"
  height="700"
  frameborder="0"
  style="border:none;border-radius:8px"
></iframe>
```

Adjust `height` to fit your layout. `700px` covers the full booking flow comfortably.

## Colour reference

Pick a primary colour that matches your brand and URL-encode the hex value:

| Colour | Hex | URL-encoded |
|---|---|---|
| Default blue | `#1976d2` | `%231976d2` |
| Indigo | `#4f46e5` | `%234f46e5` |
| Emerald | `#059669` | `%23059669` |
| Rose | `#e11d48` | `%23e11d48` |

You can also grab the URL-encoded value directly from the Settings embed card.

## Security

The `/embed/[username]` route sets `Content-Security-Policy: frame-ancestors *`, allowing it to be framed from any origin. All other routes (admin, login, `/book/*`) set `X-Frame-Options: SAMEORIGIN` and cannot be embedded by third-party sites.

---
title: Google Calendar
description: Sync confirmed bookings with Google Calendar.
---

When connected, SNC Scheduler writes confirmed bookings to your Google Calendar, updates events on reschedule, and deletes them on cancellation. It also reads your existing events to block overlapping slots on the booking page.

## Setup

### 1. Create a Google Cloud project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or select an existing one)
3. Enable the **Google Calendar API** — search for it in the API Library

### 2. Create OAuth 2.0 credentials

1. Go to **APIs & Services → Credentials**
2. Click **Create Credentials → OAuth client ID**
3. Application type: **Web application**
4. Add an authorised redirect URI:
   - Development: `http://localhost:3000/api/auth/google/callback`
   - Production: `https://yourdomain.com/api/auth/google/callback`
5. Copy the **Client ID** and **Client Secret**

### 3. Configure the OAuth consent screen

1. Go to **APIs & Services → OAuth consent screen**
2. Set the app name, support email, and developer contact
3. Add the scope: `https://www.googleapis.com/auth/calendar.events`
4. Add your email as a **Test user** while developing

### 4. Add to your environment

```env
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=https://yourdomain.com/api/auth/google/callback
```

### 5. Connect in the app

Go to **Admin → Settings** and click **Connect Google Calendar**.

## Moving to production

While your OAuth app is in *Testing* mode, only test users can connect. To allow any Google account:

1. Go to **OAuth consent screen**
2. Click **Publish App** to move to production status
3. If your app uses restricted scopes (like `calendar.events`), Google may require verification — follow their process

For a personal or small-team deployment, staying in Testing mode with your own email added as a test user is sufficient.

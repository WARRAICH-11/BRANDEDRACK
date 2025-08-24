# BRANDEDRACK Frontend

This is a Vite + React frontend scaffold converted from an existing static HTML landing page.

Run locally:

1. npm install
2. npm run dev

Notes:
- Tailwind is configured. Create a `.env.local` with your STRIPE publishable key for checkout.
- `LenixCanvas` component will attempt to import `lenix` dynamically. If not present it falls back silently.

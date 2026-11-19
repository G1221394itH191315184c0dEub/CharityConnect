# Deploying on Vercel (frontend + API together)

Project settings in Vercel: **Root Directory** = `charityconnect`, everything else is read from `vercel.json`.

Environment variables (Project -> Settings -> Environment Variables):

- `ADMIN_EMAIL` and `ADMIN_PASSWORD` (required: Vercel runs in production mode, so only the admin account is seeded)
- `PAYMENT_MODE=demo`

Leave `FRONTEND_ORIGIN` unset and keep `public/config.js` empty: the site and API share one origin.

## Important limitation
Vercel functions have no persistent disk. The SQLite file lives in `/tmp` and is recreated (admin only) when an instance is replaced, so registered users, campaigns and donations are lost. This is fine for a demo.
For data that must persist, run the same server (`node server/index.js`, see `Dockerfile`) on a host with a persistent disk (Render, Railway, Fly.io, a VPS), or move the DB layer to a hosted database.

## Local development (unchanged)
`npm install`, `node server/seed.js`, `node server/index.js` -> http://localhost:3000

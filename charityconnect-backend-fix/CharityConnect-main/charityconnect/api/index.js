// Vercel serverless entry. All /api/* requests are rewritten here by vercel.json.
// It reuses the exact same app as `node server/index.js`; nothing is duplicated.
import { createApp } from '../server/app.js';

let app; // reused while the serverless instance is warm

function getApp() {
  if (app) return app;
  // Vercel's filesystem is read-only except /tmp, and /tmp is NOT persistent between instances.
  // Set DB_PATH only if you mount real persistent storage; otherwise data resets on cold starts.
  const dbPath = process.env.DB_PATH || (process.env.VERCEL ? '/tmp/charityconnect.sqlite' : 'data/charityconnect.sqlite');
  app = createApp({ dbPath });
  return app;
}

export default function handler(req, res) {
  let a;
  try { a = getApp(); } catch (e) {
    console.error('Startup error:', e.message);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    // e.g. production seeding needs ADMIN_EMAIL and ADMIN_PASSWORD
    return res.end(JSON.stringify({ error: { code: 'STARTUP', message: e.message } }));
  }
  return a.handler(req, res);
}

// Load .env.production from file if available
const fs = require('fs');
const envPaths = [
  '/home/u986125053/domains/iwnt.ae/hbuilds/current/nodejs/.env.production',
  '/home/u986125053/domains/iwnt.ae/public_html/.env.production',
  '.env.production',
  '.env',
];
let envLoaded = false;
for (const envPath of envPaths) {
  try {
    const env = fs.readFileSync(envPath, 'utf-8');
    env.split('\n').forEach(line => {
      const m = line.match(/^([^=#+\s][^=]*)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim();
    });
    console.log('Loaded env from:', envPath);
    envLoaded = true;
    break;
  } catch (e) { /* try next path */ }
}

// Fallback: hardcoded env vars (used when no .env file is present on server)
if (!envLoaded || !process.env.DATABASE_URL) {
  console.log('Using hardcoded env fallback');
  process.env.DATABASE_URL = process.env.DATABASE_URL || 'prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza18xUHZ4TW03amtLc21TalhyeFVKMlQiLCJhcGlfa2V5IjoiMDFNMEQ1MjRIVzZWWTNGRlpaMTZUTk5aTkoiLCJ0ZW5hbnRfaWQiOiI0MGJjOGNiZTk5NGM5YWQ4OWRlNWYwYjhhMDEyNzUzY2Q4ZTI2M2UyMTIzN2U4NTkyY2UxNGE0MmY3N2Q3NGVlIiwiaW50ZXJuYWxfc2VjcmV0IjoiZmU1ZWY0Y2MtYWRiZi00YzA0LWI5MjctZDc0MDE3ODU1NTFmIn0.E5Sp6aSPwPgo68oSJtAHZW6CgDXvse2ChJOyqOa7fxQ';
  process.env.AUTH_SECRET = process.env.AUTH_SECRET || '7a03ef8e477adb3ceeabf6d83dca1efa52e0fd5f3634cffe1386683b91ac492b';
  process.env.NEXTAUTH_URL = process.env.NEXTAUTH_URL || 'https://iwnt.ae';
  process.env.NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://iwnt.ae';
  process.env.AUTH_TRUST_HOST = process.env.AUTH_TRUST_HOST || 'true';
  process.env.SMTP_HOST = process.env.SMTP_HOST || 'smtp.hostinger.com';
  process.env.SMTP_PORT = process.env.SMTP_PORT || '465';
  process.env.SMTP_USER = process.env.SMTP_USER || 'info@iwnt.ae';
  process.env.SMTP_PASS = process.env.SMTP_PASS || '!IWNTDubai26';
}

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Initialize the Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      // Let Next.js handle all requests, including static files
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});

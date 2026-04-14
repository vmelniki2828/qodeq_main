require('dotenv').config();

const dns = require('dns');
const express = require('express');
const nodemailer = require('nodemailer');

const PORT = Number(process.env.PORT || 3001);
const NOTIFY_EMAIL = (process.env.NOTIFY_EMAIL || '').trim();

/** В Docker часто ломается SMTP по IPv6 — при проблемах поставьте true в server/.env */
if (String(process.env.SMTP_IPV4_FIRST || '').toLowerCase() === 'true') {
  dns.setDefaultResultOrder('ipv4first');
}

const app = express();
app.use(express.json({ limit: '32kb' }));

function buildTransporter() {
  const host = (process.env.SMTP_HOST || '').trim();
  if (!host) return null;

  const port = Number(process.env.SMTP_PORT || 587);
  const secureEnv = String(process.env.SMTP_SECURE || '').trim().toLowerCase();
  let secure = secureEnv === 'true';
  if (secureEnv === 'false') {
    secure = false;
  } else if (secureEnv === '' && port === 465) {
    secure = true;
  }

  const user = (process.env.SMTP_USER || '').trim();
  const pass = (process.env.SMTP_PASS || '').trim();

  const tls = {};
  if (String(process.env.SMTP_TLS_REJECT_UNAUTHORIZED || 'true').toLowerCase() === 'false') {
    tls.rejectUnauthorized = false;
  }

  const smtpDebug = String(process.env.SMTP_DEBUG || '').toLowerCase() === 'true';

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user ? { user, pass } : undefined,
    requireTLS: port === 587 && !secure,
    ...(Object.keys(tls).length ? { tls } : {}),
    logger: smtpDebug,
    debug: smtpDebug,
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact-leads', async (req, res) => {
  const { contact, consent, timestamp, page, product } = req.body || {};

  if (typeof contact !== 'string' || !contact.trim()) {
    return res.status(400).json({ error: 'contact required' });
  }
  if (consent !== true) {
    return res.status(400).json({ error: 'consent required' });
  }

  if (!NOTIFY_EMAIL) {
    console.error('NOTIFY_EMAIL is not set in server/.env');
    return res.status(500).json({ error: 'server mail not configured' });
  }

  const transporter = buildTransporter();
  if (!transporter) {
    console.error('SMTP_HOST is not set in server/.env');
    return res.status(500).json({ error: 'server smtp not configured' });
  }

  const from = (process.env.SMTP_FROM || NOTIFY_EMAIL).trim();
  const subject =
    (process.env.MAIL_SUBJECT_PREFIX || '[Сайт] Заявка').trim() +
    ` — ${typeof page === 'string' ? page : 'форма'}`;

  const lines = [
    `Контакт: ${contact.trim()}`,
    `Страница: ${page ?? '—'}`,
    product ? `Продукт: ${product}` : null,
    `Время: ${timestamp ?? '—'}`,
    `Согласие: да`,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      from,
      to: NOTIFY_EMAIL,
      subject,
      text: lines.join('\n'),
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    const code = err.code || err.errno || '';
    const resp = err.response || err.responseCode || '';
    console.error(
      'sendMail error:',
      err.message,
      code ? `code=${code}` : '',
      resp ? `smtp=${String(resp).slice(0, 200)}` : '',
      err.command ? `command=${err.command}` : ''
    );
    return res.status(500).json({ error: 'mail send failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://127.0.0.1:${PORT}`);
});

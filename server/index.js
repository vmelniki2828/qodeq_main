require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');

const PORT = Number(process.env.PORT || 3001);
const NOTIFY_EMAIL = (process.env.NOTIFY_EMAIL || '').trim();

const app = express();
app.use(express.json({ limit: '32kb' }));

function buildTransporter() {
  const host = (process.env.SMTP_HOST || '').trim();
  if (!host) return null;

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true';
  const user = (process.env.SMTP_USER || '').trim();
  const pass = (process.env.SMTP_PASS || '').trim();

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user ? { user, pass } : undefined,
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
    console.error('sendMail error:', err);
    return res.status(500).json({ error: 'mail send failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://127.0.0.1:${PORT}`);
});

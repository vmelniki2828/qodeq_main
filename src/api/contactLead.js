/**
 * Отправка заявки с форм «Оставьте контакты» на собственный бэкенд.
 * Тело POST (JSON): { contact, consent, timestamp, page, product? }
 *
 * URL: REACT_APP_CONTACT_API_URL или по умолчанию /api/contact-leads (тот же origin / прокси).
 */
const CONTACT_LEAD_URL =
  (process.env.REACT_APP_CONTACT_API_URL || '').trim() || '/api/contact-leads';

/**
 * @param {object} payload
 * @param {string} payload.contact
 * @param {boolean} payload.consent
 * @param {string} payload.timestamp — ISO-строка
 * @param {string} payload.page — метка страницы/формы
 * @param {string} [payload.product] — id продукта (только Products)
 * @returns {Promise<Response>}
 */
export function submitContactLead(payload) {
  return fetch(CONTACT_LEAD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

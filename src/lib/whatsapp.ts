import { WHATSAPP_PHONE } from "./site";

const WA_BASE = "https://wa.me";

/**
 * Builds a `wa.me` deep link with URL-encoded pre-filled text.
 * @see https://faq.whatsapp.com/5913398998672934
 */
export function getWhatsAppLink(text: string, phone: string = WHATSAPP_PHONE): string {
  const params = new URLSearchParams();
  if (text.trim()) {
    params.set("text", text);
  }
  const query = params.toString();
  return query ? `${WA_BASE}/${phone}?${query}` : `${WA_BASE}/${phone}`;
}

export function courseEnrollmentMessage(courseTitle: string): string {
  return `Здравствуйте! Хочу записаться на курс «${courseTitle}». Подскажите, пожалуйста, расписание и стоимость.`;
}

export function genericConsultMessage(): string {
  return "Здравствуйте! Хочу записаться на консультацию. Подскажите, пожалуйста, ближайшие слоты.";
}

export function levelTestMessage(): string {
  return "Здравствуйте! Хочу пройти тест уровня. Как это можно сделать?";
}

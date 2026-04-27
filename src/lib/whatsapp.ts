import { WHATSAPP_PHONE } from "./site";
import { FunnelGoal, FunnelRecommendation, routeBadgeLabel } from "./funnel";

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

function goalLabel(goal: FunnelGoal): string {
  if (goal === "ielts") return "IELTS";
  if (goal === "work") return "Работа";
  return "Разговорный английский";
}

type FunnelLeadPayload = {
  name: string;
  phone: string;
  goal: FunnelGoal;
  level: FunnelRecommendation["level"];
  primaryRoute: string;
  backupRoute: string;
  risk: string;
  durationHint: string;
};

export function funnelLeadMessage(payload: FunnelLeadPayload): string {
  return [
    "Здравствуйте! Отправляю заявку после мини-теста.",
    `Имя: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Цель: ${goalLabel(payload.goal)}`,
    `Ориентировочный уровень: ${payload.level}`,
    `Основной маршрут: ${payload.primaryRoute}`,
    `Запасной маршрут: ${payload.backupRoute}`,
    `Ключевой риск: ${payload.risk}`,
    `Рекомендованный срок старта: ${payload.durationHint}`,
    "Хочу уточнить расписание и ближайший старт.",
  ].join("\n");
}

export function funnelRouteSummary(recommendation: FunnelRecommendation): string {
  return [
    `${routeBadgeLabel(recommendation.primaryRoute.badge)}: ${recommendation.primaryRoute.title}`,
    `Альтернатива: ${recommendation.backupRoute.title}`,
  ].join(" | ");
}

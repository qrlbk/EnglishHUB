export const EVENT_MAPPING_TABLE = [
  { event: "funnel_test_started", target: "GA4 custom_event", description: "Старт теста по сегменту" },
  { event: "funnel_test_completed", target: "GA4 custom_event", description: "Завершение теста и уровень" },
  { event: "test_abandoned", target: "GA4 custom_event", description: "Отказ на шаге теста" },
  { event: "offer_primary_shown", target: "GA4 custom_event", description: "Показ основного оффера" },
  { event: "offer_viewed_no_accept", target: "GA4 custom_event", description: "Просмотр оффера без принятия" },
  { event: "offer_accept_clicked", target: "GA4 custom_event", description: "Принятие оффера/переход к решению" },
  { event: "alternatives_opened", target: "GA4 custom_event", description: "Открытие альтернативных маршрутов" },
  { event: "alternatives_chosen", target: "GA4 custom_event", description: "Выбор альтернативного маршрута" },
  { event: "course_details_clicked", target: "GA4 custom_event", description: "Переход на страницу маршрута" },
  { event: "course_details_opened", target: "GA4 custom_event", description: "Просмотр страницы маршрута" },
  { event: "lead_started_no_submit", target: "GA4 custom_event", description: "Начал форму, но не отправил" },
  { event: "lead_form_submitted", target: "GA4 conversion", description: "Отправка лид-формы" },
  { event: "whatsapp_handoff_clicked", target: "GA4 conversion", description: "Переход в WhatsApp" },
] as const;

export const DASHBOARD_SPEC = [
  "testStartRate = funnel_test_started / sessions",
  "testCompletionRate = funnel_test_completed / funnel_test_started",
  "primaryOfferAcceptRate = offer_accept_clicked / offer_primary_shown",
  "leadSubmitRate = lead_form_submitted / funnel_test_completed",
  "waHandoffRate = whatsapp_handoff_clicked / lead_form_submitted",
] as const;

type Primitive = string | number | boolean | null | undefined;
export type EventPayload = Record<string, Primitive>;

export const ANALYTICS_SCHEMA_VERSION = "1.0.0";

export const FUNNEL_KPIS = [
  "testStartRate",
  "testCompletionRate",
  "primaryOfferAcceptRate",
  "leadSubmitRate",
  "waHandoffRate",
] as const;

export const AB_BACKLOG = [
  {
    id: "ab_result_conflict_loss",
    hypothesis: "Конфликт + loss framing в результате теста увеличит primaryOfferAcceptRate.",
    primaryMetric: "primaryOfferAcceptRate",
    guardrailMetric: "leadSubmitRate",
    stopRule: "Остановить при падении leadSubmitRate > 12% на 500+ сессиях.",
  },
  {
    id: "ab_route_single_vs_dual",
    hypothesis: "Single-path оффер повысит waHandoffRate по сравнению с dual-choice.",
    primaryMetric: "waHandoffRate",
    guardrailMetric: "testCompletionRate",
    stopRule: "Остановить при падении testCompletionRate > 8% на 500+ сессиях.",
  },
  {
    id: "ab_cta_urgency_copy",
    hypothesis: "Уточненный urgency copy увеличит leadSubmitRate без роста отказов.",
    primaryMetric: "leadSubmitRate",
    guardrailMetric: "offer_viewed_no_accept",
    stopRule: "Остановить при росте offer_viewed_no_accept > 10% на 500+ сессиях.",
  },
] as const;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __ehSessionId?: string;
    __ehEventDedup?: Set<string>;
  }
}

function getSessionId() {
  if (typeof window === "undefined") return "server";
  if (window.__ehSessionId) return window.__ehSessionId;
  const id = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  window.__ehSessionId = id;
  return id;
}

function getDedupStore() {
  if (!window.__ehEventDedup) window.__ehEventDedup = new Set();
  return window.__ehEventDedup;
}

type TrackOptions = {
  dedupeKey?: string;
  source?: string;
  step?: string;
};

export function trackEvent(event: string, payload: EventPayload = {}, options: TrackOptions = {}) {
  if (typeof window === "undefined") return;
  const dedupeKey = options.dedupeKey ?? `${event}:${JSON.stringify(payload)}`;
  const dedupeStore = getDedupStore();
  if (dedupeStore.has(dedupeKey)) return;
  dedupeStore.add(dedupeKey);

  const entry = {
    event,
    schemaVersion: ANALYTICS_SCHEMA_VERSION,
    sessionId: getSessionId(),
    source: options.source ?? "unknown",
    step: options.step ?? null,
    timestamp: Date.now(),
    ...payload,
  };
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push(entry);
  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", entry);
  }
}

export function exportSessionEvents() {
  if (typeof window === "undefined") return [];
  const sessionId = getSessionId();
  const events = (window.dataLayer ?? []).filter((item) => (item as { sessionId?: string }).sessionId === sessionId);
  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics:session-export]", { sessionId, events });
  }
  return events;
}

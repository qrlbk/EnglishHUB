/**
 * International WhatsApp number without + (digits only).
 * +7 707 285 89 65 → 77072858965
 */
export const WHATSAPP_PHONE = "77072858965" as const;

export const SITE = {
  name: "EnglishHub",
  tagline: "Школа английского языка",
  phoneDisplay: "+7 (707) 285-89-65",
  /** For tel: and wa.me (same as WHATSAPP_PHONE with +) */
  phoneE164: "+77072858965",
  hours: "Пн–Сб, 9:00–20:00",
  basePath: process.env.NODE_ENV === "production" ? "/EnglishHUB" : "",
} as const;

export function withBasePath(path: string): string {
  return `${SITE.basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

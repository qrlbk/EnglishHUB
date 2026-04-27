import { getWhatsAppLink, genericConsultMessage } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  const wa = getWhatsAppLink(genericConsultMessage());
  return (
    <footer className="border-t border-slate-200/80 bg-white" id="contacts">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)] py-[clamp(2rem,5.5vw,2.6rem)]">
        <div className="grid gap-7 md:grid-cols-2">
          <div>
            <p className="text-lg font-extrabold text-[#0a1628]">{SITE.name}</p>
            <p className="text-sm text-slate-500">{SITE.tagline}</p>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-600">
              Контакты: напишите в WhatsApp, чтобы согласовать тест/консультацию или выбрать курс.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <a href={`tel:${SITE.phoneE164}`} className="inline-flex min-h-11 items-center font-semibold text-[#0a1628] hover:underline">
              {SITE.phoneDisplay}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-[#2563eb] hover:underline"
            >
              WhatsApp
            </a>
            <p className="text-slate-500">{SITE.hours}</p>
          </div>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-slate-500 sm:mt-8">
          © {new Date().getFullYear()} {SITE.name}. Публичный прототип оформления.
        </p>
      </div>
    </footer>
  );
}

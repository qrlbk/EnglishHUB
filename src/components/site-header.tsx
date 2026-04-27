import { getWhatsAppLink, genericConsultMessage } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";

const nav = [
  { href: "#courses", label: "Курсы" },
  { href: "#teachers", label: "Преподаватели" },
  { href: "#prices", label: "Цены" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#about", label: "О школе" },
  { href: "#contacts", label: "Контакты" },
];

export function SiteHeader() {
  const waCta = getWhatsAppLink(genericConsultMessage());
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-[clamp(0.75rem,3.2vw,1.5rem)] py-2.5 sm:gap-3 sm:py-3">
        <a href="#top" className="group flex min-w-0 items-center gap-2">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] text-white ring-1 ring-black/5 sm:h-10 sm:w-10">
            <span className="text-lg leading-none" aria-hidden>
              🎓
            </span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-[0.86rem] font-extrabold tracking-tight text-[#0a1628] sm:text-base">
              {SITE.name}
            </p>
            <p className="hidden text-[0.7rem] font-medium uppercase tracking-wide text-slate-500 sm:block">
              {SITE.tagline}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-1 text-slate-600 transition hover:text-[#0a1628]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <details className="relative lg:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm"
            aria-label="Открыть меню"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="fixed left-1/2 top-[4.4rem] z-50 w-[min(92vw,21rem)] -translate-x-1/2 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-xl">
            <nav className="flex max-h-[68dvh] flex-col overflow-auto text-sm font-semibold" aria-label="Мобильная навигация">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="min-h-11 rounded-xl px-3 py-2.5 text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </details>

        <div className="flex items-center gap-1.5 sm:gap-4">
          <div className="hidden min-w-0 sm:block text-right">
            <a href={`tel:${SITE.phoneE164}`} className="text-sm font-semibold text-[#0a1628]">
              {SITE.phoneDisplay}
            </a>
            <p className="text-xs text-slate-500">{SITE.hours}</p>
          </div>
          <a
            href={waCta}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-[#0a1628] px-3 py-2.5 text-[11px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#132f52] sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Записаться</span>
            <span className="hidden sm:inline">Записаться на урок</span>
          </a>
        </div>
      </div>
    </header>
  );
}

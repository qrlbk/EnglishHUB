import { SITE } from "@/lib/site";

const nav = [
  { href: "#funnel", label: "Тест уровня" },
  { href: "#courses", label: "Курсы" },
  { href: "#cases", label: "Кейсы" },
  { href: "#teachers", label: "Преподаватели" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#about", label: "О школе" },
  { href: "#contacts", label: "Контакты" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-800 dark:bg-slate-950/90 dark:supports-[backdrop-filter]:bg-slate-950/75">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-[clamp(0.75rem,3.2vw,1.5rem)] py-2.5">
        <a href="#top" className="group flex min-w-0 items-center gap-2">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-slate-200 bg-slate-50 text-[#0a1628]">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M12 3 2 8l10 5 10-5-10-5Z" />
              <path d="M6 10.5v4.5c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="truncate text-[0.86rem] font-bold tracking-tight text-[#0a1628] dark:text-slate-100 sm:text-base">
              {SITE.name}
            </p>
            <p className="hidden text-[0.62rem] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 sm:block">
              {SITE.tagline}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-[0.84rem] font-medium text-slate-700 dark:text-slate-300 lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-1 text-slate-600 transition hover:text-[#0a1628] dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <details className="relative lg:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            aria-label="Открыть меню"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="fixed left-1/2 top-[4.4rem] z-50 w-[min(92vw,21rem)] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <nav className="flex max-h-[68dvh] flex-col overflow-auto text-sm font-semibold" aria-label="Мобильная навигация">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="min-h-11 rounded-xl px-3 py-2.5 text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </details>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden min-w-0 text-right sm:block">
            <a href={`tel:${SITE.phoneE164}`} className="text-sm font-semibold text-[#0a1628] dark:text-slate-100">
              {SITE.phoneDisplay}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">{SITE.hours}</p>
          </div>
          <a
            href="#funnel"
            className="shrink-0 rounded-md bg-[#102a56] px-3 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#173870] sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Тест</span>
            <span className="hidden sm:inline">Проверить уровень</span>
          </a>
        </div>
      </div>
    </header>
  );
}

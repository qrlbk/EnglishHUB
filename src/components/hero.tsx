import Image from "next/image";
import { getWhatsAppLink, genericConsultMessage, levelTestMessage } from "@/lib/whatsapp";
import { withBasePath } from "@/lib/site";

const featureItems = [
  { title: "Бесплатный пробный урок", icon: "check" as const },
  { title: "Опытные преподаватели", icon: "users" as const },
  { title: "Удобный формат", icon: "clock" as const },
  { title: "Сертификат по окончании", icon: "award" as const },
];

function MiniIcon({ kind }: { kind: "check" | "users" | "clock" | "award" }) {
  const common = "h-5 w-5 text-[#2563eb]";
  if (kind === "check")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M9 12l2 2 4-4" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    );
  if (kind === "users")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <path d="M16 11a3 3 0 1 0-3-3" />
        <path d="M3 20v-1a5 5 0 0 1 5-5" />
        <path d="M20 20v-1a4 4 0 0 0-3-3.87" />
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    );
  if (kind === "clock")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d="M7 3h4l1 2h4a2 2 0 0 1 2 2v2H5V5a2 2 0 0 1 2-2Z" />
      <path d="M5 9h14v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9Z" />
    </svg>
  );
}

export function Hero() {
  const waTest = getWhatsAppLink(levelTestMessage());
  const waConsult = getWhatsAppLink(genericConsultMessage());

  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-slate-50 to-white" id="top">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2563eb]/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)] py-[clamp(2rem,6.5vw,4rem)] sm:py-16">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-5 rounded-[1.75rem] border border-slate-200/70 bg-white/85 p-4 shadow-sm sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none lg:order-1 lg:space-y-7">
            <div className="space-y-3">
              <p className="inline-flex max-w-prose text-xs font-semibold uppercase tracking-wide text-[#2563eb] sm:text-sm">
                Онлайн и очно · все уровни
              </p>
              <h1 className="text-balance text-[clamp(1.8rem,8.2vw,3.15rem)] font-extrabold leading-[1.05] tracking-tight text-[#0a1628]">
                Английский для реальных целей и реальных людей
              </h1>
              <p className="max-w-prose text-[clamp(0.98rem,2.9vw,1.1rem)] leading-relaxed text-slate-600 sm:text-lg">
                Системные курсы, говорение без страха, понятные цели. Выберите формат — и начните уверенно говорить уже на
                первом месяце.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={waTest}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#0a1628] px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#132f52] sm:w-auto"
              >
                Пройти тест уровня
              </a>
              <a
                href={waConsult}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-5 text-sm font-semibold text-[#0a1628] transition hover:-translate-y-0.5 hover:border-slate-300 sm:w-auto"
              >
                Записаться на консультацию
              </a>
            </div>
            <a
              href="#courses"
              className="inline-flex min-h-11 w-fit items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline"
            >
              Посмотреть курсы
              <span aria-hidden>→</span>
            </a>

            <ul className="grid gap-2.5 sm:gap-3 sm:grid-cols-2">
              {featureItems.map((f) => (
                <li
                  key={f.title}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/75 p-3 shadow-sm"
                >
                  <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl bg-slate-50">
                    <MiniIcon kind={f.icon} />
                  </span>
                  <p className="text-sm font-medium leading-snug text-slate-800">{f.title}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-200/50 via-slate-100 to-transparent blur-xl" />
              <div
                className="relative aspect-[16/13] w-full overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br from-slate-200 via-slate-50 to-white shadow-2xl ring-1 ring-slate-200/60 sm:aspect-[4/3] sm:rounded-3xl"
                role="img"
                aria-label="Преподаватель в классе, учебные материалы"
              >
                <Image
                  src={withBasePath("/images/hero-class.jpg")}
                  alt="Преподаватель помогает студентам на уроке английского"
                  fill
                  priority
                  className="object-cover saturate-110 contrast-110"
                  sizes="(min-width: 1280px) 580px, (min-width: 1024px) 50vw, 100vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-900/5 to-transparent"
                  aria-hidden
                />
                <div
                  className="absolute -right-4 top-4 h-40 w-40 rounded-3xl border border-white/30 bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 backdrop-blur"
                  aria-hidden
                />
                <div
                  className="absolute -left-6 bottom-0 h-48 w-48 rounded-full bg-gradient-to-tr from-blue-500/20 to-slate-100"
                  aria-hidden
                />
                <div className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-lg backdrop-blur sm:left-6 sm:block">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Free trial</p>
                  <p className="text-sm font-extrabold text-[#0a1628]">Попробуем за 1 урок</p>
                </div>
                <div className="absolute right-3 bottom-3 max-w-[11rem] rounded-xl border border-white/30 bg-slate-900/70 px-2.5 py-2 text-[11px] text-slate-100 shadow-lg backdrop-blur sm:right-5 sm:bottom-5 sm:max-w-[14rem] sm:rounded-2xl sm:px-3 sm:text-xs">
                  <p className="font-semibold">Современные материалы</p>
                  <p className="text-slate-200">Разговор, кейсы, реальные сценарии</p>
                </div>
                <p className="sr-only">Декоративная визуализация: современный класс, спокойная цветовая гамма</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

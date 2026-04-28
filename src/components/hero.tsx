"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/site";
import { SectionReveal } from "@/components/section-reveal";
import { hoverLift, tapPress } from "@/lib/motion";

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
  return (
    <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950" id="top">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)] py-[clamp(1.8rem,5.5vw,3.5rem)]">
        <SectionReveal className="grid items-center gap-7 lg:grid-cols-[1.03fr_1fr] lg:gap-10">
          <div className="order-2 space-y-5 lg:order-1 lg:space-y-6">
            <div className="space-y-3">
              <p className="inline-flex max-w-prose text-xs font-semibold uppercase tracking-wide text-[#2563eb] sm:text-[0.83rem]">
                Онлайн и очно · все уровни
              </p>
              <h1 className="max-w-[13ch] text-[clamp(1.95rem,7.7vw,3.3rem)] font-extrabold leading-[1.02] tracking-tight text-[#0a1628] dark:text-slate-100">
                Английский для реальных целей и реальных людей
              </h1>
              <p className="max-w-xl text-[clamp(0.95rem,2.7vw,1.08rem)] leading-relaxed text-slate-600 dark:text-slate-300">
                Не просто курсы, а персональный маршрут обучения: диагностика, рекомендуемый трек и понятный результат.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <motion.a
                href="#funnel"
                whileHover={hoverLift}
                whileTap={tapPress}
                className="inline-flex h-11 w-full items-center justify-center rounded-md bg-[#102a56] px-5 text-sm font-semibold text-white transition hover:bg-[#173870] sm:w-auto"
              >
                Пройти тест уровня
              </motion.a>
              <motion.a
                href="#courses"
                whileHover={hoverLift}
                whileTap={tapPress}
                className="inline-flex h-11 w-full items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold text-[#0a1628] transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 sm:w-auto"
              >
                Смотреть маршруты
              </motion.a>
            </div>

            <ul className="grid gap-2.5 sm:grid-cols-2">
              {featureItems.map((f) => (
                <motion.li
                  key={f.title}
                  whileHover={hoverLift}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-slate-50">
                    <MiniIcon kind={f.icon} />
                  </span>
                  <p className="text-sm font-medium leading-snug text-slate-800 dark:text-slate-100">{f.title}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:aspect-[4/3]"
              role="img"
              aria-label="Преподаватель в классе, учебные материалы"
            >
              <Image
                src={withBasePath("/images/hero-class.jpg")}
                alt="Преподаватель помогает студентам на уроке английского"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 50vw, 100vw"
              />
              <p className="sr-only">Декоративная визуализация: современный класс, спокойная цветовая гамма</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

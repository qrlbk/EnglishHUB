"use client";

import { trackEvent } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="bg-gradient-to-r from-[#0a1628] to-[#1e3a5f] py-[clamp(2.2rem,5.2vw,3.5rem)]" aria-label="Итоговый призыв">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-[clamp(0.9rem,3.4vw,1.5rem)] md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.35rem,5.2vw,1.9rem)] font-extrabold text-white sm:text-3xl">Начните с диагностики уровня</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            Вы получите понятный маршрут: цель, уровень, курс и персональную заявку в WhatsApp.
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
            Сегодня доступно 2 персональных слота до 21:00
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <a
            href="#funnel"
            onClick={() => trackEvent("offer_accept_clicked", { source: "final_cta" })}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-extrabold text-[#0a1628] transition hover:bg-slate-100"
          >
            Пройти тест и подобрать курс
          </a>
          <a
            href="#courses"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Сравнить курсы
          </a>
        </div>
      </div>
    </section>
  );
}

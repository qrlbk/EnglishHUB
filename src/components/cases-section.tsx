"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { studentCases } from "@/data/cases";
import { FunnelGoal } from "@/lib/funnel";

export function CasesSection() {
  const [segment, setSegment] = useState<FunnelGoal>("speaking");

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ goal: FunnelGoal }>).detail;
      if (!detail) return;
      setSegment(detail.goal);
    };
    window.addEventListener("funnel:recommendation", handler);
    return () => window.removeEventListener("funnel:recommendation", handler);
  }, []);

  const filteredCases = useMemo(() => studentCases.filter((item) => item.segment === segment), [segment]);

  return (
    <section className="bg-slate-50 py-[clamp(2.4rem,5.8vw,4.6rem)]" id="cases" aria-labelledby="section-cases">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <SectionHeading
          id="section-cases"
          title="Кейсы студентов: было -> стало"
          subtitle="Не абстрактные обещания, а конкретные изменения по целям и срокам."
          align="center"
        />

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {[
            { id: "speaking" as const, label: "Speaking" },
            { id: "ielts" as const, label: "IELTS" },
            { id: "work" as const, label: "Работа" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSegment(item.id)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                segment === item.id ? "bg-[#102a56] text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {filteredCases.map((item) => (
            <article key={item.name} className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-bold text-[#0a1628]">{item.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                {item.goal} · {item.courseTitle}
              </p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="rounded-md bg-rose-50 px-2 py-1 text-rose-800">
                  <span className="font-semibold">Было:</span> {item.before}
                </p>
                <p className="rounded-md bg-emerald-50 px-2 py-1 text-emerald-800">
                  <span className="font-semibold">Стало:</span> {item.after}
                </p>
              </div>
              <div className="mt-3 grid gap-1 text-xs text-slate-600">
                <p>Формат: {item.format}</p>
                <p>Пакет: {item.packagePrice}</p>
                <p>Нагрузка: {item.sessions}</p>
              </div>
              <p className="mt-2 text-xs font-semibold text-[#102a56]">Метрика: {item.metric}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.period}</p>
              <a href="#funnel" className="mt-3 inline-flex min-h-9 items-center text-xs font-semibold text-[#2563eb] hover:underline">
                Хочу такой же результат
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

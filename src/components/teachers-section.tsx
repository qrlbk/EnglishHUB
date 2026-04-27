"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { teachers } from "@/data/teachers";
import { SectionHeading } from "@/components/section-heading";
import { FunnelGoal } from "@/lib/funnel";

export function TeachersSection() {
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

  const orderedTeachers = useMemo(
    () => [...teachers].sort((a, b) => Number(b.segment === segment) - Number(a.segment === segment)),
    [segment],
  );

  return (
    <section className="bg-[#f8fafc] py-[clamp(2.5rem,6vw,5rem)]" id="teachers" aria-labelledby="section-teachers">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div>
          <SectionHeading
            id="section-teachers"
            title="Эксперт под вашу задачу"
            subtitle="Не биография, а конкретная польза: проблема -> эксперт -> результат."
            align="center"
          />

          <div className="grid gap-2.5 sm:gap-3 md:grid-cols-2">
            {orderedTeachers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col gap-3 rounded-lg border bg-white p-3 sm:flex-row sm:gap-3 ${
                  t.segment === segment ? "border-[#102a56]/50 ring-1 ring-[#102a56]/20" : "border-slate-200"
                }`}
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md ring-1 ring-slate-200 sm:h-16 sm:w-16">
                  <Image
                    src={t.avatarSrc}
                    alt={t.name}
                    fill
                    className="object-cover saturate-110 contrast-105"
                    sizes="(min-width: 640px) 96px, 80px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.92rem] font-bold text-[#0a1628]">{t.name}</p>
                  <p className="text-[0.68rem] font-semibold text-slate-500">{t.role}</p>
                  <p className="mt-1 rounded bg-rose-50 px-2 py-1 text-[0.72rem] text-rose-700">
                    <span className="font-semibold">Проблема:</span> {t.problem}
                  </p>
                  <p className="mt-1 rounded bg-emerald-50 px-2 py-1 text-[0.72rem] text-emerald-700">
                    <span className="font-semibold">Результат:</span> {t.outcome}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-[0.77rem] leading-relaxed text-slate-600">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#contacts" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline">
              Смотреть всех преподавателей
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

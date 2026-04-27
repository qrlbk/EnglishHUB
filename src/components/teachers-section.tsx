import Image from "next/image";
import { teachers } from "@/data/teachers";
import { SectionHeading } from "@/components/section-heading";

export function TeachersSection() {
  return (
    <section className="bg-slate-50 py-[clamp(2.5rem,6vw,5rem)]" id="teachers" aria-labelledby="section-teachers">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-4 shadow-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
          <SectionHeading
            id="section-teachers"
            title="Наши преподаватели"
            subtitle="Практика, дисциплина дружелюбия: учим говорить, писать и думать на английском так, как это нужно в жизни."
          />

          <div className="grid gap-3.5 sm:gap-5 md:grid-cols-2">
            {teachers.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:flex-row sm:gap-5 sm:p-5"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm sm:h-24 sm:w-24">
                  <Image
                    src={t.avatarSrc}
                    alt={t.name}
                    fill
                    className="object-cover saturate-110 contrast-105"
                    sizes="(min-width: 640px) 96px, 80px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[1.03rem] font-extrabold text-[#0a1628] sm:text-lg">{t.name}</p>
                  <p className="text-sm font-semibold text-[#2563eb]">{t.role}</p>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-600">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]/70" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
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

import Image from "next/image";
import { teachers } from "@/data/teachers";
import { SectionHeading } from "@/components/section-heading";

export function TeachersSection() {
  return (
    <section className="bg-[#f8fafc] py-[clamp(2.5rem,6vw,5rem)]" id="teachers" aria-labelledby="section-teachers">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div>
          <SectionHeading
            id="section-teachers"
            title="Наши преподаватели"
            subtitle="Опытные преподаватели с практическим подходом к обучению."
            align="center"
          />

          <div className="grid gap-2.5 sm:gap-3 md:grid-cols-2">
            {teachers.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-3 sm:flex-row sm:gap-3"
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

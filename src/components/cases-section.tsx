import { SectionHeading } from "@/components/section-heading";
import { studentCases } from "@/data/cases";

export function CasesSection() {
  return (
    <section className="bg-slate-50 py-[clamp(2.4rem,5.8vw,4.6rem)]" id="cases" aria-labelledby="section-cases">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <SectionHeading
          id="section-cases"
          title="Кейсы студентов: было -> стало"
          subtitle="Не абстрактные обещания, а конкретные изменения по целям и срокам."
          align="center"
        />

        <div className="grid gap-3 md:grid-cols-3">
          {studentCases.map((item) => (
            <article key={item.name} className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-bold text-[#0a1628]">{item.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">{item.goal}</p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="rounded-md bg-rose-50 px-2 py-1 text-rose-800">
                  <span className="font-semibold">Было:</span> {item.before}
                </p>
                <p className="rounded-md bg-emerald-50 px-2 py-1 text-emerald-800">
                  <span className="font-semibold">Стало:</span> {item.after}
                </p>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.period}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

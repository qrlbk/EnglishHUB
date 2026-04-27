import { courses } from "@/data/courses";
import { SectionHeading } from "@/components/section-heading";

export function PricesSection() {
  return (
    <section className="bg-slate-50 py-[clamp(2.5rem,6vw,5rem)]" id="prices" aria-labelledby="section-prices">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-4 shadow-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
          <SectionHeading
            id="section-prices"
            title="Цены"
            subtitle="Ориентиры стоимости по направлениям. Для точного подбора используйте тест и рекомендацию."
          />

          <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
            {courses.slice(0, 4).map((c) => (
              <div key={c.id} className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <div className="space-y-1">
                      <p className="font-extrabold text-[#0a1628]">{c.title}</p>
                      <p className="text-sm text-slate-500">{c.duration}</p>
                    </div>
                    <p className="mt-1 inline-flex min-h-11 w-fit items-center rounded-xl bg-slate-100 px-3 py-2 text-sm font-bold text-[#0a1628] sm:mt-0">
                      {c.price}
                    </p>
                  </div>
                </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#funnel" className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#0a1628] px-5 py-3 text-sm font-semibold text-white sm:w-auto">
              Подобрать курс по уровню
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

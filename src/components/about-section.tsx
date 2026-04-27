import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section className="bg-white py-[clamp(2.5rem,6vw,5rem)]" id="about" aria-labelledby="section-about">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <SectionHeading
          id="section-about"
          title="Почему EnglishHub"
          subtitle="Наш метод — это управляемый трек: диагностика, персональный маршрут и измеримый прогресс."
        />
        <div className="grid gap-3.5 md:grid-cols-3 md:gap-4">
          {[
            {
              t: "1. Диагностика за 3 минуты",
              d: "Определяем уровень, цель и основной риск, который тормозит ваш результат прямо сейчас.",
            },
            {
              t: "2. Маршрут с контрольными точками",
              d: "Получаете 1 основной и 1 запасной трек, сроки, формат и ожидаемый результат без догадок.",
            },
            {
              t: "3. Измеримый прогресс каждую неделю",
              d: "Фиксируем speaking KPI, результат тестов и корректируем план до достижения цели.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 sm:p-5">
              <h3 className="text-base font-extrabold text-[#0a1628]">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

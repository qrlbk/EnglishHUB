import { courses } from "@/data/courses";
import { SectionHeading } from "@/components/section-heading";

export function CoursesGrid() {
  return (
    <section className="bg-white py-[clamp(2.5rem,6vw,5rem)]" id="courses" aria-labelledby="section-courses">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div>
          <SectionHeading
            id="section-courses"
            title="Наши курсы"
            subtitle="Сравните программы и выберите подходящий трек без лишних догадок."
            align="center"
          />

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[52rem] border-collapse text-left">
              <thead className="bg-slate-50">
                <tr className="text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-3 py-2 font-semibold">Курс</th>
                  <th className="px-3 py-2 font-semibold">Для кого</th>
                  <th className="px-3 py-2 font-semibold">Результат</th>
                  <th className="px-3 py-2 font-semibold">Время</th>
                  <th className="px-3 py-2 font-semibold">Формат</th>
                  <th className="px-3 py-2 font-semibold">Цена</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-t border-slate-200 text-sm text-slate-700">
                    <td className="px-3 py-2 font-semibold text-[#0a1628]">{course.title}</td>
                    <td className="px-3 py-2">{course.forWhom}</td>
                    <td className="px-3 py-2">{course.result}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{course.duration}</td>
                    <td className="px-3 py-2">{course.format}</td>
                    <td className="px-3 py-2 whitespace-nowrap font-semibold text-[#0a1628]">{course.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <a href="#funnel" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline">
              Подобрать курс
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

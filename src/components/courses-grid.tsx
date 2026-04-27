import { courses } from "@/data/courses";
import { getWhatsAppLink, courseEnrollmentMessage } from "@/lib/whatsapp";
import { CourseIcon } from "@/components/course-icon";
import { SectionHeading } from "@/components/section-heading";

export function CoursesGrid() {
  return (
    <section className="bg-white py-[clamp(2.5rem,6vw,5rem)]" id="courses" aria-labelledby="section-courses">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-4 shadow-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
          <SectionHeading
            id="section-courses"
            title="Наши курсы"
            subtitle="Сильные программы: от базы до экзаменов и деловой коммуникации. Кликните на карточку, чтобы сразу написать в WhatsApp с выбранным курсом."
            action={{ href: "#prices", label: "Смотреть цены" }}
          />

          <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {courses.map((c) => {
              const href = getWhatsAppLink(courseEnrollmentMessage(c.title));
              return (
                <a
                  key={c.id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-[16.5rem] flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg sm:p-5"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-50 ring-1 ring-slate-200/70 transition group-hover:bg-blue-50">
                      <CourseIcon name={c.icon} />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-slate-500">
                      {c.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0a1628]">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.description}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">{c.format}</p>
                  <p className="mt-1 text-sm font-bold text-[#0a1628]">{c.price}</p>
                  <span className="mt-4 inline-flex min-h-11 w-fit items-center gap-1 text-sm font-semibold text-[#2563eb] group-hover:underline">
                    Написать в WhatsApp
                    <span aria-hidden>↗</span>
                  </span>
                </a>
              );
            })}
          </div>
          <div className="mt-8">
            <a href="#teachers" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline">
              Смотреть все курсы
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

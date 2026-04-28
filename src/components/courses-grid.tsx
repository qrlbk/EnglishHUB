"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { courses } from "@/data/courses";
import { SectionHeading } from "@/components/section-heading";
import { FunnelGoal } from "@/lib/funnel";
import { trackEvent } from "@/lib/analytics";
import { hoverLift, tapPress } from "@/lib/motion";
import { SectionReveal } from "@/components/section-reveal";

type FunnelEventDetail = {
  goal: FunnelGoal;
  recommendation: {
    primaryRoute: { id: string };
    backupRoute: { id: string };
  };
};

function badgeLabel(badge: (typeof courses)[number]["badge"]) {
  if (badge === "recommended") return "Рекомендуем";
  if (badge === "popular") return "Самый популярный";
  if (badge === "fast") return "Быстрый результат";
  return "Для карьеры";
}

export function CoursesGrid() {
  const [goal, setGoal] = useState<FunnelGoal>("speaking");
  const [priorityIds, setPriorityIds] = useState<string[]>([]);
  const [showAlternatives, setShowAlternatives] = useState(false);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<FunnelEventDetail>).detail;
      if (!detail) return;
      setGoal(detail.goal);
      setPriorityIds([detail.recommendation.primaryRoute.id, detail.recommendation.backupRoute.id]);
    };
    window.addEventListener("funnel:recommendation", handler);
    return () => window.removeEventListener("funnel:recommendation", handler);
  }, []);

  const sortedCourses = useMemo(() => {
    const withPriority = courses.filter((course) => priorityIds.includes(course.id));
    const fallback = courses
      .filter((course) => !priorityIds.includes(course.id))
      .sort((a, b) => b.priorityScore - a.priorityScore);
    return [...withPriority, ...fallback];
  }, [priorityIds]);

  const topRoutes = sortedCourses.slice(0, 2);
  const otherRoutes = sortedCourses.slice(2);

  return (
    <section className="bg-white py-[clamp(2.5rem,6vw,5rem)] dark:bg-slate-950" id="courses" aria-labelledby="section-courses">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <SectionReveal>
          <SectionHeading
            id="section-courses"
            title="Маршруты обучения"
            subtitle="Сначала 1-2 приоритетных маршрута под вашу цель, затем остальные варианты."
            align="center"
          />

          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Приоритет для сегмента: {goal === "ielts" ? "IELTS" : goal === "work" ? "Работа" : "Разговорный"}
          </p>

          <LayoutGroup id="courses-shared-layout">
            <motion.div layout className="grid gap-3 md:grid-cols-2">
              {topRoutes.map((course, index) => (
                <motion.article
                  layout
                  layoutId={`course-card-${course.id}`}
                  key={course.id}
                  whileHover={hoverLift}
                  whileTap={tapPress}
                  className="rounded-lg border border-[#102a56]/20 bg-[#f8fbff] p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <p className="inline-flex rounded-full bg-[#102a56] px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-wide text-white">
                  {index === 0 ? "Рекомендуем для вас" : "Запасной маршрут"}
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-[#0a1628] dark:text-slate-100">{course.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{course.forWhom}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{course.expectedOutcome}</p>
                <div className="mt-3 grid gap-1 text-xs text-slate-600 dark:text-slate-300">
                  <p>Время: {course.duration}</p>
                  <p>Занятия: {course.estimatedSessions}</p>
                  <p>Формат: {course.format}</p>
                </div>
                <p className="mt-3 text-sm font-bold text-[#0a1628] dark:text-slate-100">{course.price}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/courses/${course.id}`}
                    onClick={() =>
                      trackEvent(
                        "course_details_clicked",
                        { routeId: course.id, segment: goal },
                        { source: "courses_grid", step: "details", dedupeKey: `course-details:${goal}:${course.id}` },
                      )
                    }
                    className="inline-flex min-h-9 items-center text-xs font-semibold text-[#2563eb] hover:underline dark:text-sky-300"
                  >
                    Детали маршрута
                  </Link>
                  <a
                    href="#funnel"
                    onClick={() =>
                    trackEvent(
                      "alternatives_chosen",
                      { segment: goal, routeId: course.id, isPrimary: index === 0 },
                      { source: "courses_grid", step: "routes", dedupeKey: `route-chosen:${goal}:${course.id}` },
                    )
                    }
                    className="inline-flex min-h-9 items-center text-xs font-semibold text-[#2563eb] hover:underline dark:text-sky-300"
                  >
                    Выбрать этот маршрут
                  </a>
                </div>
              </motion.article>
            ))}
            </motion.div>
          </LayoutGroup>

          <div className="mt-4">
            <motion.button
              type="button"
              onClick={() =>
                setShowAlternatives((prev) => {
                  const next = !prev;
                  if (next) {
                    trackEvent(
                      "alternatives_opened",
                      { segment: goal, alternativesCount: otherRoutes.length },
                      { source: "courses_grid", step: "routes", dedupeKey: `alternatives-opened:${goal}` },
                    );
                  }
                  return next;
                })
              }
              whileTap={tapPress}
              className="inline-flex min-h-10 items-center rounded-md border border-slate-300 px-3 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              {showAlternatives ? "Скрыть альтернативы" : "Показать альтернативы"}
            </motion.button>
          </div>
          <AnimatePresence initial={false}>
            {showAlternatives ? (
              <motion.div
                key="alternatives"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
                className="mt-3 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <table className="w-full min-w-[52rem] border-collapse text-left">
                <thead className="bg-slate-50">
                  <tr className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    <th className="px-3 py-2 font-semibold">Маршрут</th>
                    <th className="px-3 py-2 font-semibold">Метка</th>
                    <th className="px-3 py-2 font-semibold">Для кого</th>
                    <th className="px-3 py-2 font-semibold">Результат</th>
                    <th className="px-3 py-2 font-semibold">Срок</th>
                    <th className="px-3 py-2 font-semibold">Цена</th>
                  </tr>
                </thead>
                <tbody className="dark:bg-slate-900">
                  {otherRoutes.map((course) => (
                    <tr key={course.id} className="border-t border-slate-200 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300">
                      <td className="px-3 py-2 font-semibold text-[#0a1628] dark:text-slate-100">{course.title}</td>
                      <td className="px-3 py-2">
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          {badgeLabel(course.badge)}
                        </span>
                      </td>
                      <td className="px-3 py-2">{course.forWhom}</td>
                      <td className="px-3 py-2">{course.result}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{course.duration}</td>
                      <td className="px-3 py-2 whitespace-nowrap font-semibold text-[#0a1628] dark:text-slate-100">{course.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-6 text-center">
            <a href="#funnel" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline dark:text-sky-300">
              Обновить персональный маршрут
              <span aria-hidden>→</span>
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

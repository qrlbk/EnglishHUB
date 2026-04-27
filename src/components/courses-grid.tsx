"use client";

import { useEffect, useMemo, useState } from "react";
import { courses } from "@/data/courses";
import { SectionHeading } from "@/components/section-heading";
import { FunnelGoal } from "@/lib/funnel";

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
    <section className="bg-white py-[clamp(2.5rem,6vw,5rem)]" id="courses" aria-labelledby="section-courses">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div>
          <SectionHeading
            id="section-courses"
            title="Маршруты обучения"
            subtitle="Сначала 1-2 приоритетных маршрута под вашу цель, затем остальные варианты."
            align="center"
          />

          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Приоритет для сегмента: {goal === "ielts" ? "IELTS" : goal === "work" ? "Работа" : "Разговорный"}
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            {topRoutes.map((course, index) => (
              <article key={course.id} className="rounded-lg border border-[#102a56]/20 bg-[#f8fbff] p-4">
                <p className="inline-flex rounded-full bg-[#102a56] px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-wide text-white">
                  {index === 0 ? "Рекомендуем для вас" : "Запасной маршрут"}
                </p>
                <h3 className="mt-2 text-lg font-extrabold text-[#0a1628]">{course.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{course.forWhom}</p>
                <p className="mt-2 text-sm text-slate-700">{course.expectedOutcome}</p>
                <div className="mt-3 grid gap-1 text-xs text-slate-600">
                  <p>Время: {course.duration}</p>
                  <p>Занятия: {course.estimatedSessions}</p>
                  <p>Формат: {course.format}</p>
                </div>
                <p className="mt-3 text-sm font-bold text-[#0a1628]">{course.price}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[52rem] border-collapse text-left">
              <thead className="bg-slate-50">
                <tr className="text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-3 py-2 font-semibold">Маршрут</th>
                  <th className="px-3 py-2 font-semibold">Метка</th>
                  <th className="px-3 py-2 font-semibold">Для кого</th>
                  <th className="px-3 py-2 font-semibold">Результат</th>
                  <th className="px-3 py-2 font-semibold">Срок</th>
                  <th className="px-3 py-2 font-semibold">Цена</th>
                </tr>
              </thead>
              <tbody>
                {otherRoutes.map((course) => (
                  <tr key={course.id} className="border-t border-slate-200 text-sm text-slate-700">
                    <td className="px-3 py-2 font-semibold text-[#0a1628]">{course.title}</td>
                    <td className="px-3 py-2">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-wide text-slate-600">
                        {badgeLabel(course.badge)}
                      </span>
                    </td>
                    <td className="px-3 py-2">{course.forWhom}</td>
                    <td className="px-3 py-2">{course.result}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{course.duration}</td>
                    <td className="px-3 py-2 whitespace-nowrap font-semibold text-[#0a1628]">{course.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <a href="#funnel" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline">
              Обновить персональный маршрут
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

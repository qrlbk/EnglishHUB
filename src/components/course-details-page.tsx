"use client";

import { useEffect } from "react";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import type { Course } from "@/data/courses";
import { trackEvent } from "@/lib/analytics";
import { hoverLift, tapPress } from "@/lib/motion";

type CourseDetailsPageProps = {
  course: Course;
};

export function CourseDetailsPage({ course }: CourseDetailsPageProps) {
  useEffect(() => {
    trackEvent("course_details_opened", { routeId: course.id }, { source: "course_details", step: "view" });
  }, [course.id]);

  return (
    <main className="bg-white py-8 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl space-y-5 px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <Link href="/#courses" className="text-sm font-semibold text-[#2563eb] hover:underline dark:text-sky-300">
          ← Назад к маршрутам
        </Link>
        <LayoutGroup id="courses-shared-layout">
          <motion.article
            layoutId={`course-card-${course.id}`}
            className="rounded-xl border border-[#102a56]/20 bg-[#f8fbff] p-5 dark:border-slate-700 dark:bg-slate-900"
          >
            <p className="inline-flex rounded-full bg-[#102a56] px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-wide text-white">
              Маршрут обучения
            </p>
            <h1 className="mt-3 text-2xl font-extrabold text-[#0a1628] dark:text-slate-100">{course.title}</h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{course.forWhom}</p>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{course.result}</p>
            <div className="mt-4 grid gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 sm:grid-cols-2">
              <p>Длительность: {course.duration}</p>
              <p>Занятия: {course.estimatedSessions}</p>
              <p>Формат: {course.format}</p>
              <p className="font-semibold text-[#0a1628] dark:text-slate-100">Стоимость: {course.price}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <motion.a
                href="/#funnel"
                whileHover={hoverLift}
                whileTap={tapPress}
                className="inline-flex min-h-11 items-center rounded-md bg-[#102a56] px-4 text-sm font-semibold text-white"
              >
                Пройти тест и начать
              </motion.a>
              <motion.a
                href="/#courses"
                whileHover={hoverLift}
                whileTap={tapPress}
                className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-4 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                Сравнить с другими
              </motion.a>
            </div>
          </motion.article>
        </LayoutGroup>
      </div>
    </main>
  );
}

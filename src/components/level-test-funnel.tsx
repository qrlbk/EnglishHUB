"use client";

import { useMemo, useState } from "react";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { FunnelGoal, funnelGoals, funnelQuestions, getFunnelRecommendation } from "@/lib/funnel";

export function LevelTestFunnel() {
  const [goal, setGoal] = useState<FunnelGoal>("speaking");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const isComplete = Object.keys(answers).length === funnelQuestions.length;

  const totalScore = useMemo(() => Object.values(answers).reduce((sum, value) => sum + value, 0), [answers]);
  const recommendation = useMemo(() => getFunnelRecommendation(goal, totalScore), [goal, totalScore]);

  return (
    <section className="bg-slate-50 py-[clamp(2.2rem,5.4vw,4rem)]" id="funnel" aria-labelledby="section-funnel">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#2563eb]">Главный шаг</p>
            <h2 id="section-funnel" className="mt-1 text-2xl font-extrabold tracking-tight text-[#0a1628]">
              Проверка уровня и подбор курса
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
              Короткая диагностика за 2-3 минуты: сначала цель, потом уровень, затем персональная рекомендация.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#0a1628]">1) Ваша цель</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {funnelGoals.map((item) => {
                const active = goal === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id)}
                    className={`rounded-md border px-3 py-3 text-left transition ${
                      active ? "border-[#102a56] bg-[#102a56] text-white" : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className={`text-xs ${active ? "text-slate-100" : "text-slate-500"}`}>{item.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#0a1628]">2) Быстрый тест уровня</p>
            {funnelQuestions.map((question) => (
              <div key={question.id} className="space-y-2 rounded-md border border-slate-200 p-3">
                <p className="text-sm font-semibold text-slate-800">{question.prompt}</p>
                <div className="grid gap-1.5">
                  {question.options.map((option) => (
                    <label key={option.label} className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 hover:bg-slate-50">
                      <input
                        type="radio"
                        name={question.id}
                        checked={answers[question.id] === option.score}
                        onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: option.score }))}
                      />
                      <span className="text-sm text-slate-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-[#0a1628]">3) Рекомендация</p>
            {!isComplete ? (
              <p className="mt-1 text-sm text-slate-600">Ответьте на все вопросы, чтобы получить персональный результат.</p>
            ) : (
              <>
                <p className="mt-1 text-sm text-slate-700">
                  Ваш ориентировочный уровень: <span className="font-bold text-[#0a1628]">{recommendation.level}</span>
                </p>
                <p className="text-sm text-slate-700">
                  Рекомендуемый курс: <span className="font-bold text-[#0a1628]">{recommendation.courseTitle}</span>
                </p>
                <p className="mt-1 text-sm text-slate-600">{recommendation.reason}</p>
              </>
            )}
          </div>

          {isComplete ? <LeadCaptureForm goal={goal} recommendation={recommendation} /> : null}
        </div>
      </div>
    </section>
  );
}

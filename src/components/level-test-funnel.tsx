"use client";

import { useEffect, useMemo, useState } from "react";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { FunnelGoal, funnelGoals, funnelQuestions, getFunnelRecommendation, routeBadgeLabel } from "@/lib/funnel";
import { funnelRouteSummary } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function LevelTestFunnel() {
  const [goal, setGoal] = useState<FunnelGoal>("speaking");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [step, setStep] = useState(0);
  const isComplete = Object.keys(answers).length === funnelQuestions.length;

  const totalScore = useMemo(() => Object.values(answers).reduce((sum, value) => sum + value, 0), [answers]);
  const recommendation = useMemo(() => getFunnelRecommendation(goal, totalScore), [goal, totalScore]);
  const currentQuestion = funnelQuestions[step];
  const progressPercent = Math.round(((step + (answers[currentQuestion?.id] !== undefined ? 1 : 0)) / funnelQuestions.length) * 100);

  useEffect(() => {
    trackEvent("funnel_test_started", { goal });
  }, [goal]);

  useEffect(() => {
    if (!isComplete) return;
    trackEvent("funnel_test_completed", { goal, level: recommendation.level });
    trackEvent("offer_primary_shown", { primaryRoute: recommendation.primaryRoute.id, backupRoute: recommendation.backupRoute.id });
  }, [isComplete, goal, recommendation]);

  function answerCurrent(score: number) {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: score }));
    const next = step + 1;
    if (next < funnelQuestions.length) {
      setStep(next);
      return;
    }

    const nextAnswers = { ...answers, [currentQuestion.id]: score };
    const nextTotal = Object.values(nextAnswers).reduce((sum, value) => sum + value, 0);
    const nextRecommendation = getFunnelRecommendation(goal, nextTotal);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("funnel:recommendation", {
          detail: { goal, recommendation: nextRecommendation },
        }),
      );
    }
  }

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
                    onClick={() => {
                      setGoal(item.id);
                      setStep(0);
                      setAnswers({});
                    }}
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

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#0a1628]">2) Быстрый тест уровня</p>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-[#102a56] transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
            <p className="text-xs font-medium text-slate-500">Прогресс: {progressPercent}%</p>
            <div className="space-y-2 rounded-md border border-slate-200 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Вопрос {Math.min(step + 1, funnelQuestions.length)} из {funnelQuestions.length}
              </p>
              <p className="text-sm font-semibold text-slate-800">{currentQuestion.prompt}</p>
              <div className="grid gap-1.5">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => answerCurrent(option.score)}
                    className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 transition hover:border-[#102a56] hover:bg-slate-50"
                  >
                    <span>{option.label}</span>
                    <span aria-hidden>→</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex h-9 items-center rounded-md border border-slate-300 px-3 text-xs font-semibold text-slate-600 disabled:opacity-40"
              >
                Назад
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep(0);
                  setAnswers({});
                }}
                className="inline-flex h-9 items-center rounded-md px-3 text-xs font-semibold text-[#102a56] hover:bg-slate-100"
              >
                Сбросить тест
              </button>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
            <p className="text-sm font-semibold text-[#0a1628]">3) Персональный оффер</p>
            {!isComplete ? (
              <p className="mt-1 text-sm text-slate-600">Ответьте на все вопросы, чтобы получить персональный результат.</p>
            ) : (
              <>
                <div className="mt-1 rounded-md border border-slate-200 bg-white p-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Что система увидела</p>
                  <ul className="mt-1 space-y-1 text-xs text-slate-700">
                    {recommendation.diagnosticSignals.map((signal) => (
                      <li key={signal}>• {signal}</li>
                    ))}
                  </ul>
                </div>
                <p className="mt-1 text-sm text-slate-700">
                  Ваш ориентировочный уровень: <span className="font-bold text-[#0a1628]">{recommendation.level}</span>
                </p>
                <p className="text-sm text-slate-700">
                  Основной маршрут: <span className="font-bold text-[#0a1628]">{recommendation.primaryRoute.title}</span>
                </p>
                <p className="text-sm text-slate-700">
                  Запасной маршрут: <span className="font-bold text-[#0a1628]">{recommendation.backupRoute.title}</span>
                </p>
                <p className="mt-1 text-sm text-slate-700">{recommendation.whyNotOther}</p>
                <p className="mt-1 text-sm text-amber-700">{recommendation.risk}</p>
                <p className="mt-1 text-sm text-slate-600">{recommendation.reason}</p>
                <p className="mt-1 text-sm font-semibold text-rose-700">{recommendation.riskIfDelayed}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#102a56]">
                  {routeBadgeLabel(recommendation.primaryRoute.badge)} · {recommendation.primaryRoute.durationHint}
                </p>
                <p className="mt-1 text-xs text-slate-500">{funnelRouteSummary(recommendation)}</p>
                <div className="mt-2 rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-700">
                  Персональный слот по офферу сегодня до 21:00. В группе осталось 2 места.
                </div>
                <a
                  href="#courses"
                  onClick={() =>
                    trackEvent("offer_accept_clicked", {
                      goal,
                      primaryRoute: recommendation.primaryRoute.id,
                      backupRoute: recommendation.backupRoute.id,
                    })
                  }
                  className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline"
                >
                  Подтвердить основной маршрут
                  <span aria-hidden>→</span>
                </a>
              </>
            )}
          </div>

          {isComplete ? <LeadCaptureForm goal={goal} recommendation={recommendation} /> : null}
        </div>
      </div>
    </section>
  );
}

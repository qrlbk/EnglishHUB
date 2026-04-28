"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FunnelGoal, FunnelRecommendation } from "@/lib/funnel";
import { getWhatsAppLink, funnelLeadMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { SkeletonBlock } from "@/components/skeleton-block";
import { tapPress } from "@/lib/motion";

type LeadCaptureFormProps = {
  goal: FunnelGoal;
  recommendation: FunnelRecommendation;
};

export function LeadCaptureForm({ goal, recommendation }: LeadCaptureFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const waHref = useMemo(() => {
    if (!submitted) return "";
    return getWhatsAppLink(
      funnelLeadMessage({
        name,
        phone,
        goal,
        level: recommendation.level,
        primaryRoute: recommendation.primaryRoute.title,
        backupRoute: recommendation.backupRoute.title,
        risk: recommendation.risk,
        durationHint: recommendation.primaryRoute.durationHint,
        riskIfDelayed: recommendation.riskIfDelayed,
      }),
    );
  }, [submitted, name, phone, goal, recommendation]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !phone.trim() || !consent || isSubmitting) return;
    setIsSubmitting(true);
    window.setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      trackEvent(
        "lead_form_submitted",
        {
          segment: goal,
          level: recommendation.level,
          primaryRoute: recommendation.primaryRoute.id,
          backupRoute: recommendation.backupRoute.id,
        },
        { source: "lead_capture_form", step: "lead", dedupeKey: `lead-submit:${goal}:${recommendation.primaryRoute.id}` },
      );
    }, 700);
  }

  useEffect(() => {
    if (!started || submitted) return;
    return () => {
      trackEvent(
        "lead_started_no_submit",
        {
          segment: goal,
          level: recommendation.level,
          primaryRoute: recommendation.primaryRoute.id,
        },
        { source: "lead_capture_form", step: "lead", dedupeKey: `lead-abandon:${goal}:${recommendation.primaryRoute.id}` },
      );
    };
  }, [started, submitted, goal, recommendation]);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900" aria-label="Форма захвата контакта">
      <h3 className="text-base font-bold text-[#0a1628] dark:text-slate-100">Получите персональный план и напишите в WhatsApp</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Оставьте контакт, чтобы менеджер сразу видел ваш уровень, риски и рекомендуемый маршрут.
      </p>
      <p className="mt-1 text-xs font-semibold text-amber-700">Ваш персональный слот по этому плану активен сегодня до 21:00.</p>

      <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Имя
          <input
            required
            value={name}
            onChange={(e) => {
              setStarted(true);
              setName(e.target.value);
            }}
            className="h-10 rounded-md border border-slate-300 px-3 text-sm outline-none ring-blue-200 focus:ring dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            placeholder="Ваше имя"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Телефон
          <input
            required
            value={phone}
            onChange={(e) => {
              setStarted(true);
              setPhone(e.target.value);
            }}
            className="h-10 rounded-md border border-slate-300 px-3 text-sm outline-none ring-blue-200 focus:ring dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            placeholder="+7 (___) ___-__-__"
          />
        </label>
        <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-slate-700"
          />
          Даю согласие на обработку контакта для обратной связи по подбору курса.
        </label>
        {!submitted && !isSubmitting ? (
          <motion.button
            type="submit"
            whileTap={tapPress}
            className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-md bg-[#102a56] px-5 text-sm font-semibold text-white transition hover:bg-[#173870]"
          >
            Закрепить персональный слот
          </motion.button>
        ) : null}
        {isSubmitting ? (
          <div className="sm:col-span-2 grid gap-2">
            <SkeletonBlock className="h-11 w-full" />
            <SkeletonBlock className="h-3 w-2/3" />
          </div>
        ) : null}
        {submitted ? (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("whatsapp_handoff_clicked", {
                segment: goal,
                level: recommendation.level,
                primaryRoute: recommendation.primaryRoute.id,
              }, { source: "lead_capture_form", step: "handoff", dedupeKey: `wa-handoff:${goal}:${recommendation.primaryRoute.id}` })
            }
            className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-md bg-[#102a56] px-5 text-sm font-semibold text-white transition hover:bg-[#173870]"
          >
            Открыть WhatsApp с заявкой
          </a>
        ) : null}
      </form>
    </section>
  );
}

"use client";

import { FormEvent, useMemo, useState } from "react";
import { FunnelGoal, FunnelRecommendation } from "@/lib/funnel";
import { getWhatsAppLink, funnelLeadMessage } from "@/lib/whatsapp";

type LeadCaptureFormProps = {
  goal: FunnelGoal;
  recommendation: FunnelRecommendation;
};

export function LeadCaptureForm({ goal, recommendation }: LeadCaptureFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const waHref = useMemo(() => {
    if (!submitted) return "";
    return getWhatsAppLink(
      funnelLeadMessage({
        name,
        phone,
        goal,
        level: recommendation.level,
        recommendedCourse: recommendation.courseTitle,
      }),
    );
  }, [submitted, name, phone, goal, recommendation.level, recommendation.courseTitle]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !phone.trim() || !consent) return;
    setSubmitted(true);
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4" aria-label="Форма захвата контакта">
      <h3 className="text-base font-bold text-[#0a1628]">Получите персональный план и напишите в WhatsApp</h3>
      <p className="mt-1 text-sm text-slate-600">
        Оставьте контакт, чтобы менеджер сразу видел ваш уровень, цель и рекомендованный курс.
      </p>

      <form className="mt-4 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Имя
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 rounded-md border border-slate-300 px-3 text-sm outline-none ring-blue-200 focus:ring"
            placeholder="Ваше имя"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-slate-700">
          Телефон
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-10 rounded-md border border-slate-300 px-3 text-sm outline-none ring-blue-200 focus:ring"
            placeholder="+7 (___) ___-__-__"
          />
        </label>
        <label className="sm:col-span-2 flex items-start gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300"
          />
          Даю согласие на обработку контакта для обратной связи по подбору курса.
        </label>
        {!submitted ? (
          <button
            type="submit"
            className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-md bg-[#102a56] px-5 text-sm font-semibold text-white transition hover:bg-[#173870]"
          >
            Подготовить заявку
          </button>
        ) : (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-2 inline-flex h-11 items-center justify-center rounded-md bg-[#102a56] px-5 text-sm font-semibold text-white transition hover:bg-[#173870]"
          >
            Открыть WhatsApp с заявкой
          </a>
        )}
      </form>
    </section>
  );
}

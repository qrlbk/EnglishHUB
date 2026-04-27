import { getWhatsAppLink, genericConsultMessage } from "@/lib/whatsapp";

export function FinalCta() {
  const wa = getWhatsAppLink(genericConsultMessage());
  return (
    <section className="bg-gradient-to-r from-[#0a1628] to-[#1e3a5f] py-[clamp(2.2rem,5.2vw,3.5rem)]" aria-label="Итоговый призыв">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-[clamp(0.9rem,3.4vw,1.5rem)] md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.35rem,5.2vw,1.9rem)] font-extrabold text-white sm:text-3xl">Начните с бесплатного пробного</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            Подберём курс, уровень и формат. Напишите в WhatsApp — ответим быстро и на человеческом языке.
          </p>
        </div>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-extrabold text-[#0a1628] shadow-sm transition hover:-translate-y-0.5 sm:w-auto sm:py-3.5"
        >
          Написать в WhatsApp
        </a>
      </div>
    </section>
  );
}

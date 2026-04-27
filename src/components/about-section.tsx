import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section className="bg-white py-[clamp(2.5rem,6vw,5rem)]" id="about" aria-labelledby="section-about">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <SectionHeading
          id="section-about"
          title="О школе"
          subtitle="Мы делаем акцент на говорение, мотивацию и устойчивую привычку учить язык — без сухой теории “ради теста”."
        />
        <div className="grid gap-3.5 md:grid-cols-3 md:gap-4">
          {[
            { t: "Программа с milestones", d: "Понятно, куда движемся: навыки, срок, контрольные точки." },
            { t: "Честная обратная связь", d: "Разбор речи, письма и лексики: без перестраховки, но с заботой." },
            { t: "Современные материалы", d: "Кейсы, дискуссии, письмо, медиа — не только учебник." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 sm:p-5">
              <h3 className="text-base font-extrabold text-[#0a1628]">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

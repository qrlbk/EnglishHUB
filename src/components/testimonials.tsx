import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/section-heading";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 из 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-[clamp(2.2rem,5.5vw,4.2rem)]" id="reviews" aria-labelledby="section-reviews">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div>
          <SectionHeading
            id="section-reviews"
            title="Отзывы наших студентов"
            subtitle="Результаты и впечатления наших студентов."
            align="center"
          />

          <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-2.5 xl:grid-cols-4">
            {testimonials.map((t) => (
              <article
                key={t.name + t.track}
                className="flex h-full min-h-44 flex-col rounded-lg border border-slate-200 bg-white p-3"
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <div className="relative h-9 w-9 overflow-hidden rounded-md ring-1 ring-slate-200">
                    <Image
                      src={t.avatarSrc}
                      alt={t.name}
                      fill
                      className="object-cover saturate-110 contrast-105"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[0.8rem] font-extrabold text-[#0a1628]">{t.name}</p>
                    <p className="text-[0.68rem] text-slate-500">
                      {t.age} · {t.track} · {t.format}
                    </p>
                  </div>
                </div>
                <div className="mb-2 space-y-1 text-[0.72rem]">
                  <p className="rounded bg-rose-50 px-2 py-1 text-rose-800">
                    <span className="font-semibold">Было:</span> {t.before}
                  </p>
                  <p className="rounded bg-emerald-50 px-2 py-1 text-emerald-800">
                    <span className="font-semibold">Стало:</span> {t.after}
                  </p>
                </div>
                <p className="flex-1 text-[0.78rem] leading-relaxed text-slate-600">{t.text}</p>
                <div className="mt-2.5 border-t border-slate-200/60 pt-2">
                  <div className="flex items-center justify-between gap-2">
                    <Stars />
                    <span className="text-[0.68rem] font-semibold text-slate-500">{t.period}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#reviews" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline">
              Смотреть все отзывы
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

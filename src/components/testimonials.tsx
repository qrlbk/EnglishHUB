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
    <section className="bg-white py-[clamp(2.5rem,6vw,5rem)]" id="reviews" aria-labelledby="section-reviews">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)]">
        <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-4 shadow-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
          <SectionHeading
            id="section-reviews"
            title="Отзывы наших студентов"
            subtitle="Коротко о главном: прогресс, атмосфера и ощутимый результат — без пустых обещаний."
          />

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {testimonials.map((t) => (
              <article
                key={t.name + t.course}
                className="flex h-full min-h-56 flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200">
                    <Image
                      src={t.avatarSrc}
                      alt={t.name}
                      fill
                      className="object-cover saturate-110 contrast-105"
                      sizes="40px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-extrabold text-[#0a1628]">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.age} · {t.course}
                    </p>
                  </div>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">{t.text}</p>
                <div className="mt-4 border-t border-slate-200/60 pt-3">
                  <Stars />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
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

import { stats } from "@/data/stats";

function SmallIcon({ kind }: { kind: (typeof stats)[number]["icon"] }) {
  const c = "h-5 w-5 text-slate-700";
  switch (kind) {
    case "trophy":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M7 3h10v2a5 5 0 0 0 3 3v1H4V8a5 5 0 0 0 3-3V3Z" />
          <path d="M5 8h14v1a4 4 0 0 1-4 4h-1v4H10v-4H9a4 4 0 0 1-4-4V8Z" />
        </svg>
      );
    case "heart":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M20.4 4.6a4.5 4.5 0 0 0-6.4 0L12 6.1l-2-1.5a4.5 4.5 0 0 0-6.4 6.3l8 7.1 8-7.1a4.5 4.5 0 0 0 0-6.3Z" />
        </svg>
      );
    case "target":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 1v4M16 1v4" />
        </svg>
      );
    case "globe":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M2 12h20M12 2a16 16 0 0 0 0 20 16 16 0 0 0 0-20" />
        </svg>
      );
  }
}

export function StatsBar() {
  return (
    <section className="border-y border-slate-200 bg-[#f7fafc]" aria-label="Показатели школы">
      <div className="mx-auto max-w-6xl px-[clamp(0.9rem,3.4vw,1.5rem)] py-[clamp(1rem,3vw,1.4rem)]">
        <ul className="grid gap-2 sm:grid-cols-2 sm:gap-2.5 xl:grid-cols-5">
          {stats.map((s) => (
            <li
              key={s.label}
              className="flex min-h-10 items-start gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-800"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-slate-50">
                <SmallIcon kind={s.icon} />
              </span>
              <span className="font-semibold leading-snug text-[0.77rem]">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

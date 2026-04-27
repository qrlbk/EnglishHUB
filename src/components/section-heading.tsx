type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  action?: { href: string; label: string };
  align?: "left" | "center";
};

export function SectionHeading({ id, title, subtitle, action, align = "left" }: SectionHeadingProps) {
  const a = align === "center" ? "text-center items-center" : "text-left";
  return (
    <div id={id} className={`mb-7 flex flex-col gap-2.5 sm:mb-10 sm:gap-3 ${a}`}>
      <div className="space-y-2">
        <h2 className="text-[clamp(1.35rem,4.6vw,1.95rem)] font-extrabold tracking-tight text-[#0a1628] sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-2xl text-pretty text-[clamp(0.95rem,2.7vw,1.1rem)] leading-relaxed text-slate-600 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
      {action ? (
        <a
          href={action.href}
          className="inline-flex min-h-11 w-fit items-center gap-1 text-sm font-semibold text-[#2563eb] hover:underline"
        >
          {action.label}
          <span aria-hidden>→</span>
        </a>
      ) : null}
    </div>
  );
}

import type { ReactElement } from "react";
import type { Course } from "@/data/courses";

const className = "h-7 w-7 text-[#2563eb]";

function BookIcon() {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      <path d="M8 7h8M8 11h5" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 12l3-3 3 2 4-5" />
      <path d="M7 19h.01M12 19h.01M17 19h.01" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10v1a7 7 0 0 0 14 0v-1" />
      <path d="M12 18v3M8 22h8" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
    </svg>
  );
}

function ChildIcon() {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="7" r="3" />
      <path d="M5 20v-1a7 7 0 0 1 7-7 7 7 0 0 1 7 7v1" />
      <path d="M9 20h.01M12 20h.01M15 20h.01" />
    </svg>
  );
}

const map: Record<Course["icon"], () => ReactElement> = {
  book: BookIcon,
  chart: ChartIcon,
  briefcase: BriefcaseIcon,
  mic: MicIcon,
  pen: PenIcon,
  child: ChildIcon,
};

export function CourseIcon({ name }: { name: Course["icon"] }) {
  const Cmp = map[name];
  return <Cmp />;
}

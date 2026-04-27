const items = [
  { href: "#top", label: "Главная" },
  { href: "#courses", label: "Курсы" },
  { href: "#teachers", label: "Преподы" },
  { href: "#prices", label: "Цены" },
  { href: "#contacts", label: "Контакты" },
];

export function MobileBottomNav() {
  return (
    <nav
      className="mobile-safe-pb fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/95 px-2 py-2 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur lg:hidden"
      aria-label="Быстрая мобильная навигация"
    >
      <ul className="mx-auto grid w-full max-w-md grid-cols-5 gap-1">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex min-h-11 items-center justify-center rounded-xl px-1 text-[0.68rem] font-semibold text-slate-600 active:bg-slate-100"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

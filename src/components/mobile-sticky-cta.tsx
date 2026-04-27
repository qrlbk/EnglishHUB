export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-[calc(var(--mobile-bottom-nav-h)+0.4rem)] z-50 px-3 lg:hidden">
      <div className="mx-auto max-w-md">
        <a
          href="#funnel"
          className="flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#0a1628] px-4 text-sm font-bold text-white shadow-lg shadow-slate-900/20"
        >
          Проверить уровень
        </a>
      </div>
    </div>
  );
}

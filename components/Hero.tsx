const badges = [
  "Operadores SRIJ",
  "Análises Imparciais",
  "Atualização 2026",
  "Conteúdo em PT",
];

const sliceSlots = [
  { left: "67%", top: "27%", textClass: "text-bg" },   // top-right · coral
  { left: "67%", top: "67%", textClass: "text-ink" },  // bottom-right · dark
  { left: "33%", top: "67%", textClass: "text-bg" },   // bottom-left · mint
  { left: "33%", top: "27%", textClass: "text-ink" },  // top-left · purple
];

function SpinWheelGraphic() {
  return (
    <div
      className="relative mx-auto hidden aspect-square w-full max-w-[320px] lg:block"
      aria-hidden="true"
    >
      <span className="hero-orb hero-orb-a absolute -left-6 top-4 h-32 w-32 rounded-full bg-gold/12 blur-3xl" />
      <span className="hero-orb hero-orb-b absolute -right-4 bottom-8 h-36 w-36 rounded-full bg-emerald/10 blur-3xl" />

      <svg
        viewBox="0 0 200 200"
        className="relative mx-auto h-full w-full drop-shadow-[0_0_40px_rgba(242,132,91,0.2)]"
      >
        <circle cx="100" cy="100" r="92" fill="#1e1529" stroke="#f2845b" strokeWidth="3" />
        <path d="M100 16 A84 84 0 0 1 184 100 L100 100 Z" fill="#f2845b" />
        <path d="M184 100 A84 84 0 0 1 100 184 L100 100 Z" fill="#2a1f3a" />
        <path d="M100 184 A84 84 0 0 1 16 100 L100 100 Z" fill="#5ec4a8" opacity="0.85" />
        <path d="M16 100 A84 84 0 0 1 100 16 L100 100 Z" fill="#3d2f52" />
        <circle cx="100" cy="100" r="28" fill="#0f0a14" stroke="#f2845b" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="8" fill="#f2845b" />
        <line x1="100" y1="8" x2="100" y2="28" stroke="#f2eaf8" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {badges.map((label, i) => {
        const slot = sliceSlots[i];

        return (
          <span
            key={label}
            className={`hero-badge pointer-events-none absolute z-10 flex w-[4.75rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 text-center text-[10px] font-bold leading-[1.15] tracking-tight ${slot.textClass}`}
            style={{
              left: slot.left,
              top: slot.top,
              animationDelay: `${i * 100}ms`,
            }}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 opacity-90" fill="currentColor">
              <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z" />
            </svg>
            <span className="block">{label}</span>
          </span>
        );
      })}
    </div>
  );
}

function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <span className="hero-orb hero-orb-c absolute -left-20 top-1/4 h-56 w-56 rounded-full bg-gold/8 blur-3xl lg:hidden" />
      <span className="hero-orb hero-orb-b absolute -right-16 top-0 h-48 w-48 rounded-full bg-emerald/8 blur-3xl lg:hidden" />
      <div className="hero-accent-line absolute bottom-0 left-0 h-px w-full overflow-hidden bg-border/60" />
    </div>
  );
}

export function Hero({
  headText,
  headParagraph,
  theHell,
}: {
  headText: string;
  headParagraph: string;
  theHell: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-radial-hero">
      <HeroBackdrop />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-4 md:py-8 lg:grid-cols-2 lg:gap-12">
        <div className="text-left">
          <div className="hero-enter hero-enter-1 mb-3 inline-flex items-center gap-2 rounded-lg border border-gold/25 bg-surface/80 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-sm sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="hero-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="hero-shimmer-text">
              Comparador de casinos online em Portugal
            </span>
          </div>

          <h1 className="hero-enter hero-enter-2 text-balance text-2xl font-extrabold leading-[1.12] tracking-tight text-ink md:text-4xl lg:text-[2.65rem]">
            <span className="hero-title-glow">{headText}</span>
          </h1>

          {!theHell && (
            <p className="hero-enter hero-enter-3 mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted lg:mx-0 md:text-base">
              {headParagraph}
            </p>
          )}

          {/* Badges below copy on tablet; on desktop they live on the wheel */}
          <div className="hidden md:block lg:hidden hero-enter hero-enter-5 mt-5">
            <div className="no-scrollbar flex flex-wrap justify-center gap-2">
              {badges.map((b, i) => (
                <span
                  key={b}
                  className="hero-badge inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border/70 bg-surface/90 px-3 py-1.5 text-xs font-medium text-ink"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-emerald"
                    fill="currentColor"
                  >
                    <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z" />
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        <SpinWheelGraphic />
      </div>
    </section>
  );
}

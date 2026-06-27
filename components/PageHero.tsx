export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-radial-hero">
      <div className="mx-auto flex max-w-7xl items-start gap-5 px-4 py-10 sm:py-14">
        <div
          className="mt-1 hidden h-16 w-1 shrink-0 rounded-full bg-gradient-to-b from-gold via-emerald to-transparent sm:block"
          aria-hidden="true"
        />
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </span>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

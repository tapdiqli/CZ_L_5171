export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-block rounded-md bg-gold/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

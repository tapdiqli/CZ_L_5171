export function AgeGateBar() {
  return (
    <div className="hidden md:block w-full border-b border-border/60 bg-surface/40">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-[9px] font-medium text-muted md:text-[11px]">
        <span className="grid h-4 w-4 shrink-0 place-items-center rounded bg-gold/20 text-[9px] font-bold text-gold">
          18
        </span>
        <span>
          Conteúdo para maiores de 18 anos. Jogue com moderação. Apenas
          operadores autorizados pelo SRIJ.
        </span>
      </div>
    </div>
  );
}

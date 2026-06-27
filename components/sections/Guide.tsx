import { SectionHeading } from "../SectionHeading";

const tips = [
  {
    title: "Confirme a licença SRIJ",
    desc: "Antes de depositar, verifique se o operador exibe autorização válida do SRIJ. É a garantia de que joga num ambiente legal e supervisionado.",
    icon: "M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z",
  },
  {
    title: "Analise as condições dos bónus",
    desc: "Ofertas de boas-vindas trazem requisitos de apostas. Compreender as regras evita frustrações e permite aproveitar melhor cada promoção.",
    icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z",
  },
  {
    title: "Prefira jogos que domina",
    desc: "Comece por slots, roleta ou blackjack que conhece. Use versões demo quando existirem para experimentar sem risco.",
    icon: "M21 6H3v12h18V6zm-9 3l6 3.5L12 16V9z",
  },
  {
    title: "Estabeleça limites desde o início",
    desc: "Defina tempo e orçamento antes de jogar. Operadores de qualidade oferecem ferramentas para manter o controlo sobre a actividade.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
  },
];

export function Guide() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            eyebrow="Guia prático"
            title="Como seleccionar um casino online seguro"
            subtitle="Quatro recomendações essenciais para encontrar uma plataforma fiável em Portugal, quer jogue no computador ou no telemóvel."
            align="left"
          />

          <div className="guide-panel mt-8 rounded-xl border border-emerald/25 bg-gradient-to-br from-surface to-bg-soft p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald/15 text-emerald">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald">
                  Mercado regulado
                </p>
                <p className="text-sm font-bold text-ink">SRIJ · Desde 2015</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Em Portugal, apenas operadores aprovados pelo SRIJ podem oferecer
              jogo online legalmente. Escolher casinos autorizados garante
              protecção de dados, jogo justo e acesso a recursos de jogo
              responsável.
            </p>
          </div>
        </div>

        <div className="relative space-y-3">
          <div
            className="guide-path absolute bottom-4 left-5 top-4 hidden w-px bg-gradient-to-b from-gold/55 via-emerald/30 to-transparent lg:block"
            aria-hidden="true"
          />

          {tips.map((t, i) => (
            <div
              key={t.title}
              className="guide-step group relative flex gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-gold/25 hover:shadow-[0_6px_28px_-10px_rgba(242,132,91,0.15)]"
              style={{ animationDelay: `${i * 130}ms` }}
            >
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold/35 bg-bg text-gold transition-colors group-hover:border-gold group-hover:bg-gold/10">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d={t.icon} />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold tabular-nums text-gold/45">
                  ETAPA {i + 1}
                </span>
                <h3 className="mt-1 text-base font-bold text-ink">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

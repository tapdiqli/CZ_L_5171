import Link from "next/link";
import { SectionHeading } from "../SectionHeading";

const criteria = [
  {
    n: "01",
    title: "Autorização e protecção",
    desc: "Validamos a licença SRIJ e analisamos políticas de privacidade e segurança de dados antes de incluir qualquer operador.",
    pct: 100,
  },
  {
    n: "02",
    title: "Catálogo de jogos",
    desc: "Medimos a diversidade e qualidade de slots, mesas e casino ao vivo, incluindo fornecedores de software.",
    pct: 85,
  },
  {
    n: "03",
    title: "Bónus e requisitos",
    desc: "Avaliamos o valor das ofertas de entrada e a transparência com que os termos são comunicados ao jogador.",
    pct: 75,
  },
  {
    n: "04",
    title: "Usabilidade e suporte",
    desc: "Experimentamos a plataforma em desktop e mobile, incluindo velocidade, design e qualidade do apoio em português.",
    pct: 90,
  },
];

export function HowWeRate() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-bg-soft">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(61,47,82,0.35) 40px, rgba(61,47,82,0.35) 41px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Metodologia"
          title="Como construímos o nosso ranking"
          subtitle="Quatro eixos de avaliação definem a pontuação de cada operador e a sua posição no comparativo."
        />

        <div className="mt-12 hidden lg:block">
          <div className="relative">
            <div className="timeline-track absolute left-0 right-0 top-6 h-0.5 bg-border" />
            <div className="timeline-fill absolute left-0 top-6 h-0.5 bg-gradient-to-r from-gold via-emerald to-gold" />

            <div className="relative grid grid-cols-4 gap-6">
              {criteria.map((c, i) => (
                <div
                  key={c.n}
                  className="timeline-step text-center"
                  style={{ animationDelay: `${i * 160}ms` }}
                >
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg border-2 border-gold/45 bg-surface text-sm font-extrabold text-gold shadow-[0_0_22px_-4px_rgba(242,132,91,0.35)]">
                    {c.n}
                  </div>
                  <h3 className="mt-5 text-sm font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{c.desc}</p>
                  <div className="mx-auto mt-4 h-1.5 w-20 overflow-hidden rounded-full bg-border">
                    <div
                      className="timeline-bar h-full rounded-full bg-gradient-to-r from-gold to-emerald"
                      style={{
                        width: `${c.pct}%`,
                        animationDelay: `${i * 200 + 420}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-3 lg:hidden">
          {criteria.map((c, i) => (
            <div
              key={c.n}
              className="timeline-step flex gap-4 rounded-xl border border-border bg-surface p-4"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-gold/35 bg-gold/10 text-xs font-extrabold text-gold">
                {c.n}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{c.desc}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
                  <div
                    className="timeline-bar h-full rounded-full bg-gradient-to-r from-gold to-emerald"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/como-avaliamos"
            className="group inline-flex items-center gap-2 rounded-lg border border-gold/35 bg-surface px-6 py-3 text-sm font-bold text-ink transition-all hover:border-gold/55 hover:bg-gold/10 hover:text-gold"
          >
            Conhecer a metodologia completa
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="currentColor"
            >
              <path d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

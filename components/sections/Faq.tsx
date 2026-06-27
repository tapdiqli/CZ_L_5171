import { SectionHeading } from "../SectionHeading";

export const faqItems = [
  {
    q: "É legal jogar em casinos online em Portugal?",
    a: "Sim. Desde 2015 o jogo online é legal e regulado pelo SRIJ (Serviço de Regulação e Inspeção de Jogos). Recomendamos apenas operadores com licença válida emitida por esta entidade.",
  },
  {
    q: "Como funciona a avaliação no LusoSpin?",
    a: "A nossa equipa editorial analisa cada casino de forma independente, considerando autorização, jogos, bónus e qualidade do suporte. A pontuação final determina a posição no ranking.",
  },
  {
    q: "Preciso ter 18 anos ou mais?",
    a: "Sim. O jogo online em Portugal é exclusivo para adultos com 18 anos ou mais. Este site destina-se apenas a esse público e promove práticas de jogo responsável.",
  },
  {
    q: "O LusoSpin é um casino?",
    a: "Não. Somos um comparador informativo. Não disponibilizamos jogos nem processamos apostas — limitamo-nos a analisar e recomendar operadores licenciados.",
  },
  {
    q: "Os bónus têm condições associadas?",
    a: "Sim. Cada oferta está sujeita aos termos do operador respectivo. Recomendamos ler essas condições com atenção antes de activar qualquer promoção.",
  },
  {
    q: "Onde obtenho apoio sobre jogo problemático?",
    a: "Se o jogo deixar de ser divertido, procure ajuda. Em Portugal pode contactar a linha SICAD 1414 e usar as ferramentas de autoexclusão disponíveis nos casinos licenciados.",
  },
];

const highlights = [
  { label: "Respostas disponíveis", value: "6" },
  { label: "Mercado", value: "PT" },
  { label: "Linha de apoio", value: "1414" },
];

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="relative overflow-hidden border-t border-border bg-bg-soft">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="FAQ"
              title="Dúvidas frequentes"
              align="left"
            />

            <div className="mt-8 grid gap-2">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <span className="text-sm text-muted">{h.label}</span>
                  <span className="text-lg font-extrabold text-gold">{h.value}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              Tem outra questão? Escreva-nos através da página de{" "}
              <a href="/contato" className="font-semibold text-gold underline underline-offset-2">
                contacto
              </a>{" "}
              ou consulte a secção de{" "}
              <a
                href="/jogo-responsavel"
                className="font-semibold text-emerald underline underline-offset-2"
              >
                jogo responsável
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-2">
              {faqItems.map((item, i) => (
                <details
                  key={item.q}
                  className="faq-item group overflow-hidden rounded-lg border border-border bg-surface transition-colors open:border-gold/25 open:bg-surface-2"
                  style={{ animationDelay: `${i * 65}ms` }}
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-gold/10 text-xs font-extrabold text-gold transition-colors group-open:bg-gold group-open:text-bg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-bold text-ink">{item.q}</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                      fill="currentColor"
                    >
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </summary>
                  <div className="faq-answer px-4 pb-4 pl-[3.75rem]">
                    <p className="text-sm leading-relaxed text-muted">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

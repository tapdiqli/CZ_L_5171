import { SectionHeading } from "../SectionHeading";

const features = [
  {
    title: "Só casinos autorizados",
    desc: "Incluímos unicamente operadores com licença válida do SRIJ — a autoridade que supervisiona o jogo online em Portugal. Segurança e conformidade legal são requisitos mínimos.",
    icon: "M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-4z",
    accent: "from-gold/18 to-transparent",
  },
  {
    title: "Análises sem influência",
    desc: "Testamos cada plataforma de forma autónoma. As notas refletem a experiência real de utilizadores portugueses, sem pressão comercial dos operadores.",
    icon: "M3 13h2v8H3v-8zm4-4h2v12H7V9zm4-4h2v16h-2V5zm4 8h2v8h-2v-8zm4-4h2v12h-2V9z",
    accent: "from-emerald/14 to-transparent",
  },
  {
    title: "Ofertas explicadas com clareza",
    desc: "Descrevemos bónus de boas-vindas e respetivas condições de forma directa, para que saiba exactamente o que está a aceitar antes de se registar.",
    icon: "M20 12v8H4v-8H2V8h20v4h-2zM12 2l3 4H9l3-4zM4 6h16",
    accent: "from-gold/14 to-transparent",
  },
  {
    title: "Rankings revistos em 2026",
    desc: "Monitorizamos alterações de licença, novas promoções e mudanças nas plataformas. O nosso comparativo é actualizado com regularidade.",
    icon: "M12 4V1L8 5l4 4V6a6 6 0 11-6 6H4a8 8 0 108-8z",
    accent: "from-emerald/14 to-transparent",
  },
  {
    title: "Experiência em português",
    desc: "Valorizamos casinos com interface, jogos e apoio ao cliente adaptados ao mercado nacional — essencial para uma experiência confortável.",
    icon: "M4 4h16v12H8l-4 4V4z",
    accent: "from-gold/14 to-transparent",
  },
  {
    title: "Compromisso com o jogo seguro",
    desc: "Encorajamos hábitos saudáveis. Todos os operadores que recomendamos disponibilizam ferramentas de limites, pausa e autoexclusão.",
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    accent: "from-emerald/18 to-transparent",
  },
];

export function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald/5 blur-3xl"
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="Porque o LusoSpin"
        title="Informação fiável para quem joga em Portugal"
        subtitle="Não operamos casinos. Somos um comparador editorial que ajuda a escolher operadores legais com critério e confiança."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="feature-card group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-[0_12px_36px_-14px_rgba(242,132,91,0.18)]"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/12 text-gold transition-transform group-hover:scale-105">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d={f.icon} />
                  </svg>
                </span>
                <span className="text-[10px] font-bold tabular-nums text-gold/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

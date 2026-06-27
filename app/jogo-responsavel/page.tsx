import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jogo Responsável",
  description:
    "Informação sobre jogo responsável em Portugal: ferramentas de autocontrolo, sinais de alerta e apoio através do SICAD 1414. +18.",
  alternates: { canonical: "/jogo-responsavel" },
};

const tools = [
  {
    title: "Limites de tempo",
    desc: "Configure quanto tempo pretende dedicar ao jogo. Operadores licenciados permitem definir limites por sessão ou por dia.",
  },
  {
    title: "Limites de depósito",
    desc: "Decida antecipadamente quanto pode gastar e cumpra esse limite. O jogo deve ser sempre uma forma de lazer, nunca uma necessidade.",
  },
  {
    title: "Pausa e autoexclusão",
    desc: "Pode suspender a conta temporariamente ou inscrever-se no Registo de Autoexclusão (RAEJO) do SRIJ para bloquear o acesso.",
  },
  {
    title: "Verificação de idade",
    desc: "O jogo online em Portugal é exclusivo para maiores de 18 anos. Os operadores verificam a identidade de todos os jogadores.",
  },
];

const signs = [
  "Jogar mais tempo ou dinheiro do que planeado.",
  "Pensar frequentemente no jogo durante o dia.",
  "Usar o jogo para escapar a problemas ou emoções difíceis.",
  "Ocultar ou minimizar o tempo e dinheiro gastos a jogar.",
  "Sentir que o jogo deixou de ser divertido e passou a ser stressante.",
];

export default function JogoResponsavelPage() {
  return (
    <>
      <PageHero
        eyebrow="Joga com consciência"
        title="Jogo responsável"
        description="O jogo deve ser diversão. Conheça ferramentas de autocontrolo e recursos de apoio disponíveis em Portugal."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="prose-pt">
          <p>
            No <strong>{site.name}</strong> acreditamos que jogar só faz sentido
            quando é controlado e prazeroso. Para a maioria das pessoas, trata-se
            de um passatempo ocasional. Mesmo assim, é essencial conhecer os
            recursos disponíveis e reconhecer sinais de alerta atempadamente.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {tools.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h2 className="text-base font-bold text-ink">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="prose-pt mt-10">
          <h2>Sinais de alerta</h2>
          <p>Procure apoio se reconhecer algum destes comportamentos:</p>
          <ul>
            {signs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-xl border border-emerald/30 bg-emerald/10 p-6">
          <h2 className="text-lg font-extrabold text-ink">Precisa de apoio?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            O apoio é gratuito e confidencial. Em Portugal pode contactar a
            linha <strong className="text-ink">SICAD — 1414</strong> ou
            consultar o portal do SICAD sobre comportamentos aditivos. Também
            pode inscrever-se no Registo de Autoexclusão do SRIJ, que bloqueia
            o acesso a casinos online licenciados.
          </p>
          <p className="mt-3 text-sm font-semibold text-ink">
            O jogo online destina-se exclusivamente a maiores de 18 anos.
          </p>
        </div>
      </article>
    </>
  );
}

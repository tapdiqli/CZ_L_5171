import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Como Avaliamos os Casinos",
  description:
    "Descubra a metodologia independente que o LusoSpin utiliza para classificar casinos online autorizados pelo SRIJ em Portugal.",
  alternates: { canonical: "/como-avaliamos" },
};

const pillars = [
  {
    title: "1. Autorização e segurança",
    desc: "O primeiro critério é sempre a licença. Confirmamos autorização SRIJ e analisamos políticas de privacidade e protecção de dados. Sem licença válida, o operador não entra no comparativo.",
  },
  {
    title: "2. Oferta de jogos",
    desc: "Avaliamos slots, jogos de mesa e casino ao vivo, incluindo fornecedores de software. Preferimos catálogos amplos com títulos reconhecidos.",
  },
  {
    title: "3. Bónus e transparência",
    desc: "Analisamos o valor das ofertas de entrada e, sobretudo, a clareza com que os termos são apresentados ao jogador.",
  },
  {
    title: "4. Experiência de utilização",
    desc: "Testamos a plataforma em desktop e mobile: velocidade, navegação, estabilidade e qualidade da aplicação.",
  },
  {
    title: "5. Apoio ao cliente",
    desc: "Contactamos o suporte para medir tempo de resposta e eficácia. Damos prioridade a operadores com atendimento em português.",
  },
  {
    title: "6. Jogo responsável",
    desc: "Verificamos ferramentas de limites, pausa, autoexclusão e ligações a entidades de apoio. É um requisito obrigatório.",
  },
];

export default function ComoAvaliamosPage() {
  return (
    <>
      <PageHero
        eyebrow="Processo editorial"
        title="Como avaliamos cada operador"
        description="Transparência total sobre os critérios que determinam as nossas classificações. Análises independentes, sem influência comercial."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="prose-pt">
          <p>
            No <strong>{site.name}</strong> tratamos cada avaliação com
            rigor. A equipa editorial analisa operadores de forma autónoma,
            seguindo critérios consistentes. O objectivo é ajudar jogadores
            portugueses a encontrar plataformas{" "}
            <strong>seguras, legais e agradáveis</strong>.
          </p>
          <p>
            A pontuação final (escala até 10) resulta da combinação dos seis
            pilares abaixo. Essa nota define a posição de cada casino no
            ranking apresentado no site.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <h2 className="text-base font-bold text-ink">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="prose-pt mt-10">
          <h2>Independência editorial</h2>
          <p>
            Podemos receber comissão quando um utilizador visita um casino
            através das nossas ligações. Contudo, isto{" "}
            <strong>nunca afecta</strong> as nossas avaliações nem a ordem do
            ranking. A credibilidade do {site.name} depende da honestidade da
            informação publicada.
          </p>
          <p>
            Revimos os conteúdos regularmente para reflectir alterações de
            licenciamento, novas promoções ou mudanças nas plataformas.
          </p>
        </div>
      </article>
    </>
  );
}

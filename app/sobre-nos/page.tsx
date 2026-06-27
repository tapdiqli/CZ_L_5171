import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    `Conheça a equipa por trás do ${site.name}, comparador independente de casinos online autorizados pelo SRIJ em Portugal.`,
  alternates: { canonical: "/sobre-nos" },
};

export default function SobreNosPage() {
  return (
    <>
      <PageHero
        eyebrow="A nossa história"
        title={`Sobre o ${site.name}`}
        description="Um projecto editorial independente focado em ajudar jogadores portugueses a encontrar casinos online legais, seguros e bem avaliados."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="prose-pt">
          <p>
            O <strong>{site.name}</strong> surgiu com um objectivo simples:
            tornar mais fácil escolher um casino online de confiança em
            Portugal. Num mercado cada vez mais saturado, distinguir operadores
            de qualidade exige informação clara e imparcial.
          </p>
          <p>
            A nossa missão consiste em reunir casinos online{" "}
            <strong>autorizados pelo SRIJ</strong>, analisá-los com rigor
            editorial e apresentar conclusões de forma acessível. Não somos
            operador de jogo, não aceitamos apostas e não disponibilizamos
            plataforma de casino — somos exclusivamente um comparador
            informativo.
          </p>

          <h2>O que fazemos</h2>
          <ul>
            <li>Comparamos operadores legais no mercado português.</li>
            <li>
              Avaliamos licenciamento, catálogo de jogos, bónus, suporte e
              experiência geral.
            </li>
            <li>
              Publicamos rankings actualizados com base em análise independente.
            </li>
            <li>
              Divulgamos recursos de jogo responsável e linhas de apoio.
            </li>
          </ul>

          <h2>Princípios editoriais</h2>
          <h3>Independência</h3>
          <p>
            As nossas classificações não são determinadas por operadores. A
            ordem do ranking reflecte apenas a nossa metodologia de avaliação.
          </p>
          <h3>Clareza</h3>
          <p>
            Explicamos como chegamos a cada conclusão e identificamos
            explicitamente conteúdos de natureza comercial ou promocional.
          </p>
          <h3>Responsabilidade</h3>
          <p>
            Defendemos que o jogo deve ser entretenimento. Promovemos hábitos
            conscientes e restringimos o acesso a maiores de 18 anos.
          </p>

          <h2>Contacte-nos</h2>
          <p>
            Sugestões ou questões? Visite a nossa página de{" "}
            <a href="/contato">contacto</a> — teremos gosto em ouvir-vos.
          </p>
        </div>
      </article>
    </>
  );
}

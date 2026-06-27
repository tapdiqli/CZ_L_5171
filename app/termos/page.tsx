import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description:
    `Termos e condições de utilização do ${site.name}, comparador informativo de casinos online em Portugal.`,
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <>
      <PageHero
        eyebrow="Termos de uso"
        title="Termos e Condições"
        description="Ao utilizar este site, aceita os termos descritos abaixo. Leia-os com atenção antes de continuar."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="prose-pt">
          <h2>1. Natureza do site</h2>
          <p>
            O <strong>{site.name}</strong> é um comparador informativo e
            independente de casinos online licenciados em Portugal.{" "}
            <strong>Não somos operador de jogo</strong>, não disponibilizamos
            jogos nem processamos apostas. O conteúdo tem carácter exclusivamente
            informativo.
          </p>

          <h2>2. Idade mínima</h2>
          <p>
            Este site destina-se apenas a maiores de 18 anos. Ao navegar,
            confirma ter pelo menos 18 anos de idade. O jogo online em Portugal
            é proibido a menores.
          </p>

          <h2>3. Conteúdo promocional e afiliados</h2>
          <p>
            Algumas ligações para casinos são ligações de afiliado. Podemos
            receber comissão quando acede a um operador através delas, sem
            custo adicional para si. Isto não afecta as nossas avaliações nem a
            ordem do ranking.
          </p>

          <h2>4. Exactidão da informação</h2>
          <p>
            Esforçamo-nos por manter informação correcta e actualizada. Contudo,
            bónus, ofertas e condições dos operadores podem alterar-se sem aviso
            prévio. Confirme sempre os termos directamente no site do casino
            antes de jogar.
          </p>

          <h2>5. Responsabilidade</h2>
          <p>
            Não nos responsabilizamos por decisões tomadas com base na informação
            aqui apresentada, nem pelos serviços de terceiros. A relação de jogo
            é estabelecida exclusivamente entre o utilizador e o operador
            escolhido.
          </p>

          <h2>6. Jogo responsável</h2>
          <p>
            Promovemos o jogo consciente. Se o jogo deixar de ser divertido,
            procure apoio através da linha SICAD 1414. Consulte também a nossa
            página de{" "}
            <a href="/jogo-responsavel">jogo responsável</a>.
          </p>

          <h2>7. Contacto</h2>
          <p>
            Para questões sobre estes termos, contacte{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    `Política de privacidade do ${site.name}. Saiba como tratamos os seus dados em conformidade com o RGPD.`,
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        description="A sua privacidade importa. Esta página explica que informação recolhemos e como a utilizamos."
      />

      <article className="mx-auto max-w-7xl px-4 py-12">
        <div className="prose-pt">
          <p>
            Esta Política de Privacidade descreve como o{" "}
            <strong>{site.name}</strong> ({site.domain}) processa dados pessoais
            de visitantes, em conformidade com o Regulamento Geral sobre a
            Protecção de Dados (RGPD).
          </p>

          <h2>1. Dados recolhidos</h2>
          <p>Recolhemos apenas informação necessária ao funcionamento do site:</p>
          <ul>
            <li>
              Dados de navegação anónimos (páginas visitadas, dispositivo,
              origem do tráfego).
            </li>
            <li>
              Dados fornecidos voluntariamente via formulário de contacto (nome,
              email e mensagem).
            </li>
          </ul>

          <h2>2. Cookies e tecnologias similares</h2>
          <p>
            Utilizamos cookies para melhorar a experiência e para análise
            estatística. Podem também ser usados identificadores de campanha
            (como parâmetros de clique) para medir a eficácia das ligações.
            Pode gerir preferências de cookies no seu navegador.
          </p>

          <h2>3. Finalidade do tratamento</h2>
          <ul>
            <li>Assegurar o funcionamento e segurança do site.</li>
            <li>Responder a pedidos enviados pelo formulário.</li>
            <li>Analisar desempenho de conteúdos de forma agregada.</li>
          </ul>

          <h2>4. Partilha de dados</h2>
          <p>
            Não vendemos dados pessoais. Podemos partilhar informação agregada
            e anónima com parceiros tecnológicos para fins analíticos.
          </p>

          <h2>5. Os seus direitos</h2>
          <p>
            Ao abrigo do RGPD, tem direito a aceder, rectificar ou eliminar os
            seus dados, bem como a opor-se ao tratamento. Para exercer estes
            direitos, contacte{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>

          <h2>6. Alterações</h2>
          <p>
            Esta política pode ser actualizada periodicamente. Recomendamos
            consultá-la regularmente. Última actualização: 2026.
          </p>
        </div>
      </article>
    </>
  );
}

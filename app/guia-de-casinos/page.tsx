import type { Metadata } from "next";
import { getLandingData } from "@/lib/api";
import { PageHero } from "@/components/PageHero";
import { BrandList } from "@/components/BrandList";
import { Guide } from "@/components/sections/Guide";
import { Faq } from "@/components/sections/Faq";

const data = getLandingData();

export const metadata: Metadata = {
  title: "Guia de Casinos Online em Portugal",
  description:
    "Ranking actualizado de casinos online autorizados pelo SRIJ em Portugal. Compare bónus, jogos e análises independentes. +18.",
  alternates: { canonical: "/guia-de-casinos" },
};

export default function GuiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Comparativo 2026"
        title="Guia completo de casinos online"
        description="A selecção actualizada de operadores licenciados pelo SRIJ que a nossa equipa recomenda em Portugal. Compare e escolha com segurança."
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <BrandList
          desktopPartners={data.desktopPartners}
          mobilePartners={data.mobilePartners}
        />
        <p className="mt-6 text-center text-xs text-muted">
          Material promocional. 18+. Jogue com moderação. As ofertas estão
          sujeitas aos termos de cada operador.
        </p>
      </section>

      <Guide />
      <Faq />
    </>
  );
}

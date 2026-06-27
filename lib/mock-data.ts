import type { LandingData, Partner } from "./types";

const bwin: Partner = {
  id: "bwin",
  name: "BWIN",
  logo: "/brands/bwin.png",
  bonusText: "100% ATÉ €200 DE BÓNUS CASINO",
  partnerUrl: "https://www.bwin.pt/",
  isMobile: false,
  order: 1,
  highlights: ["Licenciado SRIJ", "Casino & Slots", "Suporte em Português"],
};

export const mockLanding: LandingData = {
  landingPageId: "mock",
  pageTitle: "Melhores Casinos Online em Portugal — Ranking 2026 | LusoSpin",
  headText:
    "Descubra os Casinos Online Autorizados Recomendados para Jogadores em Portugal",
  headParagraph:
    "No LusoSpin encontrará um ranking atualizado de operadores com licença SRIJ, análises imparciais, ofertas de boas-vindas e informação prática para quem joga em Portugal. Só plataformas legais, verificadas pela nossa equipa editorial.",
  desktopPartners: [bwin],
  mobilePartners: [bwin],
};

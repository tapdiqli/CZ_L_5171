export type RegulatorySign = {
  href: string;
  src: string;
  alt: string;
  whiteFilter?: boolean;
};

export const regulatorySigns: RegulatorySign[] = [
  {
    href: "https://www.gamcare.org.uk/",
    src: "/signs/gamcare.png",
    alt: "GamCare — apoio a jogadores",
  },
  {
    href: "https://www.gambleaware.org/",
    src: "/signs/gambleaware.png",
    alt: "BeGambleAware",
  },
  {
    href: "https://www.srij.turismodeportugal.pt/pt/jogo-seguro/como-jogar-em-seguranca",
    src: "/signs/srij.png",
    alt: "SRIJ — Serviço de Regulação e Inspeção de Jogos",
  },
  {
    href: "https://www.iaj.pt/",
    src: "/signs/iaj.png",
    alt: "IAJ — Instituto de Apoio ao Jogador",
  },
  {
    href: "https://www.egba.eu/",
    src: "/signs/egba.png",
    alt: "EGBA — European Gaming and Betting Association",
  },
  {
    href: "https://jogoresponsavel.pt/",
    src: "/signs/jogo-responsavel.png",
    alt: "Jogo Responsável",
  },
  {
    href: "https://www.icad.pt/",
    src: "/signs/icad.png",
    alt: "ICAD — Instituto para os Comportamentos Aditivos e as Dependências",
  },
  {
    href: "https://www.gamstop.co.uk/",
    src: "/signs/gamstop.png",
    alt: "GAMSTOP — autoexclusão online",
    whiteFilter: false,
  },
];

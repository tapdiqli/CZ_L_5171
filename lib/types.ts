export interface Partner {
  id: string;
  name: string;
  logo: string;
  bonusText: string;
  partnerUrl: string;
  isMobile: boolean;
  order: number;
  highlights: string[];
}

export interface LandingData {
  landingPageId: string;
  pageTitle: string;
  headText: string;
  headParagraph: string;
  desktopPartners: Partner[];
  mobilePartners: Partner[];
}

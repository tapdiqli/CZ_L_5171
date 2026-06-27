import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AgeGateBar } from "@/components/AgeGateBar";
import { site } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Casinos Online em Portugal — Ranking 2026 | LusoSpin",
    template: `%s | ${site.name}`,
  },
  description:
    "Compare casinos online autorizados pelo SRIJ em Portugal. Análises independentes, bónus de boas-vindas e guias para jogadores portugueses. +18. Jogue com responsabilidade.",
  keywords: [
    "lusospin",
    "casinos online Portugal",
    "casinos licenciados SRIJ",
    "ranking casino online",
    "bónus casino Portugal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: site.name,
    url: site.url,
    title: "Casinos Online em Portugal — Ranking 2026 | LusoSpin",
    description:
      "Compare casinos online autorizados pelo SRIJ em Portugal com análises independentes.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <AgeGateBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

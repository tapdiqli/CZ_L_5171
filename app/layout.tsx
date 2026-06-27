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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-touch-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${dmSans.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1266974682223770');
fbq('init', '1269332432050755');
  fbq('track', 'PageView');
`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" 
       src="https://www.facebook.com/tr?id={your-pixel-id-goes-here}&ev=PageView&noscript=1"/>`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <AgeGateBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

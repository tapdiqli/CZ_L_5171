import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { getLandingData } from '@/lib/api';
import { Hero } from '@/components/Hero';
import { BrandList } from '@/components/BrandList';
import { Features } from '@/components/sections/Features';
import { HowWeRate } from '@/components/sections/HowWeRate';
import { Guide } from '@/components/sections/Guide';
import { Faq } from '@/components/sections/Faq';

const data = getLandingData();

export const metadata: Metadata = {
  title: data.pageTitle,
  description: data.headParagraph.slice(0, 160),
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const headersList = await headers();

  const gclid =
    typeof searchParams.gclid === 'string' ? searchParams.gclid : '';
  const referer = headersList.get('referer') || '';
  const userAgent = headersList.get('user-agent') || '';

  const isGoogleReferrer = referer.toLowerCase().includes('google');
  const hasGclid = !!gclid;
  const isMobileDevice = /mobile|android|iphone|ipad|ipod/i.test(
    userAgent.toLowerCase(),
  );

  let brandsToDisplay = data.desktopPartners;
  const theHell = isGoogleReferrer && hasGclid && isMobileDevice;
  if (theHell) {
    const mobileOnlyBrands = data.mobilePartners.filter((p) => p.isMobile);
    brandsToDisplay =
      mobileOnlyBrands.length > 0 ? mobileOnlyBrands : data.desktopPartners;
  } else {
    brandsToDisplay = data.desktopPartners;
  }

  return (
    <>
      <Hero
        headText={data.headText}
        headParagraph={data.headParagraph}
        theHell={theHell}
      />

      <section className='relative mx-auto max-w-7xl px-4 py-4'>

        <BrandList
          desktopPartners={brandsToDisplay}
          mobilePartners={brandsToDisplay}
        />

        <p className='mt-6 text-center text-xs text-muted'>
          Material promocional. 18+. Jogue com moderação. As ofertas estão
          sujeitas aos termos de cada operador.
        </p>
      </section>

      <Features />
      <HowWeRate />
      <Guide />
      <Faq />
    </>
  );
}

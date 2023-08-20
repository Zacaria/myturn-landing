import { Metadata } from 'next';

import { SITE } from '~/config.js';

import { Toaster } from 'react-hot-toast';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import CookieConsent from '~/components/widgets/CookieConsent';
import GoogleAnalytics from '~/components/widgets/GoogleAnalytics';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <GoogleAnalytics />
      </head>
      <body className="bg-[#f5ece4] tracking-tight text-gray-900 antialiased  ">
        <Toaster position="bottom-center" />

        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
        <CookieConsent />
      </body>
    </html>
  );
}

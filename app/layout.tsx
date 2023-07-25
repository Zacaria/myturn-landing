import { Metadata } from 'next';

import { SITE } from '~/config.js';

import { Toaster } from 'react-hot-toast';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
// import CookieConsent from 'react-cookie-consent';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import CookieConsent from '~/components/widgets/CookieConsent';
import GoogleAnalytics from '~/components/widgets/GoogleAnalytics';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

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
      <body className="bg-primary-50 tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Toaster position="bottom-center" />

        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
        <CookieConsent />
      </body>
      {/* <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{' '}
        <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span>
      </CookieConsent> */}
    </html>
  );
}

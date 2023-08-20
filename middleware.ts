// 'use server';

import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { fallbackLng, languages } from 'app/i18n/settings';

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  let acceptLanguages = new Negotiator({
    headers: { 'accept-language': request.headers.get('accept-language') },
  }).languages();

  return match(acceptLanguages, languages, fallbackLng);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = languages.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // if (pathname === '/') {
    //   // If the incoming request is for the root, no need for the trailing slash
    //   return NextResponse.redirect(new URL(`/${locale}`, request.url));
    // }

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|blog|_next/static|_next/image|favicon.ico).*)',
  ],
};

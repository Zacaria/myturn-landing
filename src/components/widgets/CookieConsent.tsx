'use client';
import { hasCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  const denyCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'false', {});
  };

  useEffect(() => {
    window.addEventListener('scroll', acceptCookie);

    // unmount
    return () => {
      window.removeEventListener('scroll', acceptCookie);
    };
  }, []);

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0">
      <div className="fixed bottom-2 left-2 right-2 mx-2 flex flex-col justify-center bg-gray-100 px-4 py-8 align-middle md:flex-row md:items-center md:justify-between">
        <div className="text-dark mr-16 text-sm md:text-base">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in
          accordance with our{' '}
          <Link href="/cookie-policy" className="hover:text-lightAccent underline">
            cookie policy
          </Link>
          .
        </div>
        <button className="my-2 rounded bg-green-700 px-8 py-2 text-white md:my-0" onClick={acceptCookie}>
          Accept
        </button>
        <button
          className="bg-white-400 rounded border-2 border-slate-600 px-8 py-2 text-slate-800 md:ml-4"
          onClick={denyCookie}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

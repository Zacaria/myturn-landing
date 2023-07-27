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

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-gray-100 px-4 py-8">
        <span className="text-dark mr-16 text-base">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in
          accordance with our{' '}
          <Link href="/cookie-policy" className="hover:text-lightAccent underline">
            cookie policy
          </Link>
          .
        </span>
        <button className="rounded bg-green-700 px-8 py-2 text-white" onClick={() => acceptCookie()}>
          Accept
        </button>
        <button
          className="bg-white-400 ml-4 rounded border-2 border-slate-600 px-8 py-2 text-slate-800"
          onClick={() => denyCookie()}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

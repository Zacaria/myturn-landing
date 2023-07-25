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

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
        <span className="text-dark text-base mr-16">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in
          accordance with our{' '}
          <Link href="/cookie-policy" className="underline hover:text-lightAccent">
            cookie policy
          </Link>
          .
        </span>
        <button className="bg-green-700 py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

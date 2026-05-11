'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  
  // The toggle target language
  const toggleLocale = locale === 'zh' ? 'en' : 'zh';
  
  // We need to clean the pathname to not include the locale prefix
  let cleanPathname = pathname;
  if (pathname.startsWith('/en/')) {
    cleanPathname = pathname.substring(3);
  } else if (pathname === '/en') {
    cleanPathname = '/';
  } else if (pathname.startsWith('/zh/')) {
    cleanPathname = pathname.substring(3);
  } else if (pathname === '/zh') {
    cleanPathname = '/';
  }

  // Next.js App Router might cache navigations heavily. 
  // By using a standard <a> tag and a precise URL, we bypass soft-navigation issues.
  let newPath = '';
  if (toggleLocale === 'en') {
    newPath = `/en${cleanPathname === '/' ? '' : cleanPathname}`;
  } else {
    // For 'zh' (default locale with 'as-needed' prefix mode)
    newPath = `/zh${cleanPathname === '/' ? '' : cleanPathname}`;
  }

  if (newPath === '') newPath = '/';

  return (
    <a
      href={newPath}
      className="px-3 py-1.5 text-sm font-medium rounded-full transition-colors"
      style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
    >
      {locale === 'zh' ? 'EN' : '中'}
    </a>
  );
}

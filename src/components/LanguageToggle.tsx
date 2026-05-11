'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = locale === 'zh' ? 'en' : 'zh';
  
  // Create the new path correctly handling the root paths
  let newPath = '';
  if (locale === 'zh') {
    // Going from zh to en: / -> /en, /privacy-policy -> /en/privacy-policy
    newPath = pathname === '/' ? '/en' : `/en${pathname}`;
  } else {
    // Going from en to zh: /en -> /, /en/privacy-policy -> /privacy-policy
    newPath = pathname === '/en' ? '/' : pathname.replace(/^\/en/, '');
    if (newPath === '') newPath = '/';
  }

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

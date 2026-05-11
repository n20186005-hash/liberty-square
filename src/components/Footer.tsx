'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const homeHref = locale === 'zh' ? '/' : `/${locale}`;

  const friendLinks = [
    { name: 'Romania Tourism', url: 'https://romaniatourism.com/' },
    { name: 'Ministry of Culture', url: 'http://www.cultura.ro/' },
    { name: 'Visit Timișoara', url: 'https://visit-timisoara.com/' },
    { name: 'Primăria Municipiului Timișoara', url: 'https://www.primariatm.ro/' },
    { name: 'CIMEC', url: 'https://patrimoniu.ro/' },
  ];

  return (
    <footer className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t('friendLinks')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {friendLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:underline"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          <Link href={`${homeHref}/privacy-policy`} className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>
            {t('privacy')}
          </Link>
          <Link href={`${homeHref}/terms-of-service`} className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>
            {t('terms')}
          </Link>
          <Link href={`${homeHref}/cookie-settings`} className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>
            {t('cookies')}
          </Link>
        </div>

        <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
          {t('rights')}
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {t('disclaimer')}
        </p>
      </div>
    </footer>
  );
}

'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const homeHref = locale === 'zh' ? '/' : `/${locale}`;

  return (
    <footer className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto text-center">
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

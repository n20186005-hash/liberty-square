'use client';

import { useTranslations } from 'next-intl';

export default function Reviews() {
  const t = useTranslations('reviews');
  const reviews = t.raw('items') as Array<{ name: string; date: string; rating: number; text: string }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>{t('declaration')}</p>

        <div className="space-y-4 mb-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{review.name}</h3>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{review.date}</span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} style={{ color: '#fbbf24' }}>★</span>
                ))}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{review.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/kSm2qTp6RNVioZu69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            {t('moreReviews')}
          </a>
        </div>
      </div>
    </section>
  );
}

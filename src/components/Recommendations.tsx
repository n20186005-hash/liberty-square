import { useTranslations } from 'next-intl';

export default function Recommendations() {
  const t = useTranslations('recommendations');
  const attractions = t.raw('attractions') as Array<{ name: string; url: string }>;
  const tours = t.raw('tours') as Array<{ name: string; url: string }>;

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('attractionsTitle')}
            </h3>
            <ul className="space-y-3">
              {attractions.map((attraction, i) => (
                <li key={i}>
                  <a
                    href={attraction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors"
                    style={{ color: 'var(--accent)' }}
                  >
                    {attraction.name}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('toursTitle')}
            </h3>
            <ul className="space-y-3">
              {tours.map((tour, i) => (
                <li key={i}>
                  <a
                    href={tour.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors"
                    style={{ color: 'var(--accent)' }}
                  >
                    {tour.name}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

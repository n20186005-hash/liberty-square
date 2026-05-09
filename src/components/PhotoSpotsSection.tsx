import { useTranslations } from 'next-intl';

export default function PhotoSpotsSection() {
  const t = useTranslations('photoSpots');
  const spots = t.raw('spots') as Array<{ name: string; desc: string }>;

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {spots.map((spot, i) => (
            <div key={i} className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {spot.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>{spot.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}>
          <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('tips')}
          </h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('tipsContent')}</p>
        </div>
      </div>
    </section>
  );
}

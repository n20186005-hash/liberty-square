import { useTranslations } from 'next-intl';

export default function HotelsSection() {
  const t = useTranslations('hotels');
  const hotels = t.raw('hotels') as Array<{ name: string; desc: string; price: string }>;

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4 mb-8">
          {hotels.map((hotel, i) => (
            <div key={i} className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {hotel.name}
              </h3>
              <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>{hotel.desc}</p>
              <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>{hotel.price}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}>
          <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('supplements')}
          </h3>
          <p style={{ color: 'var(--text-secondary)' }}>{t('supplementsContent')}</p>
        </div>
      </div>
    </section>
  );
}

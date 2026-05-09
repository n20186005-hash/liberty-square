import { useTranslations } from 'next-intl';

export default function TransportSection() {
  const t = useTranslations('transport');

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

        <div className="space-y-6">
          {[
            { title: t('airport'), desc: t('airportDesc') },
            { title: t('selfDrive'), desc: t('selfDriveDesc') },
            { title: t('bus'), desc: t('busDesc') },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

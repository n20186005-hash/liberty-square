import { useTranslations } from 'next-intl';

export default function TicketsSection() {
  const t = useTranslations('tickets');

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

        <div className="space-y-6">
          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
            <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('outdoor')}
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('outdoorPrice')}</p>
          </div>

          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
            <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('lighthouse')}
            </h3>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>{t('adults')}: {t('adultsPrice')}</p>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>{t('students')}: {t('studentsPrice')}</p>
            <p style={{ color: 'var(--text-secondary)' }}>{t('children')}: {t('childrenPrice')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';

export default function HoursSection() {
  const t = useTranslations('hours');

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
          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
            <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('outdoor')}
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>{t('outdoorTime')}</p>
          </div>

          <div className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
            <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('lighthouse')}
            </h3>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>{t('summer')}: {t('summerTime')}</p>
            <p style={{ color: 'var(--text-secondary)' }}>{t('winter')}: {t('winterTime')}</p>
          </div>

          <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              <strong>{t('warning')}:</strong> {t('warningTime')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

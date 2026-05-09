import { useTranslations, useLocale } from 'next-intl';

export default function RouteSection() {
  const t = useTranslations('route');
  const steps = t.raw('steps') as string[] || [];
  const supplements = t.raw('supplements') as string[] || [];

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

        <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t('overview')}
        </p>

        <div className="space-y-4 mb-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {i + 1}
              </span>
              <p className="pt-1" style={{ color: 'var(--text-secondary)' }}>{step}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}>
          <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {t('tips')}
          </h3>
          {t('tipsContent') && (
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>{t('tipsContent')}</p>
          )}
          <ul className="space-y-2">
            {supplements.map((item, i) => (
              <li key={i} className="flex items-start gap-2" style={{ color: 'var(--text-secondary)' }}>
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

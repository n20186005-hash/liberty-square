import { useTranslations } from 'next-intl';

export default function InfoSection() {
  const t = useTranslations('knowledge');

  const sections = [
    { id: 'history', title: t('sections.0.title'), content: t('sections.0.content') },
    { id: 'architecture', title: t('sections.1.title'), content: t('sections.1.content') },
    { id: 'culture', title: t('sections.2.title'), content: t('sections.2.content') },
    { id: 'experience', title: t('sections.3.title'), content: t('sections.3.content') },
  ];

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

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.id} className="p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {section.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTranslations } from 'next-intl';

export default function MapEmbed() {
  const t = useTranslations('mapSection');

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

        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{t('subtitle')}</p>

        <div className="rounded-xl overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17946.946424345!2d20.4036!3d44.8439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDQlODQnMzguNyJOIDIwJzEyLjQiRQ!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Zemun City Park"
          />
        </div>

        <div className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/kSm2qTp6RNVioZu69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {t('openMaps')}
          </a>
        </div>
      </div>
    </section>
  );
}

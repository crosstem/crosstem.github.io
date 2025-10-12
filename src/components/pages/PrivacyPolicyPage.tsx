import { useTranslation } from 'react-i18next';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

type PrivacySection = {
  heading: string;
  body: string[];
};

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const sections =
    (t('privacy.sections', {
      returnObjects: true,
    }) as PrivacySection[]) ?? [];
  const formUrl = t('privacy.formUrl');

  const handleBackToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header showNavigation={false} />

      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <section className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight">
              {t('privacy.title')}
            </h1>
            <p className="text-sm text-gray-500">{t('privacy.updated')}</p>
            <p className="text-base leading-relaxed text-gray-700">
              {t('privacy.intro')}
            </p>
          </section>

          {sections.map(section => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">
                {section.heading}
              </h2>
              {section.body.map((paragraph, index) => (
                <p
                  key={`${section.heading}-${index}`}
                  className="text-base leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="border-t border-gray-200 pt-6 space-y-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              {t('privacy.contactText')}{' '}
              <a
                href={formUrl}
                className="underline decoration-dotted text-gray-600 hover:text-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                {t('privacy.contactLinkLabel')}
              </a>
            </p>
            <button
              className="inline-flex items-center text-sm px-4 py-2 rounded border border-transparent bg-gray-900 text-white hover:bg-gray-800"
              onClick={handleBackToHome}
              type="button"
            >
              {t('privacy.backToHome')}
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

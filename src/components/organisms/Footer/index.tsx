import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white">
              {t('footer.company')}
            </h3>
          </div>
          <div className="text-gray-300 text-sm">
            © 2025 {t('footer.company')}. {t('footer.rights')}
          </div>
          <div className="mt-4 text-xs text-gray-500 flex justify-center items-center space-x-3">
            <a
              href="#/privacy-policy"
              className="hover:text-gray-300 transition-colors"
            >
              {t('footer.privacy')}
            </a>
            <span aria-hidden="true">•</span>
            <a
              href={t('footer.contactFormUrl')}
              className="hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              {t('footer.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
            \u00a9 2025 {t('footer.company')}. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}

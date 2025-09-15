import { useTranslation } from 'react-i18next';

export default function NewsSection() {
  const { t } = useTranslation();

  const newsItems = t('news.items', { returnObjects: true }) as Array<{
    date: string;
    category: string;
    title: string;
    summary: string;
  }>;

  // Add id to each item for React keys
  const newsItemsWithIds = newsItems.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('news.title')}
          </h2>
          <p className="text-lg text-gray-600">{t('news.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItemsWithIds.map(item => (
            <div
              key={item.id}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-sm text-gray-500 font-medium">
                    {item.date}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-white hover:text-gray-300 text-sm font-medium transition-colors">
                  {t('news.readMore')} →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('news.ctaTitle')}
            </h3>
            <p className="text-gray-600 mb-6">{t('news.ctaDescription')}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              {t('news.ctaButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

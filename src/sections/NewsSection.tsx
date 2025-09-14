import { useTranslation } from 'react-i18next';

export default function NewsSection() {
  const { t } = useTranslation();

  const newsItems = [
    {
      date: '2025.09.15',
      category: 'プレスリリース',
      title: '新サービス「クロステムAI」をリリースしました',
      id: 1,
    },
    {
      date: '2025.09.10',
      category: 'お知らせ',
      title: '第3四半期決算説明会の開催について',
      id: 2,
    },
    {
      date: '2025.09.05',
      category: 'プレスリリース',
      title: 'パートナーシップ契約締結のお知らせ',
      id: 3,
    },
  ];

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('news.title')}
          </h2>
        </div>

        <div className="space-y-6">
          {newsItems.map(item => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    {t('news.readMore')} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            すべてのニュースを見る
          </button>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';

export default function NewsSection() {
  const { t } = useTranslation();

  const newsItems = [
    {
      date: '2025.02.11',
      category: 'プレスリリース',
      title: 'CROSSTEM Inc.設立のお知らせ',
      summary:
        '戦略から実装、組織開発まで一気通貫で支援するプロフェッショナルサービスを提供する企業として設立',
      id: 1,
    },
    {
      date: '2025.02.15',
      category: 'お知らせ',
      title: 'AIスキリングプログラムの提供開始',
      summary: '企業向けカスタマイズ型AI人材育成プログラムの提供を開始しました',
      id: 2,
    },
    {
      date: '2025.02.20',
      category: 'サービス',
      title: '技術アドバイザリーサービス開始',
      summary: 'CTO経験者による技術戦略支援とプロジェクト伴走サービスを開始',
      id: 3,
    },
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('news.title')}
          </h2>
          <p className="text-lg text-gray-600">
            最新の取り組みやサービスのご案内
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map(item => (
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
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  {t('news.readMore')} →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              最新情報をお届けします
            </h3>
            <p className="text-gray-600 mb-6">
              CROSSTEMの最新サービスや技術トレンドに関する情報を定期的に発信しています
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              すべてのニュースを見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

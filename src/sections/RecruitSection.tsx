import { useTranslation } from 'react-i18next';

export default function RecruitSection() {
  const { t } = useTranslation();

  const positions = [
    {
      title: 'フロントエンドエンジニア',
      department: 'エンジニアリング',
      location: '東京',
      type: '正社員',
      id: 1,
    },
    {
      title: 'バックエンドエンジニア',
      department: 'エンジニアリング',
      location: '東京/リモート',
      type: '正社員',
      id: 2,
    },
    {
      title: 'プロダクトマネージャー',
      department: 'プロダクト',
      location: '東京',
      type: '正社員',
      id: 3,
    },
  ];

  return (
    <section id="recruit" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('recruit.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('recruit.description')}
          </p>
        </div>

        {/* 会社の魅力 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              成長機会
            </h3>
            <p className="text-gray-600">最新技術に触れながらスキルアップ</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">チーム</h3>
            <p className="text-gray-600">多様性を重視した協力的な環境</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              グローバル
            </h3>
            <p className="text-gray-600">世界規模のプロジェクトに参加</p>
          </div>
        </div>

        {/* 募集職種 */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            募集職種
          </h3>
          <div className="space-y-4">
            {positions.map(position => (
              <div
                key={position.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {position.department}
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {position.location}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      詳細を見る →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('recruit.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

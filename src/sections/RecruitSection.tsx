import { useTranslation } from 'react-i18next';

export default function RecruitSection() {
  const { t } = useTranslation();

  const positions = [
    {
      title: t('recruit.positions.strategicConsultant.title'),
      department: t('recruit.positions.strategicConsultant.department'),
      location: t('recruit.locations.kyotoRemote'),
      type: t('recruit.employmentTypes.fullTime'),
      description: t('recruit.positions.strategicConsultant.description'),
      id: 1,
    },
    {
      title: t('recruit.positions.softwareEngineer.title'),
      department: t('recruit.positions.softwareEngineer.department'),
      location: t('recruit.locations.kyotoRemote'),
      type: t('recruit.employmentTypes.fullTime'),
      description: t('recruit.positions.softwareEngineer.description'),
      id: 2,
    },
    {
      title: t('recruit.positions.technicalAdvisor.title'),
      department: t('recruit.positions.technicalAdvisor.department'),
      location: t('recruit.locations.kyotoRemote'),
      type: t('recruit.employmentTypes.contractor'),
      description: t('recruit.positions.technicalAdvisor.description'),
      id: 3,
    },
  ];

  const values = [
    {
      title: 'Customer Obsession',
      description: t('recruit.values.customerObsession.description'),
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    },
    {
      title: 'Ownership',
      description: t('recruit.values.ownership.description'),
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Simplify & Scale',
      description: t('recruit.values.simplifyScale.description'),
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
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

        {/* 私たちの価値観 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('recruit.valuesTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-sm"
              >
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
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 募集職種 */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t('recruit.positionsTitle')}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {positions.map(position => (
              <div
                key={position.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {position.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {position.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {position.department}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {position.location}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="text-white hover:text-gray-300 font-medium transition-colors">
                    {t('recruit.detailsButton')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t('recruit.ctaTitle')}
          </h3>
          <p className="text-gray-600 mb-6">{t('recruit.ctaDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              {t('recruit.entryButton')}
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              {t('recruit.casualInterviewButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

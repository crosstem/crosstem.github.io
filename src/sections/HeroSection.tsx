import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  onLearnMore: () => void;
}

export default function HeroSection({ onLearnMore }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      {/* 背景画像 - Unsplashの先進的企業イメージ */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight drop-shadow-[0_6px_10px_rgba(0,0,0,0.6)]">
          {t('hero.title')}
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-95">
          {t('hero.subtitle')}
        </p>
        <button
          onClick={onLearnMore}
          className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300/60"
          aria-label="Learn more about Crosstem"
        >
          {t('hero.cta')}
        </button>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

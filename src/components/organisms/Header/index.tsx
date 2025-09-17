import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface HeaderProps {
  onSectionClick: (section: string) => void;
}

export default function Header({ onSectionClick }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleSectionClick = (section: string) => {
    onSectionClick(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-600 shadow-sm z-50"
      style={{ height: 64 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center h-16"
          style={{ height: 64 }}
        >
          {/* ロゴ */}
          <div className="flex-shrink-0">
            {/* Use white color for logo/title on black background */}
            <h1 className="text-xs font-bold text-white">CROSSTEM</h1>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => handleSectionClick('about')}
              className="text-gray-300 hover:text-white transition-colors px-2 py-2"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => handleSectionClick('news')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t('nav.news')}
            </button>
            <button
              onClick={() => handleSectionClick('business')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t('nav.business')}
            </button>
            <button
              onClick={() => handleSectionClick('recruit')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t('nav.recruit')}
            </button>
          </nav>

          {/* 言語切替とハンバーガーメニュー */}
          <div className="flex items-center space-x-2">
            {/* 言語切替 */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => changeLanguage('ja')}
                className={`px-2 py-1 text-sm rounded ${
                  i18n.language === 'ja'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                JP
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 text-sm rounded ${
                  i18n.language === 'en'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                EN
              </button>
            </div>

            {/* ハンバーガーメニュー（モバイル） */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1 text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-600 bg-black">
            <nav className="flex flex-col">
              <button
                onClick={() => handleSectionClick('about')}
                className="text-left text-gray-300 hover:text-white transition-colors px-4 py-3"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => handleSectionClick('news')}
                className="text-left text-gray-300 hover:text-white transition-colors px-4 py-3"
              >
                {t('nav.news')}
              </button>
              <button
                onClick={() => handleSectionClick('business')}
                className="text-left text-gray-300 hover:text-white transition-colors px-4 py-3"
              >
                {t('nav.business')}
              </button>
              <button
                onClick={() => handleSectionClick('recruit')}
                className="text-left text-gray-300 hover:text-white transition-colors px-4 py-3"
              >
                {t('nav.recruit')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

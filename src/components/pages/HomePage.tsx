import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import '../../App.css';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white dark:bg-gray-900">
      <header className="w-full max-w-5xl mx-auto flex justify-end items-center p-4">
        <button
          onClick={() => changeLanguage('en')}
          className="text-gray-700 dark:text-gray-300 mx-2"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('ja')}
          className="text-gray-700 dark:text-gray-300 mx-2"
        >
          日本語
        </button>
      </header>
      <main className="flex flex-col items-center justify-center flex-grow">
        {/* Inline styles: spin animation applied only on viewport >= 768px and if user allows motion */}
        <style>{`
          @keyframes react-logo-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @media (min-width: 768px) and (prefers-reduced-motion: no-preference) {
            .spin-on-md {
              animation: react-logo-spin infinite 20s linear;
            }
          }
        `}</style>
        {/* Logo row: stacked on small screens, inline on md+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <img
              src={viteLogo}
              alt="Vite logo"
              className="h-16 w-16 sm:h-24 sm:w-24 p-2 sm:p-4 object-contain transition-filter duration-300 hover:filter hover:drop-shadow-lg"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <img
              src={reactLogo}
              alt="React logo"
              className="h-16 w-16 sm:h-24 sm:w-24 p-2 sm:p-4 object-contain transition-filter duration-300 hover:filter hover:drop-shadow-[0_0_2em_#61dafbaa] spin-on-md"
            />
          </a>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h1>

        <div className="p-4 sm:p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 w-full max-w-md">
          <button
            onClick={() => setCount(count => count + 1)}
            className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            count is {count}
          </button>
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="mt-6 text-center text-gray-500 dark:text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  );
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white dark:bg-gray-900">
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
        <a href="https://vite.dev" target="_blank" rel="noreferrer" className="flex items-center">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-16 w-16 sm:h-24 sm:w-24 p-2 sm:p-4 object-contain transition-filter duration-300 hover:filter hover:drop-shadow-lg"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer" className="flex items-center">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-16 w-16 sm:h-24 sm:w-24 p-2 sm:p-4 object-contain transition-filter duration-300 hover:filter hover:drop-shadow-[0_0_2em_#61dafbaa] spin-on-md"
          />
        </a>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
        Vite + React
      </h1>

      <div className="w-full sm:w-auto max-w-2xl bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-md p-4 sm:p-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium shadow-sm"
          >
            count is {count}
          </button>

          <p className="text-sm text-gray-700 dark:text-gray-300 m-0">
            Edit <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

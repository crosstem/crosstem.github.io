import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';

type RouteKey = 'home' | 'privacy-policy';

const parseHashRoute = (hash: string): RouteKey => {
  const normalized = hash.replace(/^#\/?/, '');
  if (normalized === 'privacy-policy') {
    return 'privacy-policy';
  }
  return 'home';
};

function App() {
  const [route, setRoute] = useState<RouteKey>(() =>
    parseHashRoute(window.location.hash)
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHashRoute(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === 'privacy-policy') {
    return <PrivacyPolicyPage />;
  }

  return <HomePage />;
}

export default App;

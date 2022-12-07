import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner';
import './App.scss';

import { LocationParams } from './App.type';

const MainPage: React.FC = lazy(() => import('./pages/MainPage/MainPage'));
const OurProductsPage: React.FC = lazy(() => import('./pages/OurProductsPage/OurProductsPage'));
const SingleProductPage: React.FC = lazy(
  () => import('./pages/SingleProductPage/SingleProductPage'),
);
const ContactsPage: React.FC = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const Page404: React.FC = lazy(() => import('./pages/404/404'));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <AnimatedSwitch />
      </Suspense>
    </Router>
  );
};

const AnimatedSwitch: React.FC = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState<LocationParams>(location);
  const [transitionStage, setTransistionStage] = useState<string>('fadeIn');

  useEffect(() => {
    if (location.pathname === '/notfound') {
      setDisplayLocation(location);
    } else if (location !== displayLocation) setTransistionStage('fadeOut');
  }, [location, displayLocation]);

  const handleAnimationEnd: () => void = () => {
    if (transitionStage === 'fadeOut') {
      setTransistionStage('fadeIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div className={`${transitionStage}`} onAnimationEnd={handleAnimationEnd}>
      <Routes location={displayLocation}>
        <Route path="/" element={<MainPage />} />
        <Route path="products" element={<OurProductsPage />} />
        <Route path="products/:id" element={<SingleProductPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="notfound" element={<Page404 />} />
        <Route path="*" element={<Navigate to="notfound" replace />} />
      </Routes>
    </div>
  );
};

export default App;

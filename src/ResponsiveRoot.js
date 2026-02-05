import React, { lazy, Suspense } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import App from './App';

const MobileApp = lazy(() => import('./mobile/MobileApp'));

const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner"></div>
  </div>
);

export default function ResponsiveRoot() {
  // Mobile-only enhancements: keep tablet/desktop rendering the existing App exactly as-is.
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (!isMobile) {
    return <App />;
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <MobileApp />
    </Suspense>
  );
}


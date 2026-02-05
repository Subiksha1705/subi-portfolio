import React, { Suspense, lazy } from 'react';
import '../App.css';
import './mobile.css';

const MobileHero = lazy(() => import('./sections/MobileHero'));
const MobileProjectsCarousel = lazy(() => import('./sections/MobileProjectsCarousel'));
const MobileSkillsCarousel = lazy(() => import('./sections/MobileSkillsCarousel'));
const MobileExperienceCarousel = lazy(() => import('./sections/MobileExperienceCarousel'));
const MobileCertificationsCarousel = lazy(() => import('./sections/MobileCertificationsCarousel'));
const MobileEducationCarousel = lazy(() => import('./sections/MobileEducationCarousel'));
const MobileLeadershipCarousels = lazy(() => import('./sections/MobileLeadershipCarousels'));
const MobileFooterCarousel = lazy(() => import('./sections/MobileFooterCarousel'));

const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner"></div>
  </div>
);

export default function MobileApp() {
  return (
    <div className="mobile-app">
      <Suspense fallback={<LoadingFallback />}>
        <MobileHero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MobileProjectsCarousel />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MobileSkillsCarousel />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MobileExperienceCarousel />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MobileCertificationsCarousel />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MobileEducationCarousel />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MobileLeadershipCarousels />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MobileFooterCarousel />
      </Suspense>
    </div>
  );
}


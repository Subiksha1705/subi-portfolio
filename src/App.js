import React, { Suspense, lazy } from 'react';
import './App.css';

// Lazy load components
const Hero = lazy(() => import('./components/sections/Hero'));
const Projects = lazy(() => import('./components/sections/Projects'));
const TechnicalSkills = lazy(() => import('./components/sections/TechnicalSkills'));
const Internships = lazy(() => import('./components/sections/Internships'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Education = lazy(() => import('./components/sections/Education'));
const Leadership = lazy(() => import('./components/sections/Leadership'));

const Footer = lazy(() => import('./components/sections/Footer'));

function App() {
  const LoadingFallback = () => (
    <div className="loading-fallback">
      <div className="spinner"></div>
    </div>
  );

  return (
    <div className="App">
      {/* Hero Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>

      {/* Technical Skills Section */}
      <Suspense fallback={<LoadingFallback />}>
        <TechnicalSkills />
      </Suspense>

      {/* Internships Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Internships />
      </Suspense>

      {/* Certifications Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Certifications />
      </Suspense>

      {/* Education Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Education />
      </Suspense>

      {/* Leadership Section */}
      <Suspense fallback={<LoadingFallback />}>
        <Leadership />
      </Suspense>

      {/* Footer */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

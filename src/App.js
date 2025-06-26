import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Technical Skills Section */}
      <section id="skills">
        <TechnicalSkills />
      </section>

      {/* Internships Section */}
      <section id="internships">
        <Internships />
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <Certifications />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Leadership Section */}
      <section id="leadership">
        <Leadership />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

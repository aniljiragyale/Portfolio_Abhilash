import React from 'react';
import './styles/App.css';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';

import usePortfolioData from './hooks/usePortfolioData';

function App() {
  const data = usePortfolioData();

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="App">
      <NavBar data={data.navbar} />
      <HeroSection data={data.hero} />
      <AboutMe data={data.about} />
      <Certifications data={data.certifications} />
      <Projects data={data.projects} />
      <Skills data={data.skills} />
      <ContactMe data={data.contact} />
    </div>
  );
}

export default App;

import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = ({ data }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">{data.title}</h1>
        <h2 className="hero-subtitle">{data.subtitle}</h2>
        <p className="hero-description">{data.description}</p>
      </div>
      <div className="hero-image-container">
        <img src={data.image} alt="Profile" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;

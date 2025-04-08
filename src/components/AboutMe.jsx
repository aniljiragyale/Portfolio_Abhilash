import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = ({ data }) => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-heading">{data.heading}</h2>
        <p className="about-content">{data.content}</p>
        {data.resume && (
          <a
            href={data.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View Resume
          </a>
        )}
      </div>
    </section>
  );
};

export default AboutMe;

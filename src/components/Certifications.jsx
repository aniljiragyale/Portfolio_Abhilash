import React from 'react';
import '../styles/Certifications.css';

const Certifications = ({ data }) => {
  return (
    <section className="certifications" id="certifications">
      <h2 className="certifications-heading">Certifications</h2>
      <div className="certifications-container">
        {data.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

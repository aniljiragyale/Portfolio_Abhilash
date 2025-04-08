import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(data[0]?.category || '');

  const selectedSkills = data.find((category) => category.category === selectedCategory);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-heading">Technical Skills</h2>

      <div className="skills-buttons">
        {data.map((category, index) => (
          <button
            key={index}
            className={`skills-button ${selectedCategory === category.category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.category)}
          >
            {category.category}
          </button>
        ))}
      </div>

      {selectedSkills && (
        <div className="skills-category">
          <h3 className="skills-category-title">{selectedSkills.category}</h3>
          <ul className="skills-list">
            {selectedSkills.technologies.map((tech, index) => (
              <li key={index} className="skill-item">{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Skills;

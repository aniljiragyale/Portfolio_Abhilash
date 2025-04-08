import React from 'react';
import '../styles/NavBar.css';

const NavBar = ({ data }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">{data.logo}</div>
      <ul className="navbar-links">
        {data.links.map((link, index) => (
          <li key={index}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
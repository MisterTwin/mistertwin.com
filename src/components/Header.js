// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
        <Link to="/">Mister Twin</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À Propos</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Galerie</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
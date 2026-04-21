import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <button className="navbar__brand" onClick={() => scrollTo('hero')}>
          <span className="navbar__brand-title">Dr. Antonio Comperatore</span>
          <span className="navbar__brand-subtitle">Medico — Ecografista</span>
        </button>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {[
            { id: 'chi-sono', label: 'Chi Sono' },
            { id: 'prestazioni', label: 'Prestazioni' },
            { id: 'contatti', label: 'Contatti' },
          ].map(({ id, label }) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}>{label}</button>
            </li>
          ))}
          <li>
            <button className="navbar__cta" onClick={() => scrollTo('contatti')}>
              Prenota
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

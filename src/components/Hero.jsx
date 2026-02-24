import './Hero.css';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('prestazioni')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-pattern" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="hero__wave">
          <path
            d="M0,80 C180,140 360,20 540,90 C720,160 900,30 1080,100 C1260,170 1350,60 1440,80 L1440,200 L0,200 Z"
            fill="rgba(46,134,171,0.08)"
          />
          <path
            d="M0,120 C200,60 400,160 600,100 C800,40 1000,160 1200,110 C1320,80 1380,130 1440,120 L1440,200 L0,200 Z"
            fill="rgba(168,218,220,0.06)"
          />
        </svg>
      </div>

      <div className="hero__pulse-lines" aria-hidden="true">
        <svg viewBox="0 0 1000 80" preserveAspectRatio="none" className="hero__ecg">
          <polyline
            points="0,40 100,40 130,40 145,10 160,70 175,10 190,70 205,40 250,40 280,40 295,5 310,75 325,5 340,75 355,40 400,40 500,40 530,40 545,10 560,70 575,10 590,70 605,40 650,40 700,40 750,40 780,40 800,5 815,75 830,5 845,75 860,40 900,40 1000,40"
            fill="none"
            stroke="rgba(168,218,220,0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Scuola SIUMB — Formazione d&apos;Eccellenza
        </div>

        <h1 className="hero__title">
          Dr. Antonio<br />
          <span className="hero__title-accent">Comperatore</span>
        </h1>

        <p className="hero__specialty">Ecografista &nbsp;·&nbsp; Specialista in Diagnostica ad Ultrasuoni</p>

        <p className="hero__tagline">
          Diagnosi ecografica di alta precisione<br className="hero__br" />
          a Napoli e dintorni
        </p>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={scrollToContact}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Prenota una visita
          </button>
          <button className="hero__btn hero__btn--secondary" onClick={scrollToServices}>
            Scopri le prestazioni
          </button>
        </div>

        <div className="hero__affiliations">
          <div className="hero__affiliation-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Ospedale Cotugno dei Colli, Napoli
          </div>
          <div className="hero__affiliation-divider" />
          <div className="hero__affiliation-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Studio a Cittanova
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

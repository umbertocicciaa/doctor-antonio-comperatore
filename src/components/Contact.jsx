import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });

  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.75 10.6 19.79 19.79 0 01.68 2 2 2 0 012.66 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1-1a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: 'Telefono',
      value: '[Numero di telefono]',
      note: 'Per informazioni e prenotazioni',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Studio Medico',
      value: 'Via F. Brunelleschi 18',
      note: 'Cittanova (RC)',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      label: 'Ospedale',
      value: 'Ospedale "Cotugno" dei Colli',
      note: 'Napoli',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: 'Orari',
      value: 'Su appuntamento',
      note: 'Contattare per disponibilità',
    },
  ];

  return (
    <section id="contatti" className="contact">
      <div className="contact__container">
        <div
          ref={headerRef}
          className={`contact__header${headerVisible ? ' animate-in' : ''}`}
        >
          <span className="section-label contact__label">Contatti</span>
          <h2 className="section-title contact__title">Dove Trovarci</h2>
          <p className="contact__subtitle">
            Prenota la tua visita o richiedi informazioni — sono a tua disposizione
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`contact__grid${cardsVisible ? ' animate-in' : ''}`}
        >
          {contactItems.map((item, i) => (
            <div
              key={item.label}
              className="contact-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="contact-card__icon">{item.icon}</div>
              <div className="contact-card__body">
                <span className="contact-card__label">{item.label}</span>
                <strong className="contact-card__value">{item.value}</strong>
                <span className="contact-card__note">{item.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`contact__cta-wrap${cardsVisible ? ' animate-in' : ''}`}>
          <div className="contact__cta-card">
            <div className="contact__cta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div>
              <h3>Scuola SIUMB</h3>
              <p>Formazione specialistica in ecografia di alta qualità, riconosciuta a livello nazionale.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="contact__footer">
        <p>© {new Date().getFullYear()} Dr. Antonio Comperatore — Ecografista · Scuola SIUMB</p>
        <p className="contact__footer-note">P.IVA / Codice Fiscale disponibile su richiesta</p>
      </footer>
    </section>
  );
}

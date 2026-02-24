import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.1 });
  const [visualRef, visualVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="chi-sono" className="about">
      <div
        ref={sectionRef}
        className={`about__container${sectionVisible ? ' animate-in' : ''}`}
      >
        <div className="about__header">
          <span className="section-label">Chi Sono</span>
          <h2 className="section-title">Esperienza e Precisione<br />al Servizio della Diagnosi</h2>
        </div>

        <div className="about__grid">
          <div
            ref={textRef}
            className={`about__text${textVisible ? ' animate-in-left' : ''}`}
          >
            <p className="about__lead">
              Medico specializzato in diagnostica ecografica con una lunga esperienza clinica maturata nel Sud Italia.
            </p>

            <p>
              La mia formazione ecografica si è sviluppata nell&apos;ambito della <strong>Scuola SIUMB</strong>
              (Società Italiana di Ultrasonologia in Medicina e Biologia), garanzia di un approccio
              rigoroso e aggiornato alle più moderne tecniche di imaging ad ultrasuoni.
            </p>

            <p>
              Offro un servizio diagnostico completo che abbraccia l&apos;ecografia internistica,
              vascolare e delle parti molli, con particolare attenzione alla qualità dell&apos;immagine
              e all&apos;accuratezza dell&apos;interpretazione clinica.
            </p>

            <div className="about__badges">
              <div className="about__badge">
                <div className="about__badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <strong>Scuola SIUMB</strong>
                  <span>Certificazione Ecografica</span>
                </div>
              </div>

              <div className="about__badge">
                <div className="about__badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <strong>Via "Inserire Via"</strong>
                  <span>Locri</span>
                </div>
              </div>

              <div className="about__badge">
                <div className="about__badge-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <strong>Esperienza Pluriennale</strong>
                  <span>Diagnostica ad Ultrasuoni</span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={visualRef}
            className={`about__visual${visualVisible ? ' animate-in-right' : ''}`}
          >
            <div className="about__visual-card">
              <div className="about__visual-icon-wrap">
                <svg viewBox="0 0 80 80" fill="none" className="about__visual-svg">
                  <circle cx="40" cy="40" r="38" stroke="rgba(46,134,171,0.2)" strokeWidth="1.5"/>
                  <circle cx="40" cy="40" r="28" stroke="rgba(46,134,171,0.15)" strokeWidth="1"/>
                  <circle cx="40" cy="40" r="18" fill="rgba(46,134,171,0.08)" stroke="rgba(46,134,171,0.2)" strokeWidth="1"/>
                  <path d="M30 40 C30 34.5 35 30 40 30 C45 30 50 34.5 50 40 C50 45.5 45 50 40 50" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <circle cx="40" cy="40" r="4" fill="var(--color-accent)" opacity="0.8"/>
                  <path d="M15 40 L24 40 M32 25 L37 30 M55 40 L64 40 M43 50 L48 55" stroke="rgba(46,134,171,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="about__visual-stats">
                <div className="about__stat">
                  <span className="about__stat-value">13+</span>
                  <span className="about__stat-label">Tipi di Prestazioni</span>
                </div>
                <div className="about__stat-divider" />
                <div className="about__stat">
                  <span className="about__stat-value">SIUMB</span>
                  <span className="about__stat-label">Formazione Certificata</span>
                </div>
              </div>
              <p className="about__visual-quote">
                &ldquo;La diagnosi precoce è il primo passo verso la guarigione.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

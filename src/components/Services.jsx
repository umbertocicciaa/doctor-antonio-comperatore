import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    name: 'Ecografia Addome Superiore',
    desc: 'Studio ecografico di fegato, colecisti, vie biliari, pancreas, milza e reni.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="8" ry="10"/>
        <path d="M12 6v12M8 9h8M8 15h8"/>
      </svg>
    ),
    name: 'Ecografia Addome Inferiore',
    desc: 'Valutazione ecografica di vescica, prostata, utero e organi pelvici.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 6 6 6 9c0 4 2 7 6 11 4-4 6-7 6-11 0-3-2-7-6-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    name: 'Ecografia Tiroidea',
    desc: 'Esame morfologico della tiroide e delle paratiroidi con valutazione nodulare.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12 C4 8 7 5 12 5 C17 5 20 8 20 12 C20 16 17 19 12 19"/>
        <path d="M4 12 C4 16 7 19 12 19"/>
        <path d="M9 12 C9 9 10.5 7 12 7"/>
      </svg>
    ),
    name: 'Ecografia Toracica',
    desc: 'Valutazione ecografica del torace, pleura e strutture mediastiniche.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4 C4 8 4 16 6 20 M18 4 C20 8 20 16 18 20"/>
        <path d="M6 8 C9 6 15 6 18 8 M6 16 C9 18 15 18 18 16"/>
        <ellipse cx="12" cy="12" rx="4" ry="6"/>
      </svg>
    ),
    name: 'Ecografia Polmonare',
    desc: 'Diagnostica ecografica del parenchima polmonare e dello spazio pleurico.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="4"/>
        <circle cx="15" cy="9" r="4"/>
        <path d="M5 20 C5 16 7 14 9 14 M19 20 C19 16 17 14 15 14"/>
        <path d="M9 14 C10.5 16 13.5 16 15 14"/>
      </svg>
    ),
    name: 'Ecografia Mammaria',
    desc: 'Studio ecografico del tessuto mammario per la caratterizzazione delle lesioni.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12 C5 8 8 6 12 6 C16 6 19 8 19 12 C19 16 16 18 12 18"/>
        <path d="M5 12 C5 16 8 18 12 18"/>
        <path d="M12 6 L12 4 M8 7 L7 5 M16 7 L17 5"/>
      </svg>
    ),
    name: 'Ecografia Aorta Addominale',
    desc: 'Misurazione e sorveglianza del calibro aortico addominale.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 C12 3 6 5 6 10 C6 14 9 17 12 20 C15 17 18 14 18 10 C18 5 12 3 12 3Z"/>
        <path d="M9 10 C9 8 10.5 7 12 7 C13.5 7 15 8 15 10" strokeDasharray="2 2"/>
        <path d="M8 13 L16 13" strokeDasharray="2 2"/>
      </svg>
    ),
    name: 'Ecodoppler Carotidei',
    desc: 'Studio della morfologia e del flusso ematico delle arterie carotidi e vertebrali.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="3" x2="12" y2="21"/>
        <path d="M8 6 C6 8 6 16 8 18 M16 6 C18 8 18 16 16 18"/>
        <path d="M9 10 C10 9 14 9 15 10 M9 14 C10 15 14 15 15 14"/>
      </svg>
    ),
    name: 'Ecodoppler Arti Inferiori',
    desc: 'Valutazione del circolo arterioso e venoso degli arti inferiori. Diagnosi di TVP e arteriopatia.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12 C4 9 5 7 7 6 C9 5 11 5 12 7"/>
        <path d="M20 12 C20 9 19 7 17 6 C15 5 13 5 12 7"/>
        <path d="M12 7 L12 17"/>
        <path d="M9 17 C9 19 10.5 20 12 20 C13.5 20 15 19 15 17 L12 17 Z"/>
      </svg>
    ),
    name: 'Ecodoppler Arterie Renali',
    desc: 'Studio del flusso delle arterie renali per valutare stenosi e ipertensione renovascolare.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="10" rx="2"/>
        <path d="M8 8 L8 6 C8 4.9 8.9 4 10 4 L14 4 C15.1 4 16 4.9 16 6 L16 8"/>
        <line x1="8" y1="13" x2="16" y2="13"/>
        <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
      </svg>
    ),
    name: 'Holter Pressorio',
    desc: 'Monitoraggio continuo della pressione arteriosa nelle 24 ore (ABPM).',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3,12 6,8 9,16 12,6 15,14 18,10 21,12"/>
      </svg>
    ),
    name: 'ECG',
    desc: 'Elettrocardiogramma a riposo per la valutazione dell\'attività elettrica del cuore.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,12 5,8 8,16 11,4 14,18 17,10 20,12"/>
        <circle cx="20" cy="12" r="2" fill="var(--color-accent)" stroke="var(--color-accent)"/>
      </svg>
    ),
    name: 'Holter ECG',
    desc: 'Monitoraggio elettrocardiografico continuo 24/36/48/72 ore per aritmie e disturbi del ritmo.',
  },
];

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`service-card${isVisible ? ' animate-in' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="service-card__icon">{service.icon}</div>
      <h3 className="service-card__name">{service.name}</h3>
      <p className="service-card__desc">{service.desc}</p>
    </div>
  );
}

export default function Services() {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section id="prestazioni" className="services">
      <div className="services__container">
        <div
          ref={headerRef}
          className={`services__header${headerVisible ? ' animate-in' : ''}`}
        >
          <span className="section-label">Prestazioni</span>
          <h2 className="section-title">Servizi Diagnostici</h2>
          <p className="services__subtitle">
            Un&apos;ampia gamma di esami ecografici e strumentali per una diagnosi completa e accurata
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

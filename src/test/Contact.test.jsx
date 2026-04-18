import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Contact from '../components/Contact';

describe('Contact', () => {
  it('renders without crashing', () => {
    render(<Contact />);
  });

  it('renders the contact section with correct id', () => {
    render(<Contact />);
    expect(document.getElementById('contatti')).toBeInTheDocument();
  });

  it('renders section label "Contatti"', () => {
    render(<Contact />);
    expect(screen.getByText('Contatti')).toBeInTheDocument();
  });

  it('renders section title "Dove Trovarci"', () => {
    render(<Contact />);
    expect(screen.getByText('Dove Trovarci')).toBeInTheDocument();
  });

  it('renders subtitle text', () => {
    render(<Contact />);
    expect(screen.getByText(/Prenota la tua visita/)).toBeInTheDocument();
  });

  it('renders Telefono contact card', () => {
    render(<Contact />);
    expect(screen.getByText('Telefono')).toBeInTheDocument();
  });

  it('renders telephone number placeholder', () => {
    render(<Contact />);
    expect(screen.getByText('3286549511')).toBeInTheDocument();
  });

  it('renders telephone note', () => {
    render(<Contact />);
    expect(screen.getByText('Per informazioni e prenotazioni')).toBeInTheDocument();
  });

  it('renders Studio Medico contact card', () => {
    render(<Contact />);
    expect(screen.getByText('Studio Medico')).toBeInTheDocument();
  });

  it('renders studio address', () => {
    render(<Contact />);
    expect(screen.getByText('Via Cilea 23')).toBeInTheDocument();
  });

  it('renders Locri RC note', () => {
    render(<Contact />);
    expect(screen.getByText('Locri (RC)')).toBeInTheDocument();
  });

  it('renders Orari contact card', () => {
    render(<Contact />);
    expect(screen.getByText('Orari')).toBeInTheDocument();
  });

  it('renders appointment note', () => {
    render(<Contact />);
    expect(screen.getByText('Su appuntamento')).toBeInTheDocument();
  });

  it('renders SIUMB CTA card', () => {
    render(<Contact />);
    expect(screen.getByText('Scuola SIUMB')).toBeInTheDocument();
  });

  it('renders SIUMB CTA description', () => {
    render(<Contact />);
    expect(screen.getByText(/Formazione specialistica/)).toBeInTheDocument();
  });

  it('renders exactly 3 contact cards', () => {
    render(<Contact />);
    const cards = document.querySelectorAll('.contact-card');
    expect(cards).toHaveLength(3);
  });

  it('renders footer with current year', () => {
    render(<Contact />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(currentYear)))).toBeInTheDocument();
  });

  it('renders footer doctor name', () => {
    render(<Contact />);
    expect(screen.getByText(/Dr. Antonio Comperatore/)).toBeInTheDocument();
  });

  it('renders footer tax note', () => {
    render(<Contact />);
    expect(screen.getByText(/P\.IVA/)).toBeInTheDocument();
  });

  it('contact cards have staggered transition delays', () => {
    render(<Contact />);
    const cards = document.querySelectorAll('.contact-card');
    expect(cards[0].style.transitionDelay).toBe('0s');
    expect(cards[1].style.transitionDelay).toBe('0.12s');
    expect(cards[2].style.transitionDelay).toBe('0.24s');
  });

  it('renders contact grid', () => {
    render(<Contact />);
    expect(document.querySelector('.contact__grid')).toBeInTheDocument();
  });

  it('renders contact footer', () => {
    render(<Contact />);
    expect(document.querySelector('.contact__footer')).toBeInTheDocument();
  });

  it('adds animate-in to header when intersection fires', () => {
    render(<Contact />);
    act(() => {
      global.__triggerAllIntersections();
    });
    const header = document.querySelector('.contact__header');
    expect(header).toHaveClass('animate-in');
  });

  it('adds animate-in to grid when intersection fires', () => {
    render(<Contact />);
    act(() => {
      global.__triggerAllIntersections();
    });
    const grid = document.querySelector('.contact__grid');
    expect(grid).toHaveClass('animate-in');
  });

  it('adds animate-in to cta-wrap when intersection fires', () => {
    render(<Contact />);
    act(() => {
      global.__triggerAllIntersections();
    });
    const ctaWrap = document.querySelector('.contact__cta-wrap');
    expect(ctaWrap).toHaveClass('animate-in');
  });
});

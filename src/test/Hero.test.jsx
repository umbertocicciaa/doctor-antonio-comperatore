import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('renders the hero section with correct id', () => {
    render(<Hero />);
    expect(document.getElementById('hero')).toBeInTheDocument();
  });

  it('renders doctor name', () => {
    render(<Hero />);
    expect(screen.getByText('Dr. Antonio')).toBeInTheDocument();
    expect(screen.getByText('Comperatore')).toBeInTheDocument();
  });

  it('renders specialty text', () => {
    render(<Hero />);
    expect(screen.getByText(/Ecografista/)).toBeInTheDocument();
  });

  it('renders SIUMB badge', () => {
    render(<Hero />);
    expect(screen.getByText(/Scuola SIUMB/)).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(<Hero />);
    expect(screen.getByText(/Diagnosi ecografica di alta precisione/)).toBeInTheDocument();
  });

  it('renders Prenota una visita button', () => {
    render(<Hero />);
    expect(screen.getByText('Prenota una visita')).toBeInTheDocument();
  });

  it('renders Scopri le prestazioni button', () => {
    render(<Hero />);
    expect(screen.getByText('Scopri le prestazioni')).toBeInTheDocument();
  });

  it('renders hospital affiliation', () => {
    render(<Hero />);
    expect(screen.getByText(/Ospedale Cotugno dei Colli/)).toBeInTheDocument();
  });

  it('renders studio location', () => {
    render(<Hero />);
    expect(screen.getByText(/Studio a Locri/)).toBeInTheDocument();
  });

  it('scrolls to contatti when "Prenota una visita" button is clicked', () => {
    const contatti = document.createElement('section');
    contatti.id = 'contatti';
    document.body.appendChild(contatti);

    render(<Hero />);
    fireEvent.click(screen.getByText('Prenota una visita'));
    expect(contatti.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(contatti);
  });

  it('scrolls to prestazioni when "Scopri le prestazioni" button is clicked', () => {
    const prestazioni = document.createElement('section');
    prestazioni.id = 'prestazioni';
    document.body.appendChild(prestazioni);

    render(<Hero />);
    fireEvent.click(screen.getByText('Scopri le prestazioni'));
    expect(prestazioni.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(prestazioni);
  });

  it('handles scrollToContact when contatti element does not exist', () => {
    render(<Hero />);
    expect(() => fireEvent.click(screen.getByText('Prenota una visita'))).not.toThrow();
  });

  it('handles scrollToServices when prestazioni element does not exist', () => {
    render(<Hero />);
    expect(() => fireEvent.click(screen.getByText('Scopri le prestazioni'))).not.toThrow();
  });

  it('renders Napoli location text', () => {
    render(<Hero />);
    const matches = screen.getAllByText(/Napoli/);
    expect(matches.length).toBeGreaterThan(0);
  });
});

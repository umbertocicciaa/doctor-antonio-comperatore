import { render, screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../components/About';

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('renders the about section with correct id', () => {
    render(<About />);
    expect(document.getElementById('chi-sono')).toBeInTheDocument();
  });

  it('renders section label "Chi Sono"', () => {
    render(<About />);
    expect(screen.getByText('Chi Sono')).toBeInTheDocument();
  });

  it('renders section heading', () => {
    render(<About />);
    expect(screen.getByText(/Esperienza e Precisione/)).toBeInTheDocument();
  });

  it('renders about lead paragraph mentioning location', () => {
    render(<About />);
    const matches = screen.getAllByText(/Via/);
    expect(matches.length).toBeGreaterThan(0);
  });

  it('renders SIUMB badge', () => {
    render(<About />);
    const siumbElements = screen.getAllByText(/SIUMB/);
    expect(siumbElements.length).toBeGreaterThan(0);
  });

  it('renders Scuola SIUMB badge text', () => {
    render(<About />);
    const scuolaElements = screen.getAllByText(/Scuola SIUMB/);
    expect(scuolaElements.length).toBeGreaterThan(0);
  });

  it('renders location badge', () => {
    render(<About />);
    expect(screen.getByText('Via Cilea 23')).toBeInTheDocument();
  });

  it('renders Locri text', () => {
    render(<About />);
    expect(screen.getByText('Locri')).toBeInTheDocument();
  });

  it('renders experience badge', () => {
    render(<About />);
    expect(screen.getByText('Esperienza Pluriennale')).toBeInTheDocument();
  });

  it('renders 13+ stat', () => {
    render(<About />);
    expect(screen.getByText('13+')).toBeInTheDocument();
  });

  it('renders Tipi di Prestazioni label', () => {
    render(<About />);
    expect(screen.getByText('Tipi di Prestazioni')).toBeInTheDocument();
  });

  it('renders SIUMB certification stat', () => {
    render(<About />);
    expect(screen.getByText('Formazione Certificata')).toBeInTheDocument();
  });

  it('renders inspirational quote', () => {
    render(<About />);
    expect(screen.getByText(/diagnosi precoce/i)).toBeInTheDocument();
  });

  it('renders about container', () => {
    render(<About />);
    expect(document.querySelector('.about__container')).toBeInTheDocument();
  });

  it('renders about grid', () => {
    render(<About />);
    expect(document.querySelector('.about__grid')).toBeInTheDocument();
  });

  it('container does not have animate-in class initially (IntersectionObserver not fired)', () => {
    render(<About />);
    const container = document.querySelector('.about__container');
    expect(container).not.toHaveClass('animate-in');
  });

  it('adds animate-in class to container when intersection fires', () => {
    render(<About />);
    act(() => {
      global.__triggerAllIntersections();
    });
    const container = document.querySelector('.about__container');
    expect(container).toHaveClass('animate-in');
  });

  it('adds animate-in-left class to text when intersection fires', () => {
    render(<About />);
    act(() => {
      global.__triggerAllIntersections();
    });
    const text = document.querySelector('.about__text');
    expect(text).toHaveClass('animate-in-left');
  });

  it('adds animate-in-right class to visual when intersection fires', () => {
    render(<About />);
    act(() => {
      global.__triggerAllIntersections();
    });
    const visual = document.querySelector('.about__visual');
    expect(visual).toHaveClass('animate-in-right');
  });
});

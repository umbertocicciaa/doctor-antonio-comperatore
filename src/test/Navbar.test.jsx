import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    // Reset scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  it('renders without crashing', () => {
    render(<Navbar />);
  });

  it('renders navigation element', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('Dr. Antonio Comperatore')).toBeInTheDocument();
  });

  it('renders brand subtitle', () => {
    render(<Navbar />);
    expect(screen.getByText('Medico — Ecografista')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Chi Sono')).toBeInTheDocument();
    expect(screen.getByText('Prestazioni')).toBeInTheDocument();
    expect(screen.getByText('Contatti')).toBeInTheDocument();
  });

  it('renders Prenota CTA button', () => {
    render(<Navbar />);
    const prenotaButtons = screen.getAllByText('Prenota');
    expect(prenotaButtons.length).toBeGreaterThan(0);
  });

  it('hamburger button has aria-label "Menu"', () => {
    render(<Navbar />);
    expect(screen.getByLabelText('Menu')).toBeInTheDocument();
  });

  it('toggles menu open when hamburger is clicked', () => {
    render(<Navbar />);
    const hamburger = screen.getByLabelText('Menu');
    expect(hamburger).not.toHaveClass('navbar__hamburger--open');
    fireEvent.click(hamburger);
    expect(hamburger).toHaveClass('navbar__hamburger--open');
  });

  it('closes menu when hamburger is clicked again', () => {
    render(<Navbar />);
    const hamburger = screen.getByLabelText('Menu');
    fireEvent.click(hamburger);
    fireEvent.click(hamburger);
    expect(hamburger).not.toHaveClass('navbar__hamburger--open');
  });

  it('opens links list when menu is open', () => {
    render(<Navbar />);
    const hamburger = screen.getByLabelText('Menu');
    fireEvent.click(hamburger);
    expect(document.querySelector('.navbar__links--open')).toBeInTheDocument();
  });

  it('does not have scrolled class initially', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('navbar--scrolled');
  });

  it('adds scrolled class when scrollY > 50', () => {
    render(<Navbar />);
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('navbar--scrolled');
  });

  it('removes scrolled class when scrollY <= 50', () => {
    render(<Navbar />);
    // First scroll past 50
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);
    // Then scroll back
    Object.defineProperty(window, 'scrollY', { value: 10, writable: true });
    fireEvent.scroll(window);
    const nav = screen.getByRole('navigation');
    expect(nav).not.toHaveClass('navbar--scrolled');
  });

  it('scrolls to hero when brand button is clicked', () => {
    const heroEl = document.createElement('section');
    heroEl.id = 'hero';
    document.body.appendChild(heroEl);

    render(<Navbar />);
    const brand = screen.getByText('Dr. Antonio Comperatore').closest('button');
    fireEvent.click(brand);
    expect(heroEl.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(heroEl);
  });

  it('scrolls to chi-sono when "Chi Sono" link is clicked', () => {
    const section = document.createElement('section');
    section.id = 'chi-sono';
    document.body.appendChild(section);

    render(<Navbar />);
    fireEvent.click(screen.getByText('Chi Sono'));
    expect(section.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(section);
  });

  it('scrolls to prestazioni when "Prestazioni" link is clicked', () => {
    const section = document.createElement('section');
    section.id = 'prestazioni';
    document.body.appendChild(section);

    render(<Navbar />);
    fireEvent.click(screen.getByText('Prestazioni'));
    expect(section.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(section);
  });

  it('scrolls to contatti when "Contatti" link is clicked', () => {
    const section = document.createElement('section');
    section.id = 'contatti';
    document.body.appendChild(section);

    render(<Navbar />);
    fireEvent.click(screen.getByText('Contatti'));
    expect(section.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(section);
  });

  it('closes menu when a nav link is clicked', () => {
    render(<Navbar />);
    const hamburger = screen.getByLabelText('Menu');
    fireEvent.click(hamburger);
    expect(hamburger).toHaveClass('navbar__hamburger--open');

    fireEvent.click(screen.getByText('Chi Sono'));
    expect(hamburger).not.toHaveClass('navbar__hamburger--open');
  });

  it('handles scrollTo when element does not exist', () => {
    render(<Navbar />);
    // Clicking "Chi Sono" when there's no #chi-sono element should not throw
    expect(() => fireEvent.click(screen.getByText('Chi Sono'))).not.toThrow();
  });

  it('scrolls to contatti when Prenota CTA button is clicked', () => {
    const section = document.createElement('section');
    section.id = 'contatti';
    document.body.appendChild(section);

    render(<Navbar />);
    const prenotaBtn = document.querySelector('.navbar__cta');
    fireEvent.click(prenotaBtn);
    expect(section.scrollIntoView).toHaveBeenCalled();

    document.body.removeChild(section);
  });
});

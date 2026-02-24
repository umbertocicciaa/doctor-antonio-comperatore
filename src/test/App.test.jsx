import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders Navbar', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders hero section', () => {
    render(<App />);
    expect(document.getElementById('hero')).toBeInTheDocument();
  });

  it('renders about section', () => {
    render(<App />);
    expect(document.getElementById('chi-sono')).toBeInTheDocument();
  });

  it('renders services section', () => {
    render(<App />);
    expect(document.getElementById('prestazioni')).toBeInTheDocument();
  });

  it('renders contact section', () => {
    render(<App />);
    expect(document.getElementById('contatti')).toBeInTheDocument();
  });

  it('renders main element wrapping sections', () => {
    render(<App />);
    expect(document.querySelector('main')).toBeInTheDocument();
  });
});

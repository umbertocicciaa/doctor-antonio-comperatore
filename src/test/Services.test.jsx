import { render, screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Services from '../components/Services';

describe('Services', () => {
  it('renders without crashing', () => {
    render(<Services />);
  });

  it('renders the services section with correct id', () => {
    render(<Services />);
    expect(document.getElementById('prestazioni')).toBeInTheDocument();
  });

  it('renders section label "Prestazioni"', () => {
    render(<Services />);
    expect(screen.getByText('Prestazioni')).toBeInTheDocument();
  });

  it('renders section title "Servizi Diagnostici"', () => {
    render(<Services />);
    expect(screen.getByText('Servizi Diagnostici')).toBeInTheDocument();
  });

  it('renders subtitle text', () => {
    render(<Services />);
    expect(screen.getByText(/ampia gamma/)).toBeInTheDocument();
  });

  it('renders Ecografia Addome Superiore card', () => {
    render(<Services />);
    expect(screen.getByText('Ecografia Addome Superiore')).toBeInTheDocument();
  });

  it('renders Ecografia Addome Inferiore card', () => {
    render(<Services />);
    expect(screen.getByText('Ecografia Addome Inferiore')).toBeInTheDocument();
  });

  it('renders Ecografia Tiroidea card', () => {
    render(<Services />);
    expect(screen.getByText('Ecografia Tiroidea')).toBeInTheDocument();
  });

  it('renders Ecografia Toracica card', () => {
    render(<Services />);
    expect(screen.getByText('Ecografia Toracica')).toBeInTheDocument();
  });

  it('renders Ecografia Polmonare card', () => {
    render(<Services />);
    expect(screen.getByText('Ecografia Polmonare')).toBeInTheDocument();
  });

  it('renders Ecografia Mammaria card', () => {
    render(<Services />);
    expect(screen.getByText('Ecografia Mammaria')).toBeInTheDocument();
  });

  it('renders Ecografia Aorta Addominale card', () => {
    render(<Services />);
    expect(screen.getByText('Ecografia Aorta Addominale')).toBeInTheDocument();
  });

  it('renders Ecodoppler Carotidei card', () => {
    render(<Services />);
    expect(screen.getByText('Ecodoppler Carotidei')).toBeInTheDocument();
  });

  it('renders Ecodoppler Arti Inferiori card', () => {
    render(<Services />);
    expect(screen.getByText('Ecodoppler Arti Inferiori')).toBeInTheDocument();
  });

  it('renders Ecodoppler Arterie Renali card', () => {
    render(<Services />);
    expect(screen.getByText('Ecodoppler Arterie Renali')).toBeInTheDocument();
  });

  it('renders Holter Pressorio card', () => {
    render(<Services />);
    expect(screen.getByText('Holter Pressorio')).toBeInTheDocument();
  });

  it('renders ECG card', () => {
    render(<Services />);
    expect(screen.getByText('ECG')).toBeInTheDocument();
  });

  it('renders Holter ECG card', () => {
    render(<Services />);
    expect(screen.getByText('Holter ECG')).toBeInTheDocument();
  });

  it('renders exactly 13 service cards', () => {
    render(<Services />);
    const cards = document.querySelectorAll('.service-card');
    expect(cards).toHaveLength(13);
  });

  it('renders service description for Ecografia Addome Superiore', () => {
    render(<Services />);
    expect(screen.getByText(/fegato, colecisti/)).toBeInTheDocument();
  });

  it('renders service description for ECG', () => {
    render(<Services />);
    expect(screen.getByText(/Elettrocardiogramma a riposo/)).toBeInTheDocument();
  });

  it('renders service description for Holter Pressorio', () => {
    render(<Services />);
    expect(screen.getByText(/24 ore \(ABPM\)/)).toBeInTheDocument();
  });

  it('renders services grid', () => {
    render(<Services />);
    expect(document.querySelector('.services__grid')).toBeInTheDocument();
  });

  it('service cards apply staggered transition delays based on index % 3', () => {
    render(<Services />);
    const cards = document.querySelectorAll('.service-card');
    // First card (index 0): 0s
    expect(cards[0].style.transitionDelay).toBe('0s');
    // Second card (index 1): 0.1s
    expect(cards[1].style.transitionDelay).toBe('0.1s');
    // Third card (index 2): 0.2s
    expect(cards[2].style.transitionDelay).toBe('0.2s');
    // Fourth card (index 3): 0s again
    expect(cards[3].style.transitionDelay).toBe('0s');
  });

  it('adds animate-in to service cards when intersection fires', () => {
    render(<Services />);
    act(() => {
      global.__triggerAllIntersections();
    });
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => {
      expect(card).toHaveClass('animate-in');
    });
  });

  it('adds animate-in to services header when intersection fires', () => {
    render(<Services />);
    act(() => {
      global.__triggerAllIntersections();
    });
    const header = document.querySelector('.services__header');
    expect(header).toHaveClass('animate-in');
  });
});

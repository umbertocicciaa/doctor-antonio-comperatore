import { render, screen, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Wrapper component that attaches the ref to a real DOM element
function ScrollWrapper({ options } = {}) {
  const [ref, isVisible] = useScrollAnimation(options);
  return <div ref={ref} data-testid="target" data-visible={String(isVisible)} />;
}

describe('useScrollAnimation', () => {
  it('returns a ref and isVisible=false initially', () => {
    render(<ScrollWrapper />);
    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'false');
  });

  it('sets isVisible to true when element intersects', () => {
    render(<ScrollWrapper />);
    act(() => {
      global.__intersectionObserverCallback([{ isIntersecting: true }]);
    });
    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'true');
  });

  it('does not set isVisible to true when not intersecting', () => {
    render(<ScrollWrapper />);
    act(() => {
      global.__intersectionObserverCallback([{ isIntersecting: false }]);
    });
    expect(screen.getByTestId('target')).toHaveAttribute('data-visible', 'false');
  });

  it('uses default threshold 0.15 and rootMargin', () => {
    render(<ScrollWrapper />);
    expect(global.__intersectionObserverOptions).toEqual({
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    });
  });

  it('uses custom threshold', () => {
    render(<ScrollWrapper options={{ threshold: 0.5 }} />);
    expect(global.__intersectionObserverOptions.threshold).toBe(0.5);
  });

  it('uses custom rootMargin', () => {
    render(<ScrollWrapper options={{ rootMargin: '10px' }} />);
    expect(global.__intersectionObserverOptions.rootMargin).toBe('10px');
  });

  it('calls observe on mount with the element', () => {
    render(<ScrollWrapper />);
    expect(global.__intersectionObserverInstance.observe).toHaveBeenCalled();
  });

  it('calls unobserve when element becomes visible', () => {
    render(<ScrollWrapper />);
    const instance = global.__intersectionObserverInstance;
    act(() => {
      global.__intersectionObserverCallback([{ isIntersecting: true }]);
    });
    expect(instance.unobserve).toHaveBeenCalled();
  });

  it('calls disconnect on unmount', () => {
    const { unmount } = render(<ScrollWrapper />);
    const instance = global.__intersectionObserverInstance;
    unmount();
    expect(instance.disconnect).toHaveBeenCalled();
  });

  it('returns array of length 2', () => {
    const { result } = renderHook(() => useScrollAnimation());
    expect(result.current).toHaveLength(2);
  });

  it('handles missing element gracefully (ref.current is null)', () => {
    const observeMock = vi.fn();
    global.IntersectionObserver = class {
      constructor(cb, opts) {
        this.callback = cb;
        this.options = opts;
      }
      observe = observeMock;
      unobserve = vi.fn();
      disconnect = vi.fn();
    };
    // renderHook provides no DOM element so ref.current stays null
    renderHook(() => useScrollAnimation());
    expect(observeMock).not.toHaveBeenCalled();
  });
});

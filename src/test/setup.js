import '@testing-library/jest-dom';

window.HTMLElement.prototype.scrollIntoView = vi.fn();

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
  global.__intersectionObservers = [];

  global.IntersectionObserver = class {
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      global.__intersectionObservers.push(this);
    }
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  };

  // Expose last instance/callback for convenience
  Object.defineProperty(global, '__intersectionObserverCallback', {
    get: () => global.__intersectionObservers.at(-1)?.callback,
    configurable: true,
  });
  Object.defineProperty(global, '__intersectionObserverOptions', {
    get: () => global.__intersectionObservers.at(-1)?.options,
    configurable: true,
  });
  Object.defineProperty(global, '__intersectionObserverInstance', {
    get: () => global.__intersectionObservers.at(-1),
    configurable: true,
  });

  global.__triggerAllIntersections = () => {
    global.__intersectionObservers.forEach((obs) => {
      obs.callback([{ isIntersecting: true }]);
    });
  };
});

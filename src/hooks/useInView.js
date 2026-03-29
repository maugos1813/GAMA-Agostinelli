import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Observer principal: dispara la animación cuando el elemento entra al viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Liberar will-change una vez que la animación está lista
          requestAnimationFrame(() => {
            if (el) el.style.willChange = 'auto';
          });
          observer.disconnect();
          preObserver.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    // P-5: Pre-observer — aplica will-change solo cuando el elemento
    // se aproxima al viewport (200px antes), no desde el montaje del DOM.
    // Esto evita crear capas de GPU innecesarias para elementos lejanos.
    const preObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && el) {
          el.style.willChange = 'opacity, transform';
        }
      },
      { rootMargin: '200px 0px 0px 0px', threshold: 0 }
    );

    observer.observe(el);
    preObserver.observe(el);

    return () => {
      observer.disconnect();
      preObserver.disconnect();
    };
  }, []);

  return [ref, isInView];
}

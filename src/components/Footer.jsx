import React from 'react';
import { useInView } from '../hooks/useInView';

function GAMALogoLight() {
  return (
    <div className="flex items-center gap-2.5" aria-label="GAMA Agostinelli">
      <div className="w-7 h-7 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm" aria-hidden="true">
        <div className="w-3 h-3 bg-acento rounded-sm" aria-hidden="true" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-syne font-extrabold text-sm tracking-wide text-white">GAMA</span>
        <span className="font-barlow font-light text-[10px] tracking-widest text-white/50">AGOSTINELLI</span>
      </div>
    </div>
  );
}

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const [bannerRef, bannerVisible] = useInView();
  const [footerRef, footerVisible] = useInView();

  return (
    <footer style={{ background: 'linear-gradient(180deg, #1e2d4f 0%, #2C3E6B 100%)' }}>
      {/* Separador decorativo */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

      {/* CTA Banner */}
      <div
        ref={bannerRef}
        className={`anim anim-up border-b border-white/8 ${bannerVisible ? 'visible' : ''}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-syne text-white text-xl md:text-2xl tracking-tight">
              ¿Listo para tener una web que vende?
            </p>
            <p className="font-barlow font-light text-white/50 mt-1 tracking-wide">
              Respondemos en menos de 24 horas.
            </p>
          </div>
          <a
            href="#contacto"
            className="font-barlow bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-3 rounded-full text-sm hover:bg-white/20 transition-all duration-300 flex-shrink-0 tracking-wide"
          >
            Hablemos →
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div
        ref={footerRef}
        className={`anim anim-up delay-100 max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 ${footerVisible ? 'visible' : ''}`}
      >
        <GAMALogoLight />

        {/* A-5: aria-label en el nav del footer */}
        <nav className="flex flex-wrap justify-center gap-6" aria-label="Navegación secundaria">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow font-light text-white/50 hover:text-white transition-all duration-200 text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* A-6: contraste mejorado — /20 → /50 para pasar WCAG AA */}
        <p className="font-barlow font-light text-white/50 text-sm">
          © 2025 GAMA Agostinelli
        </p>
      </div>
    </footer>
  );
}

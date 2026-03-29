import React, { useState, useEffect } from 'react';

function GAMALogo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="GAMA Agostinelli — Ir al inicio">
      <div className="w-7 h-7 bg-principal rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
        <div className="w-3 h-3 bg-acento rounded-sm" aria-hidden="true" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-syne font-extrabold text-sm tracking-wide text-principal">GAMA</span>
        <span className="font-barlow font-light text-[10px] tracking-widest text-secundario">AGOSTINELLI</span>
      </div>
    </a>
  );
}

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú mobile al hacer resize a desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <GAMALogo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8" role="navigation" aria-label="Menú principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow text-principal/60 hover:text-principal transition-all duration-200 text-base tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="font-barlow bg-principal text-white px-5 py-2.5 rounded-full text-sm hover:bg-acento transition-all duration-300 tracking-wide"
            style={{ boxShadow: '0 2px 12px rgba(44,62,107,0.2)' }}
          >
            Hablemos
          </a>
        </div>

        {/* Mobile: botón hamburguesa accesible */}
        <button
          className="md:hidden p-2 rounded-lg text-principal focus:outline-none focus:ring-2 focus:ring-acento/40 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          type="button"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Panel de navegación mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-nav border-t border-white/30 px-6 py-4 flex flex-col gap-3"
          role="navigation"
          aria-label="Menú de navegación móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow text-principal/70 hover:text-principal text-base tracking-wide py-1 border-b border-white/20 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="font-barlow bg-principal text-white px-5 py-2.5 rounded-full text-sm hover:bg-acento transition-all duration-300 tracking-wide text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Hablemos
          </a>
        </div>
      )}
    </nav>
  );
}

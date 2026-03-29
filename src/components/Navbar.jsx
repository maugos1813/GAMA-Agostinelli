import React, { useState, useEffect } from 'react';

function GAMALogo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5">
      <div className="w-7 h-7 bg-principal rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
        <div className="w-3 h-3 bg-acento rounded-sm" />
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <GAMALogo />

        <div className="hidden md:flex items-center gap-8">
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

        <a
          href="#contacto"
          className="md:hidden font-barlow bg-principal text-white px-4 py-2 rounded-full text-sm"
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}

import React, { useEffect, useRef } from 'react';

export default function Header() {
  const badgeRef  = useRef(null);
  const titleRef  = useRef(null);
  const subRef    = useRef(null);
  const ctaRef    = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const els = [
      { el: badgeRef.current,  delay: 0 },
      { el: titleRef.current,  delay: 130 },
      { el: subRef.current,    delay: 270 },
      { el: ctaRef.current,    delay: 420 },
      { el: scrollRef.current, delay: 620 },
    ];
    els.forEach(({ el, delay }) => {
      if (!el) return;
      setTimeout(() => el.classList.add('visible'), delay + 80);
    });
  }, []);

  return (
    <header
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20 relative overflow-hidden"
    >
      {/* Orbs decorativos estilo Apple */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,104,200,0.25) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-20 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(44,62,107,0.18) 0%, transparent 65%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(123,104,200,0.15) 0%, transparent 60%)' }} />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Badge estilo Apple pill */}
        <div ref={badgeRef} className="anim anim-up delay-0">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="glass-card font-barlow font-light text-sm text-principal/70 px-5 py-2 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-acento inline-block mr-2 align-middle" style={{ animation: 'pulse 2s infinite' }} />
              Especialistas en clínicas dentales y veterinarias
            </span>
          </div>
        </div>

        {/* Título */}
        <div ref={titleRef} className="anim anim-up delay-100">
          <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-principal mb-6 leading-[1.06] tracking-tight">
            Diseño que{' '}
            <span className="text-gradient">convierte</span>
            {'. '}Páginas que venden.
          </h1>
        </div>

        {/* Subtítulo */}
        <div ref={subRef} className="anim anim-up delay-200">
          <p className="font-barlow font-light text-principal/65 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed tracking-wide">
            Landing pages y sitios web que combinan estética premium con resultados
            medibles para clínicas dentales y veterinarias.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="anim anim-up delay-300">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#proyectos"
              className="font-barlow bg-principal text-white px-8 py-3.5 rounded-full text-base hover:bg-acento hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center tracking-wide"
              style={{ boxShadow: '0 4px 20px rgba(44,62,107,0.25)' }}
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="glass-card font-barlow text-principal/80 px-8 py-3.5 rounded-full text-base hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center tracking-wide"
            >
              Hablemos →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollRef} className="anim anim-fade delay-500 mt-20 flex flex-col items-center gap-2">
          <span className="font-barlow font-light text-xs text-principal/50 tracking-[0.25em] uppercase">Scroll</span>
          <div className="relative w-0.5 h-10 bg-principal/15 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-acento rounded-full"
              style={{ height: '40%', animation: 'scrollBar 2s ease-in-out infinite' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollBar {
          0%   { transform: translateY(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </header>
  );
}

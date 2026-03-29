import React, { useEffect, useRef } from 'react';

// URL base de la imagen LCP — WebP para menor peso (~30% vs JPEG)
const LCP_IMAGE = {
  src:    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&fm=webp',
  srcSet: [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=480&q=80&fm=webp 480w',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=768&q=80&fm=webp 768w',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&fm=webp 900w',
  ].join(', '),
  // En mobile ocupa 100vw, en desktop (lg+) ocupa ~50vw del viewport
  sizes: '(max-width: 1023px) 100vw, 50vw',
};

export default function Header() {
  const badgeRef  = useRef(null);
  const titleRef  = useRef(null);
  const subRef    = useRef(null);
  const ctaRef    = useRef(null);
  const imageRef  = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const els = [
      { el: badgeRef.current,  delay: 0   },
      { el: titleRef.current,  delay: 130 },
      { el: subRef.current,    delay: 270 },
      { el: ctaRef.current,    delay: 420 },
      { el: imageRef.current,  delay: 320 },
      { el: scrollRef.current, delay: 650 },
    ];

    // P-7: setTimeout + requestAnimationFrame — sincroniza con el ciclo de render del compositor
    const timers = els.map(({ el, delay }) => {
      if (!el) return null;
      return setTimeout(() => {
        requestAnimationFrame(() => el.classList.add('visible'));
      }, delay + 80);
    });

    return () => timers.forEach((t) => t && clearTimeout(t));
  }, []);

  return (
    <header
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Orbs decorativos — aria-hidden para lectores de pantalla */}
      <div aria-hidden="true" className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,104,200,0.25) 0%, transparent 65%)' }} />
      <div aria-hidden="true" className="absolute -bottom-20 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(44,62,107,0.18) 0%, transparent 65%)' }} />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(123,104,200,0.15) 0%, transparent 60%)' }} />

      {/* ── Layout split: texto | imagen ── */}
      <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ── Columna texto ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Badge pill — P-9: glass-solid en vez de backdrop-filter */}
          <div ref={badgeRef} className="anim anim-up delay-0">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="glass-solid font-barlow font-light text-sm text-principal/70 px-5 py-2 rounded-full tracking-wide">
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-acento inline-block mr-2 align-middle"
                  style={{ animation: 'pulse 2s infinite' }}
                />
                Especialistas en clínicas dentales y veterinarias
              </span>
            </div>
          </div>

          {/* Título — h1 único, elemento LCP de texto */}
          <div ref={titleRef} className="anim anim-up delay-100">
            <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-principal mb-6 leading-[1.06] tracking-tight">
              Diseño que{' '}
              <span className="text-gradient">convierte</span>
              {'. '}Páginas que venden.
            </h1>
          </div>

          {/* Subtítulo */}
          <div ref={subRef} className="anim anim-up delay-200">
            <p className="font-barlow font-light text-principal/65 text-lg md:text-xl mb-10 max-w-lg leading-relaxed tracking-wide">
              Landing pages y sitios web que combinan estética premium con resultados
              medibles para clínicas dentales y veterinarias.
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="anim anim-up delay-300">
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <a
                href="#proyectos"
                className="font-barlow bg-principal text-white px-8 py-3.5 rounded-full text-base hover:bg-acento hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center tracking-wide"
                style={{ boxShadow: '0 4px 20px rgba(44,62,107,0.25)' }}
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="glass-solid font-barlow text-principal/80 px-8 py-3.5 rounded-full text-base hover:shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center tracking-wide"
              >
                Hablemos →
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div ref={scrollRef} className="anim anim-fade delay-500 mt-14 hidden lg:flex flex-col items-start gap-2" aria-hidden="true">
            <span className="font-barlow font-light text-xs text-principal/50 tracking-[0.25em] uppercase">Scroll</span>
            <div className="relative w-0.5 h-10 bg-principal/15 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-acento rounded-full"
                style={{ height: '40%', animation: 'scrollBar 2s ease-in-out infinite' }} />
            </div>
          </div>
        </div>

        {/* ── Columna imagen: browser mockup ── */}
        <div ref={imageRef} className="anim anim-up delay-300 flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg relative">

          {/* Browser mockup frame — usa glass-card (backdrop-filter justificado aquí: elemento grande centrado) */}
          <div
            className="rounded-2xl overflow-hidden relative"
            role="img"
            aria-label="Vista previa de un sitio web para clínica dental diseñado por GAMA Agostinelli"
            style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(28px) saturate(200%)',
              WebkitBackdropFilter: 'blur(28px) saturate(200%)',
              border: '1px solid rgba(255,255,255,0.75)',
              boxShadow: '0 32px 80px rgba(44,62,107,0.22), 0 8px 32px rgba(123,104,200,0.18), 0 1px 0 rgba(255,255,255,0.9) inset',
            }}
          >
            {/* Browser top bar */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b border-white/40"
              style={{ background: 'rgba(255,255,255,0.60)' }}
              aria-hidden="true"
            >
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,97,92,0.75)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,189,46,0.75)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40,201,64,0.75)' }} />
              </div>
              <div className="flex-1 mx-3">
                <div className="rounded-md px-3 py-1 text-xs font-barlow text-principal/45 text-center tracking-wide"
                  style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(44,62,107,0.08)' }}>
                  clinicadental.com
                </div>
              </div>
            </div>

            {/* P-1: imagen LCP con srcSet WebP + dimensiones explícitas (previene CLS)
                P-6: sin decoding="async" en LCP — el browser decide el timing óptimo
                fetchPriority="high" → primer recurso en descargarse */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <img
                src={LCP_IMAGE.src}
                srcSet={LCP_IMAGE.srcSet}
                sizes={LCP_IMAGE.sizes}
                alt="Clínica dental moderna con sillón y equipamiento de alta tecnología"
                width="900"
                height="563"
                fetchPriority="high"
                className="w-full h-full object-cover"
                style={{ opacity: 0.92 }}
              />
              <div aria-hidden="true" className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(123,104,200,0.08) 0%, transparent 40%, rgba(245,246,250,0.35) 100%)' }} />
              <div aria-hidden="true" className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(44,62,107,0.12) 0%, transparent 55%)' }} />
            </div>
          </div>

          {/* P-9: Badge flotante inferior — glass-solid (sin backdrop-filter) */}
          <div
            className="absolute -bottom-4 -left-4 z-10 flex items-center gap-3 px-4 py-3 rounded-2xl glass-solid"
            aria-hidden="true"
          >
            <div className="w-9 h-9 rounded-xl bg-acento flex items-center justify-center flex-shrink-0"
              style={{ boxShadow: '0 4px 12px rgba(123,104,200,0.40)' }}>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8l3.5 3.5L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-syne text-principal text-sm leading-tight">Diseño premium</p>
              <p className="font-barlow font-light text-principal/55 text-xs tracking-wide">para tu clínica</p>
            </div>
          </div>

          {/* P-9: Badge flotante superior — glass-solid (sin backdrop-filter) */}
          <div
            className="absolute -top-3 -right-3 z-10 flex items-center gap-2 px-3 py-2 rounded-xl glass-solid"
            aria-hidden="true"
          >
            <span aria-hidden="true" className="text-base">🦷</span>
            <p className="font-barlow text-principal/70 text-xs tracking-wide leading-tight">Dental &amp; Vet</p>
          </div>
        </div>
      </div>
    </header>
  );
}

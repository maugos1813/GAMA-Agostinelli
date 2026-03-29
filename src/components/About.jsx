import React from 'react';
import { useInView } from '../hooks/useInView';

const stats = [
  { value: '100%', label: 'Orientado a resultados', delay: 'delay-0' },
  { value: '2',    label: 'Nichos especializados',  delay: 'delay-100' },
  { value: '24h',  label: 'Tiempo de respuesta',    delay: 'delay-200' },
];

export default function About() {
  const [headRef, headVisible] = useInView();
  const [cardRef, cardVisible] = useInView();
  const [statsRef, statsVisible] = useInView();

  return (
    <section id="nosotros" className="px-6 py-28">
      <div className="max-w-5xl mx-auto">

        <div
          ref={headRef}
          className={`anim anim-up text-center mb-16 ${headVisible ? 'visible' : ''}`}
        >
          <span className="font-barlow font-light text-xs text-acento tracking-[0.25em] uppercase">
            Quiénes somos
          </span>
          <h2 className="font-syne text-3xl md:text-4xl text-principal mt-3 tracking-tight">
            Una agencia con foco real
          </h2>
          <div className="mt-4 mx-auto w-10 h-px bg-acento/60" />
        </div>

        {/* Tarjeta glass principal */}
        <div
          ref={cardRef}
          className={`anim anim-up glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden mb-5 ${cardVisible ? 'visible' : ''}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(123,104,200,0.14) 0%, transparent 60%)' }} />

          <div className="border-l-2 border-acento/70 pl-6 relative z-10">
            <p className="font-barlow font-light text-principal text-lg md:text-xl leading-relaxed mb-4">
              Somos GAMA Agostinelli, una agencia especializada en diseño web y landing pages
              para clínicas dentales y veterinarias.
            </p>
            <p className="font-barlow font-light text-principal/60 text-lg md:text-xl leading-relaxed">
              No somos una agencia de marketing — somos especialistas en estética online
              y páginas que venden.
            </p>
          </div>
        </div>

        {/* Stats glass */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`anim anim-up ${stat.delay} glass-card rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${statsVisible ? 'visible' : ''}`}
            >
              <p className="font-syne text-3xl text-gradient mb-1">{stat.value}</p>
              <p className="font-barlow font-light text-principal/60 text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

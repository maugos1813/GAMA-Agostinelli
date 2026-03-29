import React from 'react';
import { useInView } from '../hooks/useInView';
import { plans } from '../data/pricing';
import PricingCard from './PricingCard';

const cardDelays = ['delay-0', 'delay-200', 'delay-400'];

export default function Pricing() {
  const [headRef, headVisible] = useInView();
  const [gridRef, gridVisible] = useInView();
  const [noteRef, noteVisible] = useInView();

  return (
    <section id="precios" className="px-6 py-28 relative overflow-hidden">
      {/* Orb de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(123,104,200,0.18) 0%, transparent 65%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Encabezado */}
        <div
          ref={headRef}
          className={`anim anim-up text-center mb-16 ${headVisible ? 'visible' : ''}`}
        >
          <span className="font-barlow font-light text-xs text-acento tracking-[0.25em] uppercase">
            Inversión
          </span>
          <h2 className="font-syne text-3xl md:text-4xl text-principal mt-3 tracking-tight">
            Planes y precios
          </h2>
          <p className="font-barlow font-light text-principal/60 text-lg mt-4 max-w-md mx-auto tracking-wide">
            Elegí el plan que mejor se adapta a tu clínica. Sin costos ocultos.
          </p>
          <div className="mt-5 mx-auto w-10 h-px bg-acento/60" />
        </div>

        {/* Grid de cards */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              delay={cardDelays[i]}
              isVisible={gridVisible}
            />
          ))}
        </div>

        {/* Nota al pie */}
        <div
          ref={noteRef}
          className={`anim anim-up delay-200 text-center mt-10 ${noteVisible ? 'visible' : ''}`}
        >
          <p className="font-barlow font-light text-principal/50 text-sm tracking-wide">
            Todos los precios en USD · Los valores son orientativos y pueden variar según el proyecto ·{' '}
            <a href="#contacto" className="text-acento hover:text-acento/80 transition-colors duration-200 underline underline-offset-2">
              Consultanos sin compromiso
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

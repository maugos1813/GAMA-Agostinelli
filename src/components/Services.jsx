import React from 'react';
import { useInView } from '../hooks/useInView';

const services = [
  { number: '01', title: 'Landing pages', description: 'Una página diseñada para convertir visitas en clientes.' },
  { number: '02', title: 'Sitios web', description: 'Presencia profesional que genera confianza antes del primer contacto.' },
  { number: '03', title: 'Mantenimiento', description: 'Tu web siempre actualizada, con reporte mensual incluido.' },
];

const delays = ['delay-0', 'delay-200', 'delay-400'];

export default function Services() {
  const [headRef, headVisible] = useInView();
  const [cardsRef, cardsVisible] = useInView();

  return (
    <section id="servicios" className="px-6 py-28">
      <div className="max-w-6xl mx-auto">

        <div
          ref={headRef}
          className={`anim anim-up text-center mb-16 ${headVisible ? 'visible' : ''}`}
        >
          <span className="font-barlow font-light text-xs text-acento tracking-[0.25em] uppercase">
            Lo que hacemos
          </span>
          <h2 className="font-syne text-3xl md:text-4xl text-principal mt-3 tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="mt-4 mx-auto w-10 h-px bg-acento/60" />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`anim anim-up ${delays[i]} group glass-card rounded-3xl p-8 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${cardsVisible ? 'visible' : ''}`}
            >
              {/* Número decorativo */}
              <span className="absolute top-5 right-6 font-syne text-6xl text-principal/12 font-extrabold leading-none select-none">
                {service.number}
              </span>

              {/* Punto acento */}
              <div className="w-2 h-2 rounded-full bg-acento flex-shrink-0" />

              <h3 className="font-syne text-principal text-xl tracking-tight">{service.title}</h3>

              <p className="font-barlow font-light text-principal/65 text-lg leading-relaxed">
                {service.description}
              </p>

              {/* Borde bottom sutil al hover */}
              <div className="mt-auto pt-5 border-t border-white/60">
                <div className="h-px bg-gradient-to-r from-acento/50 via-acento/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

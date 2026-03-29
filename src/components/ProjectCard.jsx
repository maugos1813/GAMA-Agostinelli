import React from 'react';

export default function ProjectCard({ name, niche, description, demoUrl, image, delay = 'delay-0', isVisible = false }) {
  // S-6: verificar si la URL de demo está disponible
  const hasDemoUrl = demoUrl && demoUrl !== '#';

  return (
    <article className={`anim anim-up ${delay} group glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ${isVisible ? 'visible' : ''}`}>

      {/* Preview */}
      <div className="relative w-full aspect-video overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`Vista previa del proyecto ${name} — ${niche}`}
            width="600"
            height="338"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{ background: 'linear-gradient(135deg, #2C3E6B 0%, #3d5494 50%, #2C3E6B 100%)' }}
            aria-hidden="true"
          >
            {/* Grid decorativo */}
            <div className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(rgba(168,184,216,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(168,184,216,0.18) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }} />
            <div className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 40% 50%, rgba(123,104,200,0.25) 0%, transparent 60%)' }} />
            <span className="font-barlow font-light text-white/65 text-xs relative z-10 tracking-[0.2em] uppercase">
              Preview próximamente
            </span>
          </div>
        )}

        {/* Badge de nicho */}
        <span className="absolute top-3 left-3 font-barlow font-light text-xs bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full tracking-wide">
          {niche}
        </span>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col gap-3 border-t border-white/50">
        <h3 className="font-syne text-principal text-xl tracking-tight">{name}</h3>
        <p className="font-barlow font-light text-principal/65 text-base">{description}</p>

        {/* S-6: mostrar "Demo próximamente" cuando no hay URL real */}
        {hasDemoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo de ${name} (abre en nueva pestaña)`}
            className="self-start mt-2 font-barlow text-sm text-acento flex items-center gap-2 hover:gap-3 transition-all duration-200 tracking-wide"
          >
            Ver demo
            <span aria-hidden="true" className="inline-block group-hover:translate-x-1 transition-transform duration-300 text-acento">→</span>
          </a>
        ) : (
          <span className="self-start mt-2 font-barlow text-sm text-principal/40 tracking-wide italic">
            Demo próximamente
          </span>
        )}
      </div>
    </article>
  );
}

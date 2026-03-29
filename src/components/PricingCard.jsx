import React from 'react';

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="rgba(123,104,200,0.22)" />
      <path d="M5 8l2 2 4-4" stroke="#7B68C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="rgba(168,184,216,0.18)" />
      <path d="M6 6l4 4M10 6l-4 4" stroke="rgba(168,184,216,0.7)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function PricingCard({ plan, delay = 'delay-0', isVisible = false }) {
  const { name, price, period, description, popular, features, cta } = plan;

  return (
    <div
      className={`anim anim-up ${delay} relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
        popular
          ? 'hover:shadow-2xl'
          : 'hover:shadow-xl'
      } ${isVisible ? 'visible' : ''}`}
      style={popular ? {
        background: 'linear-gradient(145deg, rgba(123,104,200,0.28) 0%, rgba(255,255,255,0.70) 45%)',
        backdropFilter: 'blur(28px) saturate(200%)',
        WebkitBackdropFilter: 'blur(28px) saturate(200%)',
        border: '1px solid rgba(123,104,200,0.45)',
        boxShadow: '0 8px 44px rgba(123,104,200,0.28), 0 1px 0 rgba(255,255,255,0.95) inset',
      } : {
        background: 'rgba(255,255,255,0.62)',
        backdropFilter: 'blur(24px) saturate(200%)',
        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
        border: '1px solid rgba(255,255,255,0.78)',
        boxShadow: '0 4px 28px rgba(123,104,200,0.12), 0 1px 0 rgba(255,255,255,0.95) inset',
      }}
    >
      {/* Badge popular */}
      {popular && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-acento/80 via-acento to-acento/80" />
      )}

      <div className="p-8 flex flex-col gap-6 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            {popular && (
              <span className="font-barlow font-light text-xs text-acento tracking-[0.18em] uppercase mb-2 block">
                Más popular
              </span>
            )}
            <h3 className="font-syne text-principal text-xl tracking-tight">{name}</h3>
          </div>
          {popular && (
            <div className="w-2 h-2 rounded-full bg-acento mt-1.5" />
          )}
        </div>

        {/* Precio */}
        <div className="flex items-end gap-1">
          <span className="font-barlow font-light text-principal/60 text-lg leading-none mb-1">$</span>
          <span className="font-syne text-principal text-5xl tracking-tight leading-none">{price}</span>
          <span className="font-barlow font-light text-principal/60 text-sm leading-none mb-1 ml-1">{period}</span>
        </div>

        {/* Descripción */}
        <p className="font-barlow font-light text-principal/65 text-base leading-relaxed">
          {description}
        </p>

        {/* Separador */}
        <div className="h-px bg-gradient-to-r from-transparent via-principal/18 to-transparent" />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              {feature.included ? <CheckIcon /> : <CrossIcon />}
              <span className={`font-barlow font-light text-base tracking-wide ${
                feature.included ? 'text-principal/85' : 'text-principal/35'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className={`mt-auto w-full py-3.5 rounded-full font-barlow text-base text-center tracking-wide transition-all duration-300 hover:scale-[1.03] ${
            popular
              ? 'bg-acento text-white hover:opacity-90'
              : 'bg-principal/12 text-principal hover:bg-principal/20 border border-principal/20'
          }`}
          style={popular ? { boxShadow: '0 4px 20px rgba(123,104,200,0.45)' } : {}}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

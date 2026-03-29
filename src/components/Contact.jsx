import React from "react";
import Swal from "sweetalert2";
import { useInView } from '../hooks/useInView';

// REEMPLAZAR CON URLs REALES CUANDO ESTÉN DISPONIBLES
const socialLinks = [
  {
    name: 'WhatsApp',
    href: '#', // REEMPLAZAR CON: https://wa.me/549XXXXXXXXXX
    color: '#25D366',
    hoverShadow: 'rgba(37,211,102,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#', // REEMPLAZAR CON: https://instagram.com/gamaagostinelli
    color: '#E1306C',
    hoverShadow: 'rgba(225,48,108,0.2)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#', // REEMPLAZAR CON: https://facebook.com/gamaagostinelli
    color: '#1877F2',
    hoverShadow: 'rgba(24,119,242,0.2)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [headRef, headVisible] = useInView();
  const [socialRef, socialVisible] = useInView();
  const [formRef, formVisible] = useInView();

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "TU_ACCESS_KEY_AQUÍ"); // <-- tu clave aquí
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({ title: "¡Mensaje enviado!", text: "Gracias por contactarnos. Te responderemos pronto.", icon: "success" });
      form.reset();
    } else {
      Swal.fire({ title: "Error", text: "No se pudo enviar el mensaje. Inténtalo de nuevo.", icon: "error" });
    }
  };

  return (
    <section id="contacto" className="px-6 py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(123,104,200,0.18) 0%, transparent 55%)' }} />

      <div className="max-w-lg mx-auto relative z-10">

        {/* Encabezado */}
        <div
          ref={headRef}
          className={`anim anim-up text-center mb-10 ${headVisible ? 'visible' : ''}`}
        >
          <span className="font-barlow font-light text-xs text-acento tracking-[0.25em] uppercase">
            Trabajemos juntos
          </span>
          <h2 className="font-syne text-3xl md:text-4xl text-principal mt-3 mb-3 tracking-tight">
            ¿Hablamos?
          </h2>
          <p className="font-barlow font-light text-principal/65 text-lg tracking-wide">
            Contanos tu proyecto y te respondemos en menos de 24 horas.
          </p>
          <div className="mt-4 mx-auto w-10 h-px bg-acento/30" />
        </div>

        {/* Accesos directos a redes sociales */}
        <div
          ref={socialRef}
          className={`anim anim-up glass-card rounded-2xl p-5 mb-5 ${socialVisible ? 'visible' : ''}`}
        >
          <p className="font-barlow font-light text-xs text-principal/55 tracking-[0.18em] uppercase mb-4 text-center">
            O escribinos directamente
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-3 rounded-xl font-barlow font-light text-sm tracking-wide transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.7)',
                  color: social.color,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 4px 16px ${social.hoverShadow}`;
                  e.currentTarget.style.background = `${social.color}10`;
                  e.currentTarget.style.borderColor = `${social.color}30`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                }}
              >
                {social.icon}
                <span className="hidden sm:inline">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`anim anim-fade flex items-center gap-3 mb-5 ${socialVisible ? 'visible' : ''}`}>
          <div className="flex-1 h-px bg-principal/15" />
          <span className="font-barlow font-light text-xs text-principal/45 tracking-[0.15em] uppercase">o enviá un mensaje</span>
          <div className="flex-1 h-px bg-principal/15" />
        </div>

        {/* Formulario glass */}
        <div
          ref={formRef}
          className={`anim anim-up glass-card-strong rounded-3xl p-8 ${formVisible ? 'visible' : ''}`}
        >
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-barlow font-light text-xs text-principal/40 tracking-[0.18em] uppercase">Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full px-4 py-3.5 font-barlow font-light bg-white/60 border border-white/80 rounded-2xl focus:outline-none focus:border-acento/40 focus:ring-2 focus:ring-acento/10 transition-all duration-200 text-principal placeholder-principal/25 text-base"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-barlow font-light text-xs text-principal/40 tracking-[0.18em] uppercase">Email</label>
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3.5 font-barlow font-light bg-white/60 border border-white/80 rounded-2xl focus:outline-none focus:border-acento/40 focus:ring-2 focus:ring-acento/10 transition-all duration-200 text-principal placeholder-principal/25 text-base"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-barlow font-light text-xs text-principal/40 tracking-[0.18em] uppercase">Mensaje</label>
              <textarea
                name="message"
                placeholder="Contanos sobre tu proyecto..."
                rows={5}
                className="w-full px-4 py-3.5 font-barlow font-light bg-white/60 border border-white/80 rounded-2xl focus:outline-none focus:border-acento/40 focus:ring-2 focus:ring-acento/10 transition-all duration-200 resize-none text-principal placeholder-principal/25 text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 font-barlow text-white bg-principal rounded-full text-base hover:bg-acento hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 tracking-wide mt-2"
              style={{ boxShadow: '0 4px 20px rgba(44,62,107,0.2)' }}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

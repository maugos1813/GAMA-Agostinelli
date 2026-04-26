import { Mail, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sectores", href: "#sectores" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "Sobre nosotros", href: "#nosotros" },
];

const serviceLinks = [
  { label: "Diseño estratégico UI/UX", href: "#servicios" },
  { label: "Desarrollo a medida", href: "#servicios" },
  { label: "Lanzamiento + analítica", href: "#servicios" },
  { label: "Soporte y mantenimiento", href: "#servicios" },
];

const legalLinks = [
  { label: "Aviso legal", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border pt-10 lg:pt-16 pb-20 lg:pb-8">
      <div className="container">

        {/*
          Layout grid:
          - mobile  (<640px)  : 2 cols — brand full-width, links 2-col below
          - iPad mini (640px+): brand full-width top row, 3-col links below
          - desktop (1024px+) : 4 cols side by side
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-10 mb-10 lg:mb-14">

          {/* ── Brand + contact ─────────────────────────────────────── */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <a href="#inicio" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center shrink-0">
                <img
                  src="logoga.png"
                  alt="Logo GamaAgostinelli"
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-semibold text-base lg:text-lg tracking-tight">
                Gama<span className="text-primary">Agostinelli</span>
              </span>
            </a>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Landing pages optimizadas para convertir tráfico en clientes reales.
            </p>

            {/* Contact — horizontal on iPad mini, vertical otherwise */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-col gap-2 sm:gap-x-5 sm:gap-y-2 lg:gap-2.5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary sm:w-full lg:w-auto">
                Contacto rápido
              </p>
              <a
                href="mailto:hola@gamaagostinelli.com"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors min-w-0"
              >
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="truncate">hola@gamaagostinelli.com</span>
              </a>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>+34 600 000 000 · WhatsApp</span>
              </a>
              <a
                href="tel:+34910000000"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>+34 910 000 000 · Oficina</span>
              </a>
            </div>
          </div>

          {/* ── Navega ──────────────────────────────────────────────── */}
          <div className="col-span-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
              Navega
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Servicios ───────────────────────────────────────────── */}
          <div className="col-span-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
              Servicios
            </p>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors leading-snug block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Legal ───────────────────────────────────────────────── */}
          <div className="col-span-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
              Legal
            </p>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} GamaAgostinelli Studio — Diseñado y desarrollado con obsesión.
          </p>
          <p className="text-xs text-muted-foreground">
            Landing pages que{" "}
            <span className="text-primary font-medium">convierten</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

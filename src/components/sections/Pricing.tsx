import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Esencial",
    price: "USD 590",
    desc: "Ideal para emprendedores que quieren validar su idea o lanzar un servicio.",
    features: [
      "Landing de 1 sección extensa",
      "Diseño personalizado",
      "Mobile-first y SEO básico",
      "Formulario de contacto",
      "Entrega en 5 días",
    ],
    highlighted: false,
  },
  {
    name: "Profesional",
    price: "USD 1.190",
    desc: "Para negocios que necesitan posicionarse y captar leads de calidad.",
    features: [
      "Landing multisección a medida",
      "Copy persuasivo incluido",
      "SEO técnico avanzado",
      "Integraciones (CRM, Analytics)",
      "Animaciones y microinteracciones",
      "Entrega en 10 días",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "A medida",
    desc: "Proyectos a la altura de marcas que buscan diferenciarse al máximo.",
    features: [
      "Branding visual completo",
      "Landing + páginas internas",
      "A/B testing y CRO continuo",
      "Producción de imágenes/3D",
      "Soporte mensual incluido",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="precios" className="py-16 lg:py-32 bg-secondary/30 relative">
      <div className="container">
        <div className="max-w-3xl mb-10 lg:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            04 — Precios
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Inversión transparente,
            <br />
            sin sorpresas.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl border transition-all ${
                p.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-glow sm:col-span-2 lg:col-span-1"
                  : "bg-background border-border"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-medium rounded-full bg-background text-foreground border border-border">
                  Más elegido
                </span>
              )}
              <h3 className="font-display text-xl lg:text-2xl font-semibold">{p.name}</h3>
              <div className="mt-3 mb-2 font-display text-3xl sm:text-4xl font-bold tracking-tight">
                {p.price}
              </div>
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  p.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {p.desc}
              </p>
              <ul className="space-y-2.5 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={p.highlighted ? "outlineHero" : "hero"}
                size="lg"
                className={`w-full flex items-center justify-center gap-2 ${
                  p.highlighted
                    ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    : ""
                }`}
                asChild
              >
                <a href="#contacto">
                  <Calendar className="w-4 h-4" />
                  Agendar llamada
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import { motion } from "framer-motion";
import { Calendar, Code2, LineChart, Palette, Rocket, Search, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Diseño estratégico UI/UX",
    desc: "Diseñamos páginas pensadas para guiar al usuario hacia la acción: más clics, más contactos, más ventas.",
    sub: "No es solo diseño, es conversión.",
  },
  {
    icon: Code2,
    title: "Desarrollo ultrarrápido",
    desc: "Landing pages optimizadas para cargar en milisegundos y no perder clientes por lentitud.",
    sub: "Cada segundo cuenta en tu tasa de conversión.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first real",
    desc: "Más del 70% del tráfico es móvil. Diseñamos experiencias que convierten desde el teléfono.",
    sub: "Tu cliente no espera, decide en segundos.",
  },
  {
    icon: Search,
    title: "SEO técnico que trae tráfico",
    desc: "Estructuramos tu landing para que Google la entienda y la posicione mejor desde el inicio.",
    sub: "Más visibilidad, más oportunidades de venta.",
  },
  {
    icon: LineChart,
    title: "Optimización continua (A/B testing)",
    desc: "No adivinamos: medimos, probamos y mejoramos constantemente para aumentar conversiones.",
    sub: "Tu landing mejora con el tiempo, no se queda estática.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento y soporte",
    desc: "Publicamos, monitoreamos y optimizamos tu landing para que siga generando resultados.",
    sub: 'No te dejamos solo después del "go live".',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-16 lg:py-32 relative">
      <div className="container">
        <div className="max-w-3xl mb-10 lg:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            01 — Servicios
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Todo lo que necesitas para convertir{" "}
            <span className="gradient-text italic">tráfico en clientes</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-card-soft flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <p className="mt-3 text-sm font-medium text-primary">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 lg:mt-16 text-center"
        >
          <div className="flex flex-col items-center gap-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar llamada gratuita
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Sin compromiso · Respuesta en menos de 24h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

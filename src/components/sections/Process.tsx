import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Descubrimiento",
    desc: "Charla inicial para entender tu negocio, audiencia y objetivos. Definimos métricas claras de éxito.",
  },
  {
    n: "02",
    title: "Estrategia & copy",
    desc: "Investigamos competencia, definimos arquitectura de la página y redactamos el copy persuasivo.",
  },
  {
    n: "03",
    title: "Diseño",
    desc: "Diseñamos en Figma una landing única, con identidad fuerte y enfoque en conversión.",
  },
  {
    n: "04",
    title: "Desarrollo",
    desc: "Codificamos a medida, optimizando velocidad, accesibilidad y SEO técnico.",
  },
  {
    n: "05",
    title: "Lanzamiento",
    desc: "Configuramos dominio, analítica y publicamos. Te entregamos todo medido y listo para escalar.",
  },
  {
    n: "06",
    title: "Optimización",
    desc: "Iteramos en base a datos reales para seguir mejorando tasa de conversión y rendimiento.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="py-16 lg:py-32 relative">
      <div className="container">
        <div className="max-w-3xl mb-12 lg:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            03 — Proceso
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Un método claro,{" "}
            <span className="italic text-muted-foreground">resultados predecibles.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative"
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-primary/20 leading-none">
                {s.n}
              </div>
              <h3 className="mt-3 font-display text-lg sm:text-xl lg:text-2xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

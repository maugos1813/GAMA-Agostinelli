import { motion } from "framer-motion";

const stats = [
  { num: "5+", label: "Años de experiencia" },
  { num: "120+", label: "Proyectos entregados" },
  { num: "12", label: "Países alcanzados" },
  { num: "4.9★", label: "Reseñas promedio" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-16 lg:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              05 — Sobre nosotros
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
              Un estudio chico,
              <br />
              con <span className="gradient-text italic">obsesión grande</span>.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">GamaAgostinelli</span>{" "}
              es un estudio especializado en una sola cosa: diseñar y construir
              landing pages que realmente conviertan. No hacemos de todo. Hacemos
              esto, y lo hacemos muy bien.
            </p>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Combinamos diseño editorial, desarrollo a medida y estrategia de
              conversión para crear páginas que no solo se ven increíbles, sino
              que cumplen objetivos medibles para tu negocio.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border-l-2 border-primary pl-3"
                >
                  <div className="font-display text-2xl lg:text-3xl font-bold">{s.num}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

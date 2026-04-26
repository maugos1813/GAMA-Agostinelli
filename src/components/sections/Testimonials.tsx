import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Laura Méndez",
    role: "Directora · Clínica Dental Sonría · Madrid",
    initials: "LM",
    color: "bg-rose-500",
    quote:
      "Pasamos de 5 a 27 leads semanales en menos de 3 semanas. Probé antes con una agencia generalista y fue dinero perdido. Con GamaAgostinelli vi resultados reales desde el día 10. Ya recuperamos la inversión el primer mes.",
    stars: 5,
    metric: "+440% leads",
  },
  {
    name: "Dr. Carlos Ruiz",
    role: "Veterinario · PetCare Centro · Barcelona",
    initials: "CR",
    color: "bg-emerald-500",
    quote:
      "Antes perdíamos consultas porque nadie respondía fuera de horario. Ahora la landing captura los datos automáticamente y WhatsApp hace el resto. Llenamos agenda con semanas de anticipación y reducimos ausencias un 40%.",
    stars: 5,
    metric: "+65 citas/mes",
  },
  {
    name: "Marta Iglesias",
    role: "Gerente · Centro Odontológico Norte · Valencia",
    initials: "MI",
    color: "bg-violet-500",
    quote:
      "Entregaron en exactamente 7 días como prometieron. Los resultados fueron visibles desde la primera semana. El ROI fue de 4.2x en los primeros 60 días. Ahora estamos ampliando el equipo para atender la demanda.",
    stars: 5,
    metric: "4.2x ROI en 60 días",
  },
  {
    name: "Pedro Santana",
    role: "Propietario · VetSalud Clínica · Sevilla",
    initials: "PS",
    color: "bg-amber-500",
    quote:
      "La conversión pasó de 1.1% a 4.8% en 30 días. No lo creía hasta verlo en Analytics. El proceso fue completamente transparente: sabía exactamente qué estaban haciendo en cada fase.",
    stars: 5,
    metric: "de 1.1% → 4.8%",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary/20">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            Clientes reales · Resultados reales
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Lo que dicen quienes ya{" "}
            <span className="gradient-text italic">confían en nosotros</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group p-5 sm:p-7 rounded-2xl lg:rounded-3xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 flex flex-col gap-4"
            >
              {/* Top row — stacks on very small screens */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${t.color} grid place-items-center shrink-0`}
                  >
                    <span className="text-white font-display font-bold text-sm">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <span className="text-xs font-display font-bold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                  {t.metric}
                </span>
              </div>

              <Stars count={t.stars} />

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

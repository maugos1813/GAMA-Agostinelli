import { motion } from "framer-motion";
import { CalendarX2, Globe, PhoneOff } from "lucide-react";

const points = [
  {
    icon: CalendarX2,
    emoji: "📅",
    title: "Citas que se pierden",
    desc: "Pacientes que no llegan porque nadie les recordó. Cada ausencia es dinero que no entra.",
    stat: "-40%",
    statLabel: "de ingresos por ausencias",
    color: "from-rose-500/20 to-rose-900/5",
    border: "hover:border-rose-500/40",
    iconBg: "bg-rose-500/10 group-hover:bg-rose-500",
    iconColor: "text-rose-400 group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_hsl(0_72%_51%/0.15)]",
  },
  {
    icon: Globe,
    emoji: "🔍",
    title: "Sin presencia digital",
    desc: "Tu competencia aparece en Google. Tú no. Los pacientes nuevos no te encuentran.",
    stat: "75%",
    statLabel: "busca online antes de elegir",
    color: "from-amber-500/20 to-amber-900/5",
    border: "hover:border-amber-500/40",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500",
    iconColor: "text-amber-400 group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_hsl(38_92%_50%/0.15)]",
  },
  {
    icon: PhoneOff,
    emoji: "🌙",
    title: "Fuera de horario, sin respuesta",
    desc: "Cuando cierras, los pacientes buscan otra clínica que sí les responda.",
    stat: "68%",
    statLabel: "consulta fuera del horario laboral",
    color: "from-violet-500/20 to-violet-900/5",
    border: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500",
    iconColor: "text-violet-400 group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_hsl(263_70%_50%/0.15)]",
  },
];

const PainPoints = () => {
  return (
    <section className="py-16 lg:py-32 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[300px] lg:w-[700px] h-[200px] lg:h-[400px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] lg:w-[400px] h-[200px] lg:h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse shrink-0" />
            Situación actual
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            ¿Te identificas{" "}
            <span className="gradient-text italic">con esto?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base lg:text-lg">
            Estos problemas silenciosos le cuestan pacientes a tu clínica cada día.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group relative rounded-2xl lg:rounded-3xl border border-border bg-gradient-to-b ${p.color} p-6 lg:p-8 transition-all duration-500 ${p.border} ${p.glow} cursor-default overflow-hidden`}
            >
              {/* Large background emoji */}
              <span className="absolute bottom-3 right-4 text-5xl lg:text-7xl opacity-10 select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-20">
                {p.emoji}
              </span>

              {/* Icon */}
              <div
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl ${p.iconBg} grid place-items-center mb-4 lg:mb-6 transition-colors duration-300`}
              >
                <p.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${p.iconColor} transition-colors duration-300`} />
              </div>

              {/* Stat */}
              <div className="mb-3 lg:mb-4">
                <span className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                  {p.stat}
                </span>
                <p className="text-xs text-muted-foreground mt-1">{p.statLabel}</p>
              </div>

              {/* Text */}
              <h3 className="font-display text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-foreground">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Si reconociste al menos uno de estos problemas,{" "}
          <a href="#contacto" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
            podemos ayudarte
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default PainPoints;

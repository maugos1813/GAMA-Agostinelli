import { motion } from "framer-motion";
import {
  Search, Lightbulb, Palette, Code2, Rocket, BarChart2, RefreshCw,
} from "lucide-react";

const steps = [
  {
    d: "D1",
    icon: Search,
    title: "Diagnóstico",
    desc: "Analizamos tu negocio, tu cliente ideal y la competencia. Sin esta base, todo lo demás es adivinar.",
  },
  {
    d: "D2",
    icon: Lightbulb,
    title: "Definición",
    desc: "Arquitectura de conversión, copy estratégico y estructura de contenidos pensados para vender.",
  },
  {
    d: "D3",
    icon: Palette,
    title: "Diseño",
    desc: "UI/UX diseñado para guiar al usuario hacia la acción. No es decoración, es psicología visual.",
  },
  {
    d: "D4",
    icon: Code2,
    title: "Desarrollo",
    desc: "Código limpio, rápido y optimizado. Core Web Vitals en verde desde el día uno.",
  },
  {
    d: "D5",
    icon: Rocket,
    title: "Deploy",
    desc: "Publicación, configuración técnica, SEO on-page y analítica lista para medir desde el primer clic.",
  },
  {
    d: "D6",
    icon: BarChart2,
    title: "Data",
    desc: "Seguimiento en tiempo real: qué convierte, qué frena y dónde pierdes clientes.",
  },
  {
    d: "D7",
    icon: RefreshCw,
    title: "Dominancia",
    desc: "A/B testing y optimización continua hasta batir tus metas. Tu landing no se queda estática.",
  },
];

const Method = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary/20">
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 lg:mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            Nuestro sistema probado
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            El{" "}
            <span className="gradient-text italic">Método 7D™</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-xl">
            El framework que multiplica conversiones en clínicas hasta{" "}
            <span className="text-foreground font-semibold">4.8x en promedio</span>.
            7 fases. 7 días. Resultados medibles desde la primera semana.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (lg+) */}
          <div className="hidden lg:block absolute left-[2.35rem] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="flex flex-col gap-4 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.d}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group flex items-start gap-4 lg:gap-6"
              >
                {/* Step indicator */}
                <div className="relative shrink-0 flex flex-col items-center w-12 lg:w-[4.7rem]">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300 z-10">
                    <s.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <span className="mt-1 text-[9px] lg:text-[10px] font-mono font-bold text-primary/60">
                    {s.d}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2 pt-1">
                  <h3 className="font-display text-base lg:text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Day badge — md+ only */}
                <span className="hidden md:block shrink-0 text-xs font-mono text-muted-foreground/50 pt-2 whitespace-nowrap">
                  Día {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trademark note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-xs text-muted-foreground/50 font-mono"
        >
          Método 7D™ es una metodología propietaria de GamaAgostinelli Studio.
        </motion.p>
      </div>
    </section>
  );
};

export default Method;

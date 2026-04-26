import { motion } from "framer-motion";
import { PawPrint, Stethoscope, Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    icon: Stethoscope,
    tag: "Clínicas Dentales",
    headline: "Tus sillones llenos.\nSin depender de recomendaciones.",
    pain: "Tu clínica hace un gran trabajo… pero los pacientes nuevos no llegan solos. Sin presencia digital optimizada, competís con clínicas que aparecen primero en Google y tienen agenda llena.",
    solution: "Diseñamos landings específicas para dentales que captan pacientes para implantes, ortodoncia y estética dental — con formularios que convierten y CTAs pensados para el paciente que está buscando ahora mismo.",
    points: [
      "Copy orientado a tratamientos premium (implantes, brackets, blanqueamiento)",
      "Captación de pacientes nuevos desde Google y redes",
      "Integración directa con WhatsApp y agenda online",
      "Prueba social: antes/después, reseñas, credenciales",
    ],
    accent: "from-sky-500/15 to-sky-900/5",
    accentBorder: "hover:border-sky-500/40",
    accentIcon: "bg-sky-500/10 text-sky-400",
    cta: "#contacto",
  },
  {
    icon: PawPrint,
    tag: "Clínicas Veterinarias",
    headline: "Más citas, menos ausencias.\nAgenda que se llena sola.",
    pain: "Los dueños de mascotas buscan en Google y eligen la primera clínica que transmite confianza. Si tu web no convierte esa búsqueda en cita, la cita va a tu competencia.",
    solution: "Creamos landings veterinarias con lenguaje emocional que conecta con tutores, formularios de reserva online 24/7 y recordatorios que reducen ausencias — para que tu clínica trabaje incluso cuando cerrás.",
    points: [
      "Copy emocional que conecta con el vínculo mascota-tutor",
      "Reserva online y recordatorios automáticos",
      "Urgencias 24/7 con captación fuera de horario",
      "Planes de vacunación y salud como upsell",
    ],
    accent: "from-emerald-500/15 to-emerald-900/5",
    accentBorder: "hover:border-emerald-500/40",
    accentIcon: "bg-emerald-500/10 text-emerald-400",
    cta: "#contacto",
  },
];

const Sectors = () => {
  return (
    <section
      id="sectores"
      className="py-16 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 lg:mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              02 — Especialización
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
              Hecho específicamente{" "}
              <span className="gradient-text italic">para tu clínica</span>.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-base lg:text-lg">
            No hacemos webs genéricas. Nos especializamos en dos nichos de salud donde conocemos el lenguaje, los códigos visuales y — sobre todo — los objetivos de conversión.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {sectors.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-5 sm:p-7 lg:p-10 rounded-2xl lg:rounded-3xl bg-gradient-to-b ${s.accent} border border-border ${s.accentBorder} transition-all duration-500 overflow-hidden`}
            >
              {/* Glow blob */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative">
                {/* Tag + icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${s.accentIcon} border border-white/5 grid place-items-center shrink-0`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary">
                    {s.tag}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight whitespace-pre-line">
                  {s.headline}
                </h3>

                {/* Pain */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  <span className="text-rose-400 font-medium">El problema: </span>
                  {s.pain}
                </p>

                {/* Solution */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  <span className="text-primary font-medium">Nuestra solución: </span>
                  {s.solution}
                </p>

                {/* Checklist */}
                <ul className="space-y-2.5 pt-5 border-t border-border mb-7">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="hero" size="default" asChild className="w-full">
                  <a href={s.cta} className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 block md:hidden lg:block" />
                    Quiero mi landing para {s.tag.toLowerCase()}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;

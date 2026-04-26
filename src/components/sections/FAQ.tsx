import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "¿Por qué confiar en GamaAgostinelli si no los conozco?",
    a: "Entendemos la duda. Por eso ofrecemos una garantía real y por escrito: si en 60 días tu clínica no recibe más pacientes nuevos, seguimos trabajando sin coste adicional. No pedimos confianza ciega — la ganamos con resultados. Podés ver proyectos reales en nuestra sección de trabajos.",
  },
  {
    q: "¿Qué pasa si no obtengo los resultados prometidos?",
    a: "Trabajamos hasta lograrlo, sin coste extra. Si en 60 días no ves un aumento real de pacientes nuevos desde tu landing, seguimos optimizando gratuitamente. No es solo marketing — está garantizado por escrito en el contrato.",
  },
  {
    q: "¿No puedo hacer esto más barato con Wix o WordPress?",
    a: "Podés. Pero una web genérica convierte al 0.5–1.5%. Las nuestras promedian 3.8%. Con 500 visitas/mes y un ticket de €120 por paciente, esa diferencia son +€1.560 extra al mes. El coste de no optimizar supera con creces el de contratar.",
  },
  {
    q: "¿Qué pasa si ya tengo una web?",
    a: "Mejor. Hacemos una auditoría gratuita de tu web actual, identificamos por qué no convierte y diseñamos una landing complementaria enfocada en captación. No la reemplazamos — la potenciamos con una máquina de generar leads específica para tu clínica.",
  },
  {
    q: "¿Cuánto tiempo tarda el proceso?",
    a: "7 días desde el briefing hasta el lanzamiento: diagnóstico (D1–D2), diseño (D3), desarrollo (D4–D5), publicación + analítica (D6–D7). Si no cumplimos el plazo, aplicamos un descuento automático sin que tengas que pedirlo.",
  },
  {
    q: "¿Necesito conocimientos técnicos para gestionar la landing?",
    a: "Ninguno. Te entregamos todo listo: hosting configurado, analítica activa, formularios conectados a tu WhatsApp o email. Incluimos 30 días de soporte post-lanzamiento. Vos solo revisás los leads que llegan.",
  },
  {
    q: "¿En qué se diferencia de contratar un freelancer?",
    a: "Un freelancer entrega diseño. Nosotros entregamos conversión. Combinamos estrategia, copy persuasivo, diseño UI/UX, desarrollo técnico y analítica en un solo sistema con garantía de resultados. Un freelancer no puede garantizar pacientes — nosotros sí.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left: header + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-primary">
              Dudas frecuentes
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Respuestas que{" "}
              <span className="gradient-text italic">cierran ventas</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Las preguntas que todos tienen pero pocos hacen — y las respuestas
              honestas que necesitás antes de decidir.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                <a href="#contacto" className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Agendar llamada gratuita
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                Sin compromiso · Respuesta en menos de 24h
              </p>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col divide-y divide-border"
          >
            {faqs.map((f, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                    {f.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-border bg-secondary/50 grid place-items-center mt-0.5 group-hover:border-primary/50 transition-colors">
                    {open === i
                      ? <Minus className="w-3.5 h-3.5 text-primary" />
                      : <Plus className="w-3.5 h-3.5 text-muted-foreground" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm text-muted-foreground leading-relaxed pr-4 sm:pr-10">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

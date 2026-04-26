import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useColorTheme } from "@/hooks/useColorTheme";

const BG: Record<string, string> = {
  mint: "/herofinal2.png",
};

const Hero = () => {
  const { colorTheme } = useColorTheme();
  const bgSrc = BG[colorTheme] ?? "/herobg.jpg";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background image — swaps with color theme */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={bgSrc}
            src={bgSrc}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Gradient: heavy dark on left for text, fades right to show mockups */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        {/* Bottom fade for smooth section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-mono uppercase tracking-widest mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            Solo 3 cupos disponibles — Mayo 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance"
          >
            Convierte tráfico
            <br />
            en <span className="gradient-text italic">ingresos</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl lg:text-2xl font-display font-semibold text-foreground/80"
          >
            Landing pages hechas para vender.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Tu clínica recibe{" "}
            <span className="text-foreground font-semibold">
              20–50 pacientes nuevos en 60 días
            </span>{" "}
            — o seguimos trabajando gratis hasta lograrlo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar llamada gratuita
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Sin compromiso · Respuesta en menos de 24h
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:col-span-4 grid grid-cols-2 gap-4"
        >
          {[
            { num: "+120", label: "Landings entregadas" },
            { num: "98%", label: "Clientes satisfechos" },
            { num: "3.4x", label: "Conversión promedio" },
            { num: "7d", label: "Entrega media" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-card/60 border border-border backdrop-blur-sm"
            >
              <div className="font-display text-3xl font-bold text-foreground">
                {s.num}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

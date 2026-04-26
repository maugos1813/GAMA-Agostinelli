import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const CURRENT_CR = 0.012;   // 1.2% industry avg
const OPTIMIZED_CR = 0.038; // 3.8% GA avg

const fmt = (n: number) =>
  n.toLocaleString("es-ES", { maximumFractionDigits: 0 });

const RoiCalculator = () => {
  const [visits, setVisits] = useState(500);
  const [ticket, setTicket] = useState(120);

  const currentPatients = Math.round(visits * CURRENT_CR);
  const optimizedPatients = Math.round(visits * OPTIMIZED_CR);
  const extraPatients = optimizedPatients - currentPatients;
  const extraMonthly = extraPatients * ticket;
  const extraAnnual = extraMonthly * 12;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            Calculadora de ROI
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Esto es lo que estás{" "}
            <span className="gradient-text italic">perdiendo cada mes</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-base lg:text-lg">
            Sin una landing optimizada, cada visita que no convierte es dinero que se va a tu competencia. Calculá el impacto real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-5 lg:gap-6"
        >
          {/* Inputs */}
          <div className="p-5 sm:p-8 rounded-2xl lg:rounded-3xl bg-gradient-card border border-border flex flex-col gap-6 lg:gap-8">
            <h3 className="font-display text-xl font-semibold">
              Tu situación actual
            </h3>

            {/* Visits slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <label className="text-sm text-muted-foreground">
                  Visitas web al mes
                </label>
                <span className="font-display font-bold text-lg text-foreground">
                  {fmt(visits)}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={visits}
                onChange={(e) => setVisits(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
              />
              <div className="flex justify-between text-xs text-muted-foreground/60">
                <span>100</span><span>5.000</span>
              </div>
            </div>

            {/* Ticket slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <label className="text-sm text-muted-foreground">
                  Ticket medio por paciente
                </label>
                <span className="font-display font-bold text-lg text-foreground">
                  €{fmt(ticket)}
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={500}
                step={10}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
              />
              <div className="flex justify-between text-xs text-muted-foreground/60">
                <span>€50</span><span>€500</span>
              </div>
            </div>

            {/* Reference rates */}
            <div className="pt-4 border-t border-border grid grid-cols-1 xs:grid-cols-2 gap-3 text-center">
              <div>
                <p className="text-xs text-muted-foreground">Conversión media del sector</p>
                <p className="font-display font-bold text-rose-400 mt-1">1.2%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Conversión media GamaAgostinelli</p>
                <p className="font-display font-bold text-primary mt-1">3.8%</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="p-5 sm:p-8 rounded-2xl lg:rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent flex flex-col gap-5 lg:gap-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl font-semibold">
                Tu potencial sin explotar
              </h3>
            </div>

            {/* Patients comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-background/50 border border-border text-center">
                <p className="text-xs text-muted-foreground mb-1">Ahora</p>
                <p className="font-display text-3xl font-bold text-muted-foreground">
                  {currentPatients}
                </p>
                <p className="text-xs text-muted-foreground mt-1">pacientes/mes</p>
              </div>
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 text-center">
                <p className="text-xs text-primary mb-1">Con tu landing</p>
                <p className="font-display text-3xl font-bold text-foreground">
                  {optimizedPatients}
                </p>
                <p className="text-xs text-muted-foreground mt-1">pacientes/mes</p>
              </div>
            </div>

            {/* Key metrics */}
            <div className="space-y-3">
              {/* Loss framing — emotional anchor */}
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 flex justify-between items-center">
                <span className="text-xs text-rose-400 font-medium">Pacientes perdidos/mes ahora</span>
                <span className="font-display font-bold text-rose-400 text-lg">
                  −{extraPatients}
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-border">
                <span className="text-sm text-muted-foreground">Ingresos que no entran / mes</span>
                <span className="font-display font-bold text-rose-400 text-lg">
                  −€{fmt(extraMonthly)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-border">
                <span className="text-sm text-muted-foreground">Pérdida estimada / año</span>
                <span className="font-display font-bold text-rose-400 text-xl">
                  −€{fmt(extraAnnual)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5">
                <span className="text-sm font-medium text-foreground">Con tu landing → ganás / año</span>
                <span className="font-display font-bold text-2xl text-primary">
                  +€{fmt(extraAnnual)}
                </span>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild className="mt-auto w-full">
              <a href="#contacto" className="flex items-center justify-center gap-2">
                Quiero estos resultados
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground/50 mt-6">
          Estimación basada en datos promedio del sector salud. Los resultados reales pueden variar.
        </p>
      </div>
    </section>
  );
};

export default RoiCalculator;

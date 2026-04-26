import { motion } from "framer-motion";
import { X, Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const rows = [
  { aspect: "Objetivo principal",  traditional: "Informar",               optimized: "Convertir visitas en clientes" },
  { aspect: "Foco",                traditional: "Múltiples páginas",      optimized: "Un único objetivo claro" },
  { aspect: "CTA",                 traditional: "Difuso o ausente",       optimized: "Estratégico y guiado" },
  { aspect: "Conversión media",    traditional: "0.5 – 1.5%",            optimized: "3 – 8%" },
  { aspect: "Velocidad de carga",  traditional: "3 – 8 segundos",        optimized: "< 1.5 segundos" },
  { aspect: "Optimización",        traditional: "Estática, sin datos",    optimized: "Continua con A/B testing" },
  { aspect: "SEO técnico",         traditional: "Básico o inexistente",   optimized: "Estructurado para posicionar" },
  { aspect: "ROI medible",         traditional: "Difícil de calcular",    optimized: "Medido desde el día 1" },
];

const Comparison = () => {
  return (
    <section className="py-16 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] lg:w-[700px] h-[200px] lg:h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            La diferencia que importa
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Web tradicional vs{" "}
            <span className="gradient-text italic">landing optimizada</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-base lg:text-lg">
            No es magia. Es estructura, datos y un objetivo claro.
          </p>
        </motion.div>

        {/* ── DESKTOP TABLE (md+) ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block rounded-3xl border border-border overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-secondary/60">
            <div className="p-4 lg:p-5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Aspecto
            </div>
            <div className="p-4 lg:p-5 text-sm font-semibold text-muted-foreground border-l border-border text-center">
              Web tradicional
            </div>
            <div className="p-4 lg:p-5 text-sm font-semibold text-primary border-l border-border text-center bg-primary/5">
              Landing GamaAgostinelli
            </div>
          </div>

          {/* Table rows */}
          {rows.map((r, i) => (
            <div
              key={r.aspect}
              className={`grid grid-cols-[1.2fr_1fr_1fr] border-t border-border ${
                i % 2 === 0 ? "bg-background" : "bg-secondary/20"
              }`}
            >
              <div className="p-4 lg:p-5 text-sm font-medium text-foreground/80 flex items-center">
                {r.aspect}
              </div>
              <div className="p-4 lg:p-5 border-l border-border flex items-center justify-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span className="text-sm text-muted-foreground text-center">
                  {r.traditional}
                </span>
              </div>
              <div className="p-4 lg:p-5 border-l border-border bg-primary/5 flex items-center justify-center gap-2">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-sm text-foreground font-medium text-center">
                  {r.optimized}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── MOBILE CARDS (< md) ──────────────────────────────────── */}
        <div className="md:hidden space-y-3">
          {/* Column labels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-3 px-1"
          >
            <div className="text-center">
              <span className="text-xs font-semibold text-muted-foreground">
                Web tradicional
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs font-semibold text-primary">
                Landing GamaAgostinelli
              </span>
            </div>
          </motion.div>

          {rows.map((r, i) => (
            <motion.div
              key={r.aspect}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border overflow-hidden"
            >
              {/* Aspect label */}
              <div className="px-4 py-2 bg-secondary/60 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {r.aspect}
              </div>

              {/* Two-column comparison */}
              <div className="grid grid-cols-2">
                {/* Traditional */}
                <div className="p-3 flex items-start gap-2 border-r border-border bg-background">
                  <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground leading-snug">
                    {r.traditional}
                  </span>
                </div>
                {/* Optimized */}
                <div className="p-3 flex items-start gap-2 bg-primary/5">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground font-medium leading-snug">
                    {r.optimized}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-col items-center gap-2">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <a href="#contacto" className="flex items-center justify-center gap-2">
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

export default Comparison;

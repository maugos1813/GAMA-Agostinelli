import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import vet1 from "/vet1.png";

// Reemplazá cada `image` con el path real del screenshot y `demo` con la URL de la landing
const projects = [
  {
    title: "Clínica Dental Sonría",
    tag: "Clínica Dental",
    image: null,
    demo: "#",
    metrics: ["+440% leads", "de 1.2% → 4.8% conv."],
  },
  {
    title: "Veterinaria PetCare",
    tag: "Veterinaria",
    image: vet1,
    demo: "https://gama-clinic-boost.lovable.app/",
    metrics: ["+65 citas/mes", "Carga < 0.8s"],
  },
  {
    title: "Centro Odontológico Norte",
    tag: "Clínica Dental",
    image: null,
    demo: "#",
    metrics: ["4.2x ROI en 60d", "3x más llamadas"],
  },
];

const PlaceholderScreen = ({ title }: { title: string }) => (
  <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex flex-col items-center justify-center gap-3 select-none">
    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
      <span className="text-primary text-lg font-bold font-display">G</span>
    </div>
    <div className="space-y-1.5 text-center px-6">
      <div className="h-2 w-32 rounded bg-primary/20 mx-auto" />
      <div className="h-1.5 w-24 rounded bg-border mx-auto" />
      <div className="h-1.5 w-28 rounded bg-border mx-auto" />
    </div>
    <div className="flex gap-2 mt-2">
      <div className="h-5 w-16 rounded-full bg-primary/30" />
      <div className="h-5 w-14 rounded-full bg-border" />
    </div>
    <p className="text-[10px] text-muted-foreground mt-2 font-mono">
      {title}
    </p>
  </div>
);

const Portfolio = () => {
  return (
    <section className="py-16 lg:py-32 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            03 — Trabajos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Landings que ya{" "}
            <span className="gradient-text italic">están vendiendo</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-xl">
            Mirá algunos de los proyectos que diseñamos y desarrollamos para clínicas como la tuya.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group rounded-3xl border border-border bg-gradient-card overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(190_95%_50%/0.08)]"
            >
              {/* Preview image */}
              <div className="relative h-52 overflow-hidden bg-secondary">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`Preview de ${p.title}`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderScreen title={p.title} />
                )}

                {/* Browser bar overlay */}
                <div className="absolute top-0 inset-x-0 h-6 bg-background/80 backdrop-blur-sm border-b border-border flex items-center px-3 gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400/70" />
                  <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
                  <div className="ml-2 flex-1 h-3 rounded bg-border/60 max-w-[120px]" />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-1">
                      {p.tag}
                    </span>
                    <h3 className="font-display font-semibold text-base text-foreground">
                      {p.title}
                    </h3>
                  </div>
                  <Button variant="outlineHero" size="sm" asChild className="shrink-0">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      Ver demo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>

                {/* Metrics */}
                <div className="flex gap-2 flex-wrap">
                  {p.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import { motion } from "framer-motion";
import { FileSearch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadMagnet = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 p-5 sm:p-7 lg:p-10 rounded-2xl lg:rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/15 grid place-items-center shrink-0">
              <FileSearch className="w-7 h-7 text-primary" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                Gratis — Sin compromiso
              </span>
              <h3 className="mt-1 font-display text-2xl lg:text-3xl font-bold text-foreground">
                Auditoría gratuita de tu web
              </h3>
              <p className="mt-2 text-muted-foreground max-w-lg">
                Analizamos tu web actual y te decimos exactamente por qué no convierte —
                con un informe claro y accionable. Sin humo, sin venderte nada.
              </p>
            </div>
          </div>

          <Button variant="hero" size="xl" asChild className="shrink-0 w-full md:w-auto">
            <a href="#contacto" className="flex items-center gap-2">
              Quiero mi auditoría
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnet;

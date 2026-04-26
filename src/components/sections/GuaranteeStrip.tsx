import { motion } from "framer-motion";
import { Users, Clock, ShieldCheck } from "lucide-react";

const guarantees = [
  {
    icon: Users,
    title: "20–50 pacientes nuevos en 60 días",
    desc: "O seguimos trabajando sin coste adicional. Garantía real, por escrito, en el contrato.",
  },
  {
    icon: Clock,
    title: "Landing lista en 7 días exactos",
    desc: "Si no cumplimos el plazo, aplicás un descuento automático. Sin que tengas que pedirlo.",
  },
  {
    icon: ShieldCheck,
    title: "30 días de garantía total",
    desc: "Si no estás satisfecho por cualquier motivo, te devolvemos cada euro. Sin preguntas.",
  },
];

const GuaranteeStrip = () => {
  return (
    <section className="py-8 lg:py-10 border-y border-border bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center shrink-0">
                <g.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-foreground leading-snug">
                  {g.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeStrip;

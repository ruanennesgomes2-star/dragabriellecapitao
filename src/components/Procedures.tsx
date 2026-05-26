import { motion } from "motion/react";
import { Sparkles, Droplets, Heart } from "lucide-react";

const procedures = [
  {
    icon: Sparkles,
    title: "Harmonização Facial",
    description: "Equilíbrio e proporção desenhados sob medida para realçar os seus traços naturais com extrema sutileza.",
  },
  {
    icon: Droplets,
    title: "Toxina Botulínica",
    description: "Suavização de linhas de expressão preservando a naturalidade dos seus movimentos e a sua identidade.",
  },
  {
    icon: Heart,
    title: "Bioestimuladores",
    description: "Protocolos avançados para o estímulo de colágeno, promovendo firmeza, viço e um rejuvenescimento duradouro.",
  }
];

export function Procedures() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-white relative border-y border-white/5 overflow-hidden">
      {/* Soft spotlight behind cards */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-serif mb-6 leading-tight"
          >
            Protocolos <span className="italic text-secondary">Premium</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-white/80 text-lg font-light"
          >
            Nossas abordagens unem ciência, arte e tecnologia de ponta para proporcionar resultados incomparáveis.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pl-0">
          {procedures.map((proc, index) => {
            const Icon = proc.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group p-10 bg-white/5 border border-white/10 hover:border-secondary/50 hover:bg-white/10 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center backdrop-blur-sm"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/0 via-secondary/0 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="mb-8 p-4 rounded-full bg-primary/80 text-secondary border border-secondary/20 group-hover:scale-110 transition-transform duration-500">
                  <Icon strokeWidth={1.5} className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-serif mb-4 relative z-10">{proc.title}</h3>
                <p className="text-white/70 font-light leading-relaxed relative z-10">
                  {proc.description}
                </p>

                <div className="mt-8 w-8 h-[1px] bg-secondary/50 group-hover:w-16 transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

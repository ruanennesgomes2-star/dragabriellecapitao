import { motion } from "motion/react";
import { ShieldCheck, UserCheck, Star, Sparkles } from "lucide-react";

export function Differentials() {
  const diffs = [
    {
      title: "Atendimento Humanizado",
      desc: "Uma escuta atenta aos seus desejos, respeitando seu momento e sua individualidade.",
      icon: UserCheck
    },
    {
      title: "Tecnologia de Ponta",
      desc: "Equipamentos de última geração e os melhores produtos do mercado mundial.",
      icon: ShieldCheck
    },
    {
      title: "Exclusividade",
      desc: "Protocolos desenhados sob medida. Não existem duas faces iguais em nossa clínica.",
      icon: Star
    },
    {
      title: "Sofisticação",
      desc: "Um ambiente intimista, elegante e preparado para oferecer o máximo de conforto.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#2d0910] text-white relative border-y border-white/5 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {diffs.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/20 backdrop-blur-sm border border-white/5 hover:border-secondary/40 transition-all duration-700 shadow-xl shadow-black/20 group"
                >
                  <Icon strokeWidth={1} className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-xl font-serif text-white mb-3">{diff.title}</h3>
                  <p className="text-white/70 font-light text-sm leading-relaxed">
                    {diff.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                A Experiência <span className="italic text-secondary">Gabrielle Capitão</span>
              </h2>
              <div className="w-12 h-[1px] bg-secondary mb-8"></div>
              <p className="text-white/80 font-light text-lg leading-relaxed mb-8">
                Acreditamos que a verdadeira beleza reside na harmonia e na discrição. Nossa clínica foi concebida para ser um oásis de sofisticação, entregando não apenas resultados estéticos de altíssima qualidade, mas uma jornada de autocuidado inesquecível.
              </p>
              <p className="text-white/80 font-light text-lg leading-relaxed">
                Cada detalhe, desde o momento em que você entra até o acompanhamento pós-procedimento, é pensado para superar as expectativas dos pacientes mais exigentes.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";

const cases = [
  {
    title: "Meu rosto parece cansado e sem expressão",
    description: "Com o passar do tempo, a perda natural de colágeno e sustentação pode deixar a face com aparência cansada, envelhecida e sem vitalidade.",
  },
  {
    title: "Já realizei procedimentos que perderam a naturalidade",
    description: "Alguns procedimentos antigos podem gerar excesso de volume, assimetrias ou resultados que já não combinam mais com sua aparência atual.",
  },
  {
    title: "Quero melhorar minha aparência sem perder naturalidade",
    description: "Muitos pacientes desejam resultados mais leves, elegantes e harmônicos, valorizando sua beleza natural.",
  },
  {
    title: "Sinto que meu sorriso não combina mais comigo",
    description: "Desgastes dentários, alterações estéticas e mudanças naturais podem impactar diretamente na confiança ao sorrir.",
  }
];

export function Cases() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#661828]/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
          
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-40 flex flex-col justify-start">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-6"
            >
              Situações que <span className="text-secondary">tratamos com frequência</span> no consultório
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 font-medium"
            >
              Muitos pacientes chegam até nós buscando recuperar a harmonia facial, a naturalidade do sorriso e a autoestima. <span className="font-bold text-white">Essas são algumas das queixas mais comuns:</span>
            </motion.p>
          </div>

          {/* Right Column - Plain List of Cards */}
          <div className="flex flex-col gap-6">
            {cases.map((item, index) => {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-primary/50 backdrop-blur-sm border border-secondary/40 rounded-xl p-8 lg:p-10 shadow-lg group hover:border-secondary/70 transition-colors duration-300"
                >
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed text-base md:text-lg">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

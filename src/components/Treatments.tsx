import { motion } from "motion/react";

const treatments = [
  {
    title: "Reabilitação com Resinas Compostas de Alta Performance",
    description: "Uma técnica avançada que permite reconstruir dentes desgastados preservando a estrutura natural, devolvendo estética e função.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    title: "Lentes de Contato Dental em Porcelana",
    description: "Fragmentos cerâmicos ultrafinos projetados para corrigir cor, formato e alinhamento dos dentes com máxima durabilidade e brilho natural.",
    image: "https://images.unsplash.com/photo-1598256989800-ef662ee2743a?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    title: "Implantes Dentários com Carga Imediata",
    description: "Solução definitiva para perda dental, reestabelecendo a mastigação e estética com raízes artificiais de titânio e coroas de porcelana.",
    image: "https://plus.unsplash.com/premium_photo-1664303350993-9c5950897c8d?q=80&w=1000&auto=format&fit=crop", 
  }
];

export function Treatments() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-6"
          >
            Transformando sorrisos com <span className="text-secondary">equilíbrio, naturalidade e longevidade.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 font-medium text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Cada tratamento é planejado para preservar ao máximo a estrutura dental, aliando tecnologia, estética e funcionalidade.
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`bg-black/20 backdrop-blur-md rounded-[32px] p-8 md:p-10 lg:p-12 flex flex-col items-center gap-8 lg:gap-12 shadow-2xl border border-white/10 hover:border-secondary/30 transition-colors duration-500 relative overflow-hidden group ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="flex-1 text-left w-full relative z-10">
                <h3 className="text-2xl md:text-4xl font-sans font-bold text-white mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-base md:text-xl font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex-1 w-full relative h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

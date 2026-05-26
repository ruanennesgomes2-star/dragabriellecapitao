import React, { useState } from "react";
import { motion } from "motion/react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    initial: "F",
    color: "bg-purple-500",
    name: "Felipe Ambrosi",
    time: "12 meses atrás",
    text: "Amamos o atendimento e retornaremos em breve. Maria está sem dor!",
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    name: "rachel dorneles",
    time: "12 meses atrás",
    text: "Gostaria de vir agradecer todo o carinho e paciência no atendimento com meu filho. Sempre foi muito difícil por ele ter medo, mas a forma que você contornou a situação deixou meu coração cheio de amor. Seremos seus eternos pacientes. Muito obrigada mesmo 🙏🏻",
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    name: "Maria Braz",
    time: "1 ano atrás",
    text: "Obrigado mesmo amiga de coração Tô tão feliz, tô sentindo diferença em meus dentes Isso graças a vc que me conquistou Isso está me deixando super bem, todo dia eu olho no espelho um pouquinho",
  },
  {
    initial: "V",
    color: "bg-gray-600",
    name: "Vitoria Almeida",
    time: "1 ano atrás",
    text: "Aqui eu esqueci de todos meus problemas, dou altas risadas e acabo conversando mais que tudo ao ponto de ultrapassar nosso horário. aquele momento de paz, de amizade sincera de saber que eu estou lidando com uma pessoa maravilhosa e que me trata com todo carinho do mundo e por fim que sempre minha felicidade. Obrigada amiga por tudo, principalmente pela paciência que tem comigo. Tá doendo, mas eu tô amando tudinhoooo kkkk eu estou amando vendo meus dentinhos entrando em ordem. Que Deus abençoe essa sua trajetória, que você brilhe todo instante que esse dom é seu. Te amo",
  }
];

function ReviewCard({ review, index }: { key?: React.Key; review: any; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 130;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/20 relative flex flex-col"
    >
      {/* Avatar overlapping top */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className={`w-20 h-20 rounded-full border-[6px] border-white overflow-hidden shadow-sm flex items-center justify-center text-white text-2xl font-bold ${review.color || 'bg-gray-200'}`}>
          {review.image ? (
            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
          ) : (
            review.initial
          )}
        </div>
      </div>

      <div className="pt-10 flex-grow flex flex-col">
        <h3 className="text-gray-900 font-bold text-sm md:text-base mb-4">{review.name}</h3>
        
        <p className={`text-gray-600 text-sm leading-relaxed mb-4 text-left ${!expanded ? "line-clamp-5" : ""}`}>
          {review.text}
        </p>
        
        {isLong && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-secondary text-xs uppercase font-bold mt-auto hover:text-secondary/80 transition-colors"
          >
            {expanded ? "Ver menos" : "Ver mais"}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-t from-[#2d0910] via-primary to-[#3a0613] text-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#661828]/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-6"
          >
            <span className="text-secondary">Sorrisos que encantam</span> geram novas histórias
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 font-medium text-sm md:text-base max-w-3xl leading-relaxed mb-8"
          >
            Mais de 75% dos nossos pacientes chegam até nós por indicação de familiares, amigos e pessoas que confiaram em nossos cuidados.
            <br /><br />
            Esse reconhecimento é resultado de um atendimento próximo, cuidadoso e focado em entregar resultados naturais, sofisticados e duradouros.
            <br /><br />
            Porque quando o paciente se sente seguro, acolhido e satisfeito, ele compartilha sua experiência.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mt-4"
          >
            <div className="text-xl md:text-2xl font-bold tracking-widest text-white/90">
              FEEDBACKS
            </div>
            <div className="flex text-[#F4B400]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Reviews Carousel/Grid */}
        <div className="relative mb-16">
          {/* Mock Navigation Arrows (Visual only for desktop matching image) */}
          <div className="hidden lg:flex absolute top-1/2 -left-6 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg z-20 text-gray-800 cursor-pointer hover:bg-gray-100">
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg z-20 text-gray-800 cursor-pointer hover:bg-gray-100">
            <ChevronRight className="w-6 h-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.a
            href="https://wa.me/5521971783571"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold text-sm md:text-base px-8 md:px-12 py-4 md:py-5 rounded-lg shadow-[0_0_20px_rgba(170,105,73,0.4)] transition-all uppercase tracking-wider"
          >
            AGENDE SUA CONSULTA
          </motion.a>
        </div>

      </div>
    </section>
  );
}

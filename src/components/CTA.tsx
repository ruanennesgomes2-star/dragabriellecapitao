import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function CTA() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="agendar" ref={containerRef} className="py-24 lg:py-40 bg-primary text-white relative flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          style={{ y }}
          src="https://images.unsplash.com/photo-1613144574936-7c050a4d1fcd?q=80&w=2000&auto=format&fit=crop"
          alt="Consultório"
          className="w-full h-[140%] object-cover opacity-20 sepia-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d0910]/95 via-primary/90 to-[#2d0910]/95 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 leading-tight"
        >
          Desperte a sua melhor versão com
          <span className="italic text-secondary block mt-2">Dra. Gabrielle Capitão</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg md:text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto"
        >
          Agende sua avaliação e descubra um plano de tratamento exclusivo, desenhado milimetricamente para você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href="https://wa.me/5511999999999" // Use accurate number if available
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-primary px-10 py-5 group transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <span className="font-medium tracking-widest uppercase text-sm">Falar com uma Consultora</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

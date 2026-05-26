import { motion } from "motion/react";
import { Leaf, Gem, User } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary text-white pt-4 pb-20 lg:pt-0 lg:pb-0">
      {/* Elegant atmospheric glowing orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#661828]/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full mt-[-8vh] lg:mt-[-10vh]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 items-center h-full">
          
          {/* Left Content Area */}
          <div className="relative flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-2xl pt-4 lg:pt-0 z-30 order-2 lg:order-1 pb-16 lg:pb-0">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative z-10 text-5xl md:text-6xl lg:text-[76px] font-sans mb-6 mt-8 lg:mt-32 xl:mt-40 leading-[1.05] font-extrabold tracking-[-0.04em]"
            >
              O sorriso dos
              <br />
              <span className="text-[#E5B869]">seus sonhos</span>
              <br />
              começa aqui
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg md:text-[22px] text-white/95 mb-6 font-normal leading-snug max-w-xl"
            >
              Odontologia estética e especializada para transformar sua autoestima com naturalidade.
            </motion.p>

            {/* Premium Gold Separator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-[#D39A4A] to-[#F3D599] rounded-full mb-6 origin-left"
            ></motion.div>

            {/* Sub-text (italicized) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[17px] text-white/80 italic font-serif mb-12 max-w-lg leading-relaxed"
            >
              Excelência em procedimentos odontológicos, atendimento humanizado.
            </motion.p>

            {/* CTA Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-10 w-full"
            >
              <motion.a
                href="https://wa.me/5521971783571"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-[#C28C41] to-[#DCA457] hover:from-[#b07d38] hover:to-[#c9954d] text-white font-bold text-sm md:text-[15px] px-8 md:px-12 py-4 md:py-4 rounded-lg shadow-[0_4px_20px_rgba(194,140,65,0.4)] transition-all uppercase tracking-widest w-full sm:w-auto text-center"
              >
                AGENDE SUA CONSULTA
              </motion.a>
              
              {/* Features list */}
              <div className="flex flex-row items-start justify-center lg:justify-start gap-8 sm:gap-12 text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-[0.1em] w-full mt-2">
                <div className="flex flex-col items-center gap-3 text-center">
                  <Leaf className="w-[30px] h-[30px] text-[#E5B869]" strokeWidth={1.2} />
                  <span>Resultados<br/>naturais</span>
                </div>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#E5B869]/40 to-transparent mt-1 hidden sm:block"></div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <Gem className="w-[30px] h-[30px] text-[#E5B869]" strokeWidth={1.2} />
                  <span>Técnicas<br/>exclusivas</span>
                </div>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#E5B869]/40 to-transparent mt-1 hidden sm:block"></div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <User className="w-[30px] h-[30px] text-[#E5B869]" strokeWidth={1.2} />
                  <span>Planejamento<br/>individualizado</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image Area */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:relative w-full lg:w-[120%] opacity-100 z-10 pointer-events-none flex items-end justify-center lg:justify-center h-[50vh] lg:h-[100vh] origin-bottom lg:-ml-12 order-1 lg:order-2 -mb-24 lg:mb-0 transform translate-y-12 lg:translate-y-0"
          >
            {/* Logo behind photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-[35%] lg:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[120%] lg:w-[130%] -z-20 pointer-events-none opacity-20"
            >
              <img 
                src="/logodoisgabi.PNG" 
                alt="Background Logo" 
                className="w-full h-auto object-contain animate-spin-slow" 
              />
            </motion.div>

            {/* Cinematic back-glow for depth */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#541320]/20 rounded-[100%] blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>

            {/* We use a professional female portrait cut out or blending reasonably well */}
            <img
              src="/gabifoto.png"
              alt="Dra. Gabrielle Capitão"
              className="w-full h-full lg:h-[95vh] object-contain object-bottom"
              style={{
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 8%, black 100%)", 
                maskImage: "linear-gradient(to top, transparent 0%, black 8%, black 100%)",
                filter: "drop-shadow(0px -5px 15px rgba(211, 154, 74, 0.15)) drop-shadow(0px 0px 25px rgba(84, 19, 32, 0.4)) drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.15)) brightness(0.96) contrast(1.08) saturate(1.1) sepia(0.05)"
              }}
            />

            {/* Floor realistic shadow below the person */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[50%] h-[3%] bg-black/20 rounded-[100%] blur-[25px] -z-10 mix-blend-multiply opacity-30 pointer-events-none"></div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

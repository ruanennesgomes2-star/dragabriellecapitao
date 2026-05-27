import { motion } from "motion/react";

export function Authority() {
  return (
    <section className="py-24 lg:py-32 text-white bg-transparent overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#661828]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight mb-8"
            >
              Quem é a <span className="text-secondary">Dra. Gabrielle Capitão?</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="space-y-6 text-white/80 font-light leading-relaxed text-base md:text-lg lg:text-xl"
            >
              <p>
                Sou a Dra. Gabrielle Capitão, cirurgiã-dentista há 6 anos, apaixonada por transformar sorrisos e devolver autoestima através da odontologia. Desde 2021, atuo em meu consultório oferecendo um atendimento humanizado, acolhedor e individualizado, sempre priorizando o bem-estar e a confiança de cada paciente.
              </p>
              <p>
                Acredito que a odontologia vai muito além da estética: ela tem o poder de transformar vidas, elevar a autoestima e proporcionar mais qualidade de vida. Por isso, busco unir técnica, sensibilidade e naturalidade em cada tratamento realizado.
              </p>
              <p>
                Estou em constante atualização profissional, participando de cursos e especializações para oferecer tratamentos modernos, seguros e cada vez mais personalizados. Meu compromisso é proporcionar uma experiência confortável, transparente e acolhedora, fazendo com que cada paciente se sinta único e bem cuidado.
              </p>
              <p>
                Mais do que cuidar de sorrisos, meu propósito é criar conexões verdadeiras e ajudar pessoas a sorrirem com mais confiança todos os dias.
              </p>
            </motion.div>
          </div>

          {/* Image & Signature Composition */}
          <div className="relative mt-2 lg:mt-0 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full max-w-2xl lg:scale-110 lg:translate-x-4"
            >
              {/* Backlight / Depth glow */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] bg-secondary/10 rounded-full blur-[80px] -z-10 mix-blend-screen pointer-events-none"></div>

              <img loading="lazy" decoding="async"
                src="/gabiphotoum.PNG"
                alt="Dra. Gabrielle Capitão"
                className="w-full h-auto object-contain"
                style={{
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, transparent 10%, black 30%, black 100%)",
                  maskImage: "linear-gradient(to top, transparent 0%, transparent 10%, black 30%, black 100%)",
                  filter: "drop-shadow(0px -4px 12px rgba(211, 154, 74, 0.15)) drop-shadow(0px 0px 20px rgba(84, 19, 32, 0.4)) drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.15)) brightness(0.94) contrast(1.1) saturate(1.1) sepia(0.08)"
                }}
              />
              
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-end translate-y-6 md:translate-y-10 pointer-events-none z-30"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, x: -20, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, rotate: -2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.4 }}
                  className="font-signature font-bold text-7xl md:text-[6rem] lg:text-[8rem] tracking-wide text-[#D39A4A] leading-none -ml-4 md:-ml-8 lg:-ml-12 mb-2 md:mb-4 lg:mb-6"
                  style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.3)" }}
                >
                  Gabrielle
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, x: 20, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, rotate: -2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.6 }}
                  className="font-signature font-bold text-6xl md:text-[5rem] lg:text-[7rem] tracking-wide text-[#D39A4A] leading-none -ml-2 md:-ml-4 lg:-ml-8 mt-0 md:-mt-1 lg:-mt-2"
                  style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.3)" }}
                >
                  Capitão
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

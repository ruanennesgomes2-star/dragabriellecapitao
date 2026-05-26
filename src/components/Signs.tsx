import { motion } from "motion/react";
import { X, ChevronsLeftRight } from "lucide-react";
import { useState } from "react";

export function Signs() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const signs = [
    "Seu rosto parece mais cansado do que você se sente",
    "Linhas de expressão e rugas começaram a se acentuar",
    "Procedimentos antigos já não têm a mesma naturalidade",
    "Existe receio de fazer tratamentos e ficar com aspecto artificial",
    "A perda de contorno e a flacidez começaram a incomodar"
  ];

  return (
    <section className="py-24 lg:py-32 bg-primary text-white overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Interactive Image Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-2xl"
          >
            {/* After Image (Background - Good teeth) */}
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
              alt="Depois - Sorriso Perfeito"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Before Image (Foreground) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Slider Handle/Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-secondary pointer-events-none flex items-center justify-center z-10"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] border-2 border-white/20">
                <ChevronsLeftRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Invisible Range Input for Interaction */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition} 
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 [&::-webkit-slider-thumb]:w-[40px] [&::-webkit-slider-thumb]:h-[40px]"
              aria-label="Controle de comparação de imagem"
            />

            {/* Labels */}
            <div 
              className="absolute bottom-4 left-4 bg-secondary/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full pointer-events-none transition-opacity duration-300 z-10 uppercase tracking-widest"
              style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
            >
              Antes
            </div>
            <div 
              className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-md text-secondary border border-secondary/30 text-xs font-bold px-4 py-2 rounded-full pointer-events-none transition-opacity duration-300 z-10 uppercase tracking-widest"
              style={{ opacity: sliderPosition < 85 ? 1 : 0 }}
            >
              Depois
            </div>
          </motion.div>

          {/* Right: Texts and list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl lg:text-4xl font-sans font-bold mb-8 leading-tight">
              Talvez você já tenha <span className="text-secondary italic font-serif text-4xl lg:text-5xl">percebido</span> alguns desses sinais:
            </h2>

            <ul className="space-y-4 mb-8">
              {signs.map((sign, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center border border-red-500/30">
                    <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                  </span>
                  <span className="text-white/90 font-medium">{sign}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/80 font-light leading-relaxed text-base lg:text-lg">
              Muitas pessoas chegam ao consultório com exatamente essa sensação: <span className="font-bold text-white">"Meu reflexo no espelho já não acompanha quem eu sou hoje."</span> Isso acontece porque ao longo dos anos a face sofre alterações estruturais e estéticas que, quando não tratadas corretamente, comprometem <span className="font-bold text-white">a harmonia, a confiança e a qualidade de vida.</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

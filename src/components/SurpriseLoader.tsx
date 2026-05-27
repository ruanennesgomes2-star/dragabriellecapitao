import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import { BalloonBackground } from "./BalloonBackground";

export function SurpriseLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Animate the content in after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling while the surprise loader is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="surprise-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Balloon interactive background */}
          <BalloonBackground />

          {/* Golden glow overlay on top of balloons */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none z-[1]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#D39A4A]/10 rounded-full blur-[120px] pointer-events-none z-[2]" />



          <div className="relative z-[10] flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto">
            
            {/* The Message */}
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >


                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    Parabéns, <br />
                    <span className="text-[#D39A4A] bg-clip-text text-transparent bg-gradient-to-r from-[#D39A4A] to-[#F3C47A]">
                      Gabiii!!
                    </span>
                  </h1>
                  
                  <div className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed space-y-4">
                    <p>
                      Te desejo muita paz, amor, saúde, felicidade e muito dinheiro 💛<br />
                      Que Deus continue abençoando a sua vida e a do Gabriel.
                    </p>
                    <p>
                      Obrigado por ser essa amiga tão gente boa, sem filtro, divertida e parceira. E, por favor, nunca perca essa sua mania de postar suas revoltas nos status… 😂
                    </p>
                    <p className="font-medium text-white pt-4">
                      Esse aqui é o meu presente pra você 👇
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(211,154,74,0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsVisible(false)}
                    className="group relative px-10 py-5 bg-gradient-to-r from-[#D39A4A] to-[#C08535] text-white rounded-full font-bold text-lg tracking-widest uppercase overflow-hidden shadow-[0_0_20px_rgba(211,154,74,0.4)] transition-all"
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                    <span className="relative z-10 flex items-center justify-center">
                      Abrir surpresa
                    </span>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronsLeftRight } from "lucide-react";

type Category = {
  id: string;
  name: string;
};

type Case = {
  id: number;
  categoryId: string;
  beforeImg: string;
  afterImg: string;
};

const categories: Category[] = [
  { id: "facetas", name: "FACETAS EM PORCELANA" },
  { id: "coroas", name: "COROAS EM PORCELANA" },
  { id: "lentes", name: "LENTES EM PORCELANA" },
  { id: "protocolo", name: "PROTOCOLO DE IMPLANTES" },
  { id: "restauros", name: "RESTAUROS EM RESINA" },
  { id: "coroa_implante", name: "COROA DE PORCELANA SOBRE IMPLANTE" },
  { id: "lentes_resina", name: "LENTES EM RESINA" },
];

const mockCases: Case[] = [
  // Facetas
  { id: 1, categoryId: "facetas", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  { id: 2, categoryId: "facetas", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  
  // Coroas
  { id: 3, categoryId: "coroas", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  
  // Lentes
  { id: 4, categoryId: "lentes", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  { id: 5, categoryId: "lentes", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  
  // Protocolo
  { id: 6, categoryId: "protocolo", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  
  // Restauros
  { id: 7, categoryId: "restauros", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  
  // Coroa sobre Implante
  { id: 8, categoryId: "coroa_implante", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  { id: 9, categoryId: "coroa_implante", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
  
  // Lentes Resina
  { id: 10, categoryId: "lentes_resina", beforeImg: "/antesone.png", afterImg: "/depoisone.png" },
];

function BeforeAfterSlider({ caseData }: { caseData: Case; key?: string | number }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden shadow-2xl border border-secondary/20">
      {/* After Image (Background) */}
      <img loading="lazy" decoding="async"
        src={caseData.afterImg}
        alt="Depois do procedimento"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (Foreground) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img loading="lazy" decoding="async"
          src={caseData.beforeImg}
          alt="Antes do procedimento"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-secondary pointer-events-none flex items-center justify-center z-10"
        style={{ left: `calc(${sliderPosition}%)` }}
      >
        <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg border-2 border-white/30">
          <ChevronsLeftRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Invisible Range Input */}
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
      <div className="absolute bottom-4 left-4 bg-secondary text-white text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full pointer-events-none shadow-md uppercase tracking-wider z-20">
        Antes
      </div>
      <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-secondary border border-secondary/40 text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full pointer-events-none shadow-md uppercase tracking-wider z-20">
        Depois
      </div>
    </div>
  );
}

export function CasesGallery() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const filteredCases = mockCases.filter(c => c.categoryId === activeTab);

  return (
    <section className="py-24 lg:py-32 text-white bg-transparent relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold leading-tight"
          >
            Nossos <span className="text-secondary">Casos</span>
          </motion.h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16">
          
          {/* Sidebar Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {categories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`w-full text-center lg:text-left px-6 py-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 uppercase ${
                    isActive 
                      ? 'bg-secondary text-white shadow-lg scale-[1.02]' 
                      : 'bg-white text-primary hover:bg-white/90'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Gallery Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredCases.map((caseItem) => (
                  <BeforeAfterSlider key={caseItem.id} caseData={caseItem} />
                ))}
                {filteredCases.length === 0 && (
                  <div className="col-span-full py-12 text-center text-white/50">
                    Nenhum caso cadastrado nesta categoria ainda.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

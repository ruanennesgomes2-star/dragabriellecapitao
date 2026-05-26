/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { Signs } from "./components/Signs";
import { Cases } from "./components/Cases";
import { Authority } from "./components/Authority";
import { Treatments } from "./components/Treatments";
import { CasesGallery } from "./components/CasesGallery";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-primary text-white selection:bg-secondary/30 selection:text-white">
      <Hero />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent relative z-50" />
      <Treatments />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent relative z-50" />
      <CasesGallery />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent relative z-50" />
      <Cases />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent relative z-50" />
      <Signs />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent relative z-50" />
      <Authority />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent relative z-50" />
      <Testimonials />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent relative z-50" />
      <Footer />
    </main>
  );
}

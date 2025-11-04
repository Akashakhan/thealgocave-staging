"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import HalftonePatternComponent from "./HalftonePatternComponent";
import Image from 'next/image';
import ContactModal from "./ContactModal";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const backgroundColor = "#ffffff";
  
  const getTextColor = (bgColor: string) => {
    const normalizedColor = bgColor.toLowerCase().trim();
    
    if (normalizedColor === '#ffffff' || normalizedColor === 'white' || normalizedColor === '#fff') {
      return 'text-black';
    }
    if (normalizedColor === '#000000' || normalizedColor === 'black' || normalizedColor === '#000') {
      return 'text-white';
    }
    
    return normalizedColor.includes('fff') || normalizedColor.includes('white') 
      ? 'text-black' 
      : 'text-white';
  };
  
  const textColorClass = getTextColor(backgroundColor);

  return (
    <section className="relative min-h-screen text-white bg-white overflow-hidden">
      <div className="absolute inset-0">      
        <HalftonePatternComponent
          density={52}
          size={60}
          intensity={10}
          speed={2}
          backgroundColor={backgroundColor}
          foregroundColor="#000000"
          isAnimated={true}
          dotShape="square"
          animationEffect="quantum_entanglement"
          mouseInteractive={true}
          morphing={false}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 md:px-6 py-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/algoLogo.svg" alt="Logo" width={150} height={42} className="md:w-[215px] md:h-[60px]" />
        </div>

        {/* Book a Call Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-800 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors text-sm md:text-base"
        >
          <span>Book a Call</span>
          <div>I</div>
          <Image src="/arrow.svg" alt="Arrow Right" width={16} height={16} />
        </button>
      </header>

      {/* Main Content */}
      <div id="inverted-color" className={`relative z-10 ${textColorClass} px-4 md:px-20 justify-self-center`}>
        <div className="text-start">
          <h1 className="text-[4rem] md:text-[9rem] mb-4">
            TH<span style={{ fontFamily: "Gridular" }}>E</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3 content-center text-center md:text-left">(WELCOME)</div>
          <h1 className="md:col-span-9 text-[4rem] md:text-[9rem] mb-4 text-center md:text-left">
            AL<span style={{ fontFamily: "Gridular" }}>G</span>O
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 content-center text-center md:text-left">
            <Image src="/heroText.svg" alt="hero" width={400} height={100} className="mx-auto md:mx-0" />
          </div>
          <h1 className="md:col-span-6 text-[4rem] md:text-[9rem] mb-4 text-center md:text-left">
            C<span style={{ fontFamily: "Gridular" }}>A</span>VE
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="grid grid-cols-1 md:grid-cols-12 pb-8">
        <div className="md:col-span-6"></div>
        <div className="md:col-span-6">
          <div className={`flex flex-col items-center space-y-2 ${textColorClass}`}>
          <ChevronDownIcon className="w-5 h-5 animate-bounce" />
            <div className={`${textColorClass} text-sm z-10`}>SCROLL MORE</div>
           
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}

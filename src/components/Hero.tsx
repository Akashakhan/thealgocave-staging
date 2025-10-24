"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import HalftonePatternComponent from "./HalftonePatternComponent";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white bg-white overflow-hidden">
      <div className="absolute inset-0">      
        <HalftonePatternComponent
          density={80}
          size={32}
          intensity={80}
          speed={2.8}
          backgroundColor="#000000"
          foregroundColor="#ffffff"
          isAnimated={true}
          dotShape="square"
          mouseInteractive={true}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/algoLogo.svg" alt="Logo" width={215} height={60} />
        </div>

        {/* Book a Call Button */}
        <button className="bg-gray-800 text-white px-6 py-4 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
          <span>Book a Call</span>
          <div>I</div>
          <Image src="/arrow.svg" alt="Arrow Right" width={16} height={16} />
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 text-white px-20 justify-self-center">
        <div className="text-start">
          <h1 className="text-[9rem] mb-4">
            TH<span style={{ fontFamily: "Gridular" }}>E</span>
          </h1>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 content-center">(WELCOME)</div>
          <h1 className="col-span-9 text-[9rem] mb-4">
            AL<span style={{ fontFamily: "Gridular" }}>G</span>O
          </h1>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-6 content-center">
            <Image src="/heroText.svg" alt="hero" width={400} height={100} />
          </div>
          <h1 className="col-span-6 text-[9rem] mb-4">
            C<span style={{ fontFamily: "Gridular" }}>A</span>VE
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="grid grid-cols-12 pb-8">
        <div className="col-span-6"></div>
        <div className="col-span-6">
          <div className="flex flex-col items-center space-y-2 text-white">
          <ChevronDownIcon className="w-5 h-5 animate-bounce" />
            <div className="text-white text-sm z-10">SCROLL MORE</div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

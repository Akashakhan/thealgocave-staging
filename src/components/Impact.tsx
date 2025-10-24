"use client";

import Image from 'next/image';

export default function Impact() {
  const metrics = [
    { value: "10B SEK", label: "Savings delivered across projects" },
    { value: "12 ms", label: "Average latency reduction" },
    { value: "250 mm", label: "Queries served monthly" },
  ];


  return (
    <section className="bg-[#1A1C1F] text-white py-10 md:py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3 opacity-50 text-center md:text-left">OUR NUMBERS</div>
        <div className="md:col-span-9">
          <div className="text-3xl md:text-7xl opacity-50 tracking-[-3px] mb-8">
            We go beyond data and AI consulting turning strategy into execution
            that delivers measurable impact
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between pb-8 pt-8 md:pt-16 gap-8">
            <div className="flex flex-col justify-between w-full">
              <div className="text-gray-300 text-sm md:text-base">{metrics[0].label}</div>
              <div className="text-blue-400 text-[4rem] md:text-[9rem]" style={{ lineHeight: 'normal' }}>
                10B <span className="text-[2rem] md:text-[4rem]">SEK</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-col w-full gap-4">
              <div>
                <div className="text-gray-300 text-sm md:text-base">{metrics[1].label}</div>
                <div className="text-blue-400 text-[2rem] md:text-[4rem]">12 ms</div>
              </div>
              <div>
                <div className="text-gray-300 text-sm md:text-base">{metrics[2].label}</div>
                <div className="text-blue-400 text-[2rem] md:text-[4rem]">250 mm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-12 pt-8 md:pt-12">
          <div className="flex items-center justify-center">
            <Image src="/testi.svg" alt="clients" width={800} height={200} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

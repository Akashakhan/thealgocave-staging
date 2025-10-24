"use client";

import Image from 'next/image';

export default function Impact() {
  const metrics = [
    { value: "10B SEK", label: "Savings delivered across projects" },
    { value: "12 ms", label: "Average latency reduction" },
    { value: "250 mm", label: "Queries served monthly" },
  ];


  return (
    <section className="bg-[#1A1C1F] text-white py-20 px-4">
      <div className="grid grid-cols-12">
        <div className="col-span-3 opacity-50">OUR NUMBERS</div>
        <div className="col-span-9 ">
          <div className="text-7xl opacity-50 tracking-[-3px] mb-8">
            We go beyond data and AI consulting turning strategy into execution
            that delivers measurable impact
          </div>
          <div className="flex items-start justify-between pb-8 pt-16">
            <div className="flex flex-col justify-between w-[100%] h-[-webkit-fill-available]">
              <div className="text-gray-300">{metrics[0].label}</div>
              <div className="text-blue-400 text-[9rem]" style={{ lineHeight: 'normal' }}>
                10B <span className="text-[4rem]">SEK</span>
              </div>
            </div>
            <div className='px-5'></div>
            <div className="flex flex-col col-span-2 w-[100%]">
              <div>
                <div className="text-gray-300">{metrics[1].label}</div>
                <div className="text-blue-400 text-[4rem]">12 ms</div>
              </div>
              <div>
                <div className="text-gray-300">{metrics[2].label}</div>
                <div className="text-blue-400 text-[4rem]">250 mm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 pt-12">
          <div className="flex items-center justify-center">
            <Image src="/testi.svg" alt="clients" width={800} height={200} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

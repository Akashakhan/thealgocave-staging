"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Testimonials() {
  return (
    <section className="bg-[#F5F7FA] text-black py-10 md:py-20 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3 text-[#374552] text-center md:text-left">TESTIMONIALS</div>
        <div className="md:col-span-9">
          <h2 className="text-3xl md:text-7xl tracking-[-3px] mb-8 text-center md:text-left">
            Client Success Stories & Testimonials
          </h2>
        </div>
        <div className="md:col-span-3 text-[#374552] text-xs text-center md:text-left">/2025/</div>
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5">
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-lg font-semibold">
                        Trading Exchange Project
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-sm font-medium text-gray-800">
                    Trading Exchange Project
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-20 bg-gray-200 rounded flex items-center justify-center"
                    >
                      <span className="text-gray-500 text-sm">View {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-6 md:space-y-8">
                {/* Quote */}
                <div className="bg-gray-50 p-4 md:p-8 rounded-lg">
                  <blockquote className="text-lg md:text-2xl font-medium text-gray-800 leading-relaxed">
                    &ldquo;TheAlgoCave have identified bottlenecks we didn&apos;t even see.
                    Their optimizations directly impacted our bottom line.&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center px-4 md:px-8 space-x-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm md:text-lg">
                      RS
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-base md:text-lg text-gray-800">
                      Richard Smith
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">CEO, QuantFund</div>
                  </div>
                </div>

                {/* Location & Industry */}
                <div className="flex space-x-4 md:space-x-6 px-4 md:px-8 text-gray-600 text-sm md:text-base">
                  <div>London, UK</div>
                  <div>FinTech</div>
                </div>

                {/* Navigation */}
                <div className="flex space-x-2 px-4 md:px-8">
                  <button
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                    aria-label="Next testimonial"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

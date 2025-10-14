'use client';

import { useEffect, useState } from 'react';

export default function GlobalReach() {
  const [dots, setDots] = useState<Array<{left: number, top: number, delay: number}>>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 90 + 5,
      top: Math.random() * 80 + 10,
      delay: Math.random() * 2
    }));
    setDots(newDots);
  }, []);

  return (
    <section className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Algo powers 600+ networks globally.
          </h2>
        </div>

        {/* World Map */}
        <div className="relative">
          <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Simplified World Map Representation */}
            <div className="absolute inset-0">
              {/* North America */}
              <div className="absolute top-16 left-20 w-24 h-16 bg-gray-600 rounded"></div>
              {/* Europe */}
              <div className="absolute top-20 left-40 w-16 h-12 bg-gray-600 rounded"></div>
              {/* Asia */}
              <div className="absolute top-16 right-32 w-32 h-20 bg-gray-600 rounded"></div>
              {/* Africa */}
              <div className="absolute top-32 left-44 w-12 h-20 bg-gray-600 rounded"></div>
              {/* South America */}
              <div className="absolute top-40 left-28 w-16 h-20 bg-gray-600 rounded"></div>
              {/* Australia */}
              <div className="absolute top-48 right-20 w-20 h-12 bg-gray-600 rounded"></div>
            </div>

            {/* Network Dots */}
            {dots.map((dot, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                style={{
                  left: `${dot.left}%`,
                  top: `${dot.top}%`,
                  animationDelay: `${dot.delay}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

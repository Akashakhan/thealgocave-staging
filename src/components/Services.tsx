'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    "Real-Time Data Systems",
    "Low-Latency Architectures", 
    "Scalable Backend",
    "Custom AI Integration"
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Building integrated data and AI systems across all solutions.
            </h2>
            
            <ul className="space-y-4 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mr-4"></span>
                  <span className={index === 0 ? "font-bold" : ""}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Visual & Text */}
          <div className="space-y-8">
            {/* Abstract Human Silhouette */}
            <div className="flex justify-center">
              <div className="w-64 h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-6 h-6 rounded ${
                        Math.random() > 0.3 ? 'bg-gray-800' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our approach focuses on high-throughput, event-driven architectures for instant data processing and delivery. 
                We build systems that can handle massive scale while maintaining ultra-low latency.
              </p>
              
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center space-x-2 mx-auto hover:bg-blue-700 transition-colors">
                <span>Book a Call</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

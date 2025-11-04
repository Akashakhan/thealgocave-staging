"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  industry: string;
  initials: string;
  projectName: string;
  emoji: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "TheAlgoCave have identified bottlenecks we didn't even see. Their optimizations directly impacted our bottom line.",
    author: "Richard Smith",
    role: "CEO",
    company: "QuantFund",
    location: "London, UK",
    industry: "FinTech",
    initials: "RS",
    projectName: "Trading Exchange Project",
    emoji: "📊",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    id: 2,
    quote: "The team delivered a 95% reduction in latency. Our trading platform now processes millions of orders per second without breaking a sweat.",
    author: "Sarah Chen",
    role: "CTO",
    company: "CryptoFlow",
    location: "Singapore",
    industry: "Cryptocurrency",
    initials: "SC",
    projectName: "High-Frequency Trading System",
    emoji: "⚡",
    gradient: "from-purple-400 to-purple-600"
  },
  {
    id: 3,
    quote: "Their AI integration transformed our data pipeline. We went from batch processing to real-time analytics in just 6 weeks.",
    author: "Michael Rodriguez",
    role: "Head of Engineering",
    company: "DataStream Inc",
    location: "San Francisco, USA",
    industry: "Data Analytics",
    initials: "MR",
    projectName: "Real-Time Analytics Platform",
    emoji: "🤖",
    gradient: "from-green-400 to-green-600"
  },
  {
    id: 4,
    quote: "The scalability improvements allowed us to handle 10x traffic during peak events. Zero downtime, zero issues.",
    author: "Emma Thompson",
    role: "VP of Product",
    company: "StreamHub",
    location: "New York, USA",
    industry: "Media Streaming",
    initials: "ET",
    projectName: "Streaming Infrastructure",
    emoji: "🎬",
    gradient: "from-red-400 to-red-600"
  },
  {
    id: 5,
    quote: "Working with TheAlgoCave was a game-changer. They built a custom AI system that reduced our operational costs by 40%.",
    author: "James Wilson",
    role: "Founder",
    company: "TechStart Pro",
    location: "Austin, USA",
    industry: "SaaS",
    initials: "JW",
    projectName: "AI-Powered Operations",
    emoji: "🚀",
    gradient: "from-orange-400 to-orange-600"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

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
              {/* Main Image */}
              <div className="relative">
                <div className={`w-full h-64 bg-gradient-to-br ${currentTestimonial.gradient} rounded-lg flex items-center justify-center transition-all duration-500`}>
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">{currentTestimonial.emoji}</div>
                    <div className="text-lg font-semibold">
                      {currentTestimonial.projectName}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-sm font-medium text-gray-800">
                  {currentTestimonial.projectName}
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="space-y-6 md:space-y-8">
                {/* Quote */}
                <div className="bg-gray-50 p-4 md:p-8 rounded-lg transition-all duration-500">
                  <blockquote className="text-lg md:text-2xl font-medium text-gray-800 leading-relaxed">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center px-4 md:px-8 space-x-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm md:text-lg">
                      {currentTestimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-base md:text-lg text-gray-800">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </div>
                  </div>
                </div>

                {/* Location & Industry */}
                <div className="flex space-x-4 md:space-x-6 px-4 md:px-8 text-gray-600 text-sm md:text-base">
                  <div>{currentTestimonial.location}</div>
                  <div>{currentTestimonial.industry}</div>
                </div>

                {/* Navigation */}
                <div className="flex space-x-2 px-4 md:px-8">
                  <button
                    onClick={goToPrevious}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
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

'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We work with startups, hedge funds, and tech-driven enterprises that need real-time, low-latency systems and AI-enabled backends."
    },
    {
      question: "How do you measure success?",
      answer: "We measure success through quantifiable metrics like latency reduction, throughput improvement, and cost savings. Our clients typically see 10-50x performance improvements."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide comprehensive ongoing support including system monitoring, optimization, and scaling as your needs grow."
    },
    {
      question: "Can results be quantified?",
      answer: "Absolutely. We provide detailed performance metrics and ROI analysis for all our implementations, with measurable improvements in speed, efficiency, and cost."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, we can customize invoices to include additional information, detailed breakdowns, and specific reporting requirements as needed."
    }
  ];

  return (
    <section className="bg-[#1A1C1F] text-white py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Everything you need to know about the AI & Data service and billing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-600 rounded-lg">
              <button
                className="w-full px-4 md:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base md:text-lg font-medium">{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Image src="/world-map.svg" alt="FAQ" width={1200} height={400} className="w-full h-full object-cover mt-12" />
    </section>
  );
}

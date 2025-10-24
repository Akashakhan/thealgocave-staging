'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <section className="bg-[#1A1C1F] text-white py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pixel-pattern-dark" />
      </div>

      <div className="mx-auto relative z-10">

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          {/* Company Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
             <img src="/footerLogo.svg" alt="Logo" className="w-[68px] h-[68px] " />
      
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              TheAlgoCave is a data and AI consulting company focused on real-time systems, 
              high-frequency data processing, and robust backend development.
            </p>
          </div>

          {/* Copyright & Social */}
          <div className="text-right">
            <div className="flex justify-end space-x-4">
              <button 
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button 
                className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                © TheAlgoCave AB — All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

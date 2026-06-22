/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PhoneCall } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#064E3B] to-neutral-900 text-gray-200 pt-16 pb-8 border-t border-[#10B981]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5 text-center md:text-left">
          
          {/* Logo Brand information */}
          <div className="md:col-span-1.5 space-y-4">
            <div className="flex items-center gap-2.5 justify-center md:justify-start">
              <div className="relative w-10 h-10 bg-white rounded-full overflow-hidden border border-white/10 flex items-center justify-center p-1 shrink-0">
                <img 
                  src="https://lh3.googleusercontent.com/d/1dwK0nRmf23PFXWBhmlPIBpdB_J5kissp" 
                  alt="Rosemary Garden Logo" 
                  className="w-full h-full object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-bold font-serif text-white tracking-wide">
                Rosemary Garden
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Nurturing quality flowers, aromatic medicinal spices, and grafted hybrid fruit saplings with organic fertilizers for a healthier, greener Kerala.
            </p>
          </div>

          {/* Quick links indices */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#10B981] uppercase tracking-widest text-xs">Explore Nursery</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#4ADE80] transition-colors">Home</a>
              </li>
              <li>
                <a href="#plants" className="hover:text-[#4ADE80] transition-colors">Plants Collection</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#4ADE80] transition-colors">Special Offers</a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-[#4ADE80] transition-colors">Delivery FAQ</a>
              </li>
            </ul>
          </div>

          {/* Customer Care Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#10B981] uppercase tracking-widest text-xs">Support Hand</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <PhoneCall className="w-4 h-4 text-[#10B981]" />
                <span className="text-white font-bold">+91 9061228537</span>
              </li>
              <li className="text-[11px]">
                📍 Palachuvad near Piravom, Kerala • PIN 686664
              </li>
            </ul>
          </div>

          {/* Fast Delivery Coverage reminder */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#10B981] uppercase tracking-widest text-xs">Coverage Promise</h4>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-xxs text-gray-400 leading-relaxed text-center md:text-left space-y-1.5">
              <span className="block font-bold text-white text-[10px]">✨ All 14 Districts of Kerala</span>
              <span>Fast door-to-door transit, protective fiber root wrapping, and Cash on Delivery support. No credit cards needed!</span>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xxs text-gray-500 font-medium">
            © {new Date().getFullYear()} Rosemary Garden Nursery. All rights reserved. • Built with love in India.
          </p>
        </div>

      </div>
    </footer>
  );
};

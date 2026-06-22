/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Compass, BadgePercent, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = ({
  searchQuery,
  setSearchQuery,
  totalCount,
  filteredCount,
  onExploreClick,
}) => {
  return (
    <section id="home" className="relative bg-[#F1F9F6] py-12 md:py-20 overflow-hidden">
      {/* Decorative absolute background plants and blurred green circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#10B981]/10 rounded-full blur-3xl -z-10 animate-slow-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#064E3B]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Left texts */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#10B981]/20 rounded-full text-xs font-semibold text-[#064E3B]"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Beautifully Nurtured Plants & Saplings in Kerala</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-[#064E3B] tracking-tight leading-tight"
            >
              Transform Your Space Into A <span className="text-[#10B981] font-normal italic">Green Haven</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Welcome to <strong>Rosemary Garden</strong>. Explore premium, hand-grown flowers, grafted exotic fruit trees, and organic outdoor shrubs nurtured with natural love. Send your custom order directly to our experts on WhatsApp for fast, secure delivery in Kerala!
            </motion.p>

            {/* Search Input Box Area */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative max-w-lg mx-auto lg:mx-0 p-1.5 bg-white rounded-2xl shadow-lg border border-[#10B981]/20 flex items-center"
            >
              <div className="flex items-center pl-3 text-gray-400">
                <Search className="w-5 h-5 text-[#10B981]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Roses, Orchid, Mango tree, Rambutan..."
                className="w-full pl-3 pr-4 py-2 text-sm bg-transparent border-0 focus:ring-0 focus:outline-hidden placeholder-gray-400 text-gray-800 font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="px-2 text-xs text-gray-400 hover:text-[#064E3B] mr-2 transition-colors font-semibold"
                >
                  Clear
                </button>
              )}
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white rounded-xl text-xs font-bold shadow-sm transition-all whitespace-nowrap cursor-pointer font-sans"
              >
                Find Now
              </button>
            </motion.div>

            {/* Live Count and Quick stats details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2"
            >
              <div className="bg-white/95 backdrop-blur-xs px-4 py-2 border border-[#10B981]/15 rounded-xl shadow-xs">
                <span className="block text-2xl font-extrabold text-[#064E3B]">{totalCount}</span>
                <span className="block text-xxs text-gray-500 uppercase tracking-wider font-semibold">Total Plant Species</span>
              </div>
              <div className="bg-white/95 backdrop-blur-xs px-4 py-2 border border-[#10B981]/15 rounded-xl shadow-xs">
                <span className="block text-2xl font-extrabold text-[#10B981]">
                  {searchQuery ? filteredCount : 10}
                </span>
                <span className="block text-xxs text-gray-500 uppercase tracking-wider font-semibold">
                  {searchQuery ? 'Matching Search' : 'In Premium Stock'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#064E3B] font-semibold bg-[#10B981]/10 px-3.5 py-1.5 rounded-full">
                <MapPin className="w-4 h-4 text-[#10B981]" />
                <span>Nursery at Palachuvad, Piravom, Kerala</span>
              </div>
            </motion.div>

            {/* Small Quick feature labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-3 pt-5 max-w-lg mx-auto lg:mx-0 border-t border-emerald-100"
            >
              <div className="flex flex-col items-center lg:items-start gap-1 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span className="text-xs font-bold text-[#064E3B]">Healthy Roots</span>
                </div>
                <span className="text-[11px] font-medium text-gray-500">Nursery Guarantee</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5">
                  <BadgePercent className="w-4 h-4 text-[#10B981]" />
                  <span className="text-xs font-bold text-[#064E3B]">Value Bundles</span>
                </div>
                <span className="text-[11px] font-medium text-gray-500">Special Pocket Offers</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1 justify-center lg:justify-start">
                <div className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#10B981]" />
                  <span className="text-xs font-bold text-[#064E3B]">District Shipping</span>
                </div>
                <span className="text-[11px] font-medium text-gray-500">All-Kerala Coverage</span>
              </div>
            </motion.div>
          </div>

          {/* Right side interactive botanical mockup layout */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#064E3B] to-[#10B981] rounded-full rotate-3 opacity-10 blur-xl animate-slow-pulse" />

              {/* Main premium illustration frame */}
              <div className="relative bg-white p-4.5 rounded-[40px] shadow-2xl border border-emerald-50 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80"
                  alt="Lush ornamental botanical glasshouse nursery plants background"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Absolutes floating badges inside image box */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg border border-emerald-50 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-widest">Nursery Spotlight</span>
                    <span className="block text-base font-bold text-[#064E3B] font-serif">Aromatic Spices & Florals</span>
                  </div>
                  <div className="h-10 w-10 bg-[#064E3B] text-[#4ADE80] rounded-xl flex items-center justify-center font-bold">
                    Go!
                  </div>
                </div>

                <div className="absolute top-8 right-8 bg-[#16A34A] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                  <span>★</span>
                  <span>Premium</span>
                </div>
              </div>

              {/* Small floating ornamental vector or card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#064E3B] to-[#043327] p-4 rounded-2xl shadow-xl text-white max-w-[170px]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-white/20 p-1 rounded-lg text-[#4ADE80] text-sm">🌱</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#4ADE80]">Rosemary Care</span>
                </div>
                <span className="block text-xs text-gray-200">100% natural organic compost and expert growth advisory</span>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

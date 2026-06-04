/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export const Reviews = () => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  const prevSlide = () => {
    setActiveCarouselIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveCarouselIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-16 bg-[#fafcfb] border-t border-[#10B981]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading details */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] block mb-2">Verified Gardeners</span>
          <h2 className="text-3xl font-extrabold text-[#064E3B] font-serif leading-tight">
            Loved By Plant Parents Across Kerala
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Read what our hobbyists, estate owners, and kitchen gardeners have to say about Rosemary Garden's pricing, delivery, and botanical quality.
          </p>
        </div>

        {/* Desktop View Layout: Stately 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 rounded-3xl border border-[#10B981]/15 shadow-xs hover:shadow-xl hover:border-[#10B981]/35 transition-all duration-300 relative flex flex-col justify-between group"
            >
              {/* Giant quote decorator mark in background */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#F1F9F6] opacity-60 group-hover:text-emerald-100 group-hover:scale-110 transition-transform" />

              <div className="space-y-4 relative">
                {/* Profile header bar */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#10B981]/10 text-[#064E3B] flex items-center justify-center font-bold text-xs ring-2 ring-[#F1F9F6] shadow-xs shrink-0 select-none">
                    {rev.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#064E3B] font-serif">{rev.name}</h4>
                    <span className="text-[10px] text-gray-400 font-medium block pr-4">Verified Purchase • Ernakulam</span>
                  </div>
                </div>

                {/* Rating score STARS */}
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating ? 'fill-current' : 'opacity-20'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Message Text block */}
                <p className="text-gray-600 text-xs leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Timestamp details */}
              <div className="mt-5 pt-3.5 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400 font-bold">
                <span>Nursery Buyer</span>
                <span>{rev.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Layout: Adaptive touch Carousel Slider */}
        <div className="md:hidden relative px-2">
          <div className="overflow-hidden bg-white p-8 rounded-3xl border border-[#10B981]/25 relative min-h-[220px] flex flex-col justify-between">
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#F1F9F6]" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCarouselIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Active Review card */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#10B981]/10 text-[#064E3B] flex items-center justify-center font-bold text-xs ring-2 ring-[#F1F9F6] shrink-0 select-none">
                    {REVIEWS[activeCarouselIndex].name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#064E3B] font-serif">
                      {REVIEWS[activeCarouselIndex].name}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-medium font-medium">Nursery Buyer</span>
                  </div>
                </div>

                {/* Stars list */}
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < REVIEWS[activeCarouselIndex].rating ? 'fill-current' : 'opacity-20'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-xs italic leading-relaxed">
                  "{REVIEWS[activeCarouselIndex].text}"
                </p>

                <div className="pt-3 border-t border-gray-50 flex justify-between text-[11px] text-gray-400 font-medium">
                  <span>Verified Purchase</span>
                  <span>{REVIEWS[activeCarouselIndex].timeAgo}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Buttons Control Panel bar */}
          <div className="flex items-center justify-between mt-4 px-2">
            <button
              onClick={prevSlide}
              className="p-2.5 bg-[#064E3B] hover:bg-[#10B981]/90 text-white rounded-xl shadow-md transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slider Dots indicators */}
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCarouselIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeCarouselIndex ? 'w-5 bg-[#064E3B]' : 'w-2 bg-[#10B981]/30'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2.5 bg-[#064E3B] hover:bg-[#10B981]/90 text-white rounded-xl shadow-md transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Small Review Metrics Display footer band */}
        <div className="mt-12 text-center text-xs text-gray-400 font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 flex-wrap">
          <span>Overall Rating score:</span>
          <span className="text-[#064E3B] font-bold">⭐ 4.8 out of 5 stars</span>
          <span>•</span>
          <span>Based on 250+ local Kerala orders</span>
        </div>

      </div>
    </section>
  );
};

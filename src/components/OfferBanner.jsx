/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Gift, BadgePercent, Sprout, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export const OfferBanner = () => {
  const offers = [
    {
      icon: <Sprout className="w-8 h-8 text-[#CCFF00]" />,
      tag: "Vibrant Value Pack",
      title: "🌱 3 Plants for ₹100",
      description: "Pick any of our seasonal ₹30 flowers (like Roses, Ixora, etc.) and get a set of 3 for just ₹100!",
      gradient: "from-[#064E3B] to-[#043327]",
    },
    {
      icon: <BadgePercent className="w-8 h-8 text-[#CCFF00]" />,
      tag: "Bulk Plant Discount",
      title: "🌿 Buy More, Save More",
      description: "Buy grafted fruit trees worth ₹1500 or more and get free fertilizer starter kits with express delivery support.",
      gradient: "from-[#10B981] to-[#0a7a55]",
    },
    {
      icon: <Gift className="w-8 h-8 text-[#CCFF00]" />,
      tag: "Seasonal Specimen",
      title: "🌺 Limited Monsoon Deals",
      description: "Get 20% off on premium Nutmeg saplings (Jaathikka) and exotic floral bonsai Adenium specimens.",
      gradient: "from-[#043327] to-[#064E3B]",
    }
  ];

  return (
    <section id="offers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading details */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] block mb-2">Unmissable Savings</span>
          <h2 className="text-3xl font-extrabold text-[#064E3B] font-serif leading-tight">
            Exclusive Seasonal Offers & Value Packs
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Specially crafted bundle packages and seasonal specials to turn your veranda, garden, or estate green under budget.
          </p>
        </div>

        {/* Offers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden bg-gradient-to-br ${offer.gradient} text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-default`}
            >
              {/* Absolutes styling accent element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-500" />
              
              <div className="space-y-4 relative">
                {/* Accent Icon Tag */}
                <div className="flex items-center justify-between">
                  <span className="p-3 bg-white/10 rounded-2xl flex items-center justify-center">
                    {offer.icon}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-100 tracking-wider uppercase bg-white/10 px-2.5 py-1 rounded-full">
                    {offer.tag}
                  </span>
                </div>

                {/* Offer Title & Text */}
                <h3 className="text-2xl font-bold font-serif tracking-tight pt-2 group-hover:text-[#CCFF00] transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-200/90 text-sm leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Card Footer detail info */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-emerald-200 font-semibold">
                <span>Check details on WhatsApp order</span>
                <span className="text-white group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Trust Badge */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#F1F9F6] to-white rounded-2xl border border-[#10B981]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <span className="text-3xl">🌱</span>
            <div>
              <h4 className="text-sm font-bold text-[#064E3B]">Looking for bulk plantation orders?</h4>
              <p className="text-xs text-gray-500">We support rubber estates, home gardens, and office terraces with wholesale pricing.</p>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=919061228537&text=Hello%20Rosemary%20Garden,%20I'm%20interested%20in%20discussing%20bulk%20plant%20orders!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#064E3B] hover:bg-[#10B981] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            Discuss Wholesale Prices
          </a>
        </div>

      </div>
    </section>
  );
};

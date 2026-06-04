/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Truck, Landmark, ShieldCheck, HeartCrack, Compass, PackageOpen } from 'lucide-react';
import { motion } from 'motion/react';

export const DeliveryInfo = () => {
  const deliveryFeatures = [
    {
      icon: <Compass className="w-6 h-6 text-[#10B981]" />,
      title: "All-Kerala Coverage",
      description: "Fast doorstep delivery across all 14 districts of Kerala (including Ernakulam, Trivandrum, Kozhikode, Wayanad etc.).",
      badge: "Statewide"
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#10B981]" />,
      title: "Cash on Delivery",
      description: "No advance online payment required! Inspect your plants upon arrival and pay directly in cash to the handler.",
      badge: "COD Active"
    },
    {
      icon: <PackageOpen className="w-6 h-6 text-[#10B981]" />,
      title: "Safe Plant Packaging",
      description: "We pack saplings securely using biodegradable organic coconut fibers and rigid carton crates to keep roots damp and branches fresh.",
      badge: "Safe Travel"
    },
    {
      icon: <Truck className="w-6 h-6 text-[#10B981]" />,
      title: "Varying Delivery Charges",
      description: "Delivery fee varies mildly depending on your specific district distance and geographical terrain. Discuss during order checkout.",
      badge: "Fair Price"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#10B981]" />,
      title: "Fast Delivery Service",
      description: "Your leafy friends are dispatched within 24 hours of WhatsApp validation and delivered right to your gate within 2-4 business days.",
      badge: "Super Fast"
    },
    {
      icon: <HeartCrack className="w-6 h-6 text-[#10B981]" />,
      title: "100% Transit Guarantee",
      description: "If any plant gets damaged during shipment, we offer instant free replacements or partial waivers with zero questions asked.",
      badge: "Zero Risk"
    }
  ];

  return (
    <section id="delivery" className="py-16 bg-white border-t border-[#10B981]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] block">Seamless Transit Systems</span>
            <h2 className="text-3xl font-extrabold text-[#064E3B] font-serif leading-tight">
              Kerala's Most Reliable Doorstep Plant Delivery Service
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We understand that transporting young tree saplings and fragile flower pots requires extreme caution. Rosemary Garden uses custom-engineered damp root envelopes to make sure everything lands healthy in your garden.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap gap-3.5 justify-center lg:justify-end">
            <div className="bg-[#F1F9F6] border border-[#10B981]/20 rounded-2xl px-5 py-4 flex items-center gap-3 max-w-[240px]">
              <span className="text-2xl">🤝</span>
              <div>
                <span className="block text-xs font-bold text-[#064E3B]">No Online Payment</span>
                <span className="block text-[10px] text-gray-500">Pay cash upon delivery inspector check</span>
              </div>
            </div>
            <div className="bg-[#F1F9F6] border border-[#10B981]/20 rounded-2xl px-5 py-4 flex items-center gap-3 max-w-[240px]">
              <span className="text-2xl">📦</span>
              <div>
                <span className="block text-xs font-bold text-[#064E3B]">Custom Eco-Crates</span>
                <span className="block text-[10px] text-gray-500">Safe fiber wrapping makes them travel fresh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveryFeatures.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-50/70 border border-[#10B981]/10 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:border-[#10B981]/30 transition-all duration-300 relative group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="p-3 bg-[#F1F9F6] group-hover:bg-[#10B981]/15 rounded-xl transition-colors">
                  {feat.icon}
                </span>
                <span className="text-[9px] font-bold text-[#064E3B] bg-[#10B981]/15 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {feat.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#064E3B] font-serif mb-1.5">
                {feat.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Packing alert banners */}
        <div className="mt-12 bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          {/* Subtle bg foliage decorative pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-emerald-800/40 via-transparent to-transparent opacity-80" />
          
          <div className="space-y-2 relative">
            <h4 className="text-lg md:text-xl font-bold font-serif text-[#CCFF00]">Packing Promise From Piravom</h4>
            <p className="text-emerald-100/90 text-xs md:text-sm max-w-2xl leading-relaxed">
              No cracked stems, no dried soil. We hydrate the root balls and bind them securely in premium coconut husks prior to boxing. Your plants will arrive looking as fresh and hydrated as if plucked from our greenhouses 10 minutes ago!
            </p>
          </div>

          <div className="flex gap-2 relative">
            <span className="text-4xl">☘️</span>
            <span className="text-4xl">🌴</span>
            <span className="text-4xl">🍁</span>
          </div>
        </div>

      </div>
    </section>
  );
};

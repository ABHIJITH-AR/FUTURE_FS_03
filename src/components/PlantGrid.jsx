/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, ShoppingCart, Send, Eye, BadgeAlert, BadgeCheck, X } from 'lucide-react';
import { PLANTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export const PlantGrid = ({
  searchQuery,
  onAddToCart,
  onBuyNow,
  filteredCountSetter,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPlantDetails, setSelectedPlantDetails] = useState(null);

  // Filter plants instantly
  const filteredPlants = PLANTS.filter((plant) => {
    const matchesCategory = activeCategory === 'all' || plant.category === activeCategory;
    const matchesSearch =
      plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (plant.scientificName && plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sync back matching count to parent Hero Component
  React.useEffect(() => {
    filteredCountSetter(filteredPlants.length);
  }, [filteredPlants.length, filteredCountSetter]);

  return (
    <section id="plants" className="py-16 bg-[#fafcfb] border-t border-[#10B981]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading details */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] block mb-2">Our Greenhouse Collections</span>
            <h2 className="text-3xl font-extrabold text-[#064E3B] font-serif leading-tight">
              Aromatic Flowers & Fertile Fruit Trees
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Every sapling is nurtured organically, pruned with expert attention, and ready to thrive.
            </p>
          </div>

          {/* Quick Category Filter Selector Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Plants' },
              { id: 'flower', label: 'Flower (Roses & Exotics)' },
              { id: 'tree', label: 'Tree (Grafted Saplings)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-hidden ${
                  activeCategory === cat.id
                    ? 'bg-[#064E3B] text-white shadow-md shadow-[#064E3B]/20 scale-102'
                    : 'bg-white text-[#064E3B] border border-[#10B981]/15 hover:border-[#10B981]/35 hover:bg-[#F1F9F6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Filter Information Line */}
        {searchQuery && (
          <div className="mb-6 bg-[#F1F9F6]/85 px-4 py-2 border border-[#10B981]/20 rounded-xl text-xs font-medium text-[#064E3B] flex items-center justify-between">
            <span>
              Showing {filteredPlants.length} plants matching "<strong>{searchQuery}</strong>" in Category: <strong>{activeCategory === 'all' ? 'All' : activeCategory}</strong>
            </span>
            <button
              onClick={() => setActiveCategory('all')}
              className="text-[#10B981] font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Plant Cards Grid - Responsive columns format */}
        <AnimatePresence mode="popLayout">
          {filteredPlants.length > 0 ? (
            <motion.div 
               layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredPlants.map((plant) => {
                // Handle fallback images safely
                return (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    onAddToCart={onAddToCart}
                    onBuyNow={onBuyNow}
                    onViewDetails={(p) => setSelectedPlantDetails(p)}
                  />
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center max-w-sm mx-auto"
            >
              <span className="text-5xl block mb-4">🍂</span>
              <h3 className="text-lg font-bold text-[#064E3B] font-serif">No Plants Found</h3>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                We couldn't locate any matching variety in our glasshouse. Please try modifying your search term or checking our specific categories.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-4 px-4 py-2 bg-[#064E3B] hover:bg-[#10B981] text-white text-xs font-bold rounded-xl transition-all shadow-md"
              >
                Clear All Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Single Plant Quick View Botanical Details Modal */}
        <AnimatePresence>
          {selectedPlantDetails && (
            <div 
              onClick={() => setSelectedPlantDetails(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col relative cursor-default"
              >
                <div className="relative">
                  <img
                    src={`https://lh3.googleusercontent.com/d/${selectedPlantDetails.driveId}`}
                    onError={(e) => {
                      e.target.src = selectedPlantDetails.unsplashFallback;
                    }}
                    alt={selectedPlantDetails.name}
                    className="w-full h-64 object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 text-white">
                    <div>
                      {selectedPlantDetails.scientificName && (
                        <p className="text-[11px] font-mono tracking-widest text-[#CCFF00] italic font-semibold">
                          {selectedPlantDetails.scientificName}
                        </p>
                      )}
                      <h3 className="text-2xl font-bold font-serif">{selectedPlantDetails.name}</h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPlantDetails(null)}
                    className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2 text-center rounded-full transition-colors focus:outline-hidden cursor-pointer flex items-center justify-center"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-[#064E3B]">₹{selectedPlantDetails.price}</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                      selectedPlantDetails.inStock 
                        ? 'bg-[#F1F9F6] text-[#064E3B] border border-[#10B981]/20' 
                        : 'bg-rose-50 text-rose-800 border border-rose-250'
                    }`}>
                      {selectedPlantDetails.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedPlantDetails.description}
                  </p>

                  {/* Botanical characteristics metadata matrix */}
                  <div className="grid grid-cols-2 gap-3.5 bg-[#F1F9F6] p-4 rounded-2xl text-xs text-gray-700">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider">Sunlight Needs</span>
                      <span className="font-bold text-[#064E3B]">{selectedPlantDetails.sunlight || 'Full Sun'}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider">Watering Frequency</span>
                      <span className="font-bold text-[#064E3B]">{selectedPlantDetails.watering || 'Moderate'}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider">Size Category</span>
                      <span className="font-bold text-[#064E3B]">{selectedPlantDetails.size || 'Small to Medium'}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider">Nursery Rating</span>
                      <span className="font-bold text-[#064E3B]">⭐ {selectedPlantDetails.rating} / 5</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => {
                        onAddToCart(selectedPlantDetails);
                        setSelectedPlantDetails(null);
                      }}
                      disabled={!selectedPlantDetails.inStock}
                      className="flex-1 py-3 border border-[#064E3B] text-[#064E3B] hover:bg-[#F1F9F6] disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400 text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => {
                        onBuyNow(selectedPlantDetails);
                        setSelectedPlantDetails(null);
                      }}
                      disabled={!selectedPlantDetails.inStock}
                      className="flex-1 py-3 bg-[#CCFF00] text-[#064E3B] font-black hover:bg-[#b5e600] active:brightness-95 disabled:bg-gray-100 disabled:text-gray-400 text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

// Isolated individual PlantCard design
const PlantCard = ({ plant, onAddToCart, onBuyNow, onViewDetails }) => {
  const [imgSrc, setImgSrc] = useState(`https://lh3.googleusercontent.com/d/${plant.driveId}`);

  return (
    <motion.div
      layout
      viewport={{ once: true }}
      onClick={() => onViewDetails(plant)}
      className="bg-white rounded-3xl overflow-hidden border border-[#10B981]/15 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-square self-stretch">
        {/* Dynamic Image component with beautiful Unsplash fallback */}
        <img
          src={imgSrc}
          onError={() => setImgSrc(plant.unsplashFallback)}
          alt={plant.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Stock Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          {plant.inStock ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F1F9F6] text-[#064E3B] shadow-sm border border-[#10B981]/25">
              <BadgeCheck className="w-3 h-3 text-[#10B981]" />
              In Stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-800 shadow-sm border border-rose-200">
              <BadgeAlert className="w-3 h-3 text-rose-600" />
              Out Of Stock
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          {/* Star ratings */}
          <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
            <span className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(plant.rating) ? 'fill-current' : 'opacity-30'
                  }`}
                />
              ))}
            </span>
            <span className="leading-none pt-0.5 ml-1">{plant.rating.toFixed(1)}</span>
          </div>

          <h3 className="text-base font-bold font-serif text-[#064E3B] leading-snug tracking-tight">
            {plant.name}
          </h3>

          <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">
            {plant.description}
          </p>
        </div>

        {/* Card Pricing and Action triggers */}
        <div className="mt-4 pt-4 border-t border-[#10B981]/15 space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Price per plant</span>
            <span className="text-lg font-black text-[#064E3B]">₹{plant.price}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(plant);
              }}
              disabled={!plant.inStock}
              className="py-2.5 px-2.5 text-xxs font-bold border border-[#064E3B]/80 hover:bg-[#F1F9F6] active:bg-emerald-100 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400 text-[#064E3B] rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add to Cart
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBuyNow(plant);
              }}
              disabled={!plant.inStock}
              className="py-2.5 px-2.5 bg-[#CCFF00] hover:bg-[#b5e600] active:scale-95 disabled:bg-gray-100 disabled:text-gray-400 text-[#064E3B] text-xxs font-black rounded-xl transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-1"
            >
              <Send className="w-3 h-3" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

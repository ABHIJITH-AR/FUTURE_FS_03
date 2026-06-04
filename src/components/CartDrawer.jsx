/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.plant.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity"
            id="cart-backdrop"
          />

          {/* Drawer Panel Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col h-full"
            id="cart-drawer-panel"
          >
            {/* Drawer Header */}
            <div className="p-6 bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white flex items-center justify-between border-b border-[#10B981]/20">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5.5 h-5.5 text-[#CCFF00]" />
                <div>
                  <h3 className="text-lg font-bold font-serif leading-none text-white">Your Garden Cart</h3>
                  <span className="text-[11px] text-emerald-100 font-medium">
                    {totalItems} {totalItems === 1 ? 'variety' : 'varieties'} selected
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer focus:outline-hidden"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.plant.id}
                    className="flex gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-100 items-center justify-between group"
                  >
                    {/* Item Image with fallbacks */}
                    <img
                      src={`https://lh3.googleusercontent.com/d/${item.plant.driveId}`}
                      onError={(e) => {
                        e.target.src = item.plant.unsplashFallback;
                      }}
                      alt={item.plant.name}
                      className="w-14 h-14 object-cover rounded-xl"
                    />

                    {/* Meta info details */}
                    <div className="flex-1 space-y-0.5">
                      <span className="block text-xs text-[#10B981] font-bold uppercase tracking-wider text-[10px]">
                        {item.plant.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#064E3B] font-serif leading-tight">
                        {item.plant.name}
                      </h4>
                      <span className="block text-xs font-semibold text-gray-500">
                        ₹{item.plant.price} each
                      </span>
                    </div>

                    {/* Quantity Adjustment Controls & Delete action */}
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center bg-white border border-[#10B981]/25 rounded-lg p-1 shadow-xxs">
                        <button
                          onClick={() => onUpdateQuantity(item.plant.id, -1)}
                          className="p-1 hover:bg-[#F1F9F6] text-[#064E3B] rounded-md transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#064E3B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.plant.id, 1)}
                          className="p-1 hover:bg-[#F1F9F6] text-[#064E3B] rounded-md transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-[#064E3B]">
                          ₹{item.plant.price * item.quantity}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.plant.id)}
                          className="text-gray-400 hover:text-red-500 p-0.5 rounded transition-colors cursor-pointer"
                          aria-label="Delete item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-20 text-center space-y-4">
                  <span className="text-5xl block animate-bounce">🛒</span>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#064E3B] font-serif">Your Cart is Empty</h4>
                    <p className="text-xs text-gray-500 max-w-[240px] mx-auto leading-relaxed">
                      Add some colorful flowers or fruiting trees to get started on your botanical adventure!
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 bg-[#064E3B] hover:bg-[#10B981] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Browse Plants Catalogue
                  </button>
                </div>
              )}
            </div>

            {/* Cart Summary & CTA Checkout trigger */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50/70 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>Selected Varieties Count</span>
                    <span>{cartItems.length} types</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>Total Quantities</span>
                    <span>{totalItems} plants</span>
                  </div>
                  <div className="flex justify-between items-end border-t border-gray-200/60 pt-2.5">
                    <span className="text-sm font-bold text-gray-800">Order Subtotal</span>
                    <span className="text-xl font-extrabold text-[#064E3B]">
                      ₹{totalAmount}
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  🚚 COD across Kerala. Safe and protective coconut-leaf/carton tree packaging guaranteed.
                </p>

                <div className="space-y-2">
                  <button
                    onClick={onCheckout}
                    className="w-full py-3.5 bg-[#CCFF00] text-emerald-950 rounded-xl text-xs font-black shadow-lg hover:brightness-115 active:brightness-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-emerald-950" />
                    Checkout & Order All on WhatsApp
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl text-xs font-medium hover:bg-gray-100 transition-all text-center cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

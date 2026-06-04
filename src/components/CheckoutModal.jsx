/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { KERALA_DISTRICTS } from '../data';
import { motion } from 'motion/react';

export const CheckoutModal = ({
  isOpen,
  onClose,
  cartItems,
  singlePlantBuy,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    place: '',
    district: 'Ernakulam',
    pincode: '',
    fullAddress: '',
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const activeItems = singlePlantBuy 
    ? [{ plant: singlePlantBuy.plant, quantity: singlePlantBuy.quantity }]
    : cartItems;

  const totalAmount = activeItems.reduce(
    (sum, item) => sum + item.plant.price * item.quantity,
    0
  );

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Customer name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Enter a valid 10-digit phone number';
    }
    if (!formData.place.trim()) newErrors.place = 'Place/City is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^[0-9]{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = 'Enter a valid 6-digit pincode';
    }
    if (!formData.fullAddress.trim()) newErrors.fullAddress = 'Full address is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Create custom pre-filled encoded WhatsApp text message
    let message = `🌿 *Rosemary Garden - New Order* 🌿\n`;
    message += `------------------------------------\n`;
    message += `👤 *Customer Details:*\n`;
    message += `• *Name:* ${formData.customerName.trim()}\n`;
    message += `• *Phone Number:* ${formData.phoneNumber.trim()}\n`;
    message += `• *Place:* ${formData.place.trim()}\n`;
    message += `• *District:* ${formData.district}\n`;
    message += `• *Pincode:* ${formData.pincode.trim()}\n`;
    message += `• *Full Address:* ${formData.fullAddress.trim()}\n\n`;

    message += `📦 *Selected Plant(s):*\n`;
    activeItems.forEach((item, index) => {
      message += `${index + 1}. *${item.plant.name}* (Qty: ${item.quantity}) - ₹${item.plant.price * item.quantity}\n`;
    });
    
    message += `\n💰 *Total Price:* ₹${totalAmount}\n`;
    message += `------------------------------------\n`;
    message += `📍 *Note:* Cash On Delivery (COD) Available across all districts of Kerala. Delivery charge varies based on location.\n`;
    message += `🌱 Thank you for choosing green!`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919061228537&text=${encodedText}`;
    
    // Open WhatsApp in a new tab/window safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>
            <h3 className="text-lg font-semibold font-serif text-white">Submit Rosemary Order</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-[#F1F9F6] p-4 rounded-2xl border border-[#10B981]/20">
            <h4 className="text-xs font-semibold text-[#10B981] uppercase tracking-wider mb-2">Order Summary</h4>
            <div className="space-y-1.5 max-h-24 overflow-y-auto pr-1">
              {activeItems.map((item) => (
                <div key={item.plant.id} className="flex justify-between text-sm text-gray-700">
                  <span className="font-medium">
                    {item.plant.name} <span className="text-gray-400 text-xs text-center">x{item.quantity}</span>
                  </span>
                  <span className="font-semibold text-[#064E3B]">₹{item.plant.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#10B981]/15 mt-2 pt-2 flex justify-between items-center">
              <span className="text-sm font-bold text-[#064E3B]">Total Payable Value</span>
              <span className="text-lg font-extrabold text-[#10B981]">₹{totalAmount}</span>
            </div>
          </div>

          <div className="space-y-3.5">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#10B981] transition-shadow ${
                  errors.customerName ? 'border-red-400 focus:ring-red-500' : 'border-gray-200'
                }`}
              />
              {errors.customerName && (
                <p className="text-xs text-red-500 mt-0.5">{errors.customerName}</p>
              )}
            </div>

            {/* Mobile / Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                WhatsApp Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#10B981] transition-shadow ${
                  errors.phoneNumber ? 'border-red-400 focus:ring-red-500' : 'border-gray-200'
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-xs text-red-500 mt-0.5">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Place & District */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Place <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="e.g. Palachuvad"
                  className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#10B981] transition-shadow ${
                    errors.place ? 'border-red-400 focus:ring-red-500' : 'border-gray-200'
                  }`}
                />
                {errors.place && (
                  <p className="text-xs text-red-500 mt-0.5">{errors.place}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  District <span className="text-red-500">*</span>
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#10B981]"
                >
                  {KERALA_DISTRICTS.map((dist) => (
                    <option key={dist} value={dist}>
                      {dist}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Pincode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="6-digit postal code (e.g. 686664)"
                maxLength={6}
                className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#10B981] transition-shadow ${
                  errors.pincode ? 'border-red-400 focus:ring-red-500' : 'border-gray-200'
                }`}
              />
              {errors.pincode && (
                <p className="text-xs text-red-500 mt-0.5">{errors.pincode}</p>
              )}
            </div>

            {/* Full Shipping Address */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Full Delivery Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="fullAddress"
                rows={3}
                value={formData.fullAddress}
                onChange={handleChange}
                placeholder="House name, Landmark, PO, ZIP Code"
                className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#10B981] transition-shadow resize-none ${
                  errors.fullAddress ? 'border-red-400 focus:ring-red-500' : 'border-gray-200'
                }`}
              />
              {errors.fullAddress && (
                <p className="text-xs text-red-500 mt-0.5">{errors.fullAddress}</p>
              )}
            </div>
          </div>

          <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-800 text-[11px] leading-relaxed flex gap-2">
            <span className="text-sm">💡</span>
            <span>
              <strong>Note:</strong> Clicking <strong>"Confirm & WhatsApp Order"</strong> will draft a secure ready-to-send message in your WhatsApp containing your details and order totals. Only cash-on-delivery is supported.
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 text-sm font-medium text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-[#064E3B] text-white rounded-xl text-sm font-semibold hover:bg-[#10B981] active:bg-[#043327] transition-all shadow-md active:shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Confirm & order on WhatsApp
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

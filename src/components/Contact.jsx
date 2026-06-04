/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Compass, PhoneCall, ExternalLink } from 'lucide-react';

export const Contact = () => {
  const mapUrl = "https://maps.app.goo.gl/tRY4PDqib5u2AzsB9";

  const handleCall = () => {
    window.location.href = "tel:+919061228537";
  };

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=919061228537&text=Hello%20Rosemary%20Garden!%20I'm%20interested%20in%20learning%2520more%2520about%2520your%2520nursery%2520plants.", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 bg-white border-t border-[#10B981]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] block mb-1">Get in Touch</span>
          <h2 className="text-3xl font-extrabold text-[#064E3B] font-serif leading-tight">
            Visit Our Green Paradise or Order Online
          </h2>
          <p className="text-gray-500 text-sm mt-3.5">
            Drop by our physical greenhouse located in Palachuvad near Piravom, Kerala, or get direct advisory support from our botanists on WhatsApp.
          </p>
        </div>

        {/* Contact Layout: Left Contact Info Cards, Right Interactive map card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Location Card */}
              <div className="flex gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl shadow-xs">
                <div className="p-3 bg-[#F1F9F6] text-[#064E3B] rounded-xl h-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-800">📍 Location Address</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Palachuvad near Piravom, Ernakulam, Kerala, India - 686664
                  </p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xxs font-bold text-[#10B981] hover:text-[#064E3B] hover:underline pt-1.5 cursor-pointer"
                  >
                    Get directions in Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl shadow-xs">
                <div className="p-3 bg-[#F1F9F6] text-[#064E3B] rounded-xl h-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-gray-800">📞 Phone Contact</h4>
                  <p className="text-gray-600 text-xs font-semibold">
                    +91 9061228537
                  </p>
                  <p className="text-gray-400 text-xxs">
                    Call for plant health queries, wholesale rates, or logistics checks.
                  </p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl shadow-xs">
                <div className="p-3 bg-[#F1F9F6] text-[#064E3B] rounded-xl h-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-gray-800">🕒 Working Hours</h4>
                  <div className="space-y-1 text-xs text-gray-650">
                    <div className="flex gap-2">
                       <span className="font-semibold text-gray-500 w-28 uppercase text-[10px]">Mon – Sat:</span>
                      <span className="font-bold text-[#064E3B]">8:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex gap-2">
                       <span className="font-semibold text-gray-500 w-28 uppercase text-[10px]">Sunday:</span>
                      <span className="font-bold text-[#064E3B]">9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons Group */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <button
                onClick={handleCall}
                className="py-3 px-4 bg-[#064E3B] hover:bg-[#10B981] active:bg-[#043327] text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                Call Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1caa51] text-white font-bold rounded-xl text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Message
              </button>
            </div>
          </div>

          {/* Right Map Presentation and Directions Frame */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative bg-gray-100 rounded-3xl overflow-hidden border border-[#10B981]/15 shadow-md h-full flex flex-col">
              
              {/* Card visual map header */}
              <div className="p-4.5 bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#CCFF00] animate-spin-slow" />
                  <span className="text-xs font-bold font-serif text-white">Rosemary Garden Location</span>
                </div>
                <span className="text-[10px] text-[#064E3B] bg-white/90 px-2 py-0.5 rounded-md font-semibold">Palachuvad, Kerala</span>
              </div>

              {/* Map Canvas - Real Interactive Embedded Google Map */}
              <div className="flex-1 min-h-[350px] relative w-full h-full bg-gray-100">
                <iframe
                  src="https://maps.google.com/maps?q=Rosemary%20Garden%20Near%20Palachuvad%20Junction%20Piravom%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rosemary Garden Location Map"
                ></iframe>

                {/* Floating GPS and Direction overlay on top of map */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#10B981]/15 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 z-10">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <h5 className="font-bold text-xs text-[#064E3B]">Rosemary Garden Nursery</h5>
                    </div>
                    <p className="text-[10px] text-gray-550 leading-tight">Palachuvad near Piravom, Ernakulam, Kerala • PIN: 686664</p>
                  </div>
                  
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#10B981] hover:bg-[#064E3B] active:bg-[#043327] text-white font-bold rounded-lg text-[10px] tracking-wide shadow-xs transition-colors cursor-pointer group whitespace-nowrap self-stretch sm:self-auto justify-center"
                  >
                    Get Directions
                    <ExternalLink className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform text-white" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

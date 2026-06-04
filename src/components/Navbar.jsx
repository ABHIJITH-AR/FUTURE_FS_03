/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingCart, Menu, X, PhoneCall } from 'lucide-react';

export const Navbar = ({ cartCount, onCartClick, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Offers', href: '#offers' },
    { label: 'Plants', href: '#plants' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of the sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-gradient-to-r from-[#064E3B] to-[#10B981] text-white shadow-md backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand portion */}
          <a 
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, '#home')}
          >
            <div className="relative w-11 h-11 overflow-hidden bg-white rounded-xl shadow-xs border border-white/20 flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/d/1wC2GNfzTKh33K3sgbi7-_NuYISkQBxMp" 
                alt="Rosemary Garden Logo" 
                className="w-full h-full object-contain select-none"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="block text-lg font-bold font-serif tracking-wide leading-tight group-hover:text-[#CCFF00] transition-colors">
                Rosemary Garden
              </span>
              <span className="block text-[10px] text-emerald-100/95 tracking-widest uppercase">
                Plant Nursery • Piravom
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-[#CCFF00] bg-black/20 relative'
                      : 'text-gray-100 hover:text-[#CCFF00]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#CCFF00] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Icons Bar: Cart & Call */}
          <div className="flex items-center gap-2">
            
            <a
              href="tel:+919061228537"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/15 active:bg-white/5 rounded-xl text-xs font-semibold text-emerald-100 transition-colors hover:text-[#CCFF00]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-300" />
              <span>+91 9061228537</span>
            </a>

            {/* Shopping Cart Trigger Icon */}
            <button
              onClick={onCartClick}
              className="relative p-3 rounded-full hover:bg-white/10 transition-all cursor-pointer group focus:outline-hidden"
              aria-label="Open Cart"
              id="shopping-cart-button"
            >
              <ShoppingCart className="w-5.5 h-5.5 text-emerald-100 group-hover:text-[#CCFF00] transition-colors" />
              {cartCount > 0 ? (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] text-[#064E3B] text-[10px] font-bold ring-2 ring-[#064E3B] animate-pulse">
                  {cartCount}
                </span>
              ) : null}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors focus:outline-hidden text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide-down Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#064E3B] border-t border-emerald-800/60 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-black/20 text-[#CCFF00] font-semibold'
                      : 'text-gray-200 hover:bg-[#10B981]/25 hover:text-[#CCFF00]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="tel:+919061228537"
              className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-emerald-300 bg-black/10 rounded-xl hover:text-[#CCFF00]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Rosemary Support: +91 9061228537</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

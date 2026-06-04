/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OfferBanner } from './components/OfferBanner';
import { PlantGrid } from './components/PlantGrid';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { DeliveryInfo } from './components/DeliveryInfo';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Cart state stored to localStorage for top tier persistent convenience
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('rosemary_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [singlePlantBuy, setSinglePlantBuy] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [filteredCount, setFilteredCount] = useState(11);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart items inside storage
  useEffect(() => {
    localStorage.setItem('rosemary_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Monitor scrolling offsets to trigger Active Section glows in the Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'offers', 'plants', 'delivery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200; // offsets matched for early action highlights

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (plant) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id);
      if (existing) {
        triggerToast(`Increased ${plant.name} quantity in your shopping cart! 🌿`);
        return prev.map((item) =>
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      triggerToast(`Added ${plant.name} to your shopping cart! 🌱`);
      return [...prev, { plant, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (plantId, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.plant.id === plantId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (plantId) => {
    setCartItems((prev) => {
      const itemToRemove = prev.find((i) => i.plant.id === plantId);
      if (itemToRemove) {
        triggerToast(`Removed ${itemToRemove.plant.name} from cart.`);
      }
      return prev.filter((item) => item.plant.id !== plantId);
    });
  };

  const handleBuyNow = (plant) => {
    setSinglePlantBuy({ plant, quantity: 1 });
    setIsCheckoutOpen(true);
  };

  const handleCartCheckout = () => {
    setSinglePlantBuy(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    // If it was a cart checkout rather than a single buy-now, clear the cart after opening WhatsApp
    if (!singlePlantBuy) {
      setCartItems([]);
    }
    triggerToast("Redirecting you to WhatsApp with your compiled list... 📦");
  };

  const totalCartCount = cartItems.reduce((acc, current) => acc + current.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Sticky Premium Theme Navhead */}
      <Navbar
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Hero Segment with searching systems */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalCount={11}
          filteredCount={filteredCount}
          onExploreClick={() => {
            const target = document.getElementById('plants');
            if (target) {
              const navbarHeight = 80;
              window.scrollTo({
                top: target.offsetTop - navbarHeight,
                behavior: 'smooth',
              });
            }
          }}
        />

        {/* Dynamic Promotional Value offer boards */}
        <OfferBanner />

        {/* Core plant matching catalogs layout */}
        <PlantGrid
          searchQuery={searchQuery}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          filteredCountSetter={setFilteredCount}
        />

        {/* Nationwide Delivery service metrics */}
        <DeliveryInfo />

        {/* Live verified reviews carousel */}
        <Reviews />

        {/* Map, Contacts & Hours information details */}
        <Contact />
      </main>

      {/* Brand footer */}
      <Footer />

      {/* Side Slide Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCartCheckout}
      />

      {/* Collect Shipping information & open structured WhatsApp client link */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setSinglePlantBuy(null);
        }}
        cartItems={cartItems}
        singlePlantBuy={singlePlantBuy}
        onSuccess={handleOrderSuccess}
      />

      {/* Gorgeous Micro Toast Toaster alerts block */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 bg-emerald-950 text-white border border-emerald-800 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="p-1 bg-emerald-800 rounded-lg text-emerald-300">
              <Sparkles className="w-5 h-5 text-emerald-300 animate-pulse" />
            </div>
            <div className="text-xs font-semibold leading-relaxed">
              {toastMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

# Rosemary Garden Nursery

Rosemary Garden is a beautiful, highly polished, responsive Single Page Application (SPA) designed for exploration and seamless shopping of exotic potted flowers, fruit saplings, and garden accessories in Kerala.

## Description

Rosemary Garden Nursery website offers a state-of-the-art catalog experience for local plant hobbyists, estates, and green thumb owners. Visitors can explore premium seasonal flowers and high-quality grafted orchard tree saplings, calculate bulk value discounts, manage their selection in a dynamic shopping drawer, and instantly compile and dispatch customized order invoices directly to the nursery operator over WhatsApp. The digital greenhouse is located in **Palachuvad near Piravom, Ernakulam, Kerala**.

## Features

- **💚 Dynamic Plant Catalog**: Browse premium floral configurations and grafted fruit tree saplings with organic fertilizers.
- **✨ Group-By Category Filter**: Quickly filter between flowering species (like seasonal roses, Ixora) and grafted trees.
- **🔍 Instant Green Search**: Dynamic search bar to lookup varieties by their common name, botanical scientific name, or descriptions in real-time.
- **🛒 Persistent Storage Cart**: A seamless shopping sidebar/drawer powered by local storage persistence that retains selections across session reloads.
- **🛍️ Flex-Quantity Controls**: Dynamically adjust quantities, review detailed unit rates, and delete items from an elegant slide-out drawer interface.
- **💬 Direct WhatsApp Orders Checkout**: Automates and encodes order metadata (customer name, phone number, pincode, place, full shipping address) to open ready-made messages for the nursery operators via WhatsApp.
- **📍 Real-Location Embedded Map**: Features a built-in custom Google Maps widget indicating the nursery's actual hub in Palachuvad.
- **🚚 Kerala-Wide Delivery Coverage**: Outlines statewide COD (Cash On Delivery) coverage across all 14 districts with secure plant eco-crates info.
- **📱 Responsive Layout & Silk Transitions**: Fluid mobile-optimized responsive layout paired with elegant micro-interactions, spring animations, and smooth touch sliders.

## Tech Stack

- **React & ReactDOM (v19)**: Component-driven progressive UI rendering.
- **Vite Developer Platform**: Modern packaging, compilation, and lightweight optimization.
- **Vanilla ES6+ JavaScript**: Clean, modern scripts and decoupled architectures without the overhead of complex type compilation.
- **Tailwind CSS**: High-performance, high-utility responsive styling rules.
- **motion (React)**: Robust, beautiful layout transition sequences and micro-animations.
- **lucide-react**: Lightweight and optimized vector icon packs.

## Directory Structure

```text
rosemary-garden/
├── index.html                # Entry point HTML document
├── package.json              # App dependencies, configurations, and scripts
├── vite.config.js            # Build and development server configuration
├── README.md                 # Project documentation
├── src/
│   ├── main.jsx              # Application main bundle bootsheet
│   ├── index.css             # Global CSS and Tailwind CSS configuration
│   ├── App.jsx               # Master state provider and layout wrapper
│   ├── data.js               # Plants catalog, districts, and reviews dataset
│   └── components/           # Modular visual layout components
│       ├── Navbar.jsx        # Sticky navigation header with scroll sync
│       ├── Hero.jsx          # Engaging introduction section with search engine
│       ├── OfferBanner.jsx   # Interactive deal showcase boards
│       ├── PlantGrid.jsx     # Live catalogue cards with detail drawers
│       ├── CartDrawer.jsx    # Persistent shopping cart sidebar
│       ├── CheckoutModal.jsx # Form collector with WhatsApp URL compilers
│       ├── DeliveryInfo.jsx  # Highlight features on transit and COD rules
│       ├── Reviews.jsx       # Staggered review listing & mobile touch slider
│       ├── Contact.jsx       # Physical address info & interactive Google Map
│       └── Footer.jsx        # Bottom branding footer with smooth scroll-up
```

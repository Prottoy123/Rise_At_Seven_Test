# Rise At Seven - High-Fidelity Frontend Clone

🚀 **Live Demo:** [https://rise-at-seven-test.vercel.app/](https://rise-at-seven-test.vercel.app/)

---

## 📖 Overview

This project is a high-fidelity, pixel-perfect frontend recreation of the **[Rise At Seven](https://riseatseven.com/)** agency website. The core objective of this project was to reverse-engineer and implement the complex, dynamic, and award-winning UI/UX of the original site, focusing heavily on scroll interactions, custom cursors, layout structures, and high-performance micro-animations.

The clone is fully responsive, ensuring that both desktop and mobile users experience the same polished interactions—from custom mega-menus to accordion-style footer navigations and infinite scroll marquees.

## ✨ Key Features & Technical Highlights

- **Dynamic Mega-Menu Navigation:** A complex, state-driven header that alters its layout based on the content (e.g., Services vs. Locations), featuring scroll-aware transparency and a mobile drawer.
- **Custom Cursor & Interactions:** Implemented GSAP to create a custom mint-colored "Send Us Your Brief" pill cursor that tracks the mouse with zero-latency offset centering.
- **High-Performance Animations:** Used Framer Motion and GSAP to handle staggering text reveals, parallax scrolling, liquid-style background transitions, and hover-triggered UI shifts.
- **Infinite Marquee Slider:** A completely automated, continuous-loop slider mixing typography and imagery, styled to match the precise aspect ratios and typography of the live site.
- **Responsive "Featured Work" Grid:** Engineered a fluid layout that transitions from a complex desktop grid to a mobile-first stacked approach, including CSS-filter-based logo recoloring.
- **Pro-Level Component Architecture:** Reusable micro-components (like `AnimatedFooterLink` and `AnimatedLink`) designed to abstract away complex tracking masks, hover translations, and class management.

## 🛠️ Technology Stack

- **Framework:** React.js (via Vite)
- **Styling:** Tailwind CSS v4 (with complex utility orchestration for hover states and arbitrary values)
- **Animation Libraries:** 
  - [Framer Motion](https://www.framer.com/motion/) (Declarative react animations, drag constraints)
  - [GSAP](https://gsap.com/) (High-performance cursor tracking, scroll triggers)
- **Icons:** React Icons
- **Deployment:** Vercel

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prottoy123/Rise_At_Seven_Test.git
   cd "Rise At Seven"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port provided in your terminal).

## 🎨 Design Philosophy

This project strictly adheres to modern web design aesthetics:
- **Typography:** Precise matching of font weights, tracking (`tracking-tight`), and line-heights (`leading-[0.9]`).
- **Color Palette:** Curated monochromatic scales (`#111111`, `#f0f0f0`) offset by vibrant, brand-specific accents (e.g., `#b2f9e1` mint).
- **Micro-interactions:** Every button and link features a subtle translation or mask-reveal effect, ensuring the interface feels "alive" and reactive.

---
*Disclaimer: This is a strictly educational and portfolio-oriented clone. All brand assets, logos, and original designs are the property of Rise At Seven.*

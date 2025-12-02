"use client";

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navigation />
      <CartDrawer />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-8 text-center">
          About Unsonu
        </h1>

        <div className="bg-white p-12 border border-gray-200 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unsonu was founded on the principle that true luxury lies in simplicity.
              We believe that the most powerful statements are made through understated elegance,
              exceptional craftsmanship, and timeless design.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4">
              Our Philosophy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Every piece in our collection is carefully curated to embody minimalist luxury.
              We focus on quality over quantity, craftsmanship over trends, and lasting value over fast fashion.
              Our monochromatic aesthetic reflects our commitment to timeless style that transcends seasons.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4">
              Craftsmanship
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Each bracelet is handcrafted by skilled artisans using premium materials including
              sterling silver and genuine leather. Our upcoming hoodie collection continues this tradition
              of excellence, featuring premium heavyweight fabrics and meticulous attention to detail.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold uppercase tracking-wide mb-4">
              Sustainability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to responsible sourcing and sustainable practices. Our packaging is minimal
              and recyclable, and we partner with suppliers who share our values of ethical production
              and environmental responsibility.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

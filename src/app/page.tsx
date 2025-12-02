"use client";

import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { ProductCard } from '@/components/product-card';
import { getFeaturedProducts } from '@/lib/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navigation />
      <CartDrawer />

      {/* Hero Section */}
      <section className="bg-[#F5F5F5] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Image - Left Side */}
            <div className="relative">
              <div className="aspect-[4/3] bg-white border border-gray-200 relative overflow-hidden">
                <Image
                  src="/generated/hero-main.jpg"
                  alt="Unsonu luxury hoodie and bracelet collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Product Thumbnails Grid */}
              <div className="absolute right-0 top-0 grid grid-cols-2 gap-2 w-32 md:w-40">
                {[
                  { src: '/generated/thumb-1.jpg', alt: 'Bracelet collection' },
                  { src: '/generated/thumb-2.jpg', alt: 'Black hoodie' },
                  { src: '/generated/thumb-3.jpg', alt: 'Silver wire detail' },
                  { src: '/generated/thumb-4.jpg', alt: 'Leather wrap' },
                  { src: '/generated/thumb-5.jpg', alt: 'Silver cuff' },
                  { src: '/generated/thumb-6.jpg', alt: 'Chain bracelet' }
                ].map((thumb, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white border border-gray-200 hover:border-black transition-colors cursor-pointer relative overflow-hidden"
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Text - Right Side */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-3">
                  UNSONU:<br />TIMELESS LUXURY
                </h1>
                <p className="text-sm tracking-wider text-gray-600">
                  ELEVATE YOUR EVERYDAY
                </p>
              </div>

              <button className="unsonu-button-primary">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.05em] text-center mb-12">
            Featured Collections
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Newsletter Text */}
            <div>
              <h2 className="text-3xl font-semibold uppercase tracking-wide mb-6">
                Join the Unsonu Circle
              </h2>
              <p className="text-gray-600 mb-6">
                Be the first to discover new collections, exclusive offers, and timeless style inspiration.
              </p>

              {/* Email Form */}
              <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 focus:border-black transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="unsonu-button-primary whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Newsletter Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 border border-gray-200 relative overflow-hidden">
                <Image
                  src="/generated/newsletter-1.jpg"
                  alt="Unsonu jewelry collection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="aspect-square bg-gray-100 border border-gray-200 relative overflow-hidden">
                <Image
                  src="/generated/newsletter-2.jpg"
                  alt="Unsonu fashion essentials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

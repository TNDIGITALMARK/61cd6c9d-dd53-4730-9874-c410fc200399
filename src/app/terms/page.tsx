"use client";

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navigation />
      <CartDrawer />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-8">
          Terms of Service
        </h1>

        <div className="bg-white p-12 border border-gray-200 space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last Updated: December 2024</p>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Agreement to Terms</h2>
            <p>
              By accessing and using Unsonu's website and services, you agree to be bound by these
              Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Products and Orders</h2>
            <p>
              All product descriptions, images, and prices are subject to change without notice.
              We reserve the right to limit quantities and refuse service to anyone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Returns and Exchanges</h2>
            <p>
              We accept returns within 30 days of purchase for unworn items in original condition.
              Custom or personalized items are final sale.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including images, text, and logos, is the property of
              Unsonu and protected by copyright laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Limitation of Liability</h2>
            <p>
              Unsonu shall not be liable for any indirect, incidental, or consequential damages
              arising from the use of our products or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at support@unsonu.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

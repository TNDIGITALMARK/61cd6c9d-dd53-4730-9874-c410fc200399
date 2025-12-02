"use client";

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navigation />
      <CartDrawer />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold uppercase tracking-tight mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white p-12 border border-gray-200 space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last Updated: December 2024</p>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Introduction</h2>
            <p>
              At Unsonu, we respect your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Information We Collect</h2>
            <p>
              We collect information you provide directly to us, including your name, email address,
              shipping address, and payment information when you make a purchase.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">How We Use Your Information</h2>
            <p>
              We use your information to process orders, communicate with you about your purchases,
              and improve our products and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from
              unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at support@unsonu.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

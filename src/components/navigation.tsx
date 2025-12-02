"use client";

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { useState } from 'react';

export function Navigation() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
          >
            UNSONU
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity"
            >
              SHOP
            </Link>
            <Link
              href="/?category=bracelets"
              className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity"
            >
              BRACELETS
            </Link>
            <Link
              href="/?category=hoodies"
              className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity"
            >
              HOODIES
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity"
            >
              CONTACT
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button
              className="hover:opacity-90 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              className="relative hover:opacity-90 transition-opacity"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="hover:opacity-90 transition-opacity hidden md:block"
              aria-label="User account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden hover:opacity-90 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link
                href="/?category=bracelets"
                className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                BRACELETS
              </Link>
              <Link
                href="/?category=hoodies"
                className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOODIES
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Link
                href="/account"
                className="text-sm font-medium tracking-[0.05em] uppercase hover:opacity-90 transition-opacity py-2 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4 mr-2" />
                ACCOUNT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

"use client";

import { useParams } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CartDrawer } from '@/components/cart-drawer';
import { getProductBySlug, getReviewsByProductId, getAverageRating } from '@/lib/products';
import { useCart } from '@/contexts/cart-context';
import { useState } from 'react';
import { Star } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes?.[0]
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F7F7F7]">
        <Navigation />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <a href="/" className="unsonu-button-primary inline-block">
            Return to Shop
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const reviews = getReviewsByProductId(product.id);
  const averageRating = getAverageRating(product.id);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navigation />
      <CartDrawer />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-white border border-gray-200 mb-4 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm">Product Image</p>
                <p className="text-xs mt-2">{product.name}</p>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white border border-gray-200 cursor-pointer hover:border-black transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-tight mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              {reviews.length > 0 && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= averageRating
                            ? 'fill-black text-black'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({reviews.length} reviews)
                  </span>
                </div>
              )}

              <p className="text-2xl font-bold mb-6">${product.price}</p>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Materials */}
            {product.materials && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
                  Materials
                </h3>
                <p className="text-gray-700">{product.materials}</p>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Size
                </h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                Quantity
              </h3>
              <div className="flex items-center border border-gray-300 w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Stock Status */}
            {product.stockLevel < 5 && product.inStock && (
              <p className="text-sm text-red-600">
                Only {product.stockLevel} left in stock!
              </p>
            )}

            {!product.inStock && (
              <p className="text-sm text-red-600 font-medium">Out of Stock</p>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="unsonu-button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-semibold uppercase tracking-wide mb-8">
              Customer Reviews
            </h2>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? 'fill-black text-black'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium text-sm">{review.author}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

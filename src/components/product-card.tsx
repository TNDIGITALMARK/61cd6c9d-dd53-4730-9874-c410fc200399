import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="bg-white border border-[#EBEBEB] transition-shadow hover:shadow-md">
        {/* Product Image - Square aspect ratio */}
        <div className="aspect-square bg-gray-100 relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-[13px] font-medium uppercase tracking-[0.05em] mb-2 text-center">
            {product.name}
          </h3>
          <p className="text-base font-bold text-center mb-3">
            ${product.price}
          </p>

          {/* Quick View Button */}
          <button className="w-full bg-white text-black border border-black py-2 px-4 text-xs font-medium uppercase tracking-[0.08em] hover:bg-black hover:text-white transition-all">
            Quick View
          </button>
        </div>
      </div>
    </Link>
  );
}

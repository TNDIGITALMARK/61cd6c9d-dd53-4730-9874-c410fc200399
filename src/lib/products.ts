// Product types and mock data for Unsonu e-commerce

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  category: 'bracelet' | 'hoodie';
  images: string[];
  inStock: boolean;
  stockLevel: number;
  sizes?: string[];
  materials?: string;
  features?: string[];
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

// Mock product data based on design reference
export const products: Product[] = [
  {
    id: '1',
    name: 'Onyx Braided Bracelet',
    slug: 'onyx-braided-bracelet',
    price: 89,
    description: 'Handcrafted sterling silver chain bracelet with minimalist design. Perfect for everyday wear or special occasions.',
    category: 'bracelet',
    images: ['/generated/bracelet-1.jpg'],
    inStock: true,
    stockLevel: 12,
    materials: 'Sterling Silver',
    features: [
      'Handcrafted sterling silver',
      'Adjustable clasp',
      'Hypoallergenic materials',
      'Comes in luxury gift box'
    ]
  },
  {
    id: '2',
    name: 'Leather Wrap Black',
    slug: 'leather-wrap-black',
    price: 65,
    description: 'Premium black leather wrap bracelet with elegant silver accents. A statement piece that complements any outfit.',
    category: 'bracelet',
    images: ['/generated/bracelet-2.jpg'],
    inStock: true,
    stockLevel: 8,
    materials: 'Genuine Leather, Sterling Silver',
    features: [
      'Genuine Italian leather',
      'Multiple wrap design',
      'Silver-plated hardware',
      'Adjustable sizing'
    ]
  },
  {
    id: '3',
    name: 'Minimalist Cuff',
    slug: 'minimalist-cuff',
    price: 120,
    description: 'Bold yet refined silver cuff bracelet. Timeless design that makes a statement without overwhelming.',
    category: 'bracelet',
    images: ['/generated/bracelet-3.jpg'],
    inStock: true,
    stockLevel: 15,
    materials: 'Sterling Silver',
    features: [
      'Solid sterling silver construction',
      'Sleek minimalist design',
      'Hand-polished finish',
      'One size fits most'
    ]
  },
  {
    id: '4',
    name: 'Essential Black Hoodie',
    slug: 'essential-black-hoodie',
    price: 145,
    description: 'Premium heavyweight hoodie in classic black. Crafted from the finest cotton blend for ultimate comfort and durability.',
    category: 'hoodie',
    images: ['/generated/hoodie-1.jpg'],
    inStock: true,
    stockLevel: 20,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: '80% Cotton, 20% Polyester',
    features: [
      'Premium heavyweight fabric',
      'Ribbed cuffs and hem',
      'Kangaroo pocket',
      'Embroidered logo detail',
      'Pre-shrunk for perfect fit'
    ]
  },
  {
    id: '5',
    name: 'Sterling Silver Chain',
    slug: 'sterling-silver-chain',
    price: 95,
    description: 'Classic sterling silver chain bracelet with secure clasp. Versatile piece that pairs beautifully with other jewelry.',
    category: 'bracelet',
    images: ['/generated/bracelet-4.jpg'],
    inStock: true,
    stockLevel: 10,
    materials: 'Sterling Silver',
    features: [
      'Solid sterling silver links',
      'Secure lobster clasp',
      'Available in multiple lengths',
      'Lifetime warranty'
    ]
  },
  {
    id: '6',
    name: 'Twisted Wire Bracelet',
    slug: 'twisted-wire-bracelet',
    price: 75,
    description: 'Elegant twisted wire design bracelet. Sophisticated craftsmanship meets modern minimalism.',
    category: 'bracelet',
    images: ['/generated/bracelet-5.jpg'],
    inStock: true,
    stockLevel: 6,
    materials: 'Sterling Silver',
    features: [
      'Hand-twisted silver wire',
      'Unique geometric pattern',
      'Comfortable all-day wear',
      'Made to order available'
    ]
  }
];

// Mock reviews
export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    author: 'Sarah M.',
    rating: 5,
    comment: 'Perfect minimalist design that goes with everything. The quality exceeded my expectations!',
    date: '2024-11-15'
  },
  {
    id: '2',
    productId: '1',
    author: 'Alex T.',
    rating: 5,
    comment: 'Quality exceeded expectations for the price point. Will definitely be ordering more.',
    date: '2024-11-20'
  },
  {
    id: '3',
    productId: '2',
    author: 'Jordan K.',
    rating: 5,
    comment: 'The leather quality is amazing and the silver accents are beautiful. Worth every penny.',
    date: '2024-11-18'
  },
  {
    id: '4',
    productId: '3',
    author: 'Taylor R.',
    rating: 5,
    comment: 'This cuff is stunning. Simple yet makes a statement. Gets compliments every time I wear it.',
    date: '2024-11-22'
  },
  {
    id: '5',
    productId: '4',
    author: 'Morgan L.',
    rating: 5,
    comment: 'Best hoodie I own. The quality is incredible and the fit is perfect. Can\'t wait for more colors!',
    date: '2024-11-25'
  }
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: 'bracelet' | 'hoodie'): Product[] {
  return products.filter(p => p.category === category);
}

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter(r => r.productId === productId);
}

export function getAverageRating(productId: string): number {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
  return sum / productReviews.length;
}

// Featured products (first 4 for homepage)
export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4);
}

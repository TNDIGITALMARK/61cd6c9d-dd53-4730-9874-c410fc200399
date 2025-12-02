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
  },
  {
    id: '7',
    name: 'Slate Gray Hoodie',
    slug: 'slate-gray-hoodie',
    price: 145,
    description: 'Premium heavyweight hoodie in sophisticated slate gray. The perfect balance of comfort and refined style.',
    category: 'hoodie',
    images: ['/generated/hoodie-2.jpg'],
    inStock: true,
    stockLevel: 18,
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
    id: '8',
    name: 'Double Wrap Leather',
    slug: 'double-wrap-leather',
    price: 85,
    description: 'Rich brown leather bracelet with double wrap design and oxidized silver closure.',
    category: 'bracelet',
    images: ['/generated/bracelet-6.jpg'],
    inStock: true,
    stockLevel: 9,
    materials: 'Genuine Leather, Oxidized Silver',
    features: [
      'Premium Italian leather',
      'Double wrap design',
      'Oxidized silver clasp',
      'Ages beautifully with wear'
    ]
  },
  {
    id: '9',
    name: 'Beaded Stone Bracelet',
    slug: 'beaded-stone-bracelet',
    price: 68,
    description: 'Natural stone beads paired with sterling silver accents. Earthy elegance for the modern minimalist.',
    category: 'bracelet',
    images: ['/generated/bracelet-7.jpg'],
    inStock: true,
    stockLevel: 14,
    materials: 'Natural Stone, Sterling Silver',
    features: [
      'Natural stone beads',
      'Sterling silver spacers',
      'Elastic comfort fit',
      'Each piece unique'
    ]
  },
  {
    id: '10',
    name: 'Geometric Link Bracelet',
    slug: 'geometric-link-bracelet',
    price: 110,
    description: 'Bold geometric links in brushed sterling silver. Architecture-inspired jewelry design.',
    category: 'bracelet',
    images: ['/generated/bracelet-8.jpg'],
    inStock: true,
    stockLevel: 7,
    materials: 'Sterling Silver',
    features: [
      'Geometric link design',
      'Brushed silver finish',
      'Secure box clasp',
      'Contemporary aesthetic'
    ]
  },
  {
    id: '11',
    name: 'Oversized Comfort Hoodie',
    slug: 'oversized-comfort-hoodie',
    price: 155,
    description: 'Luxuriously oversized hoodie in premium cream. Ultimate comfort meets elevated streetwear.',
    category: 'hoodie',
    images: ['/generated/hoodie-3.jpg'],
    inStock: true,
    stockLevel: 12,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: '85% Cotton, 15% Polyester',
    features: [
      'Oversized relaxed fit',
      'Ultra-soft fleece interior',
      'Drop shoulder design',
      'Extended length',
      'Premium organic cotton'
    ]
  },
  {
    id: '12',
    name: 'Woven Metal Cuff',
    slug: 'woven-metal-cuff',
    price: 135,
    description: 'Intricately woven sterling silver cuff. Textile-inspired metalwork showcasing artisan skill.',
    category: 'bracelet',
    images: ['/generated/bracelet-9.jpg'],
    inStock: true,
    stockLevel: 5,
    materials: 'Sterling Silver',
    features: [
      'Hand-woven silver wire',
      'Wide cuff design',
      'Adjustable opening',
      'Statement piece'
    ]
  },
  {
    id: '13',
    name: 'Cable Chain Bracelet',
    slug: 'cable-chain-bracelet',
    price: 92,
    description: 'Classic cable chain in polished sterling silver. Timeless elegance for everyday luxury.',
    category: 'bracelet',
    images: ['/generated/bracelet-10.jpg'],
    inStock: true,
    stockLevel: 16,
    materials: 'Sterling Silver',
    features: [
      'Polished cable chain',
      'Spring ring clasp',
      'Multiple length options',
      'Lifetime warranty'
    ]
  },
  {
    id: '14',
    name: 'Vintage Black Hoodie',
    slug: 'vintage-black-hoodie',
    price: 165,
    description: 'Vintage-washed black hoodie with distressed detailing. Modern luxury with lived-in comfort.',
    category: 'hoodie',
    images: ['/generated/hoodie-4.jpg'],
    inStock: true,
    stockLevel: 10,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: '100% Premium Cotton',
    features: [
      'Vintage wash finish',
      'Distressed detailing',
      'Heavyweight cotton',
      'Relaxed fit',
      'Unique fading on each piece'
    ]
  },
  {
    id: '15',
    name: 'Hammered Silver Band',
    slug: 'hammered-silver-band',
    price: 78,
    description: 'Hand-hammered sterling silver band bracelet. Artisanal texture meets minimalist form.',
    category: 'bracelet',
    images: ['/generated/bracelet-11.jpg'],
    inStock: true,
    stockLevel: 11,
    materials: 'Sterling Silver',
    features: [
      'Hand-hammered texture',
      'Solid silver construction',
      'Slightly adjustable',
      'Artisan crafted'
    ]
  },
  {
    id: '16',
    name: 'Bone White Hoodie',
    slug: 'bone-white-hoodie',
    price: 145,
    description: 'Premium hoodie in sophisticated bone white. Clean aesthetic with uncompromising quality.',
    category: 'hoodie',
    images: ['/generated/hoodie-5.jpg'],
    inStock: true,
    stockLevel: 15,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    materials: '80% Cotton, 20% Polyester',
    features: [
      'Premium heavyweight fabric',
      'Ribbed cuffs and hem',
      'Kangaroo pocket',
      'Embroidered logo detail',
      'Pre-shrunk for perfect fit'
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

// Featured products (all products for homepage)
export function getFeaturedProducts(): Product[] {
  return products;
}

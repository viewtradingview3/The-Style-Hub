import bcrypt from "bcryptjs";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  image: string;
  hoverImage?: string;
  sizes: string[];
  colors: string[];
  stock: number;
  featured?: boolean;
  newArrival?: boolean;
  bestseller?: boolean;
  tags: string[];
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Order = {
  id: string;
  customerName: string;
  email: string;
  status: string;
  total: number;
  items: { productId: string; name: string; qty: number; size: string; color: string; price: number }[];
  createdAt: string;
  shipping: number;
};

export const categories: Category[] = [
  { id: "men", name: "Men", slug: "men", description: "Tailored essentials & everyday streetwear" },
  { id: "women", name: "Women", slug: "women", description: "Modern silhouettes and elevated staples" },
  { id: "kids", name: "Kids", slug: "kids", description: "Comfortable pieces built for movement" },
  { id: "new-arrivals", name: "New Arrivals", slug: "new-arrivals", description: "Fresh picks for the season" },
  { id: "sale", name: "Sale", slug: "sale", description: "Limited-time markdowns" },
];

export const products: Product[] = [
  {
    id: "p-001",
    slug: "premium-oversized-tshirt",
    name: "Premium Oversized T-Shirt",
    price: 1899,
    salePrice: 1499,
    description: "Ultra-soft cotton jersey with an oversized fit designed for all-day comfort.",
    category: "men",
    brand: "Veloura",
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey", "Navy"],
    stock: 18,
    featured: true,
    newArrival: true,
    bestseller: true,
    tags: ["oversized", "cotton", "essential"],
  },
  {
    id: "p-002",
    slug: "classic-tailored-shirt",
    name: "Classic Tailored Shirt",
    price: 2499,
    salePrice: 2199,
    description: "Structured cotton shirt crafted for elevated everyday layering.",
    category: "men",
    brand: "Marell",
    rating: 4.7,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Sky Blue", "Slate"],
    stock: 24,
    featured: true,
    bestseller: true,
    tags: ["shirt", "tailored", "casual"],
  },
  {
    id: "p-003",
    slug: "ascent-hoodie",
    name: "Ascent Hoodie",
    price: 3299,
    description: "Warm brushed fleece hoodie with a roomy cut and premium finish.",
    category: "men",
    brand: "Northline",
    rating: 4.9,
    reviews: 208,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Graphite", "Cream", "Forest"],
    stock: 12,
    featured: true,
    bestseller: true,
    tags: ["hoodie", "fleece", "winter"],
  },
  {
    id: "p-004",
    slug: "everyday-gray-jeans",
    name: "Everyday Gray Jeans",
    price: 2799,
    salePrice: 2399,
    description: "Relaxed fit denim built for daily movement with premium stretch.",
    category: "men",
    brand: "Aster",
    rating: 4.6,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    sizes: ["30", "32", "34", "36"],
    colors: ["Stone", "Dark Indigo"],
    stock: 14,
    newArrival: true,
    tags: ["jeans", "denim", "everyday"],
  },
  {
    id: "p-005",
    slug: "aura-midi-dress",
    name: "Aura Midi Dress",
    price: 4599,
    description: "Fluid midi dress with an elegant drape and a soft satin finish.",
    category: "women",
    brand: "Lune Atelier",
    rating: 4.9,
    reviews: 164,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Rose", "Champagne"],
    stock: 10,
    featured: true,
    newArrival: true,
    tags: ["dress", "soft", "elegant"],
  },
  {
    id: "p-006",
    slug: "satin-crop-top",
    name: "Satin Crop Top",
    price: 2199,
    salePrice: 1899,
    description: "Lightweight satin crop top with a polished silhouette and soft sheen.",
    category: "women",
    brand: "Lune Atelier",
    rating: 4.5,
    reviews: 71,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Rose", "Black"],
    stock: 20,
    tags: ["top", "satin", "fashion"],
  },
  {
    id: "p-007",
    slug: "cozy-fleece-hoodie",
    name: "Cozy Fleece Hoodie",
    price: 2999,
    description: "The softest layer for cool afternoons with a relaxed unisex fit.",
    category: "women",
    brand: "Northline",
    rating: 4.7,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Taupe", "Forest"],
    stock: 16,
    bestseller: true,
    tags: ["hoodie", "cozy", "layer"],
  },
  {
    id: "p-008",
    slug: "studio-trouser",
    name: "Studio Trouser",
    price: 2899,
    description: "High-waist trouser designed to balance comfort and refined tailoring.",
    category: "women",
    brand: "Marell",
    rating: 4.8,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Sand", "Ink"],
    stock: 8,
    tags: ["trouser", "tailored", "studio"],
  },
  {
    id: "p-009",
    slug: "little-hero-tee",
    name: "Little Hero Tee",
    price: 1299,
    salePrice: 1099,
    description: "Soft cotton tee for kids with a playful fit and easy movement.",
    category: "kids",
    brand: "Sprout & Co.",
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80",
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    colors: ["Navy", "Sky", "Coral"],
    stock: 26,
    newArrival: true,
    tags: ["kid", "tshirt", "cotton"],
  },
  {
    id: "p-010",
    slug: "pixel-play-hoodie",
    name: "Pixel Play Hoodie",
    price: 2599,
    description: "Cozy hoodie for active kids with color-rich details and stretch fabric.",
    category: "kids",
    brand: "Sprout & Co.",
    rating: 4.7,
    reviews: 80,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: ["Blue", "Green", "Orange"],
    stock: 13,
    tags: ["hoodie", "play", "kid"],
  },
  {
    id: "p-011",
    slug: "noon-day-shirt",
    name: "Noon Day Shirt",
    price: 2199,
    description: "Crisp everyday shirt with a relaxed cut and easy-to-style palette.",
    category: "men",
    brand: "Veloura",
    rating: 4.5,
    reviews: 63,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Stone", "Indigo"],
    stock: 18,
    tags: ["shirt", "daywear", "clean"],
  },
  {
    id: "p-012",
    slug: "heritage-knit-sweater",
    name: "Heritage Knit Sweater",
    price: 3499,
    salePrice: 3199,
    description: "A premium knit with texture, warmth and classic layering appeal.",
    category: "women",
    brand: "Northline",
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L"],
    colors: ["Moss", "Camel", "Black"],
    stock: 7,
    featured: true,
    tags: ["sweater", "heritage", "warm"],
  },
  {
    id: "p-013",
    slug: "campus-trench",
    name: "Campus Trench",
    price: 5299,
    description: "Structured outer layer ideal for big-city commutes and crisp evenings.",
    category: "men",
    brand: "Aster",
    rating: 4.7,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Black"],
    stock: 9,
    bestseller: true,
    tags: ["coat", "trench", "outerwear"],
  },
  {
    id: "p-014",
    slug: "lace-and-flow-top",
    name: "Lace & Flow Top",
    price: 2499,
    description: "Light lace detailing paired with a soft, airy silhouette for day-to-night.",
    category: "women",
    brand: "Lune Atelier",
    rating: 4.6,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blush", "Ivory", "Black"],
    stock: 11,
    newArrival: true,
    tags: ["lace", "flow", "women"],
  },
  {
    id: "p-015",
    slug: "city-wind-jacket",
    name: "City Wind Jacket",
    price: 3999,
    salePrice: 3499,
    description: "A lightweight technical jacket designed for everyday movement and weather. ",
    category: "men",
    brand: "Aster",
    rating: 4.7,
    reviews: 122,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Olive"],
    stock: 15,
    tags: ["jacket", "windproof", "city"],
  },
  {
    id: "p-016",
    slug: "mini-bloom-shirt",
    name: "Mini Bloom Shirt",
    price: 1999,
    description: "Easy breezy shirt with delicate prints and a clean finish.",
    category: "kids",
    brand: "Sprout & Co.",
    rating: 4.4,
    reviews: 50,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    colors: ["Pink", "Mint", "Sunflower"],
    stock: 17,
    tags: ["shirt", "kids", "print"],
  },
  {
    id: "p-017",
    slug: "auto-fit-tee",
    name: "Auto Fit Tee",
    price: 1699,
    description: "Everyday lightweight tee with a modern, comfortable drape.",
    category: "men",
    brand: "Veloura",
    rating: 4.5,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Sand"],
    stock: 22,
    tags: ["tee", "everyday", "basic"],
  },
  {
    id: "p-018",
    slug: "dune-winter-knit",
    name: "Dune Winter Knit",
    price: 3199,
    description: "Warm knit texture with soft brushed finish for cool season layers.",
    category: "women",
    brand: "Northline",
    rating: 4.8,
    reviews: 109,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L"],
    colors: ["Taupe", "Charcoal", "Cream"],
    stock: 10,
    tags: ["winter", "knit", "warm"],
  },
  {
    id: "p-019",
    slug: "seamless-sport-set",
    name: "Seamless Sport Set",
    price: 4499,
    salePrice: 3999,
    description: "Performance set designed for movement, travel and easy styling.",
    category: "women",
    brand: "Aster",
    rating: 4.9,
    reviews: 131,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Berry", "Midnight", "Stone"],
    stock: 6,
    featured: true,
    tags: ["sport", "set", "performance"],
  },
  {
    id: "p-020",
    slug: "sunset-jogger",
    name: "Sunset Jogger",
    price: 2699,
    salePrice: 2299,
    description: "Stretch jogger with an elevated finish and soft comfort feel.",
    category: "men",
    brand: "Marell",
    rating: 4.7,
    reviews: 90,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    hoverImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sand", "Black", "Olive"],
    stock: 18,
    bestseller: true,
    tags: ["jogger", "comfort", "casual"],
  },
];

export const customers: User[] = [
  { id: "u-100", name: "Ayesha Khan", email: "ayesha@example.com", password: "password123" },
  { id: "u-101", name: "Omar Shah", email: "omar@example.com", password: "password123" },
];

export const orders: Order[] = [
  {
    id: "ORD-1001",
    customerName: "Ayesha Khan",
    email: "ayesha@example.com",
    status: "Shipped",
    total: 4899,
    shipping: 250,
    createdAt: "2026-10-01T10:00:00.000Z",
    items: [
      { productId: "p-001", name: "Premium Oversized T-Shirt", qty: 1, size: "L", color: "Black", price: 1499 },
      { productId: "p-005", name: "Aura Midi Dress", qty: 1, size: "M", color: "Rose", price: 4599 },
    ],
  },
  {
    id: "ORD-1002",
    customerName: "Omar Shah",
    email: "omar@example.com",
    status: "Processing",
    total: 2399,
    shipping: 250,
    createdAt: "2026-10-03T13:00:00.000Z",
    items: [{ productId: "p-004", name: "Everyday Gray Jeans", qty: 1, size: "32", color: "Stone", price: 2399 }],
  },
];

export const store = { products, categories, customers, orders };

export function createUser(name: string, email: string, password: string) {
  const existingUser = store.customers.find((user) => user.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return null;
  }

  const user: User = {
    id: `u-${Date.now()}`,
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  };

  store.customers.push(user);
  return user;
}

export function validateUser(email: string, password: string) {
  const user = store.customers.find((entry) => entry.email.toLowerCase() === email.toLowerCase());
  if (!user) return null;
  if (!bcrypt.compareSync(password, user.password)) return null;
  return user;
}

export function createOrder(payload: {
  customerName: string;
  email: string;
  items: { productId: string; name: string; qty: number; size: string; color: string; price: number }[];
  total: number;
  shipping: number;
}) {
  const order: Order = {
    id: `ORD-${String(Date.now()).slice(-6)}`,
    customerName: payload.customerName,
    email: payload.email,
    status: "Processing",
    total: payload.total,
    shipping: payload.shipping,
    createdAt: new Date().toISOString(),
    items: payload.items,
  };

  store.orders.unshift(order);
  return order;
}

export function addProduct(product: Product) {
  store.products.unshift(product);
  return product;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug) ?? null;
}

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId) ?? null;
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value);
}

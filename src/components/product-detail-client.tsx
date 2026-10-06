"use client";

import Link from "next/link";
import { Minus, Plus, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { formatPrice, products, type Product } from "@/lib/store";

export function ProductDetailClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? "");
  const [quantity, setQuantity] = useState(1);

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const existingIndex = cart.findIndex((item: any) => item.id === product.id && item.size === selectedSize && item.color === selectedColor);
    if (existingIndex >= 0) {
      cart[existingIndex].qty += quantity;
    } else {
      cart.push({ id: product.id, name: product.name, image: product.image, price: product.salePrice ?? product.price, size: selectedSize, color: selectedColor, qty: quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "/cart";
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-stone-500">
        <Link href="/" className="hover:text-stone-900">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-stone-900">Shop</Link>
        <span>/</span>
        <span className="text-stone-900">{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-[80px_1fr]">
          <div className="space-y-3">
            {[product.image, product.image, product.image].map((image, index) => (
              <img key={index} src={image} alt={`${product.name} view ${index + 1}`} className="h-20 w-full rounded-2xl object-cover" />
            ))}
          </div>
          <img src={product.image} alt={product.name} className="h-full min-h-[620px] w-full rounded-[2rem] object-cover" />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">{product.brand}</p>
          <h1 className="mt-3 text-4xl font-black text-stone-900">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3 text-stone-600">
            <div className="flex items-center gap-1 text-amber-500"><Star className="h-4 w-4 fill-current" /> <span className="font-medium text-stone-800">{product.rating}</span></div>
            <span>({product.reviews} reviews)</span>
          </div>

          <div className="mt-5 flex items-end gap-3">
            <span className="text-3xl font-black text-stone-900">{formatPrice(product.salePrice ?? product.price)}</span>
            {product.salePrice ? <span className="text-lg text-stone-400 line-through">{formatPrice(product.price)}</span> : null}
          </div>

          <div className="mt-6 space-y-6 rounded-[2rem] border border-stone-200 bg-white p-5">
            <div>
              <p className="mb-3 text-sm font-semibold text-stone-800">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`rounded-full border px-3 py-2 text-sm font-medium ${selectedSize === size ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-700"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold text-stone-800">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`rounded-full border px-3 py-2 text-sm font-medium ${selectedColor === color ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 text-stone-700"}`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-stone-50 px-2 py-1.5">
                <button onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="rounded-full p-2 hover:bg-white"><Minus className="h-4 w-4" /></button>
                <span className="w-6 text-center text-sm font-semibold">{quantity}</span>
                <button onClick={() => setQuantity((value) => value + 1)} className="rounded-full p-2 hover:bg-white"><Plus className="h-4 w-4" /></button>
              </div>
              <button onClick={addToCart} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-700"><ShoppingBag className="h-4 w-4" /> Add to Cart</button>
            </div>

            <div className="grid gap-3 text-sm text-stone-600 sm:grid-cols-2">
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-emerald-500" /> Free shipping above Rs. 5000</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" /> 30-day returns</div>
            </div>
          </div>

          <div className="mt-8 text-sm leading-7 text-stone-600">
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-3xl font-black text-stone-900">Related products</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Search, ShoppingBag, Heart, User, Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { categories } from "@/lib/store";

export function StoreShell({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const navItems = useMemo(() => [
    { href: "/shop", label: "Shop" },
    { href: "/shop?category=men", label: "Men" },
    { href: "/shop?category=women", label: "Women" },
    { href: "/shop?category=kids", label: "Kids" },
    { href: "/track-order", label: "Track Order" },
    { href: "/admin", label: "Admin" },
  ], []);

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
      const wishlist = JSON.parse(localStorage.getItem("wishlist") ?? "[]");
      setCartCount(cart.length);
      setWishCount(wishlist.length);
    } catch {
      setCartCount(0);
      setWishCount(0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="border-b border-stone-200 bg-stone-900 px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-stone-200">
        Free delivery over Rs. 5,000 • New season arrivals
      </div>

      <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-stone-200 p-2 lg:hidden" aria-label="Open menu">
              <Menu className="h-4 w-4" />
            </button>
            <Link href="/" className="text-xl font-black tracking-[0.24em] text-stone-900">VELORA</Link>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-stone-950">{item.label}</Link>
            ))}
          </nav>

          <div className="hidden flex-1 max-w-xl items-center rounded-full border border-stone-200 bg-stone-100 px-4 py-2 text-stone-500 lg:flex">
            <Search className="h-4 w-4" />
            <input
              aria-label="Search products"
              placeholder="Search for hoodies, dresses, shirts..."
              className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-stone-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <Link href="/account" className="rounded-full border border-stone-200 p-2.5 text-stone-700 hover:border-stone-900 hover:text-stone-900" aria-label="Account">
              <User className="h-4 w-4" />
            </Link>
            <Link href="/account#wishlist" className="relative rounded-full border border-stone-200 p-2.5 text-stone-700 hover:border-stone-900 hover:text-stone-900" aria-label="Wishlist">
              <Heart className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-900 px-1 text-[10px] font-bold text-white">{wishCount}</span>
            </Link>
            <Link href="/cart" className="relative rounded-full border border-stone-200 p-2.5 text-stone-700 hover:border-stone-900 hover:text-stone-900" aria-label="Cart">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">{cartCount}</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-stone-200 bg-stone-50">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-3 text-sm font-medium text-stone-600 lg:px-8">
            {categories.map((category) => (
              <Link key={category.id} href={`/shop?category=${category.slug}`} className="whitespace-nowrap rounded-full border border-stone-200 bg-white px-3 py-1.5 transition hover:border-stone-900 hover:text-stone-900">
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-stone-200 bg-stone-900 text-stone-200">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          <div className="space-y-4">
            <h3 className="text-xl font-black tracking-[0.2em] text-white">VELORA</h3>
            <p className="text-sm text-stone-400">Premium essentials for everyday expression.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">Customer Service</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Contact</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">Shop</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">Newsletter</h4>
            <div className="flex rounded-full border border-stone-700 bg-stone-800 pl-3 text-sm text-stone-200">
              <input className="w-full bg-transparent py-2.5 pr-2 outline-none placeholder:text-stone-500" placeholder="Email address" />
              <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-900">Join</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { categories } from "@/lib/store";

export function StoreShell({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = useMemo(() => [
    { href: "/shop", label: "Shop" },
    { href: "/shop?category=men", label: "Men" },
    { href: "/shop?category=women", label: "Women" },
    { href: "/shop?category=kids", label: "Kids" },
    { href: "/track-order", label: "Track Order" },
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
    <div className="min-h-screen bg-[#fbf9f4] text-[#171816]">
      <div className="bg-[#171816] px-4 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-[#eee4d3] sm:text-xs">
        Complimentary delivery over ₹5,000 · New season collection
      </div>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fbf9f4]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-7 lg:px-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(true)} className="rounded-full p-2 transition hover:bg-black/5 lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="font-display text-[27px] font-semibold tracking-[0.24em]">VELORA</Link>
          </div>

          <nav className="hidden items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.12em] lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="relative py-2 transition hover:text-[#9b6f32] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#b88a4a] after:transition-all hover:after:w-full">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden max-w-sm flex-1 items-center border-b border-black/30 px-3 py-2 lg:flex">
            <Search className="h-4 w-4 text-black/45" />
            <input aria-label="Search products" placeholder="Search the collection" className="ml-3 w-full bg-transparent text-xs outline-none placeholder:text-black/40" />
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link href="/account" className="rounded-full p-2.5 transition hover:bg-black/5" aria-label="Account"><User className="h-[18px] w-[18px]" /></Link>
            <Link href="/account#wishlist" className="relative rounded-full p-2.5 transition hover:bg-black/5" aria-label="Wishlist">
              <Heart className="h-[18px] w-[18px]" />
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b88a4a] px-1 text-[9px] font-bold text-white">{wishCount}</span>
            </Link>
            <Link href="/cart" className="relative rounded-full p-2.5 transition hover:bg-black/5" aria-label="Cart">
              <ShoppingBag className="h-[18px] w-[18px]" />
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#171816] px-1 text-[9px] font-bold text-white">{cartCount}</span>
            </Link>
          </div>
        </div>

        <div className="no-scrollbar overflow-x-auto border-t border-black/5">
          <div className="mx-auto flex max-w-[1440px] items-center gap-1 px-4 py-3 sm:px-7 lg:px-10">
            {categories.map((category) => (
              <Link key={category.id} href={`/shop?category=${category.slug}`} className="whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-black/55 transition hover:bg-black hover:text-white">
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)}>
          <aside className="h-full w-[86%] max-w-sm bg-[#fbf9f4] p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <span className="font-display text-2xl font-semibold tracking-[0.2em]">VELORA</span>
              <button onClick={() => setMenuOpen(false)} className="rounded-full border border-black/15 p-2"><X className="h-4 w-4" /></button>
            </div>
            <nav className="mt-8 space-y-1">
              {navItems.concat([{ href: "/admin", label: "Admin" }]).map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-black/10 py-5 font-display text-3xl font-medium">
                  {item.label}<span className="text-sm text-[#b88a4a]">↗</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}

      <main>{children}</main>

      <footer className="mt-20 bg-[#171816] text-[#eee8de]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-5 lg:px-10">
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-semibold tracking-[0.2em]">VELORA</h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/50">Modern essentials, thoughtfully designed for the way you live.</p>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c7a36a]">Customer Service</h4>
            <ul className="space-y-3 text-sm text-white/55"><li>Contact</li><li>Shipping & returns</li><li>Care guide</li><li>Frequently asked</li></ul>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c7a36a]">About</h4>
            <ul className="space-y-3 text-sm text-white/55"><li>Our story</li><li>Materials</li><li>Privacy</li><li>Terms</li></ul>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c7a36a]">Explore</h4>
            <ul className="space-y-3 text-sm text-white/55"><li>Men</li><li>Women</li><li>Kids</li><li>New arrivals</li></ul>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c7a36a]">Private list</h4>
            <p className="mb-4 text-sm leading-6 text-white/45">Receive new editions, private offers, and styling notes.</p>
            <form className="flex border-b border-white/25 pb-2" onSubmit={(event) => event.preventDefault()}>
              <input aria-label="Email address" placeholder="Email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/30" />
              <button className="text-xs font-semibold uppercase tracking-wider text-[#d1ad75]">Join</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-[10px] uppercase tracking-[0.18em] text-white/30">© 2026 Velora · Considered clothing for modern life</div>
      </footer>
    </div>
  );
}

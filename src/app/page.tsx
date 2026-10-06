import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { StoreShell } from "@/components/store-shell";
import { products } from "@/lib/store";

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const bestSellers = products.filter((product) => product.bestseller).slice(0, 4);

  return (
    <StoreShell>
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-stone-900 p-6 text-white shadow-xl lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stone-200">New season</span>
            <h1 className="max-w-xl text-4xl font-black tracking-tight md:text-6xl">Wardrobe updates that feel premium.</h1>
            <p className="mt-5 max-w-lg text-base text-stone-300 md:text-lg">
              Discover elevated essentials for work, weekends and everything in between.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200">Shop now</Link>
              <Link href="/shop?category=new-arrivals" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">New arrivals</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-stone-300">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Premium quality</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-emerald-400" /> Fast delivery</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-emerald-400" /> Style curated</div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-stone-800 p-4">
              <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" alt="Hero product" className="h-full min-h-[260px] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="space-y-4">
              <div className="rounded-[2rem] bg-stone-800 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Trending now</p>
                <h2 className="mt-3 text-2xl font-bold text-white">Modern layering</h2>
                <p className="mt-2 text-sm text-stone-300">Relaxed silhouettes with clean finishing touches.</p>
              </div>
              <div className="rounded-[2rem] bg-gradient-to-br from-rose-400 to-amber-300 p-5 text-stone-900">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-900/80">Up to 30% off</p>
                <h3 className="mt-3 text-3xl font-black">Weekend Edit</h3>
                <Link href="/shop?category=sale" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Shop collection <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Featured</p>
            <h2 className="mt-2 text-3xl font-bold text-stone-900">Our best picks</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-stone-700 hover:text-stone-900">View all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-stone-100 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Shop</p>
              <h3 className="mt-3 text-2xl font-bold">Men</h3>
              <p className="mt-3 text-stone-600">Layered essentials and refined basics.</p>
            </div>
            <div className="rounded-[2rem] bg-stone-100 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Statement</p>
              <h3 className="mt-3 text-2xl font-bold">Women</h3>
              <p className="mt-3 text-stone-600">Polished silhouettes for modern living.</p>
            </div>
            <div className="rounded-[2rem] bg-stone-100 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Family</p>
              <h3 className="mt-3 text-2xl font-bold">Kids</h3>
              <p className="mt-3 text-stone-600">Comfortable pieces that move with them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">Best sellers</p>
            <h2 className="mt-2 text-3xl font-bold text-stone-900">Customer favorites</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </StoreShell>
  );
}

"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { StoreShell } from "@/components/store-shell";
import { categories, products } from "@/lib/store";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-10">Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get("category") ?? "all";
  const [sort, setSort] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState(categoryQuery);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
      const searchMatch = product.name.toLowerCase().includes(search.toLowerCase()) || product.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      return categoryMatch && searchMatch;
    });

    switch (sort) {
      case "price-low":
        return [...filtered].sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
      case "price-high":
        return [...filtered].sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
      case "newest":
        return [...filtered].sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
      default:
        return filtered;
    }
  }, [search, selectedCategory, sort]);

  return (
    <StoreShell>
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Shop</p>
            <h1 className="mt-2 text-4xl font-black text-stone-900">Curated essentials</h1>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-white px-3 py-2 text-sm text-stone-600 shadow-sm">
            <span>{filteredProducts.length} items</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent outline-none">
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-3 rounded-[1.5rem] border border-stone-200 bg-white p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setSelectedCategory("all")} className={`rounded-full px-4 py-2 text-sm font-medium ${selectedCategory === "all" ? "bg-stone-900 text-white" : "border border-stone-200 bg-white text-stone-600"}`}>All</button>
            {categories.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.slug)} className={`rounded-full px-4 py-2 text-sm font-medium ${selectedCategory === category.slug ? "bg-stone-900 text-white" : "border border-stone-200 bg-white text-stone-600"}`}>
                {category.name}
              </button>
            ))}
          </div>
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search styles..." className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm outline-none" />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white p-12 text-center">
            <h2 className="text-2xl font-bold text-stone-900">No products match your filters</h2>
            <p className="mt-2 text-stone-600">Try a broader search or clear the current filters.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}
      </section>
    </StoreShell>
  );
}

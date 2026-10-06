"use client";

import { FormEvent, useState } from "react";
import { StoreShell } from "@/components/store-shell";

export default function AdminPage() {
  const [form, setForm] = useState({ name: "", price: "", category: "men", colors: "Black, White", sizes: "S, M, L" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const product = {
      id: `admin-${Date.now()}`,
      slug: form.name.toLowerCase().replace(/\s+/g, "-") + "-admin",
      name: form.name,
      price: Number(form.price),
      description: "Admin created product.",
      category: form.category,
      brand: "Velora Studio",
      rating: 4.8,
      reviews: 0,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      sizes: form.sizes.split(",").map((size) => size.trim()),
      colors: form.colors.split(",").map((color) => color.trim()),
      stock: 20,
      tags: [form.category],
    };

    await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    setSubmitted(true);
    setForm({ name: "", price: "", category: "men", colors: "Black, White", sizes: "S, M, L" });
  };

  return (
    <StoreShell>
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Admin dashboard</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Operations center</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            { label: "Total Sales", value: "Rs. 486,000" },
            { label: "Orders", value: "1,204" },
            { label: "Customers", value: "824" },
            { label: "Low stock", value: "14" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[2rem] border border-stone-200 bg-white p-5">
              <p className="text-sm text-stone-500">{stat.label}</p>
              <p className="mt-3 text-3xl font-black text-stone-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-stone-900">Recent orders</h2>
            <div className="mt-6 space-y-3">
              {[
                { order: "ORD-1001", status: "Shipped", total: "Rs. 4,899" },
                { order: "ORD-1002", status: "Processing", total: "Rs. 2,399" },
              ].map((entry) => (
                <div key={entry.order} className="flex items-center justify-between rounded-2xl bg-stone-50 p-4 text-sm">
                  <span className="font-medium text-stone-900">{entry.order}</span>
                  <span className="text-stone-600">{entry.status}</span>
                  <span className="font-semibold text-stone-900">{entry.total}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-stone-900">Add product</h2>
            <div className="mt-6 space-y-4 text-sm">
              <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Product name" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" />
              <input required value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} placeholder="Price" type="number" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" />
              <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none">
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
              <input value={form.colors} onChange={(event) => setForm({ ...form, colors: event.target.value })} placeholder="Colors" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" />
              <input value={form.sizes} onChange={(event) => setForm({ ...form, sizes: event.target.value })} placeholder="Sizes" className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" />
              <button type="submit" className="w-full rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white">Save product</button>
              {submitted ? <p className="text-sm text-emerald-600">Product added successfully.</p> : null}
            </div>
          </form>
        </div>
      </section>
    </StoreShell>
  );
}

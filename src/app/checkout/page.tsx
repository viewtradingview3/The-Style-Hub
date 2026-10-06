"use client";

import { FormEvent, useEffect, useState } from "react";
import { StoreShell } from "@/components/store-shell";
import { formatPrice } from "@/lib/store";

export default function CheckoutPage() {
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", province: "", postalCode: "" });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") ?? "[]");
    setItems(saved);
  }, []);

  const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal + shipping;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      customerName: form.name,
      email: form.email,
      items: items.map((item) => ({ productId: item.id, name: item.name, qty: item.qty, size: item.size, color: item.color, price: item.price })),
      total,
      shipping,
    };

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await response.json();
    localStorage.setItem("cart", JSON.stringify([]));
    window.location.href = `/track-order?orderId=${json.order.id}`;
  };

  return (
    <StoreShell>
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Checkout</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Complete your order</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-stone-700"><span>Full name</span><input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" /></label>
              <label className="space-y-2 text-sm font-medium text-stone-700"><span>Email</span><input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" /></label>
              <label className="space-y-2 text-sm font-medium text-stone-700 md:col-span-2"><span>Phone</span><input required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" /></label>
              <label className="space-y-2 text-sm font-medium text-stone-700 md:col-span-2"><span>Address</span><input required value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" /></label>
              <label className="space-y-2 text-sm font-medium text-stone-700"><span>City</span><input required value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" /></label>
              <label className="space-y-2 text-sm font-medium text-stone-700"><span>Province</span><input required value={form.province} onChange={(event) => setForm({ ...form, province: event.target.value })} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" /></label>
              <label className="space-y-2 text-sm font-medium text-stone-700"><span>Postal code</span><input required value={form.postalCode} onChange={(event) => setForm({ ...form, postalCode: event.target.value })} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-3 py-2.5 outline-none" /></label>
            </div>

            <div className="rounded-[1.5rem] bg-stone-50 p-4">
              <p className="mb-3 text-sm font-semibold text-stone-800">Payment method</p>
              <div className="grid gap-3 md:grid-cols-2">
                <label className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white p-3 text-sm"><input type="radio" name="payment" defaultChecked /> Cash on Delivery</label>
                <label className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white p-3 text-sm"><input type="radio" name="payment" /> Bank Transfer</label>
              </div>
            </div>

            <button type="submit" className="w-full rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white hover:bg-stone-700">Place order</button>
          </form>

          <aside className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-stone-900">Order summary</h2>
            <div className="mt-5 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center gap-3 rounded-2xl bg-stone-50 p-3">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="font-medium text-stone-900">{item.name}</p>
                    <p className="text-xs text-stone-600">{item.color} • {item.size} • Qty {item.qty}</p>
                  </div>
                  <span className="text-sm font-semibold">{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-sm text-stone-600">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
              <div className="flex justify-between"><span>Total</span><span className="text-lg font-bold text-stone-900">{formatPrice(total)}</span></div>
            </div>
          </aside>
        </div>
      </section>
    </StoreShell>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { StoreShell } from "@/components/store-shell";
import { formatPrice } from "@/lib/store";

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") ?? "[]");
    setItems(saved);
  }, []);

  const subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal + shipping;

  const updateQty = (id: string, delta: number) => {
    const next = items.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item);
    setItems(next);
    localStorage.setItem("cart", JSON.stringify(next));
  };

  const removeItem = (id: string) => {
    const next = items.filter((item) => item.id !== id);
    setItems(next);
    localStorage.setItem("cart", JSON.stringify(next));
  };

  return (
    <StoreShell>
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        {items.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white p-12 text-center">
            <h1 className="text-3xl font-black text-stone-900">Your cart is empty</h1>
            <p className="mt-2 text-stone-600">Add a few premium essentials and come back here.</p>
            <Link href="/shop" className="mt-6 inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white">Continue shopping</Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-stone-900">Shopping cart</h1>
              {items.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex flex-col gap-4 rounded-[2rem] border border-stone-200 bg-white p-4 md:flex-row md:items-center">
                  <img src={item.image} alt={item.name} className="h-28 w-28 rounded-[1.5rem] object-cover" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-bold text-stone-900">{item.name}</h2>
                        <p className="text-sm text-stone-600">{item.color} • {item.size}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-stone-500 hover:text-rose-600"><Trash2 className="h-5 w-5" /></button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-stone-50 px-2 py-1.5">
                        <button onClick={() => updateQty(item.id, -1)} className="rounded-full p-2 hover:bg-white"><Minus className="h-4 w-4" /></button>
                        <span className="w-6 text-center text-sm font-semibold">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="rounded-full p-2 hover:bg-white"><Plus className="h-4 w-4" /></button>
                      </div>
                      <span className="text-xl font-bold text-stone-900">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-[2rem] border border-stone-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-stone-900">Order summary</h2>
              <div className="mt-6 space-y-3 text-sm text-stone-600">
                <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
                <div className="flex justify-between"><span>Tax</span><span>Rs. 0</span></div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4 text-lg font-bold text-stone-900">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Link href="/checkout" className="mt-6 block rounded-full bg-stone-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-stone-700">Proceed to checkout</Link>
            </aside>
          </div>
        )}
      </section>
    </StoreShell>
  );
}

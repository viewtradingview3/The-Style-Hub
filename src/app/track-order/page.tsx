"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { StoreShell } from "@/components/store-shell";

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-4xl p-10 text-center">Loading order tracker...</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get("orderId") ?? "");
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    if (!orderId) return;
    fetch(`/api/orders?orderId=${orderId}`)
      .then((response) => response.json())
      .then((data) => setStatus(data.order))
      .catch(() => setStatus(null));
  }, [orderId]);

  return (
    <StoreShell>
      <section className="mx-auto max-w-4xl px-4 py-10 lg:px-8">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Order tracking</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Track your order</h1>
          <div className="mt-6 flex gap-3">
            <input value={orderId} onChange={(event) => setOrderId(event.target.value)} placeholder="Enter order ID" className="flex-1 rounded-full border border-stone-200 bg-stone-50 px-4 py-3 outline-none" />
            <button onClick={() => window.location.href = `/track-order?orderId=${orderId}`} className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white">Check</button>
          </div>

          {status ? (
            <div className="mt-10">
              <p className="text-sm text-stone-500">Order ID: <span className="font-semibold text-stone-900">{status.id}</span></p>
              <div className="mt-8 grid gap-4 md:grid-cols-7">
                {[
                  "Order Placed",
                  "Confirmed",
                  "Processing",
                  "Packed",
                  "Shipped",
                  "Out for Delivery",
                  "Delivered",
                ].map((stage, index) => {
                  const currentStageIndex = ["Processing", "Confirmed", "Processing", "Packed", "Shipped", "Out for Delivery", "Delivered"].indexOf(status.status);
                  const active = index <= currentStageIndex;
                  return (
                    <div key={stage} className={`rounded-2xl border p-3 text-center text-xs font-semibold ${active ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-stone-50 text-stone-500"}`}>
                      {stage}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="mt-10 rounded-[1.5rem] border border-dashed border-stone-300 bg-stone-50 p-8 text-center text-stone-600">
              Enter an order ID to view the latest delivery timeline.
            </div>
          )}
        </div>
      </section>
    </StoreShell>
  );
}

"use client";

import Link from "next/link";
import { ProductDetailClient } from "@/components/product-detail-client";
import { StoreShell } from "@/components/store-shell";
import { getProductBySlug } from "@/lib/store";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <StoreShell>
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-3xl font-black text-stone-900">Product not found</h1>
        </div>
      </StoreShell>
    );
  }

  return (
    <StoreShell>
      <ProductDetailClient product={product} />
    </StoreShell>
  );
}

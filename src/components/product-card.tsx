import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { formatPrice, type Product } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const discount = product.salePrice ? Math.round(((product.price - product.salePrice) / product.price) * 100) : 0;

  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
        </Link>
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-stone-700 shadow-sm transition hover:bg-white">
          <Heart className="h-4 w-4" />
        </button>
        {product.salePrice ? (
          <span className="absolute left-4 top-4 inline-flex rounded-full bg-rose-500 px-2.5 py-1 text-xs font-medium text-white">-{discount}%</span>
        ) : null}
        {product.newArrival ? (
          <span className="absolute left-4 top-12 inline-flex rounded-full bg-stone-900 px-2.5 py-1 text-xs font-medium text-white">New</span>
        ) : null}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">{product.brand}</p>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs font-medium text-stone-700">{product.rating}</span>
          </div>
        </div>

        <Link href={`/product/${product.slug}`} className="block text-lg font-semibold text-stone-900 hover:text-stone-600">
          {product.name}
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-stone-900">{formatPrice(product.salePrice ?? product.price)}</span>
          {product.salePrice ? <span className="text-sm text-stone-400 line-through">{formatPrice(product.price)}</span> : null}
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-500">
          {product.colors.slice(0, 4).map((color) => (
            <span key={color} className="rounded-full border border-stone-200 px-2 py-1">{color}</span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href={`/product/${product.slug}`} className="flex-1 rounded-full bg-stone-900 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-stone-700">
            View Product
          </Link>
          <button className="rounded-full border border-stone-200 p-3 text-stone-700 transition hover:border-stone-900 hover:text-stone-900">
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

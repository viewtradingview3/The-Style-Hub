import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { formatPrice, type Product } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const discount = product.salePrice ? Math.round(((product.price - product.salePrice) / product.price) * 100) : 0;

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e1d6]">
        <Link href={`/product/${product.slug}`} className="block h-full">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
        </Link>
        <button className="absolute right-3 top-3 rounded-full bg-[#fbf9f4]/90 p-2.5 text-[#171816] shadow-sm backdrop-blur transition hover:bg-white" aria-label={`Save ${product.name}`}>
          <Heart className="h-4 w-4" />
        </button>
        {product.salePrice ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#171816] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">-{discount}%</span>
        ) : null}
        {product.newArrival ? (
          <span className="absolute left-3 top-12 rounded-full bg-[#b88a4a] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">New</span>
        ) : null}
        <Link href={`/product/${product.slug}`} className="absolute bottom-3 left-3 right-3 translate-y-3 rounded-full bg-[#fbf9f4] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View product
        </Link>
      </div>

      <div className="pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a857c]">{product.brand}</p>
          <div className="flex items-center gap-1 text-[#b88a4a]">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-[11px] font-semibold text-[#5c5a54]">{product.rating}</span>
          </div>
        </div>
        <Link href={`/product/${product.slug}`} className="font-display text-2xl font-semibold leading-tight transition hover:text-[#9b6f32]">{product.name}</Link>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm font-semibold">{formatPrice(product.salePrice ?? product.price)}</span>
          {product.salePrice ? <span className="text-xs text-black/35 line-through">{formatPrice(product.price)}</span> : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.colors.slice(0, 4).map((color) => (
            <span key={color} className="rounded-full border border-black/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-black/50">{color}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

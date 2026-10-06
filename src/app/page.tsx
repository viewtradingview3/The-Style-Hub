import Link from "next/link";
import { ArrowRight, Check, Leaf, PackageCheck, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { StoreShell } from "@/components/store-shell";
import { products } from "@/lib/store";

const collectionCards = [
  { title: "Men", subtitle: "Refined essentials", href: "/shop?category=men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=85" },
  { title: "Women", subtitle: "Quietly expressive", href: "/shop?category=women", image: "https://images.unsplash.com/photo-1539109136881-3be0616ac9b3?auto=format&fit=crop&w=1000&q=85" },
  { title: "Kids", subtitle: "Made to move", href: "/shop?category=kids", image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=85" },
];

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const bestSellers = products.filter((product) => product.bestseller).slice(0, 4);

  return (
    <StoreShell>
      <section className="mx-auto max-w-[1440px] px-4 py-5 sm:px-7 lg:px-10 lg:py-8">
        <div className="relative min-h-[680px] overflow-hidden bg-[#22231f] text-white lg:min-h-[720px]">
          <div className="absolute inset-0 editorial-grid opacity-30" />
          <div className="relative grid min-h-[680px] lg:grid-cols-[0.92fr_1.08fr] lg:min-h-[720px]">
            <div className="flex flex-col justify-center px-7 py-16 sm:px-12 lg:px-20 lg:py-24">
              <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4b274]">
                <span className="h-px w-9 bg-[#d4b274]" /> The new season collection
              </div>
              <h1 className="text-balance font-display text-[58px] font-medium leading-[0.9] tracking-[-0.035em] sm:text-7xl lg:text-[88px]">
                Clothing with <span className="italic text-[#d6b477]">quiet confidence.</span>
              </h1>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/60 sm:text-base">Considered silhouettes, refined fabrics, and timeless details. Designed to become part of your everyday story.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/shop" className="group flex items-center gap-4 rounded-full bg-[#f1e9db] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#171816] transition hover:bg-white">
                  Shop the collection <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link href="/shop?category=new-arrivals" className="rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition hover:bg-white/10">New arrivals</Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs text-white/50">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#d4b274]" /> Premium materials</span>
                <span className="flex items-center gap-2"><PackageCheck className="h-4 w-4 text-[#d4b274]" /> Complimentary delivery</span>
                <span className="flex items-center gap-2"><Leaf className="h-4 w-4 text-[#d4b274]" /> Responsible sourcing</span>
              </div>
            </div>

            <div className="relative min-h-[440px] overflow-hidden lg:min-h-full">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=90" alt="Model wearing the new collection" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-md sm:left-8 sm:right-8">
                <div><p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55">Featured edition</p><p className="mt-1 font-display text-2xl">The Modern Uniform</p></div>
                <span className="hidden text-xs text-white/65 sm:block">01 / 04</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9b6f32]">The edit</p><h2 className="font-display text-5xl font-medium tracking-tight sm:text-6xl">Designed for every day.</h2></div>
          <Link href="/shop" className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em]">Explore all pieces <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {collectionCards.map((card, index) => (
            <Link key={card.title} href={card.href} className="group relative aspect-[4/5] overflow-hidden bg-[#ded7cc]">
              <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55">0{index + 1}</span>
                <div className="mt-2 flex items-end justify-between"><div><h3 className="font-display text-5xl font-medium">{card.title}</h3><p className="mt-1 text-xs text-white/60">{card.subtitle}</p></div><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-black"><ArrowRight className="h-4 w-4" /></span></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e8e0d4]">
        <div className="mx-auto grid max-w-[1440px] gap-0 lg:grid-cols-2">
          <div className="relative min-h-[500px] overflow-hidden lg:min-h-[680px]"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1300&q=90" alt="Editorial fashion styling" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-black/10" /></div>
          <div className="flex flex-col justify-center px-7 py-20 sm:px-12 lg:px-20">
            <Sparkles className="mb-8 h-7 w-7 text-[#9b6f32]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8e662f]">The Velora philosophy</p>
            <h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[1.02] sm:text-6xl">Less, but <span className="italic">better.</span></h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-black/55">We make pieces that earn their place in your wardrobe. Every Velora garment is selected for enduring comfort, considered proportions, and a finish that gets better with time.</p>
            <Link href="/shop" className="mt-9 inline-flex w-fit items-center gap-3 border-b border-black/30 pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:border-[#9b6f32]">Discover our standards <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-7 lg:px-10 lg:py-28">
        <div className="mb-10 flex items-end justify-between"><div><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9b6f32]">Most loved</p><h2 className="font-display text-5xl font-medium sm:text-6xl">Featured pieces</h2></div><Link href="/shop" className="hidden text-xs font-semibold uppercase tracking-[0.14em] sm:block">View all</Link></div>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">{featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 pb-20 sm:px-7 lg:px-10 lg:pb-28">
        <div className="mb-10"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9b6f32]">Customer favourites</p><h2 className="font-display text-5xl font-medium sm:text-6xl">The signatures</h2></div>
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">{bestSellers.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
    </StoreShell>
  );
}

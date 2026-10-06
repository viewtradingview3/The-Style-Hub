import Link from "next/link";
import { Heart, Package, UserCircle } from "lucide-react";
import { StoreShell } from "@/components/store-shell";

export default function AccountPage() {
  return (
    <StoreShell>
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">My account</p>
          <h1 className="mt-2 text-4xl font-black text-stone-900">Welcome back, Ayesha</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <UserCircle className="h-8 w-8 text-stone-900" />
            <h2 className="mt-4 text-xl font-bold">Profile</h2>
            <p className="mt-2 text-stone-600">Edit your personal information and saved addresses.</p>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <Package className="h-8 w-8 text-stone-900" />
            <h2 className="mt-4 text-xl font-bold">Orders</h2>
            <p className="mt-2 text-stone-600">Track delivery status and view previous purchases.</p>
          </div>
          <div id="wishlist" className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <Heart className="h-8 w-8 text-stone-900" />
            <h2 className="mt-4 text-xl font-bold">Wishlist</h2>
            <p className="mt-2 text-stone-600">Keep your favorite pieces saved for the next order.</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-stone-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-stone-900">Recent orders</h2>
            <Link href="/track-order" className="text-sm font-semibold text-stone-700 hover:text-stone-900">Track order</Link>
          </div>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50 text-stone-600">
                <tr>
                  <th className="p-4">Order</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-stone-200">
                  <td className="p-4 font-medium text-stone-900">ORD-1001</td>
                  <td className="p-4 text-stone-600">Oct 1, 2026</td>
                  <td className="p-4 text-amber-600">Shipped</td>
                  <td className="p-4 text-stone-900">Rs. 4,899</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </StoreShell>
  );
}

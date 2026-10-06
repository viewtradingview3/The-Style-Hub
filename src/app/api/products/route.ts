import { NextResponse } from "next/server";
import { products } from "@/lib/store";

export async function GET() {
  return NextResponse.json(products);
}

import { NextResponse } from "next/server";
import { createUser } from "@/lib/store";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const user = createUser(name, email, password);
  if (!user) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } }, { status: 201 });
}

import { NextResponse } from "next/server";
import { validateUser } from "@/lib/store";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
  }

  const user = validateUser(email, password);
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });
}

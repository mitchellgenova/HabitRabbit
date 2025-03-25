import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../prisma";

// GET: Fetch all users
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST: Create a new user
export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return NextResponse.json({ userId: user.id }, { status: 201 });
}

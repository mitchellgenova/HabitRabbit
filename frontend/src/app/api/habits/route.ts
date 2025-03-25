import { NextResponse } from "next/server";
import prisma from "../prisma";

// GET: Fetch all habits
export async function GET() {
  const habits = await prisma.habit.findMany();
  return NextResponse.json(habits);
}

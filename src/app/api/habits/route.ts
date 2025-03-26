import { NextResponse } from "next/server";
import prisma from "../prisma";
import { getToken } from "next-auth/jwt";

// GET: Fetch all habits
export async function GET() {
  const habits = await prisma.habit.findMany();
  return NextResponse.json(habits);
}

export async function POST(req: Request) {
  const { name, description, daysOfWeek } = await req.json();
  // console.log(req);
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  console.log("token", token);

  // const newHabit = await prisma.habit
  //   .create({
  //     data: {
  //       name,
  //       description,
  //       daysOfWeek: {
  //         create: daysOfWeek.map((day: number) => ({
  //           day,
  //         })),
  //       },
  //       userId,
  //     },
  //   })
  //   .catch((error) => {
  //     console.log("Error", error);
  //   });
}

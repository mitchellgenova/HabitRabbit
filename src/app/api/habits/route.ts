import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/app/lib/prisma";

// GET: Fetch all habits
// export async function GET(req, res) {
//   const session = await auth();
//   console.log(session);
//   const habits = await prisma.habit.findMany();
//   return NextResponse.json(habits);
// }

export const GET = async (req) => {
  const habits = await prisma.habit.findMany();
  return NextResponse.json(habits);
};

export async function POST(req: Request) {
  const { name, description, daysOfWeek } = await req.json();
  const session = await auth();
  console.log(session);
  // const token = await getToken({ req, secret: process.env.AUTH_SECRET });

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

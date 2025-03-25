import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  console.log("token", token);

  if (!token && req.nextUrl.pathname.startsWith("/habits")) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

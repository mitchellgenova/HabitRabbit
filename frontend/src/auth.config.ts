import type { NextAuthConfig } from "next-auth";
import { cookies } from "next/headers";

const protectedRoutes = ["/habits", "/something"];

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async authorized({ request: { nextUrl } }) {
      const cookieStore = await cookies();
      const token = cookieStore.get("token"); // Read the "token" cookie

      const isLoggedIn = !!token;
      const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
      if (isProtectedRoute) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/habits", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SigninFormSchema } from "./app/lib/definitions";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = SigninFormSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const data = await fetch("http://localhost:3010/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
            credentials: "include", // Required for cookies
          });

          if (data.ok) {
            const user = await data.json();
            console.log(user);
            if (user) {
              return user;
            }
          }
        }

        return null;
      },
    }),
  ],
});

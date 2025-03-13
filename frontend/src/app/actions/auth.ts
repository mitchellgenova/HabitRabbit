import { SignupFormSchema, FormState } from "@/app/lib/definitions";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;

  const data = await fetch("http://localhost:3010/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Specify that you're sending JSON
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
}

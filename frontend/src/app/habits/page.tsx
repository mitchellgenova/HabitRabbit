import { cookies } from "next/headers";

export default async function Habits() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token"); // Read the "token" cookie

  const res = await fetch("http://localhost:3010/habits", {
    headers: {
      Cookie: `token=${token?.value}`, // Pass the token manually because it's server side
    },
  });

  const habits = await res.json();

  console.log(habits);

  return <div>Habits landing page</div>;
}

import { cookies } from "next/headers";
import HabitCard from "../components/HabitCard";
import { Habit } from "../../../../types";

export default async function Habits() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token"); // Read the "token" cookie

  const res = await fetch("http://localhost:3010/habits", {
    headers: {
      Cookie: `token=${token?.value}`, // Pass the token manually because it's server side
    },
  });

  const habits = await res.json();

  return (
    <div className="grid grid-cols-3">
      {habits.map((habit: Habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

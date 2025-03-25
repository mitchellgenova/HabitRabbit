import HabitCard from "../components/HabitCard";

export default async function Habits() {
  const cookieStore = await cookies();

  const res = await fetch("http://localhost:3010/api/habits");

  const habits = await res.json();

  return (
    <div className="grid grid-cols-3">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

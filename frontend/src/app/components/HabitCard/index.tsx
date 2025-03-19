import { Habit } from "../../../../../types/index";
import Footer from "./Footer";

interface HabitCardProps {
  habit: Habit;
}

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{habit.name}</h2>
      <p className="text-gray-200">{habit.description}</p>
      <Footer completionPercentage={habit.completionPercentage} />
    </div>
  );
}

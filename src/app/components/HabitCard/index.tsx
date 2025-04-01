import { CircleCheck, CirclePercent } from "lucide-react";

interface HabitCardProps {
  habit: Record<string, unknown>;
}

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{habit.name}</h2>
      <p className="text-gray-200">{habit.description}</p>
      <div className="flex border-t pt-2 mt-2 gap-4">
        <div className="flex items-center gap-2">
          <CircleCheck size={20} />
          {habit.completions}
        </div>
        <div className="flex items-center gap-2">
          <CirclePercent size={20} />
          {habit.completionPercentage}
        </div>
      </div>
    </div>
  );
}

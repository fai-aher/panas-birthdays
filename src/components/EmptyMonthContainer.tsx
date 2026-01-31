import { Calendar } from "lucide-react";

export function EmptyMonthContainer() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto p-2 text-center opacity-60">
      <div className="bg-muted mb-3 rounded-full p-3">
        <Calendar size={32} className="text-primary/50" />
      </div>
      <p className="text-sm font-medium">No birthdays</p>
    </div>
  );
}

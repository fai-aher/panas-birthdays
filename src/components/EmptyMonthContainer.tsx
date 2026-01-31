import { Calendar } from "lucide-react";

export function EmptyMonthContainer() {
  return (
    <div className="flex-1 overflow-y-auto p-2 flex flex-col items-center justify-center text-center opacity-60">
      <div className="bg-muted p-3 rounded-full mb-3">
        <Calendar size={32} className="text-primary/50" />
      </div>
      <p className="text-sm font-medium text-foreground">No birthdays</p>
    </div>
  );
}

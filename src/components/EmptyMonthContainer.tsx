import { CalendarX } from "lucide-react";

export function EmptyMonthContainer() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto p-2 text-center opacity-60">
      <div className="bg-muted rounded-full p-3">
        <CalendarX color="var(--color-accent)" size={32} />
      </div>
      <p className="text-sm font-medium">No birthdays</p>
    </div>
  );
}

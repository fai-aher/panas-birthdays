import { Cake } from "lucide-react";

export function Header() {
  return (
    <header className="border-muted sticky top-0 z-50 flex items-center justify-between border-b bg-white px-6 py-3">
      <div className="flex items-center gap-4">
        <Cake color="var(--color-primary)" size={32} />
        <h2 className="text-lg font-bold">Birthday Planner</h2>
      </div>
    </header>
  );
}

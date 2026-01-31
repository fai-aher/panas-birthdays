import { Cake } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border px-6 py-3 bg-background backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Cake className="w-8 h-8 text-primary" />
        <h2 className="text-foreground text-lg font-bold">Birthday Planner</h2>
      </div>
    </header>
  );
}

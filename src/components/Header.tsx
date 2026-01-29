import { Cake, Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-secondary px-6 py-3 bg-white/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Cake className="w-8 h-8 text-primary" />
        <h2 className="text-text-main text-lg font-bold">Birthday Planner</h2>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex items-stretch rounded-full h-10 bg-secondary w-64">
          <div className="flex items-center justify-center pl-4 text-text-muted">
            <Search className="w-5 h-5" />
          </div>
          <input
            className="flex-1 bg-transparent text-text-main placeholder:text-text-muted px-3 text-sm focus:outline-none rounded-r-full"
            placeholder="Search friends..."
          />
        </div>
      </div>
    </header>
  );
}

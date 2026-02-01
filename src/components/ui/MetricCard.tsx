import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function MetricCard({ title, icon: Icon, children }: MetricCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-white/50 bg-white/60 p-5 shadow-sm backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <p className="text-secondary text-sm font-medium">{title}</p>
        <Icon
          color="var(--color-primary)"
          size={32}
          className="bg-primary/10 rounded-lg p-1"
        />
      </div>
      {children}
    </div>
  );
}

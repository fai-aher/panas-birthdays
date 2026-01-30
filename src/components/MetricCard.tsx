import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function MetricCard({ title, icon: Icon, children }: MetricCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-5 bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm">
      <div className="flex justify-between items-start">
        <p className="text-muted-foreground text-sm font-medium">{title}</p>
        <Icon className="text-primary bg-primary/10 p-1 rounded-lg" size={32} />
      </div>
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: number;
  subtitle: string;
  indicatorColor: "purple" | "green" | "orange";
}

export const StatCard = ({ title, value, subtitle, indicatorColor }: StatCardProps) => {
  const colorClasses = {
    purple: "bg-primary",
    green: "bg-success",
    orange: "bg-warning",
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <div className={cn("w-2 h-2 rounded-full", colorClasses[indicatorColor])} />
      </div>
      <div className="space-y-1">
        <p className="text-4xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};

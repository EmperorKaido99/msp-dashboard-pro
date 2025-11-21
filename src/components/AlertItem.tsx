import { Clock } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

interface AlertItemProps {
  message: string;
  severity: "urgent" | "warning" | "info";
  category: string;
}

export const AlertItem = ({ message, severity, category }: AlertItemProps) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-border last:border-0">
      <div className="flex items-center gap-3">
        <Clock className="w-5 h-5 text-muted-foreground" />
        <span className="text-sm text-foreground">{message}</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusBadge status={severity}>{severity}</StatusBadge>
        <span className="text-sm font-medium text-foreground">{category}</span>
      </div>
    </div>
  );
};

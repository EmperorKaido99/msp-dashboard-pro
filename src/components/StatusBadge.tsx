import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "ordered" | "shipped" | "pending" | "urgent" | "warning" | "info";
  children: React.ReactNode;
}

export const StatusBadge = ({ status, children }: StatusBadgeProps) => {
  const variants = {
    ordered: "bg-info text-info-foreground",
    shipped: "bg-success text-success-foreground",
    pending: "bg-warning text-warning-foreground",
    urgent: "bg-urgent text-urgent-foreground",
    warning: "bg-warning text-warning-foreground",
    info: "bg-info text-info-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium",
        variants[status]
      )}
    >
      {children}
    </span>
  );
};

import { Package, DollarSign, Calendar } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  company: string;
  product: string;
  units: number;
  price: string;
  date: string;
  category: "HARDWARE" | "MSP";
  progress: string;
  status: "ordered" | "shipped" | "pending";
}

export const ProjectCard = ({
  company,
  product,
  units,
  price,
  date,
  category,
  progress,
  status,
}: ProjectCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{company}</h3>
          <p className="text-sm text-muted-foreground">{product}</p>
        </div>
        <StatusBadge status={status}>{status}</StatusBadge>
      </div>

      <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4" />
          <span>{units} units</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          <span>{price}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant="secondary" className="text-xs">
          {category}
        </Badge>
        <span className="text-sm text-muted-foreground">{progress}</span>
      </div>
    </div>
  );
};

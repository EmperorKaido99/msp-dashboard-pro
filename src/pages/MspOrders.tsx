import { Plus, RefreshCw, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    company: "TechCorp Solutions",
    product: "Dell OptiPlex Desktops",
    units: 25,
    price: "$37,500",
    date: "2024-10-12",
    category: "HARDWARE" as const,
    progress: "4 / 7 completed",
    status: "ordered" as const,
  },
  {
    company: "DataFlow Inc",
    product: "HP ProBook Laptops",
    units: 15,
    price: "$22,500",
    date: "2024-10-08",
    category: "HARDWARE" as const,
    progress: "6 / 7 completed",
    status: "shipped" as const,
  },
  {
    company: "CloudNet Systems",
    product: "Cisco Network Switches",
    units: 8,
    price: "$48,000",
    date: "2024-10-15",
    category: "MSP" as const,
    progress: "2 / 7 completed",
    status: "pending" as const,
  },
];

const MspOrders = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          All Hardware Projects
        </h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync
          </Button>
          <Button variant="outline" size="sm">
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            Export to Excel
          </Button>
        </div>
      </div>

      {/* Add Order Button */}
      <div className="mb-6">
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Manual Add Order
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default MspOrders;

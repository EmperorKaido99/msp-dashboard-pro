import { CalendarDays, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { AlertItem } from "@/components/AlertItem";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [apiResponse, setApiResponse] = useState<string>("");
  const { toast } = useToast();

  const testServerlessFunction = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('hello-world');
      
      if (error) throw error;
      
      setApiResponse(JSON.stringify(data, null, 2));
      toast({
        title: "Success!",
        description: "Serverless function called successfully",
      });
    } catch (error) {
      console.error('Error calling function:', error);
      toast({
        title: "Error",
        description: "Failed to call serverless function",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Project Management Dashboard
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="w-4 h-4" />
          <span>Monday, September 29, 2025</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="MSP Projects"
          value={12}
          subtitle="Active orders"
          indicatorColor="purple"
        />
        <StatCard
          title="CSP Projects"
          value={8}
          subtitle="Active orders"
          indicatorColor="green"
        />
        <StatCard
          title="Consulting"
          value={15}
          subtitle="Active projects"
          indicatorColor="orange"
        />
      </div>

      {/* API Test Section */}
      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Test Serverless Function</h2>
        <Button onClick={testServerlessFunction}>
          Call Backend API
        </Button>
        {apiResponse && (
          <pre className="mt-4 p-4 bg-muted rounded-lg text-sm overflow-auto">
            {apiResponse}
          </pre>
        )}
      </div>

      {/* Priority Alerts */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <h2 className="text-xl font-semibold text-foreground">Priority Alerts</h2>
        </div>

        <div>
          <AlertItem
            message="3 MSP orders due in 2 days"
            severity="urgent"
            category="MSP"
          />
          <AlertItem
            message="Consulting project milestone approaching"
            severity="warning"
            category="Consulting"
          />
          <AlertItem
            message="2 CSP orders pending supplier delivery"
            severity="info"
            category="CSP"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

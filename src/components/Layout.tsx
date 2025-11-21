import { LayoutDashboard, ShoppingCart, Cloud, Users, DollarSign } from "lucide-react";
import { NavLink } from "@/components/NavLink";

interface LayoutProps {
  children: React.ReactNode;
}

const navigationItems = [
  {
    title: "Dashboard",
    subtitle: "Overview & alerts",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "MSP Orders",
    subtitle: "Hardware orders",
    icon: ShoppingCart,
    path: "/msp-orders",
  },
  {
    title: "CSP Orders",
    subtitle: "Cloud services",
    icon: Cloud,
    path: "/csp-orders",
  },
  {
    title: "Consulting",
    subtitle: "Project management",
    icon: Users,
    path: "/consulting",
  },
  {
    title: "Payments",
    subtitle: "Invoice tracking",
    icon: DollarSign,
    path: "/payments",
  },
];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <aside className="w-60 border-r border-border bg-card">
        <div className="p-6">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Navigation
          </p>
        </div>
        
        <nav className="space-y-1 px-3">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className="flex items-start gap-3 px-3 py-3 rounded-lg transition-colors hover:bg-accent"
              activeClassName="bg-accent"
            >
              <item.icon className="w-5 h-5 mt-0.5 text-foreground" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.subtitle}
                </p>
              </div>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

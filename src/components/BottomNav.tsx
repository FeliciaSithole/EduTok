import { Home, Compass, MessageSquare, Library, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "discover", icon: Compass, label: "Discover" },
    { id: "inbox", icon: MessageSquare, label: "Inbox", badge: 3 },
    { id: "library", icon: Library, label: "Library" },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="flex items-center justify-around bg-card border-t border-border px-2 py-2 shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center gap-1 h-auto py-2 px-3 transition-all relative ${
              isActive 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className="relative">
              <Icon className={`h-5 w-5 ${isActive ? "scale-110" : ""}`} />
              {item.badge && item.badge > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground h-4 min-w-4 px-1 flex items-center justify-center text-xs">
                  {item.badge}
                </Badge>
              )}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </Button>
        );
      })}
    </nav>
  );
};

export default BottomNav;

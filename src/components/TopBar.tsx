import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gradient-primary text-primary-foreground shadow-md">
      <h1 className="text-2xl font-bold tracking-tight">EduTok</h1>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default TopBar;

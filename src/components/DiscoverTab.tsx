import { Search, TrendingUp, Star, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  { name: "Mathematics", icon: "📐", color: "bg-primary" },
  { name: "Physics", icon: "🚀", color: "bg-primary-purple" },
  { name: "Chemistry", icon: "🧪", color: "bg-secondary" },
  { name: "Biology", icon: "🧬", color: "bg-accent" },
  { name: "History", icon: "📚", color: "bg-primary" },
  { name: "Literature", icon: "✍️", color: "bg-secondary" },
];

const TRENDING_TOPICS = [
  { topic: "Quantum Physics", views: "2.3M", trend: "+15%" },
  { topic: "Calculus Basics", views: "1.8M", trend: "+23%" },
  { topic: "Organic Chemistry", views: "1.5M", trend: "+12%" },
  { topic: "World War II", views: "1.2M", trend: "+8%" },
];

const FEATURED_TUTORS = [
  {
    name: "Dr. Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    subject: "Mathematics",
    followers: "125K",
  },
  {
    name: "Prof. James Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    subject: "Physics",
    followers: "98K",
  },
  {
    name: "Ms. Emily Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    subject: "Chemistry",
    followers: "87K",
  },
];

const DiscoverTab = () => {
  return (
    <div className="h-full overflow-y-auto bg-background pb-20">
      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <div className="relative animate-fade-in">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search topics, tutors, subjects..."
            className="pl-10 h-12 rounded-full border-2 focus:border-primary"
          />
        </div>

        {/* Categories */}
        <div className="space-y-3 animate-slide-up">
          <h2 className="text-xl font-bold">Explore Subjects</h2>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className={`h-24 flex-col gap-2 border-2 hover:scale-105 transition-transform ${category.color} bg-opacity-10 hover:bg-opacity-20`}
              >
                <span className="text-3xl">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">Trending Now</h2>
          </div>
          <div className="space-y-2">
            {TRENDING_TOPICS.map((item, index) => (
              <Card
                key={item.topic}
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-muted-foreground">
                      #{index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{item.topic}</p>
                      <p className="text-sm text-muted-foreground">{item.views} views</p>
                    </div>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">
                    {item.trend}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Tutors */}
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">Featured Tutors</h2>
          </div>
          <div className="space-y-3">
            {FEATURED_TUTORS.map((tutor) => (
              <Card
                key={tutor.name}
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={tutor.avatar} alt={tutor.name} />
                      <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{tutor.name}</p>
                      <p className="text-sm text-muted-foreground">{tutor.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{tutor.followers}</span>
                    </div>
                    <Button size="sm" className="mt-1 bg-gradient-primary text-primary-foreground">
                      Follow
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverTab;

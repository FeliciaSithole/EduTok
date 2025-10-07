import { Settings, Edit, Share2, Trophy, Video, Users, Heart, Flame, Clock, Target, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const STATS = [
  { label: "Following", value: "234", icon: Users },
  { label: "Followers", value: "1.2K", icon: Heart },
  { label: "Videos", value: "47", icon: Video },
];

const RECENT_ACTIVITY = [
  {
    action: "Completed",
    title: "Calculus Made Simple",
    time: "2 hours ago",
    icon: Trophy,
  },
  {
    action: "Saved",
    title: "Newton's Laws Explained",
    time: "5 hours ago",
    icon: Heart,
  },
  {
    action: "Started",
    title: "Chemical Reactions 101",
    time: "1 day ago",
    icon: Video,
  },
];

const INTERESTS = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
];

const ProfileTab = () => {
  return (
    <div className="h-full overflow-y-auto bg-background pb-20">
      <div className="space-y-6">
        {/* Profile Header with Gradient Background */}
        <div className="bg-gradient-primary p-6 text-primary-foreground animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student" alt="Student" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Alex Johnson</h1>
              <p className="text-sm opacity-90">Student · Level 5</p>
              <Badge className="mt-2 bg-secondary text-secondary-foreground border-0">
                🔥 7-day streak
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-white/20"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Icon className="h-4 w-4" />
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                  <p className="text-xs opacity-90">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-4 space-y-6">
          {/* Learning Statistics */}
          <Card className="p-5 space-y-4 animate-slide-up bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Learning Statistics</h2>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Flame className="h-4 w-4" />
                  <span className="text-sm">Current Streak</span>
                </div>
                <p className="text-2xl font-bold">7 days</p>
                <p className="text-xs text-muted-foreground">Best: 14 days</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Hours Watched</span>
                </div>
                <p className="text-2xl font-bold">12.5h</p>
                <p className="text-xs text-muted-foreground">This week: 8.5h</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Target className="h-4 w-4" />
                  <span className="text-sm">Quizzes Passed</span>
                </div>
                <p className="text-2xl font-bold">18 / 24</p>
                <p className="text-xs text-muted-foreground">75% pass rate</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span className="text-sm">Achievements</span>
                </div>
                <p className="text-2xl font-bold">6 / 10</p>
                <p className="text-xs text-muted-foreground">60% unlocked</p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 animate-slide-up">
            <Button variant="outline" className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Profile
            </Button>
          </div>

          {/* Learning Interests */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-lg font-bold">Learning Interests</h2>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className="px-4 py-2 text-sm border-2 hover:bg-light-blue hover:border-primary cursor-pointer transition-colors"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-lg font-bold">Recent Activity</h2>
            <div className="space-y-2">
              {RECENT_ACTIVITY.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-light-blue flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">
                          <span className="text-muted-foreground">{activity.action}</span>{" "}
                          {activity.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-medium">Notifications</span>
                <Badge className="bg-accent text-accent-foreground">3 new</Badge>
              </div>
            </Card>
            <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-medium">Privacy Settings</span>
                <span className="text-muted-foreground">›</span>
              </div>
            </Card>
            <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-medium">Help & Support</span>
                <span className="text-muted-foreground">›</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;

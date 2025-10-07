import { MessageCircle, Search, MoreVertical, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "Great question! Let me explain the concept...",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Study Group - Calculus",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Group1",
    lastMessage: "Anyone up for tomorrow's session?",
    time: "15m ago",
    unread: 5,
    online: false,
    isGroup: true,
  },
  {
    id: 3,
    name: "Prof. James Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    lastMessage: "Here's the study material you requested",
    time: "1h ago",
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: "Ms. Emily Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    lastMessage: "Your assignment looks good! Just a few notes...",
    time: "3h ago",
    unread: 1,
    online: false,
  },
];

const NOTIFICATIONS = [
  {
    id: 1,
    type: "live",
    tutor: "Dr. Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    message: "is starting a live session on Quantum Physics",
    time: "5m ago",
    icon: Video,
  },
  {
    id: 2,
    type: "message",
    tutor: "Prof. James Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    message: "replied to your comment",
    time: "20m ago",
    icon: MessageCircle,
  },
  {
    id: 3,
    type: "live",
    tutor: "Ms. Emily Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    message: "uploaded a new video on Chemical Bonds",
    time: "2h ago",
    icon: Video,
  },
];

const InboxTab = () => {
  return (
    <div className="h-full overflow-y-auto bg-background pb-20">
      <div className="p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative animate-fade-in">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="pl-10 h-12 rounded-full border-2 focus:border-primary"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="messages" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="messages" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="notifications">
              Notifications
              <Badge className="ml-2 bg-accent text-accent-foreground h-5 w-5 p-0 flex items-center justify-center text-xs">
                3
              </Badge>
            </TabsTrigger>
          </TabsList>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-2 mt-4">
            {CONVERSATIONS.map((conversation) => (
              <Card
                key={conversation.id}
                className="p-4 hover:shadow-md transition-shadow cursor-pointer animate-slide-up"
                style={{ animationDelay: `${conversation.id * 0.05}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={conversation.avatar} alt={conversation.name} />
                      <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 h-4 w-4 bg-secondary border-2 border-card rounded-full" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold truncate">
                        {conversation.name}
                        {conversation.isGroup && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            Group
                          </Badge>
                        )}
                      </h3>
                      <span className="text-xs text-muted-foreground flex-shrink-0">
                        {conversation.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm text-muted-foreground truncate flex-1">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <Badge className="bg-accent text-accent-foreground h-5 min-w-5 px-2 flex items-center justify-center text-xs flex-shrink-0">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-2 mt-4">
            {NOTIFICATIONS.map((notification) => {
              const Icon = notification.icon;
              return (
                <Card
                  key={notification.id}
                  className="p-4 hover:shadow-md transition-shadow cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${notification.id * 0.05}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={notification.avatar} alt={notification.tutor} />
                        <AvatarFallback>{notification.tutor[0]}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 h-6 w-6 rounded-full flex items-center justify-center ${
                        notification.type === 'live' 
                          ? 'bg-accent' 
                          : 'bg-primary'
                      }`}>
                        <Icon className="h-3 w-3 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-semibold">{notification.tutor}</span>{" "}
                        <span className="text-muted-foreground">{notification.message}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InboxTab;

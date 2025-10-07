import { Heart, Bookmark, Clock, PlayCircle, Award, BookOpen, Flame, Target, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SAVED_VIDEOS = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&auto=format&fit=crop",
    title: "Calculus Made Simple",
    tutor: "Dr. Sarah Chen",
    duration: "3:45",
    progress: 75,
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&auto=format&fit=crop",
    title: "Newton's Laws Explained",
    tutor: "Prof. James Wilson",
    duration: "5:20",
    progress: 30,
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&auto=format&fit=crop",
    title: "Chemical Reactions 101",
    tutor: "Ms. Emily Rodriguez",
    duration: "4:15",
    progress: 100,
  },
];

const PLAYLISTS = [
  { name: "Mathematics Essentials", count: 12, color: "bg-primary" },
  { name: "Physics Fundamentals", count: 8, color: "bg-primary-purple" },
  { name: "Chemistry Basics", count: 15, color: "bg-secondary" },
];

const ACHIEVEMENTS = [
  { icon: "🏆", title: "Quick Learner", description: "Completed 5 videos in a day", progress: 100, total: 100 },
  { icon: "🔥", title: "7-Day Streak", description: "Learn something every day", progress: 7, total: 7 },
  { icon: "⭐", title: "Top Student", description: "Earned 1000 points", progress: 1000, total: 1000 },
  { icon: "📚", title: "Bookworm", description: "Complete 50 videos", progress: 47, total: 50 },
  { icon: "🎯", title: "Quiz Master", description: "Pass 20 quizzes", progress: 18, total: 20 },
  { icon: "🚀", title: "Fast Track", description: "10 hours in a week", progress: 8.5, total: 10 },
];

const COURSES = [
  { 
    id: 1, 
    title: "Advanced Calculus", 
    tutor: "Dr. Sarah Chen", 
    progress: 65, 
    videos: 24, 
    completedVideos: 16,
    quizzesPassed: 5,
    totalQuizzes: 8,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&auto=format&fit=crop"
  },
  { 
    id: 2, 
    title: "Physics Mastery", 
    tutor: "Prof. James Wilson", 
    progress: 40, 
    videos: 18, 
    completedVideos: 7,
    quizzesPassed: 3,
    totalQuizzes: 6,
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&auto=format&fit=crop"
  },
  { 
    id: 3, 
    title: "Chemistry Fundamentals", 
    tutor: "Ms. Emily Rodriguez", 
    progress: 85, 
    videos: 20, 
    completedVideos: 17,
    quizzesPassed: 8,
    totalQuizzes: 10,
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&auto=format&fit=crop"
  },
];

const WATCH_HISTORY = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&auto=format&fit=crop",
    title: "Integration Techniques",
    tutor: "Dr. Sarah Chen",
    duration: "4:20",
    watchedAt: "2 hours ago",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&auto=format&fit=crop",
    title: "Quantum Mechanics Intro",
    tutor: "Prof. James Wilson",
    duration: "6:15",
    watchedAt: "5 hours ago",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&auto=format&fit=crop",
    title: "Organic Chemistry Basics",
    tutor: "Ms. Emily Rodriguez",
    duration: "3:50",
    watchedAt: "1 day ago",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&auto=format&fit=crop",
    title: "Calculus Made Simple",
    tutor: "Dr. Sarah Chen",
    duration: "3:45",
    watchedAt: "2 days ago",
  },
];

const LibraryTab = () => {
  return (
    <div className="h-full overflow-y-auto bg-background pb-20">
      <div className="p-4 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-2 animate-fade-in">
          <Card className="p-3 text-center bg-gradient-primary text-primary-foreground">
            <Flame className="h-5 w-5 mx-auto mb-1" />
            <p className="text-xl font-bold">7</p>
            <p className="text-xs opacity-90">Day Streak</p>
          </Card>
          <Card className="p-3 text-center bg-gradient-success text-secondary-foreground">
            <Clock className="h-5 w-5 mx-auto mb-1" />
            <p className="text-xl font-bold">12.5h</p>
            <p className="text-xs opacity-90">Watched</p>
          </Card>
          <Card className="p-3 text-center bg-gradient-accent text-accent-foreground">
            <Target className="h-5 w-5 mx-auto mb-1" />
            <p className="text-xl font-bold">18</p>
            <p className="text-xs opacity-90">Quizzes</p>
          </Card>
          <Card className="p-3 text-center bg-card border-2 border-primary">
            <Trophy className="h-5 w-5 mx-auto mb-1 text-primary" />
            <p className="text-xl font-bold">6</p>
            <p className="text-xs text-muted-foreground">Awards</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="courses" className="w-full animate-slide-up">
          <TabsList className="grid w-full grid-cols-5 text-xs">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="playlists">Lists</TabsTrigger>
            <TabsTrigger value="achievements">Awards</TabsTrigger>
          </TabsList>

          {/* Courses */}
          <TabsContent value="courses" className="space-y-3 mt-4">
            {COURSES.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex gap-3">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute bottom-1 right-1 text-xs bg-black/70">
                      {course.completedVideos}/{course.videos}
                    </Badge>
                  </div>
                  <div className="flex-1 p-3 space-y-2">
                    <div>
                      <h3 className="font-semibold line-clamp-1">{course.title}</h3>
                      <p className="text-xs text-muted-foreground">{course.tutor}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Course Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1.5" />
                    </div>
                    <div className="flex gap-3 text-xs">
                      <Badge variant="outline" className="gap-1">
                        <PlayCircle className="h-3 w-3" />
                        {course.completedVideos}/{course.videos}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <Target className="h-3 w-3" />
                        {course.quizzesPassed}/{course.totalQuizzes}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Saved Videos */}
          <TabsContent value="saved" className="space-y-3 mt-4">
            {SAVED_VIDEOS.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex gap-3">
                  <div className="relative w-32 h-24 flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <PlayCircle className="h-8 w-8 text-white" />
                    </div>
                    <Badge className="absolute bottom-1 right-1 text-xs bg-black/70">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="flex-1 p-3 space-y-2">
                    <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.tutor}</p>
                    <div className="space-y-1">
                      <Progress value={video.progress} className="h-1" />
                      <p className="text-xs text-muted-foreground">{video.progress}% complete</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Watch History */}
          <TabsContent value="history" className="space-y-3 mt-4">
            {WATCH_HISTORY.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex gap-3">
                  <div className="relative w-32 h-20 flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="absolute bottom-1 right-1 text-xs bg-black/70">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="flex-1 p-3 space-y-1">
                    <h3 className="font-semibold line-clamp-2 text-sm">{video.title}</h3>
                    <p className="text-xs text-muted-foreground">{video.tutor}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {video.watchedAt}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Playlists */}
          <TabsContent value="playlists" className="space-y-3 mt-4">
            {PLAYLISTS.map((playlist) => (
              <Card
                key={playlist.name}
                className={`p-4 cursor-pointer hover:shadow-md transition-shadow ${playlist.color} bg-opacity-10 border-2`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{playlist.name}</h3>
                    <p className="text-sm text-muted-foreground">{playlist.count} videos</p>
                  </div>
                  <Bookmark className="h-5 w-5" />
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements" className="space-y-3 mt-4">
            {ACHIEVEMENTS.map((achievement) => {
              const isCompleted = achievement.progress >= achievement.total;
              const progressPercent = (achievement.progress / achievement.total) * 100;
              
              return (
                <Card
                  key={achievement.title}
                  className={`p-4 hover:shadow-md transition-shadow ${isCompleted ? 'border-2 border-primary bg-primary/5' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                        {isCompleted && <Award className="h-5 w-5 text-primary" />}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            {achievement.progress} / {achievement.total}
                          </span>
                          <span className="font-medium">{Math.round(progressPercent)}%</span>
                        </div>
                        <Progress value={progressPercent} className="h-1.5" />
                      </div>
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

export default LibraryTab;

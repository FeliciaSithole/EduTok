import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Video {
  id: number;
  tutorName: string;
  tutorAvatar: string;
  subject: string;
  title: string;
  description: string;
  thumbnail: string;
  likes: number;
  comments: number;
  isFollowing: boolean;
}

interface VideoCardProps {
  video: Video;
  onFollow: (videoId: number) => void;
  onLike: (videoId: number) => void;
}

const VideoCard = ({ video, onFollow, onLike }: VideoCardProps) => {
  return (
    <div className="relative h-full w-full">
      {/* Video Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${video.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between p-4 text-white">
        {/* Top Section - Subject Badge */}
        <div className="flex justify-end animate-fade-in">
          <Badge className="bg-light-blue text-light-blue-foreground border-0 shadow-lg">
            {video.subject}
          </Badge>
        </div>

        {/* Bottom Section - Video Info & Actions */}
        <div className="flex gap-4 animate-slide-up">
          {/* Left - Video Info */}
          <div className="flex-1 space-y-3">
            {/* Tutor Info */}
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
                <AvatarImage src={video.tutorAvatar} alt={video.tutorName} />
                <AvatarFallback>{video.tutorName[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">{video.tutorName}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onFollow(video.id)}
                  className={`h-auto p-0 text-xs font-medium ${
                    video.isFollowing 
                      ? "text-white/80" 
                      : "text-accent hover:text-accent/80"
                  }`}
                >
                  {video.isFollowing ? "Following" : "+ Follow"}
                </Button>
              </div>
            </div>

            {/* Video Details */}
            <div className="space-y-1">
              <h3 className="font-bold text-lg">{video.title}</h3>
              <p className="text-sm text-white/90">{video.description}</p>
            </div>
          </div>

          {/* Right - Action Buttons */}
          <div className="flex flex-col gap-6 items-center justify-end pb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onLike(video.id)}
              className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-accent/80 hover:scale-110 transition-all"
            >
              <div className="flex flex-col items-center gap-1">
                <Heart className="h-6 w-6 fill-accent text-accent" />
                <span className="text-xs font-semibold">{video.likes}</span>
              </div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary/80 hover:scale-110 transition-all"
            >
              <div className="flex flex-col items-center gap-1">
                <MessageCircle className="h-6 w-6" />
                <span className="text-xs font-semibold">{video.comments}</span>
              </div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-secondary/80 hover:scale-110 transition-all"
            >
              <Bookmark className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary-purple/80 hover:scale-110 transition-all"
            >
              <Share2 className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

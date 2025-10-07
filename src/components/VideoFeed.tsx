import { useState, useRef, useEffect } from "react";
import VideoCard from "@/components/VideoCard";

const MOCK_VIDEOS = [
  {
    id: 1,
    tutorName: "Dr. Sarah Chen",
    tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    subject: "Mathematics",
    title: "Calculus Made Simple",
    description: "Learn the fundamentals of calculus in just 60 seconds! 📐",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
    likes: 1243,
    comments: 89,
    isFollowing: false,
  },
  {
    id: 2,
    tutorName: "Prof. James Wilson",
    tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    subject: "Physics",
    title: "Newton's Laws Explained",
    description: "Master physics with simple everyday examples 🚀",
    thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop",
    likes: 2156,
    comments: 143,
    isFollowing: true,
  },
  {
    id: 3,
    tutorName: "Ms. Emily Rodriguez",
    tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    subject: "Chemistry",
    title: "Chemical Reactions 101",
    description: "Explore the magic of chemistry reactions! 🧪",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
    likes: 987,
    comments: 67,
    isFollowing: false,
  },
  {
    id: 4,
    tutorName: "Dr. Michael Zhang",
    tutorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    subject: "Biology",
    title: "DNA Structure Simplified",
    description: "Understand DNA in the easiest way possible 🧬",
    thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
    likes: 1876,
    comments: 112,
    isFollowing: true,
  },
];

const VideoFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videos, setVideos] = useState(MOCK_VIDEOS);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    
    const currentY = e.touches[0].clientY;
    const diff = startY.current - currentY;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < videos.length - 1) {
        setCurrentIndex(currentIndex + 1);
        isDragging.current = false;
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        isDragging.current = false;
      }
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleFollow = (videoId: number) => {
    setVideos(videos.map(v => 
      v.id === videoId ? { ...v, isFollowing: !v.isFollowing } : v
    ));
  };

  const handleLike = (videoId: number) => {
    setVideos(videos.map(v => 
      v.id === videoId ? { ...v, likes: v.likes + 1 } : v
    ));
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentIndex * window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {videos.map((video) => (
        <div key={video.id} className="h-full w-full snap-start">
          <VideoCard
            video={video}
            onFollow={handleFollow}
            onLike={handleLike}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoFeed;

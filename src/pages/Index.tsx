import { useState } from "react";
import VideoFeed from "@/components/VideoFeed";
import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";
import DiscoverTab from "@/components/DiscoverTab";
import LibraryTab from "@/components/LibraryTab";
import ProfileTab from "@/components/ProfileTab";
import InboxTab from "@/components/InboxTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="h-screen w-full bg-background overflow-hidden flex flex-col">
      <TopBar />
      <main className="flex-1 overflow-hidden">
        {activeTab === "home" && <VideoFeed />}
        {activeTab === "discover" && <DiscoverTab />}
        {activeTab === "inbox" && <InboxTab />}
        {activeTab === "library" && <LibraryTab />}
        {activeTab === "profile" && <ProfileTab />}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;

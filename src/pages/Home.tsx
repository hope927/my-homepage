import React from 'react';
import AuroraBackground from '@/components/decor/AuroraBackground';
import ProfileHeader from '@/components/profile/ProfileHeader';
import InfoSection from '@/components/profile/InfoSection';
import ChatPanel from '@/components/chat/ChatPanel';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 md:py-16">
        <ProfileHeader />
        <InfoSection />
        <ChatPanel />
        <footer className="pt-2 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} hope · Made with AI
        </footer>
      </div>
    </div>
  );
};

export default Home;

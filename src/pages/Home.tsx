import React from 'react';
import AuroraBackground from '@/components/decor/AuroraBackground';
import ProfileHeader from '@/components/profile/ProfileHeader';
import InfoSection from '@/components/profile/InfoSection';
import AboutMe from '@/components/profile/AboutMe';
import MyProjects from '@/components/profile/MyProjects';
import ChatPanel from '@/components/chat/ChatPanel';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col px-4 py-8 md:py-12">
        {/* ProfileHeader 区块 */}
        <div className="mb-8">
          <ProfileHeader />
        </div>

        {/* InfoSection 区块 */}
        <div className="mb-10">
          <InfoSection />
        </div>

        {/* AboutMe 区块 */}
        <div className="mb-10">
          <AboutMe />
        </div>

        {/* MyProjects 区块 */}
        <div className="mb-10">
          <MyProjects />
        </div>

        {/* ChatPanel 区块 */}
        <div className="mb-6">
          <ChatPanel />
        </div>

        <footer className="pt-2 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} HOPE · Made with AI
        </footer>
      </div>
    </div>
  );
};

export default Home;

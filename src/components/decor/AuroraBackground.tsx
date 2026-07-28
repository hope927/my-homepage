import React from 'react';

// 极光渐变背景：淡蓝紫光晕球叠加在白色基底上，营造科技氛围
const AuroraBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="glow-orb animate-float-slow absolute -left-[5%] -top-[10%] h-[42vw] w-[42vw] bg-blue-400/30" />
      <div className="glow-orb animate-float-slower absolute right-[-10%] top-[15%] h-[36vw] w-[36vw] bg-violet-400/25" />
      <div className="glow-orb animate-float-slow absolute bottom-[-15%] left-[28%] h-[46vw] w-[46vw] bg-purple-300/20" style={{ animationDelay: '-6s' }} />
      <div className="glow-orb animate-float-slower absolute bottom-[10%] right-[5%] h-[24vw] w-[24vw] bg-sky-300/20" style={{ animationDelay: '-10s' }} />
      {/* 顶部细网格线，增强科技感 */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};

export default AuroraBackground;

import React from 'react';

// 简约背景：微弱光晕 + 细网格，营造轻微科技感
const AuroraBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* 减少光晕球数量和透明度，让背景更干净 */}
      <div className="glow-orb animate-float-slow absolute -left-[10%] -top-[15%] h-[35vw] w-[35vw] bg-blue-200/15" />
      <div className="glow-orb animate-float-slower absolute right-[-5%] top-[20%] h-[30vw] w-[30vw] bg-slate-300/12" />
      {/* 网格线：更淡，几乎不可见 */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,89,152,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,89,152,0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
    </div>
  );
};

export default AuroraBackground;

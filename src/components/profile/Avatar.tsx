import React from 'react';

// 头像组件：固定显示 hope.jpg，所有访客看到同一张头像
const Avatar: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24 md:h-28 md:w-28">
        {/* 呼吸光晕 —— 更柔和 */}
        <span className="animate-pulse-ring absolute inset-[-5px] rounded-full bg-gradient-to-br from-blue-400/30 to-slate-400/30 blur-md" />
        {/* 旋转渐变光环 —— 简约化 */}
        <span
          className="animate-spin-slow absolute inset-0 rounded-full opacity-80"
          style={{
            background:
              'conic-gradient(from 0deg, #3b5998, #5b7db1, #3b5998)',
          }}
        />
        <div className="absolute inset-[2.5px] block overflow-hidden rounded-full bg-white shadow-[0_4px_16px_rgba(59,89,152,0.25)]">
          <img
            src={`${import.meta.env.BASE_URL}hope.jpg`}
            alt="hope 的头像"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;

import React from 'react';

const MyProjects: React.FC = () => {
  return (
    <section className="animate-rise w-full">
      <h2 className="mb-3 text-lg font-semibold text-primary">我的学习作品</h2>
      <div className="glass-card rounded-2xl p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hover md:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-medium text-foreground">个人主页</h3>
            <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-xs text-blue-700">
              进行中
            </span>
          </div>
          <p className="text-sm leading-relaxed text-foreground/70">
            用AI辅助编程从零搭建的个人主页，包含数字分身聊天功能
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Vite', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;

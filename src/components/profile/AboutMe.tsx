import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="animate-rise w-full">
      <h2 className="mb-3 text-lg font-semibold text-primary">关于我</h2>
      <div className="glass-card rounded-2xl p-5 shadow-card md:p-6">
        <p className="text-sm leading-[1.8] text-foreground/80 md:text-base">
          我叫HOPE，在深圳。之前在亲戚的门窗店帮忙做了三年销售，主要工作是找客户。2026年开始转行学AI，目标是从零开始做出能赚钱的产品。没有技术背景，没有高学历，靠的是愿意学、有时间、能吃苦。现在跟着VibeVibe教程，用AI辅助编程的方式一步步做自己的第一个作品——就是你正在看的这个主页。
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

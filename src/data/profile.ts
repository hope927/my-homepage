// hope 的个人信息数据

export type InfoIcon = 'sparkles' | 'heart' | 'zap';

export interface ProfileInfoItem {
  label: string;
  value: string;
  icon: InfoIcon;
}

export const profile = {
  name: 'HOPE',
  tagline: '一个在深圳学习AI的新手。',
  info: [
    {
      label: '我现在主要在做',
      value: '跟着ai用提示词制作网站。',
      icon: 'sparkles' as const,
    },
    {
      label: '我的兴趣',
      value: '学习ai和旅行。',
      icon: 'heart' as const,
    },
    {
      label: '我的记忆点',
      value: 'e人',
      icon: 'zap' as const,
    },
  ],
};

import React from 'react';
import { Sparkles, Heart, Zap, type LucideIcon } from 'lucide-react';
import { profile, type ProfileInfoItem } from '@/data/profile';

const iconMap: Record<ProfileInfoItem['icon'], LucideIcon> = {
  sparkles: Sparkles,
  heart: Heart,
  zap: Zap,
};

const InfoSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {profile.info.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.label}
              className="group animate-rise glass-card flex h-full flex-col gap-3 rounded-3xl p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
              style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoSection;

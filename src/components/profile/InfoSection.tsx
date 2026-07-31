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
      <div className="flex flex-wrap gap-2 md:gap-3">
        {profile.info.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.label}
              className="group animate-rise glass-card flex items-center gap-2 rounded-full px-4 py-2 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hover"
              style={{ animationDelay: `${0.15 + idx * 0.1}s` }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className="text-sm font-medium text-foreground">{item.value}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoSection;

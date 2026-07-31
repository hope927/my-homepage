import React from 'react';
import Avatar from './Avatar';
import { profile } from '@/data/profile';

const ProfileHeader: React.FC = () => {
  return (
    <header className="animate-rise flex flex-col items-center gap-5 text-center md:flex-row md:gap-8 md:text-left">
      <Avatar />
      <div className="space-y-2.5 md:flex-1">
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="mx-auto max-w-md text-pretty text-base text-muted-foreground md:mx-0 md:text-lg">
          {profile.tagline}
        </p>
      </div>
    </header>
  );
};

export default ProfileHeader;

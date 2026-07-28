import React from 'react';
import Avatar from './Avatar';
import { profile } from '@/data/profile';

const ProfileHeader: React.FC = () => {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <Avatar />
      <div className="space-y-2">
        <h1 className="text-balance text-3xl font-semibold md:text-4xl">
          <span className="gradient-text">{profile.name}</span>
        </h1>
        <p className="mx-auto max-w-md text-pretty text-sm text-muted-foreground md:text-base">
          {profile.tagline}
        </p>
      </div>
    </header>
  );
};

export default ProfileHeader;

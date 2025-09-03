'use client';

import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { cn } from '@/lib/utils';

interface ContentMediaProps {
  type: 'image' | 'video' | 'audio';
  src: string;
  title: string;
  className?: string;
}

export function ContentMedia({ type, src, title, className }: ContentMediaProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (type === 'image') {
    return (
      <div className={cn('relative overflow-hidden rounded-lg', className)}>
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (type === 'video') {
    return (
      <div className={cn('relative overflow-hidden rounded-lg', className)}>
        <video
          src={src}
          className="h-full w-full object-cover"
          controls
          poster={`${src}-poster.jpg`}
        />
      </div>
    );
  }

  if (type === 'audio') {
    return (
      <div className={cn('flex items-center space-x-4 rounded-lg bg-card p-4', className)}>
        <Button
          variant="outline"
          size="icon"
          onClick={handlePlayPause}
          className="shrink-0"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <div className="h-2 flex-1 rounded-full bg-muted">
              <div className="h-full w-1/3 rounded-full bg-primary" />
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{title}</p>
        </div>
        <audio src={src} />
      </div>
    );
  }

  return null;
}

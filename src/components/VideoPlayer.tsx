import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
}

export default function VideoPlayer({ thumbnailUrl, videoUrl }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden group">
      <img
        src={thumbnailUrl}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-colors">
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full transition-colors"
        >
          <Play className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
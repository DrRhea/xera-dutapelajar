'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description: string;
  webmSrc: string;
  mp4Src: string;
  thumbnail?: string; // Optional: explicit thumbnail path
}

export default function VideoCard({
  title,
  description,
  webmSrc,
  mp4Src,
  thumbnail,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  
  // Generate automatic thumbnail path from WebM filename
  const getAutoThumbnailPath = () => {
    if (thumbnail) return thumbnail;
    const fileName = webmSrc.split('/').pop()?.replace('.webm', '');
    return fileName ? `/thumbnails/${fileName}.jpg` : null;
  };
  
  const [thumbnailSrc, setThumbnailSrc] = useState<string | null>(getAutoThumbnailPath());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
          // Preload video metadata when visible
          if (videoRef.current) {
            videoRef.current.preload = 'metadata';
          }
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before element is visible
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasIntersected]);

  const handleLoadedMetadata = () => {
    setIsLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
    >
      <div className="relative flex items-center justify-center bg-gray-900 aspect-video">
        {hasIntersected ? (
          <video
            ref={videoRef}
            controls
            playsInline
            className="w-full h-full object-contain"
            preload="none"
            poster={thumbnailSrc || undefined}
            onLoadedMetadata={handleLoadedMetadata}
            onCanPlay={() => setIsLoaded(true)}
          >
            <source src={webmSrc} type="video/webm" />
            <source src={mp4Src} type="video/mp4" />
            <p className="text-gray-400 text-center p-4">
              Video tidak dapat diputar
            </p>
          </video>
        ) : (
          <>
            {thumbnailSrc && (
              <img
                src={thumbnailSrc}
                alt={`${title} thumbnail`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback gradient if thumbnail fails to load
                  const el = e.target as HTMLImageElement;
                  el.style.display = 'none';
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
              <div className="bg-primary/80 backdrop-blur-sm p-4 rounded-full hover:bg-primary transition-colors">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold text-text-dark">{title}</h3>
        <p className="text-sm text-text-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

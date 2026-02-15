'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description: string;
  webmSrc: string;
  mp4Src: string;
  thumbnail?: string;
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
  const [thumbnailSrc, setThumbnailSrc] = useState<string | null>(thumbnail || null);

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

  // Generate thumbnail from video first frame
  const generateThumbnail = () => {
    if (videoRef.current && !thumbnailSrc) {
      const video = videoRef.current;
      video.currentTime = 0;
      
      video.addEventListener('loadedmetadata', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
          ctx.drawImage(video, 0, 0);
          const thumb = canvas.toDataURL('image/jpeg', 0.8);
          setThumbnailSrc(thumb);
        }
      }, { once: true });
    }
  };

  const handleLoadedMetadata = () => {
    if (!thumbnailSrc) {
      generateThumbnail();
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
    >
      <div className="relative flex items-center justify-center bg-gray-900">
        {hasIntersected ? (
          <video
            ref={videoRef}
            controls
            playsInline
            className="w-full h-auto"
            style={{ maxHeight: '80vh', objectFit: 'contain' }}
            preload="none"
            poster={thumbnailSrc || undefined}
            onLoadedMetadata={handleLoadedMetadata}
            onCanPlay={() => setIsLoaded(true)}
          >
            <source src={webmSrc} type="video/webm" />
            <source src={mp4Src} type="video/mp4" />
            <p className="text-gray-600 text-center p-4 absolute inset-0 flex items-center justify-center">
              Video tidak dapat diputar. Browser Anda mungkin tidak mendukung codec video ini.
            </p>
          </video>
        ) : (
          <>
            {thumbnailSrc && (
              <img
                src={thumbnailSrc}
                alt={title}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '80vh' }}
              />
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
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

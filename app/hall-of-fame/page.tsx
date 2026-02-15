'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function HallOfFamePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const winners2025 = [
    {
      name: "Andra Galang Pratama",
      school: "SMKN 1 Gunung Putri",
      category: "SMA",
      title: "Winner SMA Nasional",
      img: "/images/people/winner-sma-andra.jpg",
      achievement: "Juara 1 Tingkat Nasional",
      year: "2025",
      webm: "/video/DPRI_Andra Galang Pratama.webm",
      mp4: "/video/DPRI_Andra Galang Pratama.mp4",
    },
    {
      name: "Kayla Adelia Panerusan",
      school: "SMAN 81 Jakarta",
      category: "SMA",
      title: "Winner SMA Nasional",
      img: "/images/people/winner-sma-kayla.jpg",
      achievement: "Juara 1 Tingkat Nasional",
      year: "2025",
      webm: "/video/DPRI_Kayla Adelia.webm",
      mp4: "/video/DPRI_Kayla Adelia.mp4",
    },
    {
      name: "I Gusti Agung Sakha Satwika",
      school: "SMPN 15 Jakarta",
      category: "SMP",
      title: "Winner SMP Nasional",
      img: "/images/people/winner-smp-sakha.jpg",
      achievement: "Juara 1 Tingkat Nasional",
      year: "2025",
      webm: "/video/DPRI_I Gusti Agung.webm",
      mp4: "/video/DPRI_I Gusti Agung.mp4",
    },
    {
      name: "Nandhira Arundati Vania",
      school: "SMPN 154 Jakarta",
      category: "SMP",
      title: "Winner SMP Nasional",
      img: "/images/people/winner-smp-nandhira.jpg",
      achievement: "Juara 1 Tingkat Nasional",
      year: "2025",
      webm: "/video/DPRI_Nadira Arunda.webm",
      mp4: "/video/DPRI_Nadira Arunda.mp4",
    },
  ];

  const currentWinner = winners2025[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? winners2025.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === winners2025.length - 1 ? 0 : prev + 1));
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? highlightVideos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === highlightVideos.length - 1 ? 0 : prev + 1));
  };

  const highlightVideos = [
    {
      title: "Congratulations",
      description: "Ucapan selamat untuk seluruh pemenang dan finalis",
      webm: "/video/DPRI_Congratulations.webm",
      mp4: "/video/DPRI_Congratulations.mp4",
    },
    {
      title: "The Winners",
      description: "Momen kebanggaan para juara Duta Pelajar Remaja Indonesia",
      webm: "/video/DPRI_The Winners.webm",
      mp4: "/video/DPRI_The Winners.mp4",
    },
    {
      title: "DPRI 2026",
      description: "Persiapan menuju gelaran Duta Pelajar Remaja Indonesia 2026",
      webm: "/video/DPRI_2026.webm",
      mp4: "/video/DPRI_2026.mp4",
    },
    {
      title: "Kayla Adelia Panerusan",
      description: "Winner SMA Nasional dari SMAN 81 Jakarta",
      webm: "/video/DPRI_Kayla Adelia.webm",
      mp4: "/video/DPRI_Kayla Adelia.mp4",
    },
    {
      title: "I Gusti Agung Sakha Satwika",
      description: "Winner SMP Nasional dari SMPN 15 Jakarta",
      webm: "/video/DPRI_I Gusti Agung.webm",
      mp4: "/video/DPRI_I Gusti Agung.mp4",
    },
    {
      title: "Nandhira Arundati Vania",
      description: "Winner SMP Nasional dari SMPN 154 Jakarta",
      webm: "/video/DPRI_Nadira Arunda.webm",
      mp4: "/video/DPRI_Nadira Arunda.mp4",
    },
    {
      title: "Kategori SMP",
      description: "Highlight dan dokumentasi finalis kategori SMP",
      webm: "/video/DPRI_SMP.webm",
      mp4: "/video/DPRI_SMP.mp4",
    },
    {
      title: "Andra Galang Pratama",
      description: "Winner SMA Nasional dari SMKN 1 Gunung Putri",
      webm: "/video/DPRI_Andra Galang Pratama.webm",
      mp4: "/video/DPRI_Andra Galang Pratama.mp4",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Winners 2025 */}
      <section className="relative min-h-screen bg-surface grid grid-cols-1 md:grid-cols-2">
        {/* Image - Left */}
        <div className="relative w-full h-screen md:h-full bg-surface overflow-hidden">
          <Image 
            src={currentWinner.img} 
            alt={currentWinner.name} 
            fill 
            className="object-cover transition-opacity duration-500" 
            priority 
          />
          
          {/* Overlay Gradient - Red bottom, transparent top */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />
          
          {/* Navigation - Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-20">
            <button
              onClick={handlePrev}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all"
              aria-label="Previous winner"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all"
              aria-label="Next winner"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Mobile Overlay */}
          <div className="absolute md:hidden bottom-0 left-0 right-0 p-6 z-10">
            <div className="space-y-3">
              <div className="inline-flex">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-primary">
                  {currentWinner.title.toUpperCase()}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {currentWinner.name.split(' ').slice(0, 2).join(' ')}<br/>
                {currentWinner.name.split(' ').slice(2).join(' ')}
              </h2>
              <p className="text-base text-white/90">{currentWinner.school}</p>
            </div>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="absolute md:hidden bottom-24 left-0 right-0 flex justify-center gap-2 z-10">
            {winners2025.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to winner ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content - Right */}
        <div className="hidden md:flex flex-col items-start justify-end px-8 md:px-12 lg:px-16 py-12 md:py-16 relative z-10">
          <div className="max-w-md space-y-8 w-full">
            {/* Header */}
            <div className="space-y-2">
              <div className="inline-block w-12 h-0.5 bg-primary" />
            </div>

            {/* Badge */}
            <div className="inline-flex">
              <span className="px-4 py-2 rounded-full text-xs font-semibold bg-primary text-white">
                {currentWinner.title.toUpperCase()}
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
                {currentWinner.name.split(' ').slice(0, 2).join(' ')}<br/>
                {currentWinner.name.split(' ').slice(2).join(' ')}
              </h2>
            </div>

            {/* School */}
            <div>
              <p className="text-lg md:text-xl text-text-light">{currentWinner.school}</p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 pt-4">
              {winners2025.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to winner ${idx + 1}`}
                />
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#video-highlights"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-red-900 transition mt-4"
            >
              Lihat Video Highlights
            </Link>
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section id="video-highlights" className="relative bg-surface grid grid-cols-1 md:grid-cols-2">
        {/* Content - Left */}
        <div className="hidden md:flex flex-col items-end justify-end px-8 md:px-12 lg:px-16 py-12 md:py-16 relative z-10 bg-surface">
          <div className="max-w-md space-y-8 w-full">
            {/* Header */}
            <div className="space-y-2 flex justify-end">
              <div className="inline-block w-12 h-0.5 bg-primary" />
            </div>

            {/* Badge */}
            <div className="flex justify-end">
              <span className="px-4 py-2 rounded-full text-xs font-semibold bg-primary text-white">
                VIDEO UNGGULAN
              </span>
            </div>

            {/* Title */}
            <div className="space-y-2 text-right">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
                {highlightVideos[currentVideoIndex].title}
              </h2>
            </div>

            {/* Description */}
            <div className="text-right">
              <p className="text-lg md:text-xl text-text-light">{highlightVideos[currentVideoIndex].description}</p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 pt-4 justify-end">
              {highlightVideos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVideoIndex(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === currentVideoIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to video ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video - Right */}
        <div className="relative w-full h-screen bg-surface overflow-hidden">
          {/* Video Player */}
          <div className="w-full h-full flex items-center justify-center bg-surface">
            <video
              key={currentVideoIndex}
              controls
              playsInline
              className="w-full h-full object-contain"
              preload="metadata"
            >
              <source src={highlightVideos[currentVideoIndex].webm} type="video/webm" />
              <source src={highlightVideos[currentVideoIndex].mp4} type="video/mp4" />
              <p className="text-gray-400">Video tidak dapat diputar</p>
            </video>
          </div>
          
          {/* Navigation - Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-20 pointer-events-none">
            <button
              onClick={handlePrevVideo}
              className="pointer-events-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all"
              aria-label="Previous video"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextVideo}
              className="pointer-events-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 transition-all"
              aria-label="Next video"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          
          {/* Mobile Overlay */}
          <div className="absolute md:hidden bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="space-y-3">
              <div className="inline-flex">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-primary">
                  VIDEO UNGGULAN
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {highlightVideos[currentVideoIndex].title}
              </h2>
              <p className="text-base text-white/90">{highlightVideos[currentVideoIndex].description}</p>
            </div>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="absolute md:hidden bottom-40 left-0 right-0 flex justify-center gap-2 z-10">
            {highlightVideos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentVideoIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentVideoIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to video ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

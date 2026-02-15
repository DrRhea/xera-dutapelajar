"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function FasilitasPage() {
  const fasilitasItems = [
    {
      title: "Penginapan",
      category: "Fasilitas Finalis",
      description:
        "5 hari 4 malam penginapan selama karantina di Jakarta dengan fasilitas lengkap dan nyaman.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Relasi Pelajar",
      category: "Fasilitas Finalis",
      description:
        "Jaringan pelajar dari berbagai provinsi di seluruh Indonesia untuk memperluas relasi dan kolaborasi.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Sertifikat dan Merchandise",
      category: "Fasilitas Finalis",
      description:
        "Sertifikat resmi dan merchandise eksklusif sebagai kenang-kenangan dan bukti partisipasi.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: "Perlengkapan Finalis",
      category: "Fasilitas Finalis",
      description:
        "Kaos, pakaian forum, dan selempang resmi untuk kegiatan karantina dan acara formal.",
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFasilitas = fasilitasItems[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? fasilitasItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === fasilitasItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Fasilitas Cards Section */}
      <section className="relative min-h-screen bg-surface grid grid-cols-1 md:grid-cols-2">
        {/* Visual - Left */}
        <div className="relative w-full h-[45vh] md:h-full bg-white overflow-hidden">
          <Image
            src="/images/stock-activity-2.png"
            alt="Fasilitas finalis"
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <div className="w-24 h-24 rounded-full border border-primary/15 bg-surface flex items-center justify-center">
                {currentFasilitas.icon}
              </div>
              <div className="text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-text-light">{currentFasilitas.category}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-dark">{currentFasilitas.title}</h2>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10" />

          {/* Navigation - Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-10">
            <button
              onClick={handlePrev}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm backdrop-brightness-50 text-white rounded-full p-3 transition-all shadow-lg ring-1 ring-white/40"
              aria-label="Fasilitas sebelumnya"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm backdrop-brightness-50 text-white rounded-full p-3 transition-all shadow-lg ring-1 ring-white/40"
              aria-label="Fasilitas berikutnya"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content - Right */}
        <div className="flex flex-col justify-end items-start px-8 md:px-12 lg:px-16 py-12 md:py-16 bg-white">
          <div className="max-w-xl space-y-6 text-left">
            <div className="inline-flex">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                {currentFasilitas.category.toUpperCase()}
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold text-text-dark">{currentFasilitas.title}</h3>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            <p className="text-text-light leading-relaxed text-base md:text-lg">
              {currentFasilitas.description}
            </p>
            <div className="flex gap-2 pt-2">
              {fasilitasItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === currentIndex ? "bg-primary w-8" : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Fasilitas ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


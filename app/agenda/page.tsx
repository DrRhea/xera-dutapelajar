"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function AgendaPage() {
  const agendaItems = [
    {
      title: "Universitas Indonesia",
      category: "Agenda Kunjungan",
      description:
        "Kunjungan ke kampus UI untuk pengalaman akademik dan memperluas wawasan pendidikan tinggi di Indonesia. Program ini memberikan kesempatan bagi finalis untuk mengenal lebih dekat sistem pendidikan tinggi, fasilitas kampus, dan berbagai program akademik yang tersedia.",
      logo: "/images/logo-ui.svg",
    },
    {
      title: "MPR/DPR RI",
      category: "Agenda Kunjungan",
      description:
        "Kunjungan ke lembaga legislatif Indonesia untuk memahami proses demokrasi dan tata kelola negara. Finalis akan belajar tentang sistem pemerintahan, proses pembuatan undang-undang, dan peran penting lembaga legislatif dalam menjaga demokrasi Indonesia.",
      logo: "/images/logo-mpr.svg",
    },
    {
      title: "Kemenpora",
      category: "Agenda Kunjungan",
      description:
        "Kunjungan ke Kementerian Pemuda dan Olahraga untuk memahami kebijakan dan program kepemudaan nasional. Finalis akan mendapatkan wawasan tentang berbagai program pemerintah untuk pengembangan generasi muda dan peluang yang tersedia bagi remaja Indonesia.",
      logo: "/images/logo-kemenpora.png",
    },
    {
      title: "Program Pengembangan",
      category: "Agenda Kunjungan",
      description:
        "Berbagai program pengembangan karakter dan kepemimpinan yang dirancang khusus untuk membentuk generasi muda yang berkarakter, berprestasi, dan siap berkontribusi positif bagi bangsa dan negara.",
      logo: "/images/logo-dpr-official.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAgenda = agendaItems[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? agendaItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === agendaItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Agenda Cards Section */}
      <section className="relative min-h-screen bg-surface grid grid-cols-1 md:grid-cols-2 pt-20 md:pt-0">
        {/* Visual - Left */}
        <div className="relative w-full h-[45vh] md:h-full bg-white overflow-hidden">
          <Image
            src={currentAgenda.logo}
            alt={currentAgenda.title}
            fill
            className="object-contain blur-md scale-125 opacity-30 brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />
          <div className="absolute inset-0 flex items-center justify-center [@media(max-height:740px)]:py-6">
            <div className="flex flex-col items-center gap-6">
              <div className="w-28 h-28 flex items-center justify-center">
                <Image src={currentAgenda.logo} alt={currentAgenda.title} width={96} height={96} />
              </div>
              <div className="text-center">
                <div className="text-xs uppercase tracking-[0.2em] text-text-light">{currentAgenda.category}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-dark">{currentAgenda.title}</h2>
              </div>
            </div>
          </div>
          {/* Navigation - Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-10">
            <button
              onClick={handlePrev}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm backdrop-brightness-50 text-white rounded-full p-3 transition-all shadow-lg ring-1 ring-white/40"
              aria-label="Agenda sebelumnya"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-sm backdrop-brightness-50 text-white rounded-full p-3 transition-all shadow-lg ring-1 ring-white/40"
              aria-label="Agenda berikutnya"
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
                {currentAgenda.category.toUpperCase()}
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold text-text-dark">{currentAgenda.title}</h3>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            <p className="text-text-light leading-relaxed text-base md:text-lg">
              {currentAgenda.description}
            </p>
            <div className="flex gap-2 pt-2">
              {agendaItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === currentIndex ? "bg-primary w-8" : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Agenda ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BuildingOffice2Icon,
  MapIcon,
  TrophyIcon,
  AcademicCapIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const winners = [
    {
      name: "Andra Galang Pratama",
      school: "SMKN 1 Gunung Putri",
      category: "SMA",
      title: "Winner SMA Nasional",
      img: "/images/people/winner-sma-andra.jpg",
    },
    {
      name: "Kayla Adelia Panerusan",
      school: "SMAN 81 Jakarta",
      category: "SMA",
      title: "Winner SMA Nasional",
      img: "/images/people/winner-sma-kayla.jpg",
    },
    {
      name: "I Gusti Agung Sakha Satwika",
      school: "SMPN 15 Jakarta",
      category: "SMP",
      title: "Winner SMP Nasional",
      img: "/images/people/winner-smp-sakha.jpg",
    },
    {
      name: "Nandhira Arundati Vania",
      school: "SMPN 154 Jakarta",
      category: "SMP",
      title: "Winner SMP Nasional",
      img: "/images/people/winner-smp-nandhira.jpg",
    },
  ];

  const currentWinner = winners[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? winners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === winners.length - 1 ? 0 : prev + 1));
  };
  return (
    <main className="min-h-screen relative bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden z-10 bg-primary py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/95 mix-blend-multiply z-10" />
        </div>

        <div className="relative z-20 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-4">
                Duta Pelajar Remaja Indonesia
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Remaja Hebat, Cerdas &amp; Berkualitas
              </h1>
              <p className="text-white/90 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
                Membentuk Generasi Berkarakter, Berprestasi, dan Siap Menjadi Agen Perubahan Menuju Indonesia Emas 2045.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="#daftar"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary text-base font-semibold rounded-xl hover:bg-gray-100 transition shadow-sm"
                >
                  Daftar Sekarang
                </Link>
                <a
                  href="/documents/Pedoman-DPRI-2026.pdf"
                  download="Pedoman-DPRI-2026.pdf"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white text-base font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition gap-2"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Unduh Pedoman
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="relative z-10 min-h-screen bg-primary grid grid-cols-1 md:grid-cols-2">
        {/* Image - Left */}
        <div className="relative w-full h-screen md:h-full bg-gray-100 overflow-hidden">
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
            {winners.map((_, idx) => (
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
              <div className="inline-block w-12 h-0.5 bg-white" />
            </div>

            {/* Badge */}
            <div className="inline-flex">
              <span className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-primary">
                {currentWinner.title.toUpperCase()}
              </span>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {currentWinner.name.split(' ').slice(0, 2).join(' ')}<br/>
                {currentWinner.name.split(' ').slice(2).join(' ')}
              </h2>
            </div>

            {/* School */}
            <div>
              <p className="text-lg md:text-xl text-white/90">{currentWinner.school}</p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 pt-4">
              {winners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                  }`}
                  aria-label={`Go to winner ${idx + 1}`}
                />
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/hall-of-fame"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition mt-4"
            >
              Lihat Semua Pemenang
            </Link>
          </div>
        </div>
      </section>

      {/* Authority & Trust */}
      <section className="relative z-10 py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">DISELENGGARAKAN OLEH</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Diselenggarakan Oleh
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
              <div className="relative w-full bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image 
                  src="/images/people/founder-saputra.jpg" 
                  alt="Saputra" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-8 space-y-4 flex flex-col justify-between flex-1">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                    Founder
                  </div>
                  <h3 className="text-3xl font-bold text-text-dark">Saputra</h3>
                  <p className="text-base font-semibold text-primary">Founder Duta Pelajar Remaja Indonesia</p>
                </div>
                <blockquote className="border-l-4 border-primary pl-4 py-2">
                  <p className="text-text-light italic leading-relaxed">
                    "Kami hadir untuk menyiapkan generasi pelajar yang berkarakter, berprestasi, dan siap menjadi agen perubahan."
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 space-y-6 flex flex-col">
              <div className="space-y-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <p className="text-xs uppercase tracking-wider font-semibold text-text-light">Legalitas Penyelenggara</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">CV. Pesona Prestasi Official</h3>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>

                <div className="space-y-4 bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-text-light">Nomor Registrasi</p>
                    <p className="text-lg font-bold text-text-dark">AHU-0028774-AH.01.14 Tahun 2025</p>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-text-light">Alamat Kantor</p>
                    <p className="text-sm text-text-dark leading-relaxed">Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21, Sungai Jawi, Pontianak Kota</p>
                  </div>
                </div>

                {/* QR Code for Legality Verification */}
                <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border-2 border-primary/20">
                  <div className="space-y-2 text-center">
                    <p className="text-xs uppercase tracking-wider font-semibold text-primary">Verifikasi Legalitas</p>
                    <p className="text-sm text-text-light">Scan QR code untuk cek sertifikat resmi</p>
                  </div>
                  <div className="relative w-40 h-40 bg-white rounded-lg border-2 border-primary/30 p-2 flex items-center justify-center shadow-sm">
                    <img
                      src="/images/company-legality-qr.webp"
                      alt="QR Code Legalitas"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-text-light">AHU-0028774-AH.01.14 Tahun 2025</p>
                </div>

                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white text-base font-semibold rounded-xl hover:bg-red-900 transition shadow-sm w-full"
                >
                  Lihat Profil Resmi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="relative z-10 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">EXCLUSIVE BENEFITS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Fasilitas Unggulan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Penginapan Premium", desc: "Karantina 5 hari 4 malam di hotel representatif.", Icon: BuildingOffice2Icon },
              { title: "City Tour Edukatif", desc: "Kunjungan institusi strategis untuk wawasan nasional.", Icon: MapIcon },
              { title: "Atribut Resmi", desc: "Selempang, kostum, dan perlengkapan formal finalis.", Icon: TrophyIcon },
              { title: "Pembinaan Karakter", desc: "Kelas kepemimpinan dan etika publik berstandar nasional.", Icon: AcademicCapIcon },
              { title: "Relasi Nasional", desc: "Jejaring pelajar unggul dari berbagai provinsi.", Icon: UserGroupIcon },
              { title: "Sertifikat Resmi", desc: "Sertifikat nasional sebagai pengakuan prestasi.", Icon: DocumentCheckIcon },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{benefit.title}</h3>
                <p className="text-text-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="relative z-10 py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">ALUR SELEKSI NASIONAL</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Alur Seleksi Nasional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Pendaftaran", desc: "Registrasi online dan unggah berkas." },
              { step: "02", title: "Audisi", desc: "Seleksi berkas, wawancara, dan penilaian." },
              { step: "03", title: "Karantina", desc: "Pembinaan intensif dan pembekalan." },
              { step: "04", title: "Grand Final", desc: "Malam puncak dan penobatan." },
            ].map((stage) => (
              <div key={stage.step} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-primary mb-3">{stage.step}</div>
                <h3 className="text-lg font-bold text-text-dark mb-2">{stage.title}</h3>
                <p className="text-text-light">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="daftar" className="relative z-10 py-24 md:py-32 bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Siap Menjadi Bagian Sejarah?
          </h2>
          <p className="text-white/85 mt-4 text-base md:text-lg">
            Jadilah representasi pelajar berprestasi Indonesia dan bawa inspirasi bagi generasi muda.
          </p>
          <div className="mt-10">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary text-base font-semibold rounded-xl hover:bg-gray-100 transition shadow-sm"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

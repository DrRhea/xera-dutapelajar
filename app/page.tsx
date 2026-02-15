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
                  className="inline-flex items-center justify-center h-12 px-8 bg-white text-primary text-base font-semibold rounded-xl hover:bg-gray-100 transition shadow-sm"
                >
                  Daftar Sekarang
                </Link>
                <a
                  href="/documents/Pedoman-DPRI-2026.pdf"
                  download="Pedoman-DPRI-2026.pdf"
                  className="inline-flex items-center justify-center h-12 px-8 bg-transparent text-white text-base font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition gap-2"
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

      {/* Diselenggarakan Oleh */}
      <section className="relative z-10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="bg-white flex flex-col justify-end items-end px-8 md:px-12 lg:px-16 py-12 md:py-16 order-2 lg:order-1">
            <div className="space-y-8 max-w-xl text-right">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-text-light">Diselenggarakan Oleh</p>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark">CV. Pesona Prestasi Official</h2>
                <div className="w-12 h-0.5 bg-primary ml-auto" />
              </div>

              <div className="space-y-4 border-t border-primary/15 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-light">Nomor Registrasi</p>
                  <p className="text-lg font-bold text-text-dark">AHU-0028774-AH.01.14 Tahun 2025</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-light">Alamat Kantor</p>
                  <p className="text-sm text-text-dark leading-relaxed">
                    Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21, Sungai Jawi, Pontianak Kota
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t border-primary/15 pt-6">
                <div className="flex items-center justify-end gap-6 flex-wrap">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-text-light">Verifikasi Legalitas</p>
                    <p className="text-sm text-text-light">Scan QR code untuk cek sertifikat resmi</p>
                  </div>
                  <div className="w-28 h-28 bg-white border border-primary/20 p-2 flex items-center justify-center">
                    <img
                      src="/images/company-legality-qr.webp"
                      alt="QR Code Legalitas"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
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

          <div className="relative min-h-[520px] lg:min-h-full order-1 lg:order-2">
            <Image
              src="/images/people/founder-saputra.jpg"
              alt="Saputra"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Founder</p>
              <h3 className="text-3xl md:text-4xl font-bold">Saputra</h3>
              <p className="text-sm md:text-base text-white/90">Founder Duta Pelajar Remaja Indonesia</p>
              <div className="border-l-2 border-white/60 pl-4">
                <p className="text-sm md:text-base text-white/85 italic">
                  "Kami hadir untuk menyiapkan generasi pelajar yang berkarakter, berprestasi, dan siap menjadi agen perubahan."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-text-light">ALUR SELEKSI NASIONAL</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Alur Seleksi Nasional
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="relative mt-14">
            <div className="hidden lg:block absolute left-0 right-0 top-4 h-px bg-primary/20" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              {[
                { step: "01", title: "Pendaftaran", desc: "Registrasi online dan unggah berkas." },
                { step: "02", title: "Audisi", desc: "Seleksi berkas, wawancara, dan penilaian." },
                { step: "03", title: "Karantina", desc: "Pembinaan intensif dan pembekalan." },
                { step: "04", title: "Grand Final", desc: "Malam puncak dan penobatan." },
              ].map((stage) => (
                <div key={stage.step} className="space-y-4">
                  <div className="flex items-center gap-4 lg:justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/15" />
                    <div className="text-2xl font-bold text-primary">{stage.step}</div>
                  </div>
                  <div className="space-y-2 text-left lg:text-center">
                    <h3 className="text-xl font-bold text-text-dark">{stage.title}</h3>
                    <p className="text-text-light leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
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

    </main>
  );
}

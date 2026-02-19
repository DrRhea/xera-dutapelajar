"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-[0.2em] text-text-light font-medium">{children}</p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">{children}</h2>
      <div className="w-12 h-0.5 bg-primary" />
    </>
  );
}

const LATAR_BELAKANG_SLIDES = [
  "Remaja merupakan aset berharga bangsa yang memiliki peran strategis dalam menentukan arah dan masa depan Indonesia. Di tengah pesatnya perkembangan teknologi serta dinamika sosial yang terus berubah, banyak pelajar dan remaja menghadapi tantangan dalam menemukan jati diri, mengembangkan potensi, serta menyalurkan minat dan bakatnya secara positif.",
  "Melihat kondisi tersebut, dibutuhkan wadah yang tidak hanya memberi ruang bagi remaja untuk berkreasi dan berprestasi, tetapi juga membimbing mereka agar mampu menjadi generasi yang inspiratif dan berdaya saing tinggi.",
  "Dari kebutuhan tersebut, Duta Pelajar Remaja Indonesia hadir sebagai program unggulan yang berfokus pada pembinaan karakter, pengembangan potensi, dan pemberdayaan pelajar tingkat SMP/MTs Sederajat dan SMA/SMK/MA Sederajat di seluruh Indonesia. Program ini menjadi sarana strategis untuk menyiapkan generasi muda yang cerdas, kreatif, dan berintegritas, serta mampu menjadi teladan bagi rekan sebaya.",
];

const VISI_MISI_NAMA = ["Visi", "Misi", "Nilai-Nilai"];

const NILAI_ITEMS = [
  { title: "Profesionalitas", desc: "Menjunjung tinggi standar profesional dalam setiap pelaksanaan kegiatan dan program." },
  { title: "Integritas", desc: "Menjaga kejujuran, transparansi, dan konsistensi dalam setiap tindakan dan keputusan." },
  { title: "Kolaborasi", desc: "Membangun kerja sama yang positif dan saling mendukung antar semua pihak yang terlibat." },
  { title: "Inspirasi", desc: "Menjadi sumber inspirasi dan motivasi bagi generasi muda untuk berkembang dan berprestasi." },
];

const MISI_ITEMS = [
  "Menyediakan wadah strategis bagi pelajar remaja untuk menyalurkan bakat, meningkatkan kemampuan kepemimpinan, keterampilan sosial, serta rasa tanggung jawab.",
  "Mengembangkan proses pembinaan yang menekankan penguatan kapasitas diri, penguatan karakter, dan kolaborasi positif.",
  "Menyiapkan generasi muda yang cerdas, kreatif, berintegritas, dan mampu menjadi teladan bagi rekan sebaya.",
  "Mendukung terwujudnya generasi unggul, berkarakter, dan siap menjadi pemimpin masa depan bangsa yang berkontribusi nyata bagi kemajuan negeri.",
];

export default function TentangKamiPage() {
  const [latarIndex, setLatarIndex] = useState(0);
  const [visiMisiIndex, setVisiMisiIndex] = useState(0);

  const handleLatarPrev = () => setLatarIndex((i) => (i === 0 ? LATAR_BELAKANG_SLIDES.length - 1 : i - 1));
  const handleLatarNext = () => setLatarIndex((i) => (i === LATAR_BELAKANG_SLIDES.length - 1 ? 0 : i + 1));

  const handleVisiMisiPrev = () => setVisiMisiIndex((i) => (i === 0 ? 2 : i - 1));
  const handleVisiMisiNext = () => setVisiMisiIndex((i) => (i === 2 ? 0 : i + 1));

  return (
    <main className="min-h-screen bg-white">
      {/* Section 1: Opening - min-h-screen */}
      <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 pt-24 md:pt-24">
        <div className="flex flex-col justify-end px-6 md:px-10 lg:px-14 py-12 md:py-16 border-b md:border-b-0 md:border-r border-primary/10">
          <div className="space-y-6">
            <div className="space-y-3">
              <SectionLabel>TENTANG KAMI</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
                Tentang Duta Pelajar Remaja Indonesia
              </h1>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            <p className="text-text-light text-base md:text-lg leading-relaxed max-w-md">
              &quot;Remaja Hebat, Cerdas & Berkualitas&quot; — Program di bawah naungan CV. Pesona Prestasi Official.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-12 md:py-16 bg-surface">
          <p className="text-text-dark text-lg md:text-xl leading-relaxed max-w-xl">
            Program unggulan yang berfokus pada pembinaan karakter, pengembangan potensi, dan pemberdayaan pelajar tingkat SMP/MTs dan SMA/SMK/MA Sederajat di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Section 2: Latar Belakang - min-h-screen + carousel */}
      <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-12 md:py-16 border-b md:border-b-0 md:border-r border-primary/10">
          <div className="space-y-6">
            <div className="space-y-3">
              <SectionLabel>LATAR BELAKANG</SectionLabel>
              <SectionTitle>Latar Belakang</SectionTitle>
            </div>
            <div className="flex gap-2 pt-2">
              {LATAR_BELAKANG_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLatarIndex(idx)}
                  className={`h-1 rounded-full transition-all ${
                    idx === latarIndex ? "bg-primary w-8" : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center px-6 md:px-10 lg:px-14 py-12 md:py-16 bg-surface">
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 z-10 pointer-events-none">
            <button
              onClick={handleLatarPrev}
              className="pointer-events-auto rounded-full p-2 bg-white/80 hover:bg-white shadow-md text-primary transition-all"
              aria-label="Sebelumnya"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleLatarNext}
              className="pointer-events-auto rounded-full p-2 bg-white/80 hover:bg-white shadow-md text-primary transition-all"
              aria-label="Selanjutnya"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-lg md:text-xl text-text-dark leading-relaxed max-w-xl transition-opacity duration-300">
            {LATAR_BELAKANG_SLIDES[latarIndex]}
          </p>
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {LATAR_BELAKANG_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setLatarIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === latarIndex ? "bg-primary w-6" : "bg-gray-300"}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Motto - min-h-screen centered */}
      <section className="min-h-screen bg-surface flex items-center justify-center px-6 md:px-10 lg:px-14 py-16">
        <blockquote className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-2xl md:text-4xl lg:text-5xl text-primary font-semibold leading-snug">
            &quot;Membentuk Generasi Berkarakter, Berprestasi, dan Siap Menjadi Agen Perubahan Menuju Indonesia Emas 2045.&quot;
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-text-dark font-semibold">Remaja Hebat, Cerdas & Berkualitas</p>
        </blockquote>
      </section>

      {/* Section 4: Visi, Misi & Nilai - min-h-screen + carousel */}
      <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex flex-col justify-center items-center px-6 md:px-10 lg:px-14 py-12 md:py-16 bg-surface overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
          <div className="relative z-10 text-center md:text-left w-full max-w-md">
            <p className="text-sm uppercase tracking-[0.2em] text-text-light font-medium mb-2">VISI, MISI & NILAI-NILAI</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">{VISI_MISI_NAMA[visiMisiIndex]}</h2>
            <div className="w-12 h-0.5 bg-primary mt-3" />
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4 md:px-6 z-10">
            <button
              onClick={handleVisiMisiPrev}
              className="rounded-full p-3 bg-white/80 hover:bg-white shadow-lg text-primary transition-all ring-1 ring-primary/20"
              aria-label="Sebelumnya"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleVisiMisiNext}
              className="rounded-full p-3 bg-white/80 hover:bg-white shadow-lg text-primary transition-all ring-1 ring-primary/20"
              aria-label="Selanjutnya"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="relative z-10 flex gap-2 pt-6 justify-center md:justify-start">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setVisiMisiIndex(idx)}
                className={`h-1 rounded-full transition-all ${
                  idx === visiMisiIndex ? "bg-primary w-8" : "bg-gray-300 w-2"
                }`}
                aria-label={VISI_MISI_NAMA[idx]}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="max-w-xl space-y-6 transition-opacity duration-300">
            {visiMisiIndex === 0 && (
              <div className="space-y-5 border-l-2 border-primary pl-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary">Visi</h3>
                <p className="text-text-light text-base md:text-lg leading-relaxed">
                  Menjadi program unggulan dalam pembinaan karakter, pengembangan potensi, dan pemberdayaan pelajar remaja Indonesia yang berorientasi pada terwujudnya Indonesia Emas 2045.
                </p>
              </div>
            )}
            {visiMisiIndex === 1 && (
              <div className="space-y-5 border-l-2 border-primary pl-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary">Misi</h3>
                <ul className="space-y-4 text-text-light text-base md:text-lg leading-relaxed list-disc list-inside">
                  {MISI_ITEMS.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {visiMisiIndex === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary">Nilai-Nilai Program</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {NILAI_ITEMS.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <h4 className="text-lg md:text-xl font-semibold text-text-dark">{item.title}</h4>
                      <p className="text-text-light text-base leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Founder - min-h-screen grid */}
      <section className="min-h-screen bg-surface grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[40vh] md:min-h-full flex items-center justify-center p-6 md:p-10">
          <div className="relative aspect-square w-full max-w-md rounded-xl overflow-hidden border border-primary/10 shadow-lg">
            <Image
              src="/images/people/founder-saputra.jpg"
              alt="Saputra - Founder DPRI"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="space-y-6 max-w-xl">
            <div className="space-y-3">
              <SectionLabel>SAMBUTAN FOUNDER</SectionLabel>
              <SectionTitle>Sambutan Founder</SectionTitle>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark">Saputra</h3>
            <p className="text-base md:text-lg font-semibold text-primary">Founder Duta Pelajar Remaja Indonesia</p>
            <p className="text-text-light text-base md:text-lg leading-relaxed">
              Kami berkomitmen membangun ekosistem pembinaan pelajar yang berkarakter, berprestasi, dan siap menjadi agen perubahan. Terima kasih atas dukungan semua pihak yang terus memperkuat misi kami menuju Indonesia Emas 2045.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Landasan - min-h-screen */}
      <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="max-w-xl space-y-6">
            <div className="space-y-3">
              <SectionLabel>LANDASAN OPERASIONAL</SectionLabel>
              <SectionTitle>Landasan Operasional</SectionTitle>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary">CV. Pesona Prestasi Official</h3>
            <p className="text-text-light text-base md:text-lg leading-relaxed">
              Program Duta Pelajar Remaja Indonesia diselenggarakan di bawah naungan CV. Pesona Prestasi Official. Organisasi ini berkomitmen untuk mengembangkan potensi terbaik remaja Indonesia melalui program kompetisi dan pengembangan karakter yang terstruktur, profesional, dan berorientasi pada pembinaan generasi muda yang unggul, kreatif, dan berkarakter.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Identitas - min-h-screen grid */}
      <section className="min-h-screen bg-surface grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="space-y-6 max-w-xl">
            <div className="space-y-3">
              <SectionLabel>IDENTITAS PENYELENGGARA</SectionLabel>
              <SectionTitle>Identitas Penyelenggara</SectionTitle>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary">CV. Pesona Prestasi Official</h3>
            <div className="space-y-5 text-text-dark">
              <div>
                <span className="font-semibold text-primary block text-sm md:text-base uppercase tracking-wider mb-2">Nomor Registrasi</span>
                <span className="text-base md:text-lg">AHU-0028774-AH.01.14 Tahun 2025</span>
              </div>
              <div>
                <span className="font-semibold text-primary block text-sm md:text-base uppercase tracking-wider mb-2">Alamat Kantor</span>
                <span className="text-base md:text-lg leading-relaxed">Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21, Sungai Jawi, Pontianak Kota</span>
              </div>
            </div>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-red-900 transition"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-6 md:px-10 lg:px-14 py-12 md:py-16">
          <Image
            src="/images/company-legality-qr.webp"
            alt="Legalitas Perusahaan - QR"
            width={200}
            height={200}
            className="rounded-lg border border-primary/10 shadow-sm"
          />
          <p className="text-sm text-text-light mt-4 text-center">Scan untuk verifikasi legalitas</p>
        </div>
      </section>
    </main>
  );
}

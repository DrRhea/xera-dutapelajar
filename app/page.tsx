import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Minimalist */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image + Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/muhammad-ravel-P5d3B3oZLqw-unsplash.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-tinkerbell-secondary/40"></div>
        </div>

        {/* Hero Content - Left aligned, minimal */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-white/80 text-xs uppercase tracking-[0.2em] mb-4">
                CV. Pesona Prestasi Official
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Remaja Hebat,<br />Cerdas dan Berkualitas
              </h1>
              <p className="text-white/90 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
                Wadah strategis bagi pelajar Indonesia untuk mengembangkan potensi, kepemimpinan, dan karakter—menuju Generasi Emas 2045.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="#daftar"
                  className="px-6 py-3.5 bg-tinkerbell-bg text-tinkerbell-secondary text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-white/95 transition"
                >
                  Daftar Sekarang
                </Link>
                <a
                  href="/documents/Pedoman-DPRI-2026.pdf"
                  download="Pedoman-DPRI-2026.pdf"
                  className="px-6 py-3.5 bg-transparent text-white text-sm font-semibold uppercase tracking-wider rounded-md border border-white/80 hover:bg-white/10 transition inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Unduh Pedoman
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Two column layout */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Left column - Text */}
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-tinkerbell-textSecondary">
                Tentang Kami
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tinkerbell-text leading-tight">
                Memberi Panggung bagi Talenta dan Prestasi Pelajar Indonesia
              </h2>
              <div className="space-y-6">
                <p className="text-tinkerbell-textSecondary leading-relaxed">
                  Duta Pelajar Remaja Indonesia adalah wadah strategis bagi pelajar SMP/MTs dan SMA/SMK/MA Sederajat untuk menyalurkan bakat, meningkatkan kepemimpinan, keterampilan sosial, serta rasa tanggung jawab. Program ini tidak hanya ajang kompetisi, tetapi proses pembinaan yang menekankan pengembangan kapasitas diri, penguatan karakter, dan kolaborasi positif.
                </p>
                <p className="text-tinkerbell-textSecondary leading-relaxed">
                  Kami berkomitmen menyiapkan generasi muda yang cerdas, kreatif, dan berintegritas—mampu menjadi teladan bagi rekan sebaya. Seluruh program diarahkan untuk mendukung visi Indonesia Emas 2045 dan mewujudkan generasi unggul yang siap berkontribusi bagi kemajuan negeri.
                </p>
              </div>
              <Link
                href="/tentang-kami"
                className="inline-block px-6 py-3.5 bg-tinkerbell-secondary text-white text-sm font-semibold uppercase tracking-wider rounded-md hover:opacity-90 transition"
              >
                Selengkapnya
              </Link>
            </div>

            {/* Right column - Image + Stats */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/assets/muhammad-ravel-P5d3B3oZLqw-unsplash.jpg"
                  alt="Duta Pelajar Remaja Indonesia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex gap-12 md:gap-16">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-tinkerbell-text">5</p>
                  <p className="text-xs uppercase tracking-wider text-tinkerbell-textSecondary mt-1">
                    Tahapan Program
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-tinkerbell-text">250+</p>
                  <p className="text-xs uppercase tracking-wider text-tinkerbell-textSecondary mt-1">
                    Target Peserta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Content Section - Horizontal Cards */}
      <section id="pendaftaran" className="py-24 md:py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-tinkerbell-secondary"></div>
            <p className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary">
              JALUR PENDAFTARAN
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tinkerbell-text leading-tight">
              Jalur Pendaftaran
            </h2>
            <p className="text-lg md:text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto leading-relaxed">
              Pilih jalur pendaftaran yang sesuai dengan Anda. Setiap jalur memiliki keunggulan dan kesempatan yang sama untuk menjadi Duta Pelajar Remaja Indonesia.
            </p>
          </div>
          
          {/* Jalur Pendaftaran Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Jalur Undangan */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Gambar Jalur Undangan</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs border border-gray-300 text-gray-700">Undangan</span>
                </div>
                <h3 className="text-2xl font-bold text-tinkerbell-text">Jalur Undangan</h3>
                <p className="text-tinkerbell-textSecondary">
                  Untuk alumni ajang resmi CV. Pesona Prestasi Official. Jalur khusus bagi mereka yang telah berpartisipasi dalam program resmi sebelumnya.
                </p>
              </div>
            </div>
            
            {/* Card 2 - Jalur Prestasi */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Gambar Jalur Prestasi</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs border border-gray-300 text-gray-700">Prestasi</span>
                </div>
                <h3 className="text-2xl font-bold text-tinkerbell-text">Jalur Prestasi</h3>
                <p className="text-tinkerbell-textSecondary">
                  Untuk pelajar berprestasi tingkat Kab/Kota hingga Internasional. Buktikan prestasi Anda dan raih kesempatan menjadi Duta Pelajar Remaja Indonesia.
                </p>
              </div>
            </div>
            
            {/* Card 3 - Jalur Mandiri */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Gambar Jalur Mandiri</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs border border-gray-300 text-gray-700">Mandiri</span>
                </div>
                <h3 className="text-2xl font-bold text-tinkerbell-text">Jalur Mandiri</h3>
                <p className="text-tinkerbell-textSecondary">
                  Pendaftaran terbuka untuk umum. Semua pelajar Indonesia berkesempatan untuk mendaftar dan mengikuti seleksi Duta Pelajar Remaja Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Content Section - Timeline Preview */}
      <section id="timeline" className="py-24 md:py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-tinkerbell-secondary"></div>
            <p className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary">
              TIMELINE PROGRAM
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tinkerbell-text leading-tight">
              Timeline Pelaksanaan Program 2025/2026
            </h2>
            <p className="text-lg md:text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto leading-relaxed">
              Rangkaian kegiatan dan tahapan program Duta Pelajar Remaja Indonesia sepanjang tahun 2025-2026
            </p>
          </div>
          
          {/* Timeline Cards - Clean Design */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Item 1 - Batch 3 Seleksi */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-tinkerbell-cta rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-cta uppercase tracking-wide mb-1">Januari - Februari 2025</div>
                      <h3 className="text-xl md:text-2xl font-bold text-tinkerbell-text">Proses Seleksi Batch 3</h3>
                    </div>
                    <span className="text-sm text-tinkerbell-textSecondary">Target: 250+ Peserta</span>
                  </div>
                  <p className="text-tinkerbell-textSecondary">Pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis</p>
                </div>
              </div>
            </div>

            {/* Item 2 - Batch 3 Pelaksanaan */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-tinkerbell-secondary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-secondary uppercase tracking-wide mb-1">Februari - April 2025</div>
                      <h3 className="text-xl md:text-2xl font-bold text-tinkerbell-text">Pelaksanaan Tugas Batch 3</h3>
                    </div>
                    <span className="text-sm text-tinkerbell-textSecondary">Program & Pembinaan</span>
                  </div>
                  <p className="text-tinkerbell-textSecondary">Jalankan program dan kegiatan pembinaan sebagai Duta Pelajar Remaja Indonesia</p>
                </div>
              </div>
            </div>

            {/* Item 3 - Batch 4 Seleksi */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-tinkerbell-cta rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-cta uppercase tracking-wide mb-1">April - Juni 2025</div>
                      <h3 className="text-xl md:text-2xl font-bold text-tinkerbell-text">Proses Seleksi Batch 4</h3>
                    </div>
                    <span className="text-sm text-tinkerbell-textSecondary">Target: 250+ Peserta</span>
                  </div>
                  <p className="text-tinkerbell-textSecondary">Pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis</p>
                </div>
              </div>
            </div>

            {/* Item 4 - Batch 4 Pelaksanaan */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-tinkerbell-secondary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-secondary uppercase tracking-wide mb-1">Juni - Agustus 2025</div>
                      <h3 className="text-xl md:text-2xl font-bold text-tinkerbell-text">Pelaksanaan Tugas Batch 4</h3>
                    </div>
                    <span className="text-sm text-tinkerbell-textSecondary">Program & Pembinaan</span>
                  </div>
                  <p className="text-tinkerbell-textSecondary">Jalankan program dan kegiatan pembinaan sebagai Duta Pelajar Remaja Indonesia</p>
                </div>
              </div>
            </div>

            {/* Item 5 - Persiapan 2026 */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-tinkerbell-cta rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-cta uppercase tracking-wide mb-1">Agustus - November 2025</div>
                      <h3 className="text-xl md:text-2xl font-bold text-tinkerbell-text">Persiapan Pemilihan 2026</h3>
                    </div>
                    <span className="text-sm text-tinkerbell-textSecondary">Sosialisasi & Promosi</span>
                  </div>
                  <p className="text-tinkerbell-textSecondary">Sosialisasi program, promosi, dan persiapan infrastruktur seleksi untuk tahun 2026</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link
              href="/timeline"
              className="inline-block px-6 py-3.5 bg-tinkerbell-cta text-white text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition rounded-md"
            >
              Lihat Timeline Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Fourth Content Section - Fasilitas */}
      <section id="fasilitas" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary">
              FASILITAS FINALIS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tinkerbell-text leading-tight">
              Fasilitas dan Manfaat untuk Finalis
            </h2>
            <p className="text-lg md:text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto leading-relaxed">
              Sebagai finalis, Anda akan mendapatkan berbagai fasilitas eksklusif dan pengalaman berharga
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-tinkerbell-bg rounded-lg p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Penginapan</h3>
                <p className="text-tinkerbell-textSecondary">
                  5 hari 4 malam penginapan selama karantina di Jakarta
                </p>
              </div>
            </div>
            
            <div className="bg-tinkerbell-bg rounded-lg p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Relasi Pelajar</h3>
                <p className="text-tinkerbell-textSecondary">
                  Jaringan pelajar dari berbagai provinsi di seluruh Indonesia
                </p>
              </div>
            </div>
            
            <div className="bg-tinkerbell-bg rounded-lg p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Sertifikat</h3>
                <p className="text-tinkerbell-textSecondary">
                  Sertifikat resmi dan merchandise eksklusif DPR Indonesia
                </p>
              </div>
            </div>
            
            <div className="bg-tinkerbell-bg rounded-lg p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Perlengkapan</h3>
                <p className="text-tinkerbell-textSecondary">
                  Kaos, pakaian forum, dan selempang resmi DPR Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-24 md:py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-tinkerbell-secondary"></div>
            <p className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary">
              AGENDA KUNJUNGAN
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tinkerbell-text leading-tight">
              Agenda Kunjungan Utama
            </h2>
            <p className="text-lg md:text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto leading-relaxed">
              Pengalaman karantina di Jakarta dengan kunjungan ke berbagai institusi penting untuk memperluas wawasan dan jaringan
            </p>
          </div>
          
          {/* Agenda Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Universitas Indonesia */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Gambar UI</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs border border-gray-300 text-gray-700">Kunjungan</span>
                </div>
                <h3 className="text-2xl font-bold text-tinkerbell-text">Universitas Indonesia</h3>
                <p className="text-tinkerbell-textSecondary">
                  Kunjungan ke kampus UI untuk pengalaman akademik dan memperluas wawasan pendidikan tinggi di Indonesia.
                </p>
              </div>
            </div>
            
            {/* Card 2 - MPR/DPR RI */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Gambar MPR/DPR</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs border border-gray-300 text-gray-700">Kunjungan</span>
                </div>
                <h3 className="text-2xl font-bold text-tinkerbell-text">MPR/DPR RI</h3>
                <p className="text-tinkerbell-textSecondary">
                  Kunjungan ke lembaga legislatif Indonesia untuk memahami proses demokrasi dan tata kelola negara.
                </p>
              </div>
            </div>
            
            {/* Card 3 - Kemenpora */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Gambar Kemenpora</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-2">
                  <span className="px-3 py-1 text-xs border border-gray-300 text-gray-700">Kunjungan</span>
                </div>
                <h3 className="text-2xl font-bold text-tinkerbell-text">Kemenpora</h3>
                <p className="text-tinkerbell-textSecondary">
                  Kunjungan ke Kementerian Pemuda dan Olahraga untuk memahami kebijakan dan program kepemudaan nasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section id="daftar" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tinkerbell-text leading-tight">
              Siap Menjadi Duta Pelajar Remaja Indonesia?
            </h2>
            <p className="text-lg md:text-xl text-tinkerbell-textSecondary max-w-2xl mx-auto leading-relaxed">
              Daftar sekarang dan wujudkan perubahan positif untuk Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#"
                className="px-8 py-4 bg-tinkerbell-cta text-white text-lg font-semibold hover:opacity-90 transition"
              >
                DAFTAR SEKARANG
              </Link>
              <a
                href="/documents/Pedoman-DPRI-2026.pdf"
                download="Pedoman-DPRI-2026.pdf"
                className="px-8 py-4 bg-white text-tinkerbell-text text-lg font-semibold hover:bg-gray-50 transition border-2 border-tinkerbell-cta inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                UNDUH PEDOMAN DPRI 2026 (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

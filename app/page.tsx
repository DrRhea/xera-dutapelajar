import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/muhammad-ravel-P5d3B3oZLqw-unsplash.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-tinkerbell-secondary/60"></div>
        </div>
        
        {/* Navigation */}
        <nav className="relative z-10 w-full bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo - Left */}
              <div className="flex items-center space-x-3">
                <Link href="#" className="flex items-center space-x-3">
                  <Image
                    src="/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png"
                    alt="DPR Indonesia Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                    priority
                  />
                  <span className="text-xl font-bold text-white hidden sm:block">
                    DPR Indonesia
                  </span>
                </Link>
              </div>
              
              {/* Navigation Links - Center */}
              <div className="hidden md:flex items-center space-x-10">
                <Link href="#pendaftaran" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                  Pendaftaran
                </Link>
                <Link href="/timeline" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                  Timeline
                </Link>
                <Link href="/fasilitas" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                  Fasilitas
                </Link>
                <Link href="/agenda" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                  Agenda
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white font-[var(--font-plus-jakarta-sans)]">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-5xl leading-tight">
                  Duta Pelajar Remaja Indonesia
                </h1>
                <h2 className="text-2xl md:text-3xl font-normal text-white">
                  2026
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Wujudkan Perubahan Positif, Jadilah Generasi Emas 2045
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <Link
                  href="#daftar"
                  className="px-8 py-4 bg-tinkerbell-cta text-white text-lg font-semibold hover:opacity-90 transition"
                >
                  DAFTAR SEKARANG
                </Link>
                <Link
                  href="#"
                  className="px-8 py-4 bg-white/20 text-white text-lg font-semibold hover:bg-white/30 transition border-2 border-white/50"
                >
                  UNDUH PETUNJUK TEKNIS (PDF)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-tinkerbell-text leading-tight text-center">
              Why Tinkerbell?
            </h2>
            
            <div className="space-y-6 text-lg text-tinkerbell-textSecondary leading-relaxed">
              <p>
                Melalui tema Tinkerbell di Pixie Hollow, Duta Pelajar Remaja Indonesia ingin mengajak generasi muda untuk tidak mudah merasa minder, tidak takut berbeda, dan tidak ragu untuk bermimpi besar. Setiap pelajar adalah "peri kecil" yang mampu menciptakan keajaiban, membawa perubahan nyata, dan menginspirasi sekitarnya dengan kreativitas, semangat, dan keunikan diri.
              </p>
              
              <p>
                Mari jadikan semangat Tinkerbell sebagai pengingat bahwa perbedaan bukan kelemahan, tetapi kekuatan. Dengan bekerja sama dan saling percaya, seperti para peri di Pixie Hollow, pelajar Indonesia dapat membangun bangsa dengan semangat kolaboratif dan kepedulian terhadap sesama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Content Section - Horizontal Cards */}
      <section id="pendaftaran" className="py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-tinkerbell-secondary mb-2"></div>
            <div className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary mb-2">
              JALUR PENDAFTARAN
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-tinkerbell-text leading-tight">
              Jalur Pendaftaran
            </h2>
            <p className="text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto leading-relaxed">
              Pilih jalur pendaftaran yang sesuai dengan Anda. Setiap jalur memiliki keunggulan dan kesempatan yang sama untuk menjadi Duta Pelajar Remaja Indonesia.
            </p>
          </div>
          
          {/* Jalur Pendaftaran Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Jalur Undangan */}
            <div className="bg-white border border-gray-200">
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
            <div className="bg-white border border-gray-200">
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
            <div className="bg-white border border-gray-200">
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
      <section id="timeline" className="py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-block w-16 h-0.5 bg-tinkerbell-secondary mb-2"></div>
            <div className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary mb-2">
              TIMELINE KRITIS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-tinkerbell-text leading-tight">
              Timeline Kritis
            </h2>
            <p className="text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto">
              Jangan lewatkan tanggal-tanggal penting dalam proses seleksi Duta Pelajar Remaja Indonesia
            </p>
          </div>
          
          {/* Timeline Preview - Vertical Loading Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Bar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-64">
                {/* Segment 1 - Pendaftaran (Emas) */}
                <div className="absolute top-0 w-full h-[33.33%] bg-tinkerbell-cta"></div>
                
                {/* Segment 2 - Wawancara (Merah Marun) */}
                <div className="absolute top-[33.33%] w-full h-[33.33%] bg-tinkerbell-secondary"></div>
                
                {/* Segment 3 - Pengumuman (Emas) */}
                <div className="absolute top-[66.66%] w-full h-[33.34%] bg-tinkerbell-cta"></div>
              </div>

              {/* Timeline Items */}
              <div className="relative space-y-16">
                {/* Item 1 - Pendaftaran Online */}
                <div className="relative flex items-center">
                  <div className="w-[45%] pr-8 text-right">
                    <div className="text-2xl font-bold text-tinkerbell-text">1 - 25 Desember 2025</div>
                    <h3 className="text-xl font-semibold text-tinkerbell-text">Pendaftaran Online</h3>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-tinkerbell-cta border-4 border-white flex items-center justify-center z-10">
                    <div className="w-6 h-6 bg-white"></div>
                  </div>
                  <div className="w-[45%]"></div>
                </div>

                {/* Item 2 - Tes Wawancara */}
                <div className="relative flex items-center">
                  <div className="w-[45%]"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-tinkerbell-secondary border-4 border-white flex items-center justify-center z-10">
                    <div className="w-6 h-6 bg-white"></div>
                  </div>
                  <div className="w-[45%] pl-8 text-left">
                    <div className="text-2xl font-bold text-tinkerbell-text">28 - 30 Desember 2025</div>
                    <h3 className="text-xl font-semibold text-tinkerbell-text">Tes Wawancara</h3>
                  </div>
                </div>

                {/* Item 3 - Pengumuman Finalis */}
                <div className="relative flex items-center">
                  <div className="w-[45%] pr-8 text-right">
                    <div className="text-2xl font-bold text-tinkerbell-text">31 Desember 2025</div>
                    <h3 className="text-xl font-semibold text-tinkerbell-text">Pengumuman Finalis</h3>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-tinkerbell-cta border-4 border-white flex items-center justify-center z-10">
                    <div className="w-6 h-6 bg-white"></div>
                  </div>
                  <div className="w-[45%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Content Section - Full Width */}
      <section id="fasilitas" className="py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-tinkerbell-text leading-tight">
              Fasilitas dan Manfaat untuk Finalis
            </h2>
            <p className="text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto">
              Sebagai finalis, Anda akan mendapatkan berbagai fasilitas eksklusif dan pengalaman berharga
            </p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Penginapan</h3>
                <p className="text-tinkerbell-textSecondary">
                  5 hari 4 malam penginapan selama karantina di Jakarta
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Relasi Pelajar</h3>
                <p className="text-tinkerbell-textSecondary">
                  Jaringan pelajar dari berbagai provinsi di seluruh Indonesia
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Sertifikat</h3>
                <p className="text-tinkerbell-textSecondary">
                  Sertifikat resmi dan merchandise eksklusif DPR Indonesia
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8">
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
      <section id="agenda" className="py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-tinkerbell-secondary mb-2"></div>
            <div className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary mb-2">
              AGENDA KUNJUNGAN
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-tinkerbell-text leading-tight">
              Agenda Kunjungan Utama
            </h2>
            <p className="text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto leading-relaxed">
              Pengalaman karantina di Jakarta dengan kunjungan ke berbagai institusi penting untuk memperluas wawasan dan jaringan
            </p>
          </div>
          
          {/* Agenda Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Universitas Indonesia */}
            <div className="bg-white border border-gray-200">
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
            <div className="bg-white border border-gray-200">
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
            <div className="bg-white border border-gray-200">
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
      <section id="daftar" className="py-32 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-tinkerbell-text">
              Siap Menjadi Duta Pelajar Remaja Indonesia?
            </h2>
            <p className="text-xl text-tinkerbell-textSecondary max-w-2xl mx-auto">
              Daftar sekarang dan wujudkan perubahan positif untuk Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="#"
                className="px-8 py-4 bg-tinkerbell-cta text-white text-lg font-semibold hover:opacity-90 transition"
              >
                DAFTAR SEKARANG
              </Link>
              <Link
                href="#"
                className="px-8 py-4 bg-white text-tinkerbell-text text-lg font-semibold hover:bg-gray-50 transition border-2 border-tinkerbell-cta"
              >
                UNDUH PETUNJUK TEKNIS LENGKAP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tinkerbell-secondary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Duta Pelajar Remaja Indonesia
              </h3>
              <p className="text-white/80">
                Wujudkan Perubahan Positif, Jadilah Generasi Emas 2045
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="#pendaftaran" className="hover:text-tinkerbell-cta transition">Pendaftaran</Link></li>
                <li><Link href="#timeline" className="hover:text-tinkerbell-cta transition">Timeline</Link></li>
                <li><Link href="/fasilitas" className="hover:text-tinkerbell-cta transition">Fasilitas</Link></li>
                <li><Link href="#agenda" className="hover:text-tinkerbell-cta transition">Agenda</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4 mb-4">
                <Link
                  href="https://instagram.com/dpr_indonesia.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tinkerbell-cta text-white flex items-center justify-center hover:opacity-90 transition"
                  aria-label="Instagram"
                >
                  <span className="text-sm">IG</span>
                </Link>
              </div>
              <p className="text-sm text-white/80">
                Instagram: @dpr_indonesia.official
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
            <p>&copy; 2025 Duta Pelajar Remaja Indonesia. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="#" className="hover:text-tinkerbell-cta transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-tinkerbell-cta transition">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

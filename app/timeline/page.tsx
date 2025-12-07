import Image from "next/image";
import Link from "next/link";

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-tinkerbell-bg">
      {/* Navigation */}
      <nav className="w-full bg-tinkerbell-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Left */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
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
              <Link href="/tentang-kami" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                Tentang Kami
              </Link>
              <Link href="/timeline" className="text-tinkerbell-cta transition font-medium text-base">
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

      {/* Hero Section */}
      <section className="py-20 bg-tinkerbell-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-0.5 bg-white/30"></div>
              <div className="text-sm uppercase tracking-wider text-white/80">TIMELINE KRITIS</div>
              <div className="flex-1 h-0.5 bg-white/30"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Timeline Kritis
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Jangan lewatkan tanggal-tanggal penting dalam proses seleksi Duta Pelajar Remaja Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Visual Section */}
      <section className="py-20 bg-tinkerbell-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-tinkerbell-text mb-4">
              Alur Proses Seleksi
            </h2>
            <p className="text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto">
              Visualisasi timeline proses seleksi dari awal hingga akhir
            </p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Bar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full">
              {/* Segment 1 - Pendaftaran (Emas) */}
              <div className="absolute top-0 w-full h-[16.66%] bg-tinkerbell-cta"></div>
              
              {/* Segment 2 - Seleksi Berkas (Merah Marun) */}
              <div className="absolute top-[16.66%] w-full h-[16.66%] bg-tinkerbell-secondary"></div>
              
              {/* Segment 3 - Pengumuman Tahap 1 (Emas) */}
              <div className="absolute top-[33.33%] w-full h-[16.66%] bg-tinkerbell-cta"></div>
              
              {/* Segment 4 - Wawancara (Merah Marun) */}
              <div className="absolute top-[50%] w-full h-[16.66%] bg-tinkerbell-secondary"></div>
              
              {/* Segment 5 - Pengumuman Finalis (Emas) */}
              <div className="absolute top-[66.66%] w-full h-[16.66%] bg-tinkerbell-cta"></div>
              
              {/* Segment 6 - Pendaftaran Ulang (Merah Marun) */}
              <div className="absolute top-[83.33%] w-full h-[16.67%] bg-tinkerbell-secondary"></div>
            </div>

            {/* Timeline Items */}
            <div className="relative space-y-24">
              {/* Item 1 - Pendaftaran Online */}
              <div className="relative flex items-center min-h-[140px]">
                <div className="w-[45%] pr-12 text-right">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">1 – 25 Desember 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Pendaftaran Online</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md ml-auto">
                      Periode pendaftaran terbuka untuk semua jalur pendaftaran.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-cta border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <div className="w-7 h-7 bg-white"></div>
                </div>
                <div className="w-[45%]"></div>
              </div>

              {/* Item 2 - Seleksi Berkas */}
              <div className="relative flex items-center min-h-[140px]">
                <div className="w-[45%]"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-secondary border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <div className="w-7 h-7 bg-white"></div>
                </div>
                <div className="w-[45%] pl-12 text-left">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">26 Desember 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Seleksi Berkas</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md">
                      Proses verifikasi dan seleksi dokumen pendaftaran.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 - Pengumuman Tahap 1 */}
              <div className="relative flex items-center min-h-[140px]">
                <div className="w-[45%] pr-12 text-right">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">27 Desember 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Pengumuman Tahap 1</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md ml-auto">
                      Pengumuman peserta yang lolos seleksi berkas.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-cta border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <div className="w-7 h-7 bg-white"></div>
                </div>
                <div className="w-[45%]"></div>
              </div>

              {/* Item 4 - Tes Wawancara */}
              <div className="relative flex items-center min-h-[140px]">
                <div className="w-[45%]"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-secondary border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <div className="w-7 h-7 bg-white"></div>
                </div>
                <div className="w-[45%] pl-12 text-left">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">28 – 30 Desember 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Tes Wawancara</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md">
                      Tahap seleksi melalui wawancara untuk menilai kemampuan peserta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 - Pengumuman Finalis */}
              <div className="relative flex items-center min-h-[140px]">
                <div className="w-[45%] pr-12 text-right">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">31 Desember 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Pengumuman Finalis</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md ml-auto">
                      Pengumuman resmi finalis yang berhasil lolos seleksi.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-cta border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <div className="w-7 h-7 bg-white"></div>
                </div>
                <div className="w-[45%]"></div>
              </div>

              {/* Item 6 - Pendaftaran Ulang */}
              <div className="relative flex items-center min-h-[140px]">
                <div className="w-[45%]"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-secondary border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <div className="w-7 h-7 bg-white"></div>
                </div>
                <div className="w-[45%] pl-12 text-left">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">1 – 5 Januari 2026</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Pendaftaran Ulang</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md">
                      Proses pendaftaran ulang untuk finalis yang terpilih.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Table Section */}
      <section className="py-20 bg-tinkerbell-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-tinkerbell-text mb-4">
              TIMELINE PENDAFTARAN
            </h2>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-tinkerbell-text">
              <thead>
                <tr className="bg-tinkerbell-secondary">
                  <th className="border-2 border-tinkerbell-text px-6 py-4 text-left font-bold text-white">No.</th>
                  <th className="border-2 border-tinkerbell-text px-6 py-4 text-left font-bold text-white">Tahapan</th>
                  <th className="border-2 border-tinkerbell-text px-6 py-4 text-left font-bold text-white">Waktu</th>
                  <th className="border-2 border-tinkerbell-text px-6 py-4 text-left font-bold text-white">Pelaksanaan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">1.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Pendaftaran Online</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">1 – 25 Desember 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Online</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">2.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Seleksi Berkas</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">26 Desember 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Online</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">3.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Pengumuman Tahap 1</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">27 Desember 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Online</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">4.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Tes Wawancara</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">28 – 30 Desember 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Online</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">5.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Pengumuman Finalis</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">31 Desember 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Online</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">6.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Pendaftaran Ulang</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">1 – 5 Januari 2026</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">Online</td>
                </tr>
              </tbody>
            </table>
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
                <li><Link href="/tentang-kami" className="hover:text-tinkerbell-cta transition">Tentang Kami</Link></li>
                <li><Link href="/timeline" className="hover:text-tinkerbell-cta transition">Timeline</Link></li>
                <li><Link href="/fasilitas" className="hover:text-tinkerbell-cta transition">Fasilitas</Link></li>
                <li><Link href="/agenda" className="hover:text-tinkerbell-cta transition">Agenda</Link></li>
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


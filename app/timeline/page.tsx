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
              Timeline Pelaksanaan Program 2025/2026
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Rangkaian kegiatan dan tahapan program Duta Pelajar Remaja Indonesia sepanjang tahun 2025-2026
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Visual Section */}
      <section className="py-20 bg-tinkerbell-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-tinkerbell-text mb-4">
              Alur Program 2025/2026
            </h2>
            <p className="text-xl text-tinkerbell-textSecondary max-w-3xl mx-auto">
              Visualisasi timeline pelaksanaan program Duta Pelajar Remaja Indonesia sepanjang tahun 2025-2026
            </p>
          </div>

          {/* Timeline Cards - Clean Design */}
          <div className="space-y-8">
            {/* Item 1 - Batch 3 Seleksi */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-tinkerbell-cta rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-l-4 border-tinkerbell-cta hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-cta uppercase tracking-wide mb-2">Januari - Februari 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-tinkerbell-text mb-2">Proses Seleksi Batch 3</h3>
                    </div>
                    <div className="px-5 py-2.5 bg-tinkerbell-cta/10 rounded-full">
                      <span className="text-base font-semibold text-tinkerbell-text">Target: 250+ Peserta</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed mb-4">
                    Proses seleksi pemilihan Duta Pelajar Remaja Indonesia Batch 3. Tahapan meliputi pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis.
                  </p>
                  <div className="mt-6 p-5 bg-tinkerbell-cta/5 rounded-lg border-l-4 border-tinkerbell-cta">
                    <p className="text-sm font-semibold text-tinkerbell-text mb-2">Target Capaian:</p>
                    <p className="text-sm text-tinkerbell-textSecondary">250+ Peserta Mendaftar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 - Batch 3 Pelaksanaan */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-tinkerbell-secondary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-l-4 border-tinkerbell-secondary hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-secondary uppercase tracking-wide mb-2">Februari - April 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-tinkerbell-text mb-2">Pelaksanaan Tugas Batch 3</h3>
                    </div>
                    <div className="px-5 py-2.5 bg-tinkerbell-secondary/10 rounded-full">
                      <span className="text-base font-semibold text-tinkerbell-text">Program & Pembinaan</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed mb-4">
                    Pelaksanaan tugas sebagai Duta Pelajar Remaja Indonesia Batch 3. Finalis akan menjalankan berbagai program dan kegiatan pembinaan.
                  </p>
                  <div className="mt-6 p-5 bg-tinkerbell-secondary/5 rounded-lg border-l-4 border-tinkerbell-secondary">
                    <p className="text-sm font-semibold text-tinkerbell-text mb-2">Target Capaian:</p>
                    <ul className="text-sm text-tinkerbell-textSecondary space-y-1.5 list-disc list-inside">
                      <li>Mampu menjadi teladan bagi pelajar di Indonesia</li>
                      <li>Mampu memberikan konten edukatif kepada remaja Indonesia</li>
                      <li>Mampu melakukan penyuluhan melalui sosialisasi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 - Batch 4 Seleksi */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-tinkerbell-cta rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-l-4 border-tinkerbell-cta hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-cta uppercase tracking-wide mb-2">April - Juni 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-tinkerbell-text mb-2">Proses Seleksi Batch 4</h3>
                    </div>
                    <div className="px-5 py-2.5 bg-tinkerbell-cta/10 rounded-full">
                      <span className="text-base font-semibold text-tinkerbell-text">Target: 250+ Peserta</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed mb-4">
                    Proses seleksi pemilihan Duta Pelajar Remaja Indonesia Batch 4. Tahapan meliputi pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis.
                  </p>
                  <div className="mt-6 p-5 bg-tinkerbell-cta/5 rounded-lg border-l-4 border-tinkerbell-cta">
                    <p className="text-sm font-semibold text-tinkerbell-text mb-2">Target Capaian:</p>
                    <p className="text-sm text-tinkerbell-textSecondary">250+ Peserta Mendaftar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4 - Batch 4 Pelaksanaan */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-tinkerbell-secondary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-l-4 border-tinkerbell-secondary hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-secondary uppercase tracking-wide mb-2">Juni - Agustus 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-tinkerbell-text mb-2">Pelaksanaan Tugas Batch 4</h3>
                    </div>
                    <div className="px-5 py-2.5 bg-tinkerbell-secondary/10 rounded-full">
                      <span className="text-base font-semibold text-tinkerbell-text">Program & Pembinaan</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed mb-4">
                    Pelaksanaan tugas sebagai Duta Pelajar Remaja Indonesia Batch 4. Finalis akan menjalankan berbagai program dan kegiatan pembinaan.
                  </p>
                  <div className="mt-6 p-5 bg-tinkerbell-secondary/5 rounded-lg border-l-4 border-tinkerbell-secondary">
                    <p className="text-sm font-semibold text-tinkerbell-text mb-2">Target Capaian:</p>
                    <ul className="text-sm text-tinkerbell-textSecondary space-y-1.5 list-disc list-inside">
                      <li>Mampu menjadi teladan bagi pelajar di Indonesia</li>
                      <li>Mampu memberikan konten edukatif kepada remaja Indonesia</li>
                      <li>Mampu melakukan penyuluhan melalui sosialisasi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 5 - Persiapan 2026 */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-tinkerbell-cta rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">5</span>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-l-4 border-tinkerbell-cta hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-tinkerbell-cta uppercase tracking-wide mb-2">Agustus - November 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-tinkerbell-text mb-2">Persiapan Pemilihan 2026</h3>
                    </div>
                    <div className="px-5 py-2.5 bg-tinkerbell-cta/10 rounded-full">
                      <span className="text-base font-semibold text-tinkerbell-text">Sosialisasi & Promosi</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed mb-4">
                    Persiapan pemilihan Duta Pelajar Remaja Indonesia Tahun 2026. Fokus pada sosialisasi, promosi program, dan persiapan infrastruktur seleksi.
                  </p>
                  <div className="mt-6 p-5 bg-tinkerbell-cta/5 rounded-lg border-l-4 border-tinkerbell-cta">
                    <p className="text-sm font-semibold text-tinkerbell-text mb-2">Target Capaian:</p>
                    <p className="text-sm text-tinkerbell-textSecondary">Mampu mengajak pelajar berprestasi dan berpotensi untuk mengikuti pemilihan</p>
                  </div>
                </div>
              </div>
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
              <p className="text-white/80 mb-2">
                "Remaja hebat, cerdas dan berkualitas"
              </p>
              <p className="text-white/80 text-sm">
                Program di bawah naungan CV. Pesona Prestasi Official
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
              <h4 className="text-lg font-semibold text-white mb-4">Kontak Kami</h4>
              <div className="space-y-3 text-white/80">
                <p className="text-sm">
                  <span className="font-semibold">Telepon:</span> +62 821-4853-8720
                </p>
                <div className="flex space-x-4 mb-2">
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
                <p className="text-sm">
                  <span className="font-semibold">Instagram:</span> @dpr_indonesia.official
                </p>
              </div>
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



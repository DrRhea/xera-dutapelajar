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

          <div className="relative">
            {/* Vertical Timeline Bar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full">
              {/* Segment 1 - Batch 3 Seleksi (Emas) */}
              <div className="absolute top-0 w-full h-[20%] bg-tinkerbell-cta"></div>
              
              {/* Segment 2 - Batch 3 Pelaksanaan (Merah Marun) */}
              <div className="absolute top-[20%] w-full h-[20%] bg-tinkerbell-secondary"></div>
              
              {/* Segment 3 - Batch 4 Seleksi (Emas) */}
              <div className="absolute top-[40%] w-full h-[20%] bg-tinkerbell-cta"></div>
              
              {/* Segment 4 - Batch 4 Pelaksanaan (Merah Marun) */}
              <div className="absolute top-[60%] w-full h-[20%] bg-tinkerbell-secondary"></div>
              
              {/* Segment 5 - Persiapan 2026 (Emas) */}
              <div className="absolute top-[80%] w-full h-[20%] bg-tinkerbell-cta"></div>
            </div>

            {/* Timeline Items */}
            <div className="relative space-y-24">
              {/* Item 1 - Batch 3 Seleksi */}
              <div className="relative flex items-center min-h-[180px]">
                <div className="w-[45%] pr-12 text-right">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">Januari - Februari 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Proses Seleksi Batch 3</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md ml-auto">
                      Proses seleksi pemilihan Duta Pelajar Remaja Indonesia Batch 3. Tahapan meliputi pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis.
                    </p>
                    <div className="mt-4 p-4 bg-tinkerbell-cta/10 border-l-4 border-tinkerbell-cta">
                      <p className="text-sm font-semibold text-tinkerbell-text">Target Capaian:</p>
                      <p className="text-sm text-tinkerbell-textSecondary">250+ Peserta Mendaftar</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-cta border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="w-[45%]"></div>
              </div>

              {/* Item 2 - Batch 3 Pelaksanaan */}
              <div className="relative flex items-center min-h-[180px]">
                <div className="w-[45%]"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-secondary border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="w-[45%] pl-12 text-left">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">Februari - April 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Pelaksanaan Tugas Batch 3</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md">
                      Pelaksanaan tugas sebagai Duta Pelajar Remaja Indonesia Batch 3. Finalis akan menjalankan berbagai program dan kegiatan pembinaan.
                    </p>
                    <div className="mt-4 p-4 bg-tinkerbell-secondary/10 border-l-4 border-tinkerbell-secondary">
                      <p className="text-sm font-semibold text-tinkerbell-text">Target Capaian:</p>
                      <ul className="text-sm text-tinkerbell-textSecondary space-y-1 mt-2 list-disc list-inside">
                        <li>Mampu menjadi teladan bagi pelajar di Indonesia</li>
                        <li>Mampu memberikan konten edukatif kepada remaja Indonesia</li>
                        <li>Mampu melakukan penyuluhan melalui sosialisasi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 - Batch 4 Seleksi */}
              <div className="relative flex items-center min-h-[180px]">
                <div className="w-[45%] pr-12 text-right">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">April - Juni 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Proses Seleksi Batch 4</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md ml-auto">
                      Proses seleksi pemilihan Duta Pelajar Remaja Indonesia Batch 4. Tahapan meliputi pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis.
                    </p>
                    <div className="mt-4 p-4 bg-tinkerbell-cta/10 border-l-4 border-tinkerbell-cta">
                      <p className="text-sm font-semibold text-tinkerbell-text">Target Capaian:</p>
                      <p className="text-sm text-tinkerbell-textSecondary">250+ Peserta Mendaftar</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-cta border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="w-[45%]"></div>
              </div>

              {/* Item 4 - Batch 4 Pelaksanaan */}
              <div className="relative flex items-center min-h-[180px]">
                <div className="w-[45%]"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-secondary border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div className="w-[45%] pl-12 text-left">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">Juni - Agustus 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Pelaksanaan Tugas Batch 4</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md">
                      Pelaksanaan tugas sebagai Duta Pelajar Remaja Indonesia Batch 4. Finalis akan menjalankan berbagai program dan kegiatan pembinaan.
                    </p>
                    <div className="mt-4 p-4 bg-tinkerbell-secondary/10 border-l-4 border-tinkerbell-secondary">
                      <p className="text-sm font-semibold text-tinkerbell-text">Target Capaian:</p>
                      <ul className="text-sm text-tinkerbell-textSecondary space-y-1 mt-2 list-disc list-inside">
                        <li>Mampu menjadi teladan bagi pelajar di Indonesia</li>
                        <li>Mampu memberikan konten edukatif kepada remaja Indonesia</li>
                        <li>Mampu melakukan penyuluhan melalui sosialisasi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 5 - Persiapan 2026 */}
              <div className="relative flex items-center min-h-[180px]">
                <div className="w-[45%] pr-12 text-right">
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-tinkerbell-text">Agustus - November 2025</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-tinkerbell-text">Persiapan Pemilihan 2026</h3>
                    <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed max-w-md ml-auto">
                      Persiapan pemilihan Duta Pelajar Remaja Indonesia Tahun 2026. Fokus pada sosialisasi, promosi program, dan persiapan infrastruktur seleksi.
                    </p>
                    <div className="mt-4 p-4 bg-tinkerbell-cta/10 border-l-4 border-tinkerbell-cta">
                      <p className="text-sm font-semibold text-tinkerbell-text">Target Capaian:</p>
                      <p className="text-sm text-tinkerbell-textSecondary">Mampu mengajak pelajar berprestasi dan berpotensi untuk mengikuti pemilihan</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-tinkerbell-cta border-4 border-white flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div className="w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Table Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-tinkerbell-text mb-4">
              TIMELINE PELAKSANAAN PROGRAM 2025/2026
            </h2>
            <p className="text-lg text-tinkerbell-textSecondary max-w-3xl mx-auto">
              Rincian lengkap periode, fokus kegiatan, dan target capaian program
            </p>
          </div>
          
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-tinkerbell-text">
              <thead>
                <tr className="bg-tinkerbell-secondary">
                  <th className="border-2 border-tinkerbell-text px-6 py-4 text-left font-bold text-white">No.</th>
                  <th className="border-2 border-tinkerbell-text px-6 py-4 text-left font-bold text-white">Periode</th>
                  <th className="border-2 border-tinkerbell-text px-6 py-4 text-left font-bold text-white">Fokus Kegiatan</th>
                  <th className="border-2 border-tinkerbell-text px-6 py-4 text-left font-bold text-white">Target Capaian</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold text-center">1.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">Januari - Februari 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    Proses Seleksi Pemilihan Duta Pelajar Remaja Indonesia Batch 3
                  </td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    <ul className="list-disc list-inside space-y-1">
                      <li>250+ Peserta Mendaftar</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold text-center">2.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">Februari - April 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    Pelaksanaan Tugas sebagai Duta Pelajar Remaja Indonesia Batch 3
                  </td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mampu menjadi teladan bagi pelajar di Indonesia</li>
                      <li>Mampu memberikan konten edukatif kepada remaja Indonesia</li>
                      <li>Mampu melakukan penyuluhan melalui sosialisasi</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold text-center">3.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">April - Juni 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    Proses Seleksi Pemilihan Duta Pelajar Remaja Indonesia Batch 4
                  </td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    <ul className="list-disc list-inside space-y-1">
                      <li>250+ Peserta Mendaftar</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold text-center">4.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">Juni - Agustus 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    Pelaksanaan Tugas sebagai Duta Pelajar Remaja Indonesia Batch 4
                  </td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mampu menjadi teladan bagi pelajar di Indonesia</li>
                      <li>Mampu memberikan konten edukatif kepada remaja Indonesia</li>
                      <li>Mampu melakukan penyuluhan melalui sosialisasi</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold text-center">5.</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text font-semibold">Agustus - November 2025</td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    Persiapan Pemilihan Duta Pelajar Remaja Indonesia Tahun 2026
                  </td>
                  <td className="border-2 border-tinkerbell-text px-6 py-4 text-tinkerbell-text">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mampu mengajak pelajar berprestasi dan berpotensi untuk mengikuti pemilihan</li>
                    </ul>
                  </td>
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



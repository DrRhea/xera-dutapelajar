import Image from "next/image";
import Link from "next/link";

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Alur Program 2025/2026
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Visualisasi timeline pelaksanaan program Duta Pelajar Remaja Indonesia sepanjang tahun 2025-2026
            </p>
          </div>

          {/* Timeline Cards - Clean Design */}
          <div className="space-y-8">
            {/* Item 1 - Batch 3 Seleksi */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="flex-1 bg-surface border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Januari - Februari 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">Proses Seleksi Batch 3</h3>
                    </div>
                    <span className="text-sm text-text-light">Target: 250+ Peserta</span>
                  </div>
                  <p className="text-base md:text-lg text-text-light leading-relaxed mb-4">
                    Proses seleksi pemilihan Duta Pelajar Remaja Indonesia Batch 3. Tahapan meliputi pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis.
                  </p>
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-text-dark mb-2">Target Capaian:</p>
                    <p className="text-sm text-text-light">250+ Peserta Mendaftar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 - Batch 3 Pelaksanaan */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="flex-1 bg-surface border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Februari - April 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">Pelaksanaan Tugas Batch 3</h3>
                    </div>
                    <span className="text-sm text-text-light">Program & Pembinaan</span>
                  </div>
                  <p className="text-base md:text-lg text-text-light leading-relaxed mb-4">
                    Pelaksanaan tugas sebagai Duta Pelajar Remaja Indonesia Batch 3. Finalis akan menjalankan berbagai program dan kegiatan pembinaan.
                  </p>
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-text-dark mb-2">Target Capaian:</p>
                    <ul className="text-sm text-text-light space-y-1.5 list-disc list-inside">
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
                <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="flex-1 bg-surface border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">April - Juni 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">Proses Seleksi Batch 4</h3>
                    </div>
                    <span className="text-sm text-text-light">Target: 250+ Peserta</span>
                  </div>
                  <p className="text-base md:text-lg text-text-light leading-relaxed mb-4">
                    Proses seleksi pemilihan Duta Pelajar Remaja Indonesia Batch 4. Tahapan meliputi pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis.
                  </p>
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-text-dark mb-2">Target Capaian:</p>
                    <p className="text-sm text-text-light">250+ Peserta Mendaftar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4 - Batch 4 Pelaksanaan */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <div className="flex-1 bg-surface border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Juni - Agustus 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">Pelaksanaan Tugas Batch 4</h3>
                    </div>
                    <span className="text-sm text-text-light">Program & Pembinaan</span>
                  </div>
                  <p className="text-base md:text-lg text-text-light leading-relaxed mb-4">
                    Pelaksanaan tugas sebagai Duta Pelajar Remaja Indonesia Batch 4. Finalis akan menjalankan berbagai program dan kegiatan pembinaan.
                  </p>
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-text-dark mb-2">Target Capaian:</p>
                    <ul className="text-sm text-text-light space-y-1.5 list-disc list-inside">
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
                <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-2xl">5</span>
                </div>
                <div className="flex-1 bg-surface border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Agustus - November 2025</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-2">Persiapan Pemilihan 2026</h3>
                    </div>
                    <span className="text-sm text-text-light">Sosialisasi & Promosi</span>
                  </div>
                  <p className="text-base md:text-lg text-text-light leading-relaxed mb-4">
                    Persiapan pemilihan Duta Pelajar Remaja Indonesia Tahun 2026. Fokus pada sosialisasi, promosi program, dan persiapan infrastruktur seleksi.
                  </p>
                  <div className="mt-6 p-5 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-text-dark mb-2">Target Capaian:</p>
                    <p className="text-sm text-text-light">Mampu mengajak pelajar berprestasi dan berpotensi untuk mengikuti pemilihan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}



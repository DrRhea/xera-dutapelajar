import Image from "next/image";
import Link from "next/link";
import PesonaLogo from "../assets/CV. Pesona Prestasi Official.jpg";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden z-10 bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/muhammad-ravel-P5d3B3oZLqw-unsplash.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80" />
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-4">
                CV. Pesona Prestasi Official
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
                  className="px-6 py-3.5 bg-white text-primary text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-gray-100 transition shadow-soft"
                >
                  Daftar Sekarang
                </Link>
                <a
                  href="/documents/Pedoman-DPRI-2026.pdf"
                  download="Pedoman-DPRI-2026.pdf"
                  className="px-6 py-3.5 bg-transparent text-white text-sm font-semibold uppercase tracking-wider rounded-lg border border-white/30 hover:bg-white/10 transition inline-flex items-center gap-2"
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

      {/* Penyelenggara Resmi */}
      <section className="relative z-10 py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface border border-gray-200 rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 md:w-28 md:h-28 relative flex-shrink-0">
              <Image
                src={PesonaLogo}
                alt="CV. Pesona Prestasi Official"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-text-light">PENYELENGGARA RESMI</p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">CV. Pesona Prestasi Official</h3>
              <p className="text-text-light">Nomor Induk Berusaha (NIB): <span className="font-semibold text-text-dark">2003250056944</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Tentang Kami
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
                Memberi Panggung bagi Talenta dan Prestasi Pelajar Indonesia
              </h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>
                  Duta Pelajar Remaja Indonesia adalah wadah strategis bagi pelajar SMP/MTs dan SMA/SMK/MA Sederajat untuk menyalurkan bakat, meningkatkan kepemimpinan, keterampilan sosial, serta rasa tanggung jawab.
                </p>
                <p>
                  Kami berkomitmen menyiapkan generasi muda yang cerdas, kreatif, dan berintegritas—mampu menjadi teladan bagi rekan sebaya. Seluruh program diarahkan untuk mendukung visi Indonesia Emas 2045.
                </p>
              </div>
              <Link
                href="/tentang-kami"
                className="inline-block px-6 py-3.5 bg-primary text-white text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-red-900 transition shadow-soft"
              >
                Selengkapnya
              </Link>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 shadow-soft">
                <Image
                  src="/assets/muhammad-ravel-P5d3B3oZLqw-unsplash.jpg"
                  alt="Duta Pelajar Remaja Indonesia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex gap-12 md:gap-16">
                <div className="bg-surface rounded-lg p-6 flex-1 border border-gray-200 shadow-soft">
                  <p className="text-4xl md:text-5xl font-bold text-primary">5</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                    Tahapan Program
                  </p>
                </div>
                <div className="bg-surface rounded-lg p-6 flex-1 border border-gray-200 shadow-soft">
                  <p className="text-4xl md:text-5xl font-bold text-primary">250+</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                    Target Peserta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jalur Pendaftaran */}
      <section id="pendaftaran" className="relative z-10 py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">
              JALUR PENDAFTARAN
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Jalur Pendaftaran
            </h2>
            <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Pilih jalur pendaftaran yang sesuai dengan Anda. Setiap jalur memiliki keunggulan dan kesempatan yang sama untuk menjadi Duta Pelajar Remaja Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-6">
                <span className="text-gray-400 text-sm">Gambar Jalur Undangan</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-primary mb-2">Undangan</span>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Jalur Undangan</h3>
              <p className="text-text-light text-sm leading-relaxed flex-1">
                Untuk alumni ajang resmi CV. Pesona Prestasi Official. Jalur khusus bagi mereka yang telah berpartisipasi dalam program resmi sebelumnya.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-6">
                <span className="text-gray-400 text-sm">Gambar Jalur Prestasi</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-primary mb-2">Prestasi</span>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Jalur Prestasi</h3>
              <p className="text-text-light text-sm leading-relaxed flex-1">
                Untuk pelajar berprestasi tingkat Kab/Kota hingga Internasional. Buktikan prestasi Anda dan raih kesempatan menjadi Duta Pelajar Remaja Indonesia.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-6">
                <span className="text-gray-400 text-sm">Gambar Jalur Mandiri</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-primary mb-2">Mandiri</span>
              <h3 className="text-2xl font-bold text-text-dark mb-4">Jalur Mandiri</h3>
              <p className="text-text-light text-sm leading-relaxed flex-1">
                Pendaftaran terbuka untuk umum. Semua pelajar Indonesia berkesempatan untuk mendaftar dan mengikuti seleksi Duta Pelajar Remaja Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section id="timeline" className="relative z-10 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">
              TIMELINE PROGRAM
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Timeline Pelaksanaan Program 2025/2026
            </h2>
            <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Rangkaian kegiatan dan tahapan program Duta Pelajar Remaja Indonesia sepanjang tahun 2025-2026
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { num: "1", period: "Januari - Februari 2025", title: "Proses Seleksi Batch 3", tag: "Target: 250+ Peserta", desc: "Pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis" },
              { num: "2", period: "Februari - April 2025", title: "Pelaksanaan Tugas Batch 3", tag: "Program & Pembinaan", desc: "Jalankan program dan kegiatan pembinaan sebagai Duta Pelajar Remaja Indonesia" },
              { num: "3", period: "April - Juni 2025", title: "Proses Seleksi Batch 4", tag: "Target: 250+ Peserta", desc: "Pendaftaran online, seleksi berkas, wawancara, dan pengumuman finalis" },
              { num: "4", period: "Juni - Agustus 2025", title: "Pelaksanaan Tugas Batch 4", tag: "Program & Pembinaan", desc: "Jalankan program dan kegiatan pembinaan sebagai Duta Pelajar Remaja Indonesia" },
              { num: "5", period: "Agustus - November 2025", title: "Persiapan Pemilihan 2026", tag: "Sosialisasi & Promosi", desc: "Sosialisasi program, promosi, dan persiapan infrastruktur seleksi untuk tahun 2026" },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center shadow-soft">
                  {item.num}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">{item.period}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-text-dark">{item.title}</h3>
                    </div>
                    <span className="text-sm text-text-light">{item.tag}</span>
                  </div>
                  <p className="text-text-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/timeline"
              className="inline-block px-6 py-3.5 bg-primary text-white text-sm font-semibold uppercase tracking-wider hover:bg-red-900 transition rounded-lg shadow-soft"
            >
              Lihat Timeline Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="relative z-10 py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm uppercase tracking-wider text-text-light">
              FASILITAS FINALIS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Fasilitas dan Manfaat untuk Finalis
            </h2>
            <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Sebagai finalis, Anda akan mendapatkan berbagai fasilitas eksklusif dan pengalaman berharga
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Penginapan", desc: "5 hari 4 malam penginapan selama karantina di Jakarta" },
              { title: "Relasi Pelajar", desc: "Jaringan pelajar dari berbagai provinsi di seluruh Indonesia" },
              { title: "Sertifikat", desc: "Sertifikat resmi dan merchandise eksklusif DPR Indonesia" },
              { title: "Perlengkapan", desc: "Kaos, pakaian forum, dan selempang resmi DPR Indonesia" },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-8 flex flex-col items-center text-center space-y-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-text-dark">{f.title}</h3>
                <p className="text-text-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="relative z-10 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">
              AGENDA KUNJUNGAN
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Agenda Kunjungan Utama
            </h2>
            <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              Pengalaman karantina di Jakarta dengan kunjungan ke berbagai institusi penting untuk memperluas wawasan dan jaringan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Universitas Indonesia", desc: "Kunjungan ke kampus UI untuk pengalaman akademik dan memperluas wawasan pendidikan tinggi di Indonesia." },
              { title: "MPR/DPR RI", desc: "Kunjungan ke lembaga legislatif Indonesia untuk memahami proses demokrasi dan tata kelola negara." },
              { title: "Kemenpora", desc: "Kunjungan ke Kementerian Pemuda dan Olahraga untuk memahami kebijakan dan program kepemudaan nasional." },
            ].map((a) => (
              <div key={a.title} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-gray-100 border-b border-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Gambar</span>
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-xs uppercase tracking-wider text-primary">Kunjungan</span>
                  <h3 className="text-2xl font-bold text-text-dark">{a.title}</h3>
                  <p className="text-text-light text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="daftar" className="relative z-10 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-surface rounded-lg p-12 md:p-16 max-w-4xl mx-auto space-y-8 border border-gray-200 shadow-soft">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Siap Menjadi Duta Pelajar Remaja Indonesia?
            </h2>
            <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
              Daftar sekarang dan wujudkan perubahan positif untuk Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#"
                className="px-8 py-4 bg-primary text-white text-lg font-semibold hover:bg-red-900 transition rounded-lg shadow-soft"
              >
                DAFTAR SEKARANG
              </Link>
              <a
                href="/documents/Pedoman-DPRI-2026.pdf"
                download="Pedoman-DPRI-2026.pdf"
                className="px-8 py-4 bg-transparent text-primary text-lg font-semibold hover:bg-gray-100 transition border border-primary rounded-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

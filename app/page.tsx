import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global scaffold: radial gradient + optional pattern overlay */}
      <div className="fixed inset-0 z-0 bg-luxury-radial" aria-hidden />
      <div className="fixed inset-0 z-0 bg-luxury-pattern pointer-events-none" aria-hidden />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/muhammad-ravel-P5d3B3oZLqw-unsplash.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-luxury-scaffold/85" />
          <div className="absolute inset-0 bg-luxury-radial/60" />
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-luxury-text/70 text-xs uppercase tracking-[0.2em] mb-4">
                CV. Pesona Prestasi Official
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-text leading-tight tracking-tight">
                Remaja Hebat,<br />Cerdas dan Berkualitas
              </h1>
              <p className="text-luxury-text/90 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
                Wadah strategis bagi pelajar Indonesia untuk mengembangkan potensi, kepemimpinan, dan karakter—menuju Generasi Emas 2045.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="#daftar"
                  className="px-6 py-3.5 bg-luxury-accent text-luxury-scaffold text-sm font-semibold uppercase tracking-wider rounded-lg hover:opacity-90 transition shadow-glass"
                >
                  Daftar Sekarang
                </Link>
                <a
                  href="/documents/Pedoman-DPRI-2026.pdf"
                  download="Pedoman-DPRI-2026.pdf"
                  className="px-6 py-3.5 bg-transparent text-luxury-text text-sm font-semibold uppercase tracking-wider rounded-lg border border-white/20 hover:bg-white/5 transition inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Unduh Pedoman
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Glass card */}
      <section id="about" className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-luxury-text/60">
                Tentang Kami
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-text leading-tight">
                Memberi Panggung bagi Talenta dan Prestasi Pelajar Indonesia
              </h2>
              <div className="space-y-6 text-luxury-text/85 leading-relaxed">
                <p>
                  Duta Pelajar Remaja Indonesia adalah wadah strategis bagi pelajar SMP/MTs dan SMA/SMK/MA Sederajat untuk menyalurkan bakat, meningkatkan kepemimpinan, keterampilan sosial, serta rasa tanggung jawab.
                </p>
                <p>
                  Kami berkomitmen menyiapkan generasi muda yang cerdas, kreatif, dan berintegritas—mampu menjadi teladan bagi rekan sebaya. Seluruh program diarahkan untuk mendukung visi Indonesia Emas 2045.
                </p>
              </div>
              <Link
                href="/tentang-kami"
                className="inline-block px-6 py-3.5 bg-luxury-accent text-luxury-scaffold text-sm font-semibold uppercase tracking-wider rounded-[20px] hover:opacity-90 transition shadow-glass"
              >
                Selengkapnya
              </Link>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-white/10 shadow-glass">
                <Image
                  src="/assets/muhammad-ravel-P5d3B3oZLqw-unsplash.jpg"
                  alt="Duta Pelajar Remaja Indonesia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex gap-12 md:gap-16">
                <div className="glass-dark p-6 rounded-[20px] flex-1">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-luxury-accent">5</p>
                  <p className="text-xs uppercase tracking-wider text-luxury-text/70 mt-1">
                    Tahapan Program
                  </p>
                </div>
                <div className="glass-dark p-6 rounded-[20px] flex-1">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-luxury-accent">250+</p>
                  <p className="text-xs uppercase tracking-wider text-luxury-text/70 mt-1">
                    Target Peserta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jalur Pendaftaran - Glass cards */}
      <section id="pendaftaran" className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-luxury-accent" />
            <p className="text-sm uppercase tracking-wider text-luxury-text/60">
              JALUR PENDAFTARAN
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-text leading-tight">
              Jalur Pendaftaran
            </h2>
            <p className="text-lg md:text-xl text-luxury-text/80 max-w-3xl mx-auto leading-relaxed">
              Pilih jalur pendaftaran yang sesuai dengan Anda. Setiap jalur memiliki keunggulan dan kesempatan yang sama untuk menjadi Duta Pelajar Remaja Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-dark p-6 md:p-8 rounded-[20px] flex flex-col">
              <div className="aspect-video rounded-xl bg-luxury-glass border border-white/10 flex items-center justify-center mb-6">
                <span className="text-luxury-text/40 text-sm">Gambar Jalur Undangan</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-luxury-accent mb-2">Undangan</span>
              <h3 className="font-serif text-2xl font-bold text-luxury-text mb-4">Jalur Undangan</h3>
              <p className="text-luxury-text/80 text-sm leading-relaxed flex-1">
                Untuk alumni ajang resmi CV. Pesona Prestasi Official. Jalur khusus bagi mereka yang telah berpartisipasi dalam program resmi sebelumnya.
              </p>
            </div>

            <div className="glass-dark p-6 md:p-8 rounded-[20px] flex flex-col">
              <div className="aspect-video rounded-xl bg-luxury-glass border border-white/10 flex items-center justify-center mb-6">
                <span className="text-luxury-text/40 text-sm">Gambar Jalur Prestasi</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-luxury-accent mb-2">Prestasi</span>
              <h3 className="font-serif text-2xl font-bold text-luxury-text mb-4">Jalur Prestasi</h3>
              <p className="text-luxury-text/80 text-sm leading-relaxed flex-1">
                Untuk pelajar berprestasi tingkat Kab/Kota hingga Internasional. Buktikan prestasi Anda dan raih kesempatan menjadi Duta Pelajar Remaja Indonesia.
              </p>
            </div>

            <div className="glass-dark p-6 md:p-8 rounded-[20px] flex flex-col">
              <div className="aspect-video rounded-xl bg-luxury-glass border border-white/10 flex items-center justify-center mb-6">
                <span className="text-luxury-text/40 text-sm">Gambar Jalur Mandiri</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-luxury-accent mb-2">Mandiri</span>
              <h3 className="font-serif text-2xl font-bold text-luxury-text mb-4">Jalur Mandiri</h3>
              <p className="text-luxury-text/80 text-sm leading-relaxed flex-1">
                Pendaftaran terbuka untuk umum. Semua pelajar Indonesia berkesempatan untuk mendaftar dan mengikuti seleksi Duta Pelajar Remaja Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview - Glass cards */}
      <section id="timeline" className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-luxury-accent" />
            <p className="text-sm uppercase tracking-wider text-luxury-text/60">
              TIMELINE PROGRAM
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-text leading-tight">
              Timeline Pelaksanaan Program 2025/2026
            </h2>
            <p className="text-lg md:text-xl text-luxury-text/80 max-w-3xl mx-auto leading-relaxed">
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
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-luxury-accent text-luxury-scaffold font-bold text-xl flex items-center justify-center shadow-glass">
                  {item.num}
                </div>
                <div className="flex-1 glass-dark rounded-[20px] p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                    <div>
                      <div className="text-xs font-semibold text-luxury-accent uppercase tracking-wide mb-1">{item.period}</div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-luxury-text">{item.title}</h3>
                    </div>
                    <span className="text-sm text-luxury-text/70">{item.tag}</span>
                  </div>
                  <p className="text-luxury-text/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/timeline"
              className="inline-block px-6 py-3.5 bg-luxury-accent text-luxury-scaffold text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition rounded-[20px] shadow-glass"
            >
              Lihat Timeline Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Fasilitas - Glass cards */}
      <section id="fasilitas" className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm uppercase tracking-wider text-luxury-text/60">
              FASILITAS FINALIS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-text leading-tight">
              Fasilitas dan Manfaat untuk Finalis
            </h2>
            <p className="text-lg md:text-xl text-luxury-text/80 max-w-3xl mx-auto leading-relaxed">
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
              <div key={f.title} className="glass-dark rounded-[20px] p-8 flex flex-col items-center text-center space-y-4">
                <h3 className="font-serif text-2xl font-bold text-luxury-text">{f.title}</h3>
                <p className="text-luxury-text/80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda - Glass cards */}
      <section id="agenda" className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block w-16 h-0.5 bg-luxury-accent" />
            <p className="text-sm uppercase tracking-wider text-luxury-text/60">
              AGENDA KUNJUNGAN
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-text leading-tight">
              Agenda Kunjungan Utama
            </h2>
            <p className="text-lg md:text-xl text-luxury-text/80 max-w-3xl mx-auto leading-relaxed">
              Pengalaman karantina di Jakarta dengan kunjungan ke berbagai institusi penting untuk memperluas wawasan dan jaringan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Universitas Indonesia", desc: "Kunjungan ke kampus UI untuk pengalaman akademik dan memperluas wawasan pendidikan tinggi di Indonesia." },
              { title: "MPR/DPR RI", desc: "Kunjungan ke lembaga legislatif Indonesia untuk memahami proses demokrasi dan tata kelola negara." },
              { title: "Kemenpora", desc: "Kunjungan ke Kementerian Pemuda dan Olahraga untuk memahami kebijakan dan program kepemudaan nasional." },
            ].map((a) => (
              <div key={a.title} className="glass-dark rounded-[20px] overflow-hidden">
                <div className="aspect-video bg-luxury-glass border-b border-white/10 flex items-center justify-center">
                  <span className="text-luxury-text/40 text-sm">Gambar</span>
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-xs uppercase tracking-wider text-luxury-accent">Kunjungan</span>
                  <h3 className="font-serif text-2xl font-bold text-luxury-text">{a.title}</h3>
                  <p className="text-luxury-text/80 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="daftar" className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-dark rounded-[20px] p-12 md:p-16 max-w-4xl mx-auto space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-text leading-tight">
              Siap Menjadi Duta Pelajar Remaja Indonesia?
            </h2>
            <p className="text-lg md:text-xl text-luxury-text/80 max-w-2xl mx-auto leading-relaxed">
              Daftar sekarang dan wujudkan perubahan positif untuk Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#"
                className="px-8 py-4 bg-luxury-accent text-luxury-scaffold text-lg font-semibold hover:opacity-90 transition rounded-[20px] shadow-glass"
              >
                DAFTAR SEKARANG
              </Link>
              <a
                href="/documents/Pedoman-DPRI-2026.pdf"
                download="Pedoman-DPRI-2026.pdf"
                className="px-8 py-4 bg-transparent text-luxury-text text-lg font-semibold hover:bg-white/5 transition border border-white/20 rounded-[20px] inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

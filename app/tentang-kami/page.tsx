import Image from "next/image";
import Link from "next/link";

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-0.5 bg-white/30"></div>
              <div className="text-sm uppercase tracking-wider text-white/80">TENTANG KAMI</div>
              <div className="flex-1 h-0.5 bg-white/30"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Tentang Duta Pelajar Remaja Indonesia
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              "Remaja Hebat, Cerdas &amp; Berkualitas" - Program di bawah naungan CV. Pesona Prestasi Official
            </p>
          </div>
        </div>
      </section>

      {/* Latar Belakang Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-1 h-0.5 bg-primary"></div>
                <div className="text-sm uppercase tracking-wider text-text-light">LATAR BELAKANG</div>
                <div className="flex-1 h-0.5 bg-primary"></div>
              </div>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-text-dark leading-relaxed">
              <p>
                Remaja merupakan aset berharga bangsa yang memiliki peran strategis dalam menentukan arah dan masa depan Indonesia. Di tengah pesatnya perkembangan teknologi serta dinamika sosial yang terus berubah, banyak pelajar dan remaja menghadapi tantangan dalam menemukan jati diri, mengembangkan potensi, serta menyalurkan minat dan bakatnya secara positif.
              </p>
              <p>
                Melihat kondisi tersebut, dibutuhkan wadah yang tidak hanya memberi ruang bagi remaja untuk berkreasi dan berprestasi, tetapi juga membimbing mereka agar mampu menjadi generasi yang inspiratif dan berdaya saing tinggi.
              </p>
              <p>
                Dari kebutuhan tersebut, Duta Pelajar Remaja Indonesia hadir sebagai program unggulan yang berfokus pada pembinaan karakter, pengembangan potensi, dan pemberdayaan pelajar tingkat SMP/MTs Sederajat dan SMA/SMK/MA Sederajat di seluruh Indonesia. Program ini menjadi sarana strategis untuk menyiapkan generasi muda yang cerdas, kreatif, dan berintegritas, serta mampu menjadi teladan bagi rekan sebaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-3xl md:text-4xl font-italic text-primary leading-relaxed">
            "Membentuk Generasi Berkarakter, Berprestasi, dan Siap Menjadi Agen Perubahan Menuju Indonesia Emas 2045."
          </p>
          <p className="text-xl text-text-dark font-semibold">Remaja Hebat, Cerdas & Berkualitas</p>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-1 h-0.5 bg-primary"></div>
                <div className="text-sm uppercase tracking-wider text-text-light">VISI, MISI & NILAI-NILAI</div>
                <div className="flex-1 h-0.5 bg-primary"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="bg-white p-8 space-y-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-3xl font-bold text-primary">Visi</h3>
                <p className="text-lg text-text-light leading-relaxed">
                  Menjadi program unggulan dalam pembinaan karakter, pengembangan potensi, dan pemberdayaan pelajar remaja Indonesia yang berorientasi pada terwujudnya Indonesia Emas 2045.
                </p>
              </div>

              <div className="bg-white p-8 space-y-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-3xl font-bold text-primary">Misi</h3>
                <ul className="space-y-4 text-lg text-text-light leading-relaxed list-disc list-inside">
                  <li>Menyediakan wadah strategis bagi pelajar remaja untuk menyalurkan bakat, meningkatkan kemampuan kepemimpinan, keterampilan sosial, serta rasa tanggung jawab.</li>
                  <li>Mengembangkan proses pembinaan yang menekankan penguatan kapasitas diri, penguatan karakter, dan kolaborasi positif.</li>
                  <li>Menyiapkan generasi muda yang cerdas, kreatif, berintegritas, dan mampu menjadi teladan bagi rekan sebaya.</li>
                  <li>Mendukung terwujudnya generasi unggul, berkarakter, dan siap menjadi pemimpin masa depan bangsa yang berkontribusi nyata bagi kemajuan negeri.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 space-y-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-primary">Nilai-Nilai Program</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-text-dark">Profesionalitas</h4>
                  <p className="text-text-light">Menjunjung tinggi standar profesional dalam setiap pelaksanaan kegiatan dan program.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-text-dark">Integritas</h4>
                  <p className="text-text-light">Menjaga kejujuran, transparansi, dan konsistensi dalam setiap tindakan dan keputusan.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-text-dark">Kolaborasi</h4>
                  <p className="text-text-light">Membangun kerja sama yang positif dan saling mendukung antar semua pihak yang terlibat.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-text-dark">Inspirasi</h4>
                  <p className="text-text-light">Menjadi sumber inspirasi dan motivasi bagi generasi muda untuk berkembang dan berprestasi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sambutan Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-1 h-0.5 bg-primary"></div>
                <div className="text-sm uppercase tracking-wider text-text-light">SAMBUTAN FOUNDER</div>
                <div className="flex-1 h-0.5 bg-primary"></div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-gray-200">
                <Image
                  src="/images/people/founder-saputra.jpg"
                  alt="Saputra"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-text-dark">Saputra</h3>
                <p className="text-sm font-semibold text-primary">Founder Duta Pelajar Remaja Indonesia</p>
                <p className="text-text-light leading-relaxed">
                  Kami berkomitmen membangun ekosistem pembinaan pelajar yang berkarakter, berprestasi, dan siap menjadi agen perubahan. Terima kasih atas dukungan semua pihak yang terus memperkuat misi kami menuju Indonesia Emas 2045.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landasan Operasional Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-1 h-0.5 bg-primary"></div>
                <div className="text-sm uppercase tracking-wider text-text-light">LANDASAN OPERASIONAL</div>
                <div className="flex-1 h-0.5 bg-primary"></div>
              </div>
            </div>
            
            <div className="bg-white p-8 space-y-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary">CV. Pesona Prestasi Official</h3>
              <p className="text-base md:text-lg text-text-light leading-relaxed">
                Program Duta Pelajar Remaja Indonesia diselenggarakan di bawah naungan CV. Pesona Prestasi Official. Organisasi ini berkomitmen untuk mengembangkan potensi terbaik remaja Indonesia melalui program kompetisi dan pengembangan karakter yang terstruktur, profesional, dan berorientasi pada pembinaan generasi muda yang unggul, kreatif, dan berkarakter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legalitas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-1 h-0.5 bg-primary"></div>
                <div className="text-sm uppercase tracking-wider text-text-light">IDENTITAS PENYELENGGARA</div>
                <div className="flex-1 h-0.5 bg-primary"></div>
              </div>
            </div>
            
            <div className="bg-white w-full p-8 md:p-10 space-y-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">CV. Pesona Prestasi Official</h3>
                <div className="space-y-3 text-text-dark">
                  <div className="flex flex-col md:flex-row md:items-start gap-2">
                    <span className="font-semibold text-primary min-w-[120px]">NIB:</span>
                    <span className="text-lg">2003250056944</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start gap-2">
                    <span className="font-semibold text-primary min-w-[120px]">Alamat Kantor:</span>
                    <span className="text-lg">Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21, Sungai Jawi, Pontianak Kota</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Pedoman Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 md:p-12 text-center border border-gray-200">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Pedoman Duta Pelajar Remaja Indonesia
              </h3>
              <p className="text-lg text-text-light mb-6">
                Unduh buku pedoman resmi Duta Pelajar Remaja Indonesia Edisi 2025/2026 untuk memahami visi, misi, mekanisme, dan ketentuan program secara lengkap.
              </p>
            </div>
            <a
              href="/documents/Pedoman-DPRI-2026.pdf"
              download="Pedoman-DPRI-2026.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-lg font-semibold hover:opacity-90 transition rounded-lg shadow-soft"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Unduh Pedoman DPRI 2026 (PDF)
            </a>
            <p className="text-sm text-text-light mt-4">
              File size: ~1 MB | Format: PDF
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

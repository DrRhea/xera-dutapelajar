import Image from "next/image";
import Link from "next/link";

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-tinkerbell-bg">
      {/* Hero Section */}
      <section className="py-20 bg-tinkerbell-secondary">
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
              "Remaja hebat, cerdas dan berkualitas" - Program di bawah naungan CV. Pesona Prestasi Official
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
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <div className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary">LATAR BELAKANG</div>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-tinkerbell-text leading-relaxed">
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

      {/* Visi Misi Section */}
      <section className="py-20 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-1 h-0.5 bg-tinkerbell-secondary"></div>
                <div className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary">VISI, MISI & NILAI-NILAI</div>
                <div className="flex-1 h-0.5 bg-tinkerbell-secondary"></div>
              </div>
            </div>

            <div className="bg-white p-8 space-y-6">
              <h3 className="text-3xl font-bold text-tinkerbell-text">Visi</h3>
              <p className="text-lg text-tinkerbell-textSecondary leading-relaxed">
                Menjadi program unggulan dalam pembinaan karakter, pengembangan potensi, dan pemberdayaan pelajar remaja Indonesia yang berorientasi pada terwujudnya Indonesia Emas 2045.
              </p>
            </div>

            <div className="bg-white p-8 space-y-6">
              <h3 className="text-3xl font-bold text-tinkerbell-text">Misi</h3>
              <ul className="space-y-4 text-lg text-tinkerbell-textSecondary leading-relaxed list-disc list-inside">
                <li>Menyediakan wadah strategis bagi pelajar remaja untuk menyalurkan bakat, meningkatkan kemampuan kepemimpinan, keterampilan sosial, serta rasa tanggung jawab.</li>
                <li>Mengembangkan proses pembinaan yang menekankan penguatan kapasitas diri, penguatan karakter, dan kolaborasi positif.</li>
                <li>Menyiapkan generasi muda yang cerdas, kreatif, berintegritas, dan mampu menjadi teladan bagi rekan sebaya.</li>
                <li>Mendukung terwujudnya generasi unggul, berkarakter, dan siap menjadi pemimpin masa depan bangsa yang berkontribusi nyata bagi kemajuan negeri.</li>
              </ul>
            </div>

            <div className="bg-white p-8 space-y-6">
              <h3 className="text-3xl font-bold text-tinkerbell-text">Nilai-Nilai Program</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-tinkerbell-text">Profesionalitas</h4>
                  <p className="text-tinkerbell-textSecondary">Menjunjung tinggi standar profesional dalam setiap pelaksanaan kegiatan dan program.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-tinkerbell-text">Integritas</h4>
                  <p className="text-tinkerbell-textSecondary">Menjaga kejujuran, transparansi, dan konsistensi dalam setiap tindakan dan keputusan.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-tinkerbell-text">Kolaborasi</h4>
                  <p className="text-tinkerbell-textSecondary">Membangun kerja sama yang positif dan saling mendukung antar semua pihak yang terlibat.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-tinkerbell-text">Inspirasi</h4>
                  <p className="text-tinkerbell-textSecondary">Menjadi sumber inspirasi dan motivasi bagi generasi muda untuk berkembang dan berprestasi.</p>
                </div>
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
                <div className="flex-1 h-0.5 bg-gray-300"></div>
                <div className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary">LANDASAN OPERASIONAL</div>
                <div className="flex-1 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-tinkerbell-bg p-8 space-y-6">
              <h3 className="text-2xl font-bold text-tinkerbell-text">CV. Pesona Prestasi Official</h3>
              <p className="text-base md:text-lg text-tinkerbell-textSecondary leading-relaxed">
                Program Duta Pelajar Remaja Indonesia diselenggarakan di bawah naungan CV. Pesona Prestasi Official. Organisasi ini berkomitmen untuk mengembangkan potensi terbaik remaja Indonesia melalui program kompetisi dan pengembangan karakter yang terstruktur, profesional, dan berorientasi pada pembinaan generasi muda yang unggul, kreatif, dan berkarakter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Pedoman Section */}
      <section className="py-20 bg-tinkerbell-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-tinkerbell-cta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-tinkerbell-cta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-tinkerbell-text mb-4">
                Pedoman Duta Pelajar Remaja Indonesia
              </h3>
              <p className="text-lg text-tinkerbell-textSecondary mb-6">
                Unduh buku pedoman resmi Duta Pelajar Remaja Indonesia Edisi 2025/2026 untuk memahami visi, misi, mekanisme, dan ketentuan program secara lengkap.
              </p>
            </div>
            <a
              href="/documents/Pedoman-DPRI-2026.pdf"
              download="Pedoman-DPRI-2026.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-tinkerbell-cta text-white text-lg font-semibold hover:opacity-90 transition rounded-lg shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Unduh Pedoman DPRI 2026 (PDF)
            </a>
            <p className="text-sm text-tinkerbell-textSecondary mt-4">
              File size: ~1 MB | Format: PDF
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

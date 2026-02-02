import Image from "next/image";
import Link from "next/link";

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-tinkerbell-bg">
      {/* Hero Section */}
      <section className="py-20 bg-tinkerbell-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-0.5 bg-white/30"></div>
              <div className="text-sm uppercase tracking-wider text-white/80">AGENDA KUNJUNGAN</div>
              <div className="flex-1 h-0.5 bg-white/30"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Agenda Kunjungan Utama
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Pengalaman karantina di Jakarta dengan kunjungan ke berbagai institusi penting untuk memperluas wawasan dan jaringan
            </p>
          </div>
        </div>
      </section>

      {/* Agenda Cards Section */}
      <section className="py-20 bg-tinkerbell-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Universitas Indonesia */}
            <div className="bg-tinkerbell-secondary text-white">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/20 border-4 border-tinkerbell-cta flex items-center justify-center">
                    <span className="text-white text-xs font-bold">UI</span>
                  </div>
                  <h3 className="text-2xl font-bold">Universitas Indonesia</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Kunjungan ke kampus UI untuk pengalaman akademik dan memperluas wawasan pendidikan tinggi di Indonesia. Program ini memberikan kesempatan bagi finalis untuk mengenal lebih dekat sistem pendidikan tinggi, fasilitas kampus, dan berbagai program akademik yang tersedia.
                </p>
              </div>
            </div>

            {/* Card 2 - MPR/DPR RI */}
            <div className="bg-tinkerbell-secondary text-white">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/20 border-4 border-tinkerbell-cta flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MPR</span>
                  </div>
                  <h3 className="text-2xl font-bold">MPR/DPR RI</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Kunjungan ke lembaga legislatif Indonesia untuk memahami proses demokrasi dan tata kelola negara. Finalis akan belajar tentang sistem pemerintahan, proses pembuatan undang-undang, dan peran penting lembaga legislatif dalam menjaga demokrasi Indonesia.
                </p>
              </div>
            </div>

            {/* Card 3 - Kemenpora */}
            <div className="bg-tinkerbell-secondary text-white">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/20 border-4 border-tinkerbell-cta flex items-center justify-center">
                    <span className="text-white text-xs font-bold">KP</span>
                  </div>
                  <h3 className="text-2xl font-bold">Kemenpora</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Kunjungan ke Kementerian Pemuda dan Olahraga untuk memahami kebijakan dan program kepemudaan nasional. Finalis akan mendapatkan wawasan tentang berbagai program pemerintah untuk pengembangan generasi muda dan peluang yang tersedia bagi remaja Indonesia.
                </p>
              </div>
            </div>

            {/* Card 4 - Placeholder untuk card keempat jika diperlukan */}
            <div className="bg-tinkerbell-secondary text-white">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/20 border-4 border-tinkerbell-cta flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PG</span>
                  </div>
                  <h3 className="text-2xl font-bold">Program Pengembangan</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Berbagai program pengembangan karakter dan kepemimpinan yang dirancang khusus untuk membentuk generasi muda yang berkarakter, berprestasi, dan siap berkontribusi positif bagi bangsa dan negara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


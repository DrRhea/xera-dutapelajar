import Image from "next/image";
import Link from "next/link";

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Universitas Indonesia */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/images/logo-ui.svg" alt="Universitas Indonesia" width={80} height={80} />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">Universitas Indonesia</h3>
              </div>
              <p className="text-text-light leading-relaxed">
                Kunjungan ke kampus UI untuk pengalaman akademik dan memperluas wawasan pendidikan tinggi di Indonesia. Program ini memberikan kesempatan bagi finalis untuk mengenal lebih dekat sistem pendidikan tinggi, fasilitas kampus, dan berbagai program akademik yang tersedia.
              </p>
            </div>

            {/* Card 2 - MPR/DPR RI */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/images/logo-mpr.svg" alt="MPR/DPR RI" width={80} height={80} />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">MPR/DPR RI</h3>
              </div>
              <p className="text-text-light leading-relaxed">
                Kunjungan ke lembaga legislatif Indonesia untuk memahami proses demokrasi dan tata kelola negara. Finalis akan belajar tentang sistem pemerintahan, proses pembuatan undang-undang, dan peran penting lembaga legislatif dalam menjaga demokrasi Indonesia.
              </p>
            </div>

            {/* Card 3 - Kemenpora */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/images/logo-kemenpora.png" alt="Kemenpora" width={80} height={80} />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">Kemenpora</h3>
              </div>
              <p className="text-text-light leading-relaxed">
                Kunjungan ke Kementerian Pemuda dan Olahraga untuk memahami kebijakan dan program kepemudaan nasional. Finalis akan mendapatkan wawasan tentang berbagai program pemerintah untuk pengembangan generasi muda dan peluang yang tersedia bagi remaja Indonesia.
              </p>
            </div>

            {/* Card 4 - Placeholder untuk card keempat jika diperlukan */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/images/logo-dpr-official.png" alt="Program Pengembangan" width={80} height={80} />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">Program Pengembangan</h3>
              </div>
              <p className="text-text-light leading-relaxed">
                Berbagai program pengembangan karakter dan kepemimpinan yang dirancang khusus untuk membentuk generasi muda yang berkarakter, berprestasi, dan siap berkontribusi positif bagi bangsa dan negara.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


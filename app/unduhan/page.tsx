import PedomanPreview from "./PedomanPreview";

export default function UnduhanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-0.5 bg-white/30"></div>
              <div className="text-sm uppercase tracking-wider text-white/80">PUSAT UNDUHAN</div>
              <div className="flex-1 h-0.5 bg-white/30"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Unduhan Resmi Duta Pelajar Remaja Indonesia
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Akses dokumen resmi program untuk pendaftaran dan informasi peserta.
            </p>
          </div>
        </div>
      </section>

      {/* Download List */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <PedomanPreview />

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-dark">Syarat Pendaftaran</h3>
                  <p className="text-text-light text-sm">Informasi kelengkapan peserta</p>
                </div>
              </div>
              <p className="text-text-light mb-6">
                Dokumen syarat pendaftaran sedang dalam proses finalisasi. Hubungi kami untuk informasi terbaru.
              </p>
              <a
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Hubungi Tim Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

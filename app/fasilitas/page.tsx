import Image from "next/image";
import Link from "next/link";

export default function FasilitasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-0.5 bg-white/30"></div>
              <div className="text-sm uppercase tracking-wider text-white/80">FASILITAS FINALIS</div>
              <div className="flex-1 h-0.5 bg-white/30"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Fasilitas dan Manfaat untuk Finalis
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Sebagai finalis, Anda akan mendapatkan berbagai fasilitas eksklusif dan pengalaman berharga
            </p>
          </div>
        </div>
      </section>

      {/* Fasilitas Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Penginapan */}
            <div className="bg-surface rounded-lg shadow-soft p-8 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-dark">Penginapan</h3>
                <p className="text-text-light leading-relaxed">
                  5 hari 4 malam penginapan selama karantina di Jakarta dengan fasilitas lengkap dan nyaman
                </p>
              </div>
            </div>
            
            {/* Card 2 - Relasi Pelajar */}
            <div className="bg-surface rounded-lg shadow-soft p-8 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-dark">Relasi Pelajar</h3>
                <p className="text-text-light leading-relaxed">
                  Jaringan pelajar dari berbagai provinsi di seluruh Indonesia untuk memperluas relasi dan kolaborasi
                </p>
              </div>
            </div>
            
            {/* Card 3 - Sertifikat dan Merchandise */}
            <div className="bg-surface rounded-lg shadow-soft p-8 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-dark">Sertifikat dan Merchandise</h3>
                <p className="text-text-light leading-relaxed">
                  Sertifikat resmi dan merchandise eksklusif sebagai kenang-kenangan dan bukti partisipasi
                </p>
              </div>
            </div>
            
            {/* Card 4 - Perlengkapan Finalis */}
            <div className="bg-surface rounded-lg shadow-soft p-8 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-dark">Perlengkapan Finalis</h3>
                <p className="text-text-light leading-relaxed">
                  Kaos, pakaian forum, dan selempang resmi untuk kegiatan karantina dan acara formal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


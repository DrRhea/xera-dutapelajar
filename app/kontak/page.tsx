import Link from "next/link";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-0.5 bg-white/30"></div>
              <div className="text-sm uppercase tracking-wider text-white/80">HUBUNGI KAMI</div>
              <div className="flex-1 h-0.5 bg-white/30"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Hubungi Duta Pelajar Remaja Indonesia
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Kami siap menjawab pertanyaan Anda. Hubungi kami melalui berbagai saluran komunikasi yang tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Pilihan Kontak
              </h2>
              <p className="text-xl text-text-light max-w-3xl mx-auto">
                Pilih saluran komunikasi yang paling sesuai dengan kebutuhan Anda
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 - General Inquiries */}
              <div className="bg-surface rounded-lg border-2 border-primary p-8 md:p-10 hover:shadow-md transition">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">General Inquiries</h3>
                  </div>
                  
                  <p className="text-text-light">
                    Untuk pertanyaan umum, pendaftaran peserta, dan informasi program Duta Pelajar Remaja Indonesia.
                  </p>

                  {/* Email */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span className="font-semibold text-text-dark">Email:</span>
                    </div>
                    <a href="mailto:dprindonesia.official@gmail.com" className="text-primary font-semibold hover:underline break-all">
                      dprindonesia.official@gmail.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span className="font-semibold text-text-dark">Telepon:</span>
                    </div>
                    <a href="tel:+6282148538720" className="text-primary font-semibold hover:underline">
                      +62 821 4853 8720
                    </a>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 space-y-2">
                    <a 
                      href="https://wa.me/6282148538720?text=Halo%20Duta%20Pelajar%20Remaja%20Indonesia%2C%20saya%20ingin%20bertanya%20tentang%20program%20ini."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition"
                    >
                      Hubungi via WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 - Corporate/Business */}
              <div className="bg-surface rounded-lg border-2 border-primary p-8 md:p-10 hover:shadow-md transition">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Corporate & Business</h3>
                  </div>
                  
                  <p className="text-text-light">
                    Untuk kerjasama bisnis, sponsorship, partnership, dan layanan konsultasi dari CV. Pesona Prestasi Official.
                  </p>

                  {/* Email */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span className="font-semibold text-text-dark">Email:</span>
                    </div>
                    <a href="mailto:pesonaprestasiofficial@gmail.com" className="text-primary font-semibold hover:underline break-all">
                      pesonaprestasiofficial@gmail.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span className="font-semibold text-text-dark">Telepon:</span>
                    </div>
                    <a href="tel:+6285249485579" className="text-primary font-semibold hover:underline">
                      +62 852 4948 5579
                    </a>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 space-y-2">
                    <a 
                      href="https://wa.me/6285249485579?text=Halo%20CV%20Pesona%20Prestasi%20Official%2C%20saya%20ingin%20mendiskusikan%20peluang%20kerjasama."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition"
                    >
                      Hubungi via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Kantor Kami
            </h2>
            <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-4">
              <p className="text-lg font-semibold text-text-dark">
                CV. Pesona Prestasi Official
              </p>
              <p className="text-text-light leading-relaxed">
                Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21,<br/>
                Sungai Jawi, Pontianak
              </p>
              <p className="text-sm text-text-light pt-4 border-t border-gray-200">
                Jam Operasional: Senin - Jumat, 09:00 - 17:00 WIB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Siap untuk Bergabung?
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin mendaftar sebagai peserta Duta Pelajar Remaja Indonesia.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg hover:opacity-90 transition shadow-soft"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </main>
  );
}

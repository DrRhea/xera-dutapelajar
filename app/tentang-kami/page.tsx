import Image from "next/image";
import Link from "next/link";

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-tinkerbell-bg">
      {/* Navigation */}
      <nav className="w-full bg-tinkerbell-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Left */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png"
                  alt="DPR Indonesia Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                  priority
                />
                <span className="text-xl font-bold text-white hidden sm:block">
                  DPR Indonesia
                </span>
              </Link>
            </div>
            
            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/tentang-kami" className="text-tinkerbell-cta transition font-medium text-base">
                Tentang Kami
              </Link>
              <Link href="/timeline" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                Timeline
              </Link>
              <Link href="/fasilitas" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                Fasilitas
              </Link>
              <Link href="/agenda" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                Agenda
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
              Mengenal Lebih Dekat Pesona Prestasi
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Organisasi yang berkomitmen mengembangkan potensi terbaik remaja Indonesia melalui program kompetisi dan pengembangan karakter yang terstruktur.
            </p>
          </div>
        </div>
      </section>

      {/* Profil Pendiri Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <div className="text-sm uppercase tracking-wider text-tinkerbell-textSecondary">PROFIL PENDIRI</div>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Kolom Kiri - Gambar dan Info Pendiri */}
              <div className="flex flex-col items-center space-y-6">
                <div className="w-64 h-80 bg-gray-200 relative overflow-hidden border-4 border-gray-300">
                  {/* Placeholder untuk gambar pendiri - ganti dengan gambar asli saat tersedia */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                    <span className="text-gray-600 text-sm text-center px-4">Gambar Pendiri<br/>(Saputra)</span>
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-tinkerbell-text">Saputra</h3>
                  <p className="text-lg text-tinkerbell-textSecondary">Direktur CV Pesona Prestasi Official</p>
                </div>
              </div>

              {/* Kolom Kanan - Deskripsi */}
              <div className="space-y-6">
                <p className="text-base md:text-lg text-tinkerbell-text leading-relaxed">
                  Selamat datang di Pesona Prestasi Official! Saya Saputra, Direktur organisasi ini, dengan bangga mempersembahkan platform yang didedikasikan untuk mengembangkan potensi terbaik anak-anak dan remaja Indonesia.
                </p>
                <p className="text-base md:text-lg text-tinkerbell-text leading-relaxed">
                  Sebagai seorang yang memiliki komitmen kuat terhadap pendidikan dan pengembangan karakter generasi muda, saya percaya bahwa setiap anak memiliki bakat dan potensi yang luar biasa. Melalui Pesona Prestasi Official, kami berkomitmen untuk memberikan wadah yang tepat bagi mereka untuk berkembang, berprestasi, dan menjadi pemimpin masa depan.
                </p>
                <p className="text-base md:text-lg text-tinkerbell-text leading-relaxed">
                  Visi kami adalah menciptakan generasi emas Indonesia yang tidak hanya cerdas secara akademis, tetapi juga memiliki karakter yang kuat, kepemimpinan yang baik, dan semangat untuk berkontribusi bagi bangsa dan negara.
                </p>
                <p className="text-base md:text-lg text-tinkerbell-text leading-relaxed">
                  Saya berharap organisasi ini dapat menjadi jembatan yang menghubungkan potensi-potensi terbaik dengan kesempatan-kesempatan emas untuk berkembang. Mari bersama-sama mewujudkan Indonesia Emas 2045 melalui pengembangan bakat dan minat para remaja di seluruh Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tinkerbell-secondary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Duta Pelajar Remaja Indonesia
              </h3>
              <p className="text-white/80">
                Wujudkan Perubahan Positif, Jadilah Generasi Emas 2045
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/tentang-kami" className="hover:text-tinkerbell-cta transition">Tentang Kami</Link></li>
                <li><Link href="/timeline" className="hover:text-tinkerbell-cta transition">Timeline</Link></li>
                <li><Link href="/fasilitas" className="hover:text-tinkerbell-cta transition">Fasilitas</Link></li>
                <li><Link href="/agenda" className="hover:text-tinkerbell-cta transition">Agenda</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4 mb-4">
                <Link
                  href="https://instagram.com/dpr_indonesia.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tinkerbell-cta text-white flex items-center justify-center hover:opacity-90 transition"
                  aria-label="Instagram"
                >
                  <span className="text-sm">IG</span>
                </Link>
              </div>
              <p className="text-sm text-white/80">
                Instagram: @dpr_indonesia.official
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
            <p>&copy; 2025 Duta Pelajar Remaja Indonesia. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="#" className="hover:text-tinkerbell-cta transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-tinkerbell-cta transition">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

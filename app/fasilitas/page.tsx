import Image from "next/image";
import Link from "next/link";

export default function FasilitasPage() {
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
              <Link href="/tentang-kami" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                Tentang Kami
              </Link>
              <Link href="/timeline" className="text-white hover:text-tinkerbell-cta transition font-medium text-base">
                Timeline
              </Link>
              <Link href="/fasilitas" className="text-tinkerbell-cta transition font-medium text-base">
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
      <section className="py-20 bg-tinkerbell-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 - Penginapan */}
            <div className="bg-gray-100 p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Penginapan</h3>
                <p className="text-tinkerbell-textSecondary">
                  5 hari 4 malam penginapan selama karantina di Jakarta
                </p>
              </div>
            </div>
            
            {/* Card 2 - Relasi Pelajar */}
            <div className="bg-gray-100 p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Relasi Pelajar</h3>
                <p className="text-tinkerbell-textSecondary">
                  Jaringan pelajar dari berbagai provinsi di seluruh Indonesia
                </p>
              </div>
            </div>
            
            {/* Card 3 - Sertifikat dan Merchandise */}
            <div className="bg-gray-100 p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Sertifikat dan Merchandise</h3>
                <p className="text-tinkerbell-textSecondary">
                  Sertifikat resmi dan merchandise eksklusif sebagai kenang-kenangan
                </p>
              </div>
            </div>
            
            {/* Card 4 - Perlengkapan Finalis */}
            <div className="bg-gray-100 p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-tinkerbell-text">Perlengkapan Finalis</h3>
                <p className="text-tinkerbell-textSecondary">
                  Kaos, pakaian forum, dan selempang resmi untuk kegiatan karantina
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
              <p className="text-white/80 mb-2">
                "Remaja hebat, cerdas dan berkualitas"
              </p>
              <p className="text-white/80 text-sm">
                Program di bawah naungan CV. Pesona Prestasi Official
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
              <h4 className="text-lg font-semibold text-white mb-4">Kontak Kami</h4>
              <div className="space-y-3 text-white/80">
                <p className="text-sm">
                  <span className="font-semibold">Telepon:</span> +62 821-4853-8720
                </p>
                <div className="flex space-x-4 mb-2">
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
                <p className="text-sm">
                  <span className="font-semibold">Instagram:</span> @dpr_indonesia.official
                </p>
              </div>
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


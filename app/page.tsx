import Image from "next/image";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  MapIcon,
  TrophyIcon,
  AcademicCapIcon,
  UserGroupIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden z-10 bg-primary py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/95 mix-blend-multiply z-10" />
        </div>

        <div className="relative z-20 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-4">
                Duta Pelajar Remaja Indonesia
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Remaja Hebat, Cerdas &amp; Berkualitas
              </h1>
              <p className="text-white/90 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
                Membentuk Generasi Berkarakter, Berprestasi, dan Siap Menjadi Agen Perubahan Menuju Indonesia Emas 2045.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="#daftar"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary text-base font-semibold rounded-xl hover:bg-gray-100 transition shadow-sm"
                >
                  Daftar Sekarang
                </Link>
                <a
                  href="/documents/Pedoman-DPRI-2026.pdf"
                  download="Pedoman-DPRI-2026.pdf"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white text-base font-semibold rounded-xl border border-white/30 hover:bg-white/10 transition gap-2"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Unduh Pedoman
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="relative z-10 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">HALL OF FAME</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Generasi Emas 2025
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Kayla Adelia Panerusan",
                school: "SMAN 81 Jakarta",
                category: "SMA",
                title: "Winner SMA Nasional",
                img: "/images/people/winner-sma-kayla.jpg",
              },
              {
                name: "Andra Galang Pratama",
                school: "SMKN 1 Gunung Putri",
                category: "SMA",
                title: "Winner SMA Nasional",
                img: "/images/people/winner-sma-andra.jpg",
              },
              {
                name: "I Gusti Agung Sakha Satwika",
                school: "SMPN 15 Jakarta",
                category: "SMP",
                title: "Winner SMP Nasional",
                img: "/images/people/winner-smp-sakha.jpg",
              },
              {
                name: "Nandhira Arundati Vania",
                school: "SMPN 154 Jakarta",
                category: "SMP",
                title: "Winner SMP Nasional",
                img: "/images/people/winner-smp-nandhira.jpg",
              },
            ].map((winner) => (
              <div
                key={winner.name}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image src={winner.img} alt={winner.name} fill className="object-cover" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
                      {winner.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-sm text-primary font-semibold">{winner.title}</p>
                  <h3 className="text-lg font-bold text-text-dark">{winner.name}</h3>
                  <p className="text-sm text-text-light">{winner.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority & Trust */}
      <section className="relative z-10 py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">DISELENGGARAKAN OLEH</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Diselenggarakan Oleh
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-gray-200">
                <Image src="/images/people/founder-saputra.jpg" alt="Saputra" fill className="object-cover" />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-text-dark">Saputra</h3>
                <p className="text-sm font-semibold text-primary">Founder Duta Pelajar Remaja Indonesia</p>
                <p className="text-text-light leading-relaxed">
                  “Kami hadir untuk menyiapkan generasi pelajar yang berkarakter, berprestasi, dan siap menjadi agen perubahan.”
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 space-y-3">
              <p className="text-xs uppercase tracking-wider text-text-light">Legalitas Penyelenggara</p>
              <h3 className="text-2xl font-bold text-primary">CV. Pesona Prestasi Official</h3>
              <div className="space-y-2 text-text-light">
                <p><span className="font-semibold text-text-dark">NIB:</span> 2003250056944</p>
                <p><span className="font-semibold text-text-dark">Alamat:</span> Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21, Sungai Jawi, Pontianak Kota</p>
              </div>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white text-base font-semibold rounded-xl hover:bg-red-900 transition shadow-sm"
              >
                Lihat Profil Resmi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="relative z-10 py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">EXCLUSIVE BENEFITS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Fasilitas Unggulan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Penginapan Premium", desc: "Karantina 5 hari 4 malam di hotel representatif.", Icon: BuildingOffice2Icon },
              { title: "City Tour Edukatif", desc: "Kunjungan institusi strategis untuk wawasan nasional.", Icon: MapIcon },
              { title: "Atribut Resmi", desc: "Selempang, kostum, dan perlengkapan formal finalis.", Icon: TrophyIcon },
              { title: "Pembinaan Karakter", desc: "Kelas kepemimpinan dan etika publik berstandar nasional.", Icon: AcademicCapIcon },
              { title: "Relasi Nasional", desc: "Jejaring pelajar unggul dari berbagai provinsi.", Icon: UserGroupIcon },
              { title: "Sertifikat Resmi", desc: "Sertifikat nasional sebagai pengakuan prestasi.", Icon: DocumentCheckIcon },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{benefit.title}</h3>
                <p className="text-text-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="relative z-10 py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">ALUR SELEKSI NASIONAL</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Alur Seleksi Nasional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Pendaftaran", desc: "Registrasi online dan unggah berkas." },
              { step: "02", title: "Audisi", desc: "Seleksi berkas, wawancara, dan penilaian." },
              { step: "03", title: "Karantina", desc: "Pembinaan intensif dan pembekalan." },
              { step: "04", title: "Grand Final", desc: "Malam puncak dan penobatan." },
            ].map((stage) => (
              <div key={stage.step} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl font-bold text-primary mb-3">{stage.step}</div>
                <h3 className="text-lg font-bold text-text-dark mb-2">{stage.title}</h3>
                <p className="text-text-light">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="daftar" className="relative z-10 py-24 md:py-32 bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Siap Menjadi Bagian Sejarah?
          </h2>
          <p className="text-white/85 mt-4 text-base md:text-lg">
            Jadilah representasi pelajar berprestasi Indonesia dan bawa inspirasi bagi generasi muda.
          </p>
          <div className="mt-10">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary text-base font-semibold rounded-xl hover:bg-gray-100 transition shadow-sm"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

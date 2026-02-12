import Image from "next/image";
import Link from "next/link";

export default function HallOfFamePage() {
  const winners2025 = [
    {
      name: "Kayla Adelia Panerusan",
      school: "SMAN 81 Jakarta",
      category: "SMA",
      title: "Winner SMA Nasional",
      img: "/images/people/winner-sma-kayla.jpg",
      achievement: "Juara 1 Tingkat Nasional",
      year: "2025",
      video: "/video/DPRI_Kayla Adelia (2).mp4",
    },
    {
      name: "Andra Galang Pratama",
      school: "SMKN 1 Gunung Putri",
      category: "SMA",
      title: "Winner SMA Nasional",
      img: "/images/people/winner-sma-andra.jpg",
      achievement: "Juara 1 Tingkat Nasional",
      year: "2025",
      video: "/video/DPRI_Andra Galang Pratama.mp4",
    },
    {
      name: "I Gusti Agung Sakha Satwika",
      school: "SMPN 15 Jakarta",
      category: "SMP",
      title: "Winner SMP Nasional",
      img: "/images/people/winner-smp-sakha.jpg",
      achievement: "Juara 1 Tingkat Nasional",
      year: "2025",
      video: "/video/DPRI_I Gusti Agung.mp4",
    },
    {
      name: "Nandhira Arundati Vania",
      school: "SMPN 154 Jakarta",
      category: "SMP",
      title: "Winner SMP Nasional",
      img: "/images/people/winner-smp-nandhira.jpg",
      achievement: "Juara 1 Tingkat Nasional",
      year: "2025",
      video: "/video/DPRI_Nadira Arunda.mp4",
    },
    // Temporarily hidden until .mov files are converted to .mp4
    // {
    //   name: "Andra Galang Pratama",
    //   school: "SMKN 1 Gunung Putri",
    //   category: "SMA",
    //   title: "Winner SMA Nasional",
    //   img: "/images/people/winner-sma-andra.jpg",
    //   achievement: "Juara 1 Tingkat Nasional",
    //   year: "2025",
    //   video: "/video/DPRI_Andra Galang Pratama.mp4",
    // },
  ];

  const highlightVideos = [
    {
      title: "Congratulations",
      description: "Ucapan selamat untuk seluruh pemenang dan finalis",
      video: "/video/DPRI_Congratulations.mp4",
    },
    {
      title: "The Winners",
      description: "Momen kebanggaan para juara Duta Pelajar Remaja Indonesia",
      video: "/video/DPRI_The Winners.mp4",
    },
    {
      title: "DPRI 2026",
      description: "Persiapan menuju gelaran Duta Pelajar Remaja Indonesia 2026",
      video: "/video/DPRI_2026.mp4",
    },
    {
      title: "Kayla Adelia Panerusan",
      description: "Winner SMA Nasional dari SMAN 81 Jakarta",
      video: "/video/DPRI_Kayla Adelia (2).mp4",
    },
    {
      title: "I Gusti Agung Sakha Satwika",
      description: "Winner SMP Nasional dari SMPN 15 Jakarta",
      video: "/video/DPRI_I Gusti Agung.mp4",
    },
    {
      title: "Nandhira Arundati Vania",
      description: "Winner SMP Nasional dari SMPN 154 Jakarta",
      video: "/video/DPRI_Nadira Arunda.mp4",
    },
    {
      title: "Kategori SMP",
      description: "Highlight dan dokumentasi finalis kategori SMP",
      video: "/video/DPRI_SMP.mp4",
    },
    {
      title: "Andra Galang Pratama",
      description: "Winner SMA Nasional dari SMKN 1 Gunung Putri",
      video: "/video/DPRI_Andra Galang Pratama.mp4",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-red-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block w-16 h-0.5 bg-white/30 mb-4" />
          <p className="text-white/70 text-sm uppercase tracking-[0.2em] mb-4">
            Prestasi Gemilang
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Hall of Fame
          </h1>
          <p className="text-white/90 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Menghormati Pelajar Berprestasi yang Telah Mengharumkan Nama Bangsa
          </p>
        </div>
      </section>

      {/* Winners 2025 */}
      <section className="relative py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">GENERASI EMAS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Pemenang 2025
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              Pelajar terbaik yang berhasil menjadi juara pada gelaran Duta Pelajar Remaja Indonesia 2025
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {winners2025.map((winner) => (
              <div
                key={winner.name}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                  <Image 
                    src={winner.img} 
                    alt={winner.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white shadow-md">
                      {winner.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-primary shadow-md">
                      {winner.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 space-y-2">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">{winner.title}</p>
                  <h3 className="text-lg font-bold text-text-dark leading-tight">{winner.name}</h3>
                  <p className="text-sm text-text-light">{winner.school}</p>
                  <div className="pt-2 border-t border-gray-100 mt-3">
                    <p className="text-xs text-text-light">{winner.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-block w-16 h-0.5 bg-primary" />
            <p className="text-sm uppercase tracking-wider text-text-light">VIDEO UNGGULAN</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark leading-tight">
              Momen Bersejarah
            </h2>
            <p className="text-text-light mt-4 max-w-2xl mx-auto">
              Saksikan momen kebanggaan dan prestasi para pemenang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightVideos.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative flex items-center justify-center bg-white">
                  <video
                    controls
                    playsInline
                    className="w-full h-auto"
                    style={{ maxHeight: '80vh', objectFit: 'contain' }}
                    preload="auto"
                  >
                    <source src={item.video} type="video/mp4" />
                    <p className="text-gray-600 text-center p-4">
                      Video tidak dapat diputar. Browser Anda mungkin tidak mendukung codec video ini.
                      <br />
                      <span className="text-sm text-gray-400">Coba buka dengan browser Safari atau convert video ke H.264 codec.</span>
                    </p>
                  </video>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-text-dark">{item.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

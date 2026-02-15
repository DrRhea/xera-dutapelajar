import Link from "next/link";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 pt-20 md:pt-0">
        <div className="flex flex-col justify-end px-6 md:px-10 lg:px-14 py-12 md:py-16 [@media(max-height:740px)]:py-8 border-b md:border-b-0 md:border-r border-primary/10">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-text-light">HUBUNGI KAMI</p>
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark">Kontak Resmi</h1>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            <p className="text-text-light text-lg leading-relaxed max-w-md">
              Silakan pilih saluran komunikasi yang paling sesuai dengan kebutuhan Anda.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-text-light">Kantor Kami</p>
              <p className="text-lg font-semibold text-text-dark">CV. Pesona Prestasi Official</p>
              <p className="text-text-light leading-relaxed">
                Jl. H. Rais. A. Rachman Gg. Bukit Sebedang No.21, Sungai Jawi, Pontianak
              </p>
              <p className="text-sm text-text-light">Senin - Jumat, 09:00 - 17:00 WIB</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end px-6 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="space-y-10">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-text-light">Pilihan Kontak</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-primary/10 pt-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-text-dark">General Inquiries</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-light">Email</p>
                  <a href="mailto:dprindonesia.official@gmail.com" className="text-primary font-semibold hover:underline break-all">
                    dprindonesia.official@gmail.com
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-light pt-4">Telepon</p>
                  <a href="tel:+6282148538720" className="text-primary font-semibold hover:underline">
                    +62 821 4853 8720
                  </a>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-text-dark">Corporate & Business</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-light">Email</p>
                  <a href="mailto:pesonaprestasiofficial@gmail.com" className="text-primary font-semibold hover:underline break-all">
                    pesonaprestasiofficial@gmail.com
                  </a>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-light pt-4">Telepon</p>
                  <a href="tel:+6285249485579" className="text-primary font-semibold hover:underline">
                    +62 852 4948 5579
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/6282148538720?text=Halo%20Duta%20Pelajar%20Remaja%20Indonesia%2C%20saya%20ingin%20bertanya%20tentang%20program%20ini."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition w-full"
              >
                WhatsApp General
              </a>
              <a
                href="https://wa.me/6285249485579?text=Halo%20CV%20Pesona%20Prestasi%20Official%2C%20saya%20ingin%20mendiskusikan%20peluang%20kerjasama."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition w-full"
              >
                WhatsApp Corporate
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

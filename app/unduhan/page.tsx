import PedomanPreview from "./PedomanPreview";

export default function UnduhanPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 pt-24 md:pt-24">
        {/* Intro - Left */}
        <div className="flex flex-col justify-end px-6 md:px-10 lg:px-14 py-12 md:py-16 border-b md:border-b-0 md:border-r border-primary/10">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-text-light">PUSAT UNDUHAN</p>
              <h1 className="text-4xl md:text-5xl font-bold text-text-dark">
                Unduhan Resmi Duta Pelajar Remaja Indonesia
              </h1>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            <p className="text-text-light text-lg leading-relaxed max-w-md">
              Akses dokumen resmi program untuk pendaftaran dan informasi peserta.
            </p>
          </div>
        </div>

        {/* Download List - Right */}
        <div className="flex flex-col justify-end px-6 md:px-10 lg:px-14 py-12 md:py-16">
          <div className="space-y-8">
            <PedomanPreview />
          </div>
        </div>
      </section>
    </main>
  );
}

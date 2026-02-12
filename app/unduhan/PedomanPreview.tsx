"use client";

import { useState } from "react";

export default function PedomanPreview() {
  const [open, setOpen] = useState(false);
  // use PDF fragment to request fit-to-width in many browsers/pdf viewers
  const src = "/documents/Pedoman-DPRI-2026.pdf#zoom=page-width";

  return (
    <div className="bg-surface border border-gray-200 rounded-lg p-6 shadow-soft">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-text-dark">Pedoman DPRI 2026</h3>
          <p className="text-text-light text-sm">Dokumen resmi program</p>
        </div>
      </div>

      <p className="text-text-light mb-4">Buku pedoman resmi Duta Pelajar Remaja Indonesia Edisi 2025/2026.</p>

      <div className="mb-4">
        <div className="w-full rounded-md overflow-hidden">
          <object
            data={src}
            type="application/pdf"
            className="w-full h-[60vh] md:h-[90vh]"
            aria-label="Preview Pedoman DPRI 2026"
            style={{ minWidth: 0, display: "block" }}
          >
            <p className="p-4 text-sm text-center">
              Dokumen tidak bisa ditampilkan. <a href={src} className="text-primary underline">Buka di tab baru</a>
            </p>
          </object>
        </div>
      </div>

      {/* tombol buka dokumen lengkap dihapus sesuai permintaan */}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-5xl mx-4 md:mx-auto md:w-4/5 h-[calc(100vh-64px)] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b">
              <h4 className="font-semibold">Pedoman DPRI 2026 — Tampilan Lengkap</h4>
              <div className="flex items-center gap-2">
                <a href={src} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                  Buka di tab baru
                </a>
                <button onClick={() => setOpen(false)} className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">
                  Tutup
                </button>
              </div>
            </div>
            <div className="w-full h-full">
              <iframe src={src} className="w-full h-[calc(100vh-128px)] md:h-[calc(100vh-128px)]" title="Pedoman DPRI 2026 - full" allowFullScreen />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

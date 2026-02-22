"use client";

import { useState } from "react";

export default function PedomanPreview() {
  const [open, setOpen] = useState(false);
  // use PDF fragment to request fit-to-width in many browsers/pdf viewers
  const src = "/documents/Pedoman-DPRI-2026.pdf#zoom=page-width";

  return (
    <div>
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

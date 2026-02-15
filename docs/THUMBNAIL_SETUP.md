# Video Thumbnail Generation Guide

## 📱 Current Implementation

Pada halaman **Hall of Fame**, semua video sekarang menggunakan format **WebM** dengan lazy loading untuk hemat kuota internet user.

### Fitur Utama:
- ✅ **Lazy Loading**: Video hanya diload saat terlihat di viewport
- ✅ **WebM Format**: ~40-50% lebih kecil dari MP4
- ✅ **Thumbnail Support**: Menampilkan thumbnail saat loading
- ✅ **No Preload**: Bandwidth hemat, user kontrol play

## 🖼️ Thumbnail Setup

Ada 2 cara untuk setup thumbnail:

### Opsi 1: Generate Otomatis (Recommended)

Memerlukan **ffmpeg** (video processing tool).

**Installation:**

```bash
# macOS (homebrew)
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# Windows (choco)
choco install ffmpeg
```

**Generate Thumbnails:**

```bash
npm run generate-thumbnails
```

Ini akan:
- ✅ Automatically extract frame pertama dari setiap WebM
- ✅ Resize to 320x180 (optimal size)
- ✅ Convert ke JPEG (format universal, highly compatible)
- ✅ Save ke `/public/thumbnails/`

**Contoh hasil:**
```
public/
└── thumbnails/
    ├── DPRI_Congratulations.jpg
    ├── DPRI_The Winners.jpg
    ├── DPRI_Kayla Adelia.jpg
    └── ... (lebih banyak)
```

### Opsi 2: Manual Upload Thumbnail

Jika belum mau install ffmpeg:

1. **Buat folder:** `public/thumbnails/`
2. **Nama file harus match video name:**
   - Video: `DPRI_Congratulations.webm`
   - Thumbnail: `DPRI_Congratulations.jpg` atau `.png` atau `.webp`
3. **Upload file gambar ke folder**

VideoCard akan **otomatis** detect dan menggunakan thumbnail!

## 🔧 Teknologi Yang Digunakan

**VideoCard Component** (`app/components/VideoCard.tsx`):
- Intersection Observer API (lazy loading)
- HTML5 `poster` attribute (thumbnail display)
- WebM + MP4 fallback
- Responsive aspect ratio (aspect-video = 16:9)

## 📊 File Size Comparison

```
DPRI_Congratulations:
├── MP4:     2.8 MB
├── WebM:    7.0 MB
├── Thumbnail (JPEG): 15-25 KB
└── Total:  ~7.0 MB (vs 2.8 MB MP4)

Format Comparison:
├── JPEG: 15-25 KB (universal, recommended for thumbnails)
├── WebP: 10-15 KB (smaller but needs support)
└── PNG:  20-30 KB (lossless but bigger)
```

## ⚙️ Setup Video Card Data

Di `app/hall-of-fame/page.tsx`:

```tsx
const highlightVideos = [
  {
    title: "Congratulations",
    description: "Ucapan selamat untuk seluruh pemenang dan finalis",
    webm: "/video/DPRI_Congratulations.webm",
    mp4: "/video/DPRI_Congratulations.mp4",
    // thumbnail auto-detected: /thumbnails/DPRI_Congratulations.webp
  },
  // ... more
];
```

VideoCard akan **otomatis**:
1. ✅ Detect thumbnail dari naming convention
2. ✅ Display saat loading
3. ✅ Switch ke live video saat user click play
4. ✅ Lazy load video metadata saat viewport

## 🚀 Quick Start

```bash
# 1. Pastikan WebM videos ada
ls public/video/*.webm

# 2. Install ffmpeg (skip jika sudah ada)
brew install ffmpeg

# 3. Generate thumbnails
npm run generate-thumbnails

# 4. Test locally
npm run dev

# 5. Build untuk production
npm run build
```

## 📝 Notes

- Thumbnail path harus match video filename (without extension)
- Format thumbnail: `.jpg` (recommended, auto-generated), `.png`, atau `.webp`
- Size: minimum 320x180px recommended
- Compression: kecil adalah yang baik (target < 30KB per thumbnail)

## 🎬 Video Codec Info

```
Format          | Size   | Browser Support | Quality  | Auto-Generate
--------------- | ------ | --------------- | -------- | --------
MP4 (H.264)     | 2-5 MB | ✓ Semua         | High     | ✗
WebM (VP9)      | 7-15MB | ✓ Modern        | High     | ✓
Thumbnail (JPEG)| 15-25KB| ✓ Semua         | Medium   | ✓
```

## ❓ FAQ

**Q: Apakah perlu ffmpeg?**
A: Tidak wajib. Manual upload thumbnail juga bisa.

**Q: Thumbnail tidak muncul di browser?**
A: Check di DevTools > Network, pastikan file path benar.

**Q: Bagaimana jika video tidak support?**
A: Fallback ke MP4 automatic. Atau upgrade browser user.

## 🔗 Related Files

- Component: [app/components/VideoCard.tsx](../../app/components/VideoCard.tsx)
- Page: [app/hall-of-fame/page.tsx](../../app/hall-of-fame/page.tsx)
- Script: [scripts/generate-thumbnails.js](./generate-thumbnails.js)

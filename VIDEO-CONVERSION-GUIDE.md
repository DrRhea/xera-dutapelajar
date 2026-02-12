# INSTRUKSI CONVERT VIDEO

## Masalah
Video tidak bisa ditampilkan di browser (hanya audio) karena menggunakan codec H.265/HEVC yang tidak didukung Chrome/Firefox.

## Solusi: Convert ke H.264

### Opsi 1: Menggunakan Script Batch (Setelah FFmpeg Terinstall)

1. **Tunggu FFmpeg selesai install** (download 223MB sedang berjalan)
2. **Close dan buka ulang terminal** setelah FFmpeg selesai install
3. **Double-click file**: `convert-videos.bat`
4. Tunggu proses selesai (akan memakan waktu beberapa menit)
5. **Double-click file**: `replace-videos.bat` untuk replace file asli
6. **Refresh browser** dan cek hasilnya

### Opsi 2: Menggunakan VLC Media Player (TERCEPAT)

1. Buka **VLC Media Player**
2. Menu: **Media** → **Convert/Save** (Ctrl+R)
3. Klik **Add** → Pilih semua video dari folder `public/video/`
4. Klik **Convert/Save** (dropdown) → **Convert**
5. Profile: **Video - H.264 + MP3 (MP4)**
6. Destination file: Pilih folder `public/video/` dengan nama `_converted.mp4`
7. Klik **Start**
8. Ulangi untuk semua video
9. Setelah semua selesai, jalankan `replace-videos.bat`

### Opsi 3: Online Converter

1. Buka: https://cloudconvert.com/mp4-converter
2. Upload video dari `public/video/`
3. Settings: **Codec: H.264**, Quality: **High**
4. Convert & Download
5. Replace file asli di folder `public/video/`
6. Ulangi untuk semua 8 video

### List Video Yang Perlu Diconvert:

- [ ] DPRI_2026.mp4
- [ ] DPRI_Andra Galang Pratama.mp4  
- [ ] DPRI_Congratulations.mp4
- [ ] DPRI_I Gusti Agung.mov ← **MOV ke MP4**
- [ ] DPRI_Kayla Adelia.mp4
- [ ] DPRI_Nadira Arunda.mp4
- [ ] DPRI_SMP.mp4
- [ ] DPRI_The Winners.mp4

## Catatan Penting

- File asli akan di-backup ke folder `public/video/originals/`
- Codec target: **H.264/AVC** (compatible dengan semua browser)
- Quality setting: **CRF 23** (balance antara ukuran & kualitas)
- Audio codec: **AAC 128kbps**

## Cek Hasil

Setelah convert:
1. Buka http://localhost:3000/hall-of-fame
2. Video seharusnya bisa diputar dengan gambar

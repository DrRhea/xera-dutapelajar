#!/usr/bin/env node

/**
 * Generate video thumbnails from WebM files
 * Output format: JPEG (universal format, compatible with all systems)
 * Alternative: WebP or PNG can be used manually
 * Usage: node scripts/generate-thumbnails.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const VIDEO_DIR = path.join(__dirname, '../public/video');
const THUMBNAIL_DIR = path.join(__dirname, '../public/thumbnails');

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(THUMBNAIL_DIR)) {
  fs.mkdirSync(THUMBNAIL_DIR, { recursive: true });
  console.log(`✓ Created directory: ${THUMBNAIL_DIR}`);
}

// Find all WebM files
const webmFiles = fs.readdirSync(VIDEO_DIR).filter(file => file.endsWith('.webm'));

if (webmFiles.length === 0) {
  console.log('❌ No WebM files found in', VIDEO_DIR);
  process.exit(1);
}

console.log(`\n📹 Found ${webmFiles.length} WebM files\n`);

// Generate thumbnail for each WebM file
webmFiles.forEach(file => {
  const videoPath = path.join(VIDEO_DIR, file);
  const baseName = path.basename(file, '.webm');
  const thumbnailPath = path.join(THUMBNAIL_DIR, `${baseName}.jpg`);

  try {
    // Check if thumbnail already exists
    if (fs.existsSync(thumbnailPath)) {
      console.log(`⏭️  ${baseName}.jpg already exists, skipping...`);
      return;
    }

    // Generate thumbnail using ffmpeg
    // Extract frame at 0 second, scale to 320x180, save as JPEG
    // Using JPEG as fallback (always available in ffmpeg)
    const command = `ffmpeg -ss 0 -i "${videoPath}" -vframes 1 -vf "scale=320:180:force_original_aspect_ratio=decrease,pad=320:180:(ow-iw)/2:(oh-ih)/2" -q:v 5 "${thumbnailPath}" -y`;
    
    execSync(command, { stdio: 'pipe' });
    
    const stats = fs.statSync(thumbnailPath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    console.log(`✓ ${baseName}.jpg (${sizeKB} KB)`);
  } catch (error) {
    console.error(`✗ Failed to generate thumbnail for ${file}:`);
    console.error(error.message);
    
    // Check if ffmpeg is installed
    if (error.message.includes('ffmpeg: not found')) {
      console.error('\n⚠️  ffmpeg not found. Install it using:');
      console.error('   brew install ffmpeg');
      process.exit(1);
    }
  }
});

console.log('\n✓ Thumbnail generation complete!\n');

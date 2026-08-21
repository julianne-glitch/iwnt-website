const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

const filesToOptimize = [
  'african-workforce-operations-candid.png',
  'african-workforce-operations-expert.png',
  'aissatou-diallo.png',
  'contact-hero.png'
];

async function optimizeImages() {
  for (const file of filesToOptimize) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      console.log(`Optimizing ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Saved as ${path.basename(outputPath)}`);
    } else {
      console.log(`File not found: ${inputPath}`);
    }
  }
}

optimizeImages().catch(console.error);

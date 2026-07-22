const { spawnSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const fs = require('fs');

function encodeWebVideo(inputFile, outputFile) {
  console.log(`Encoding ${inputFile}...`);
  // crf 18 is visually lossless. preset slow compresses better.
  // movflags +faststart moves moov atom to beginning of file for instant web playback.
  const result = spawnSync(ffmpeg, [
    '-y',
    '-i', inputFile,
    '-c:v', 'libx264',
    '-crf', '18',
    '-preset', 'slow',
    '-movflags', '+faststart',
    '-c:a', 'aac',
    '-b:a', '192k',
    outputFile
  ], { stdio: 'inherit' });

  if (result.status !== 0) {
    console.error(`Error encoding ${inputFile}`);
    process.exit(1);
  }
}

encodeWebVideo('public/real_ads/first_section_video.mp4', 'public/real_ads/first_section_web.mp4');
encodeWebVideo('public/real_ads/new stores_video.mp4', 'public/real_ads/new_stores_web.mp4');

// Clean up original big files and split chunks
fs.unlinkSync('public/real_ads/first_section_video.mp4');
fs.unlinkSync('public/real_ads/new stores_video.mp4');

for (let i = 0; i < 3; i++) {
  try { fs.unlinkSync(`public/real_ads/first_section_part00${i}.mp4`); } catch(e){}
  try { fs.unlinkSync(`public/real_ads/new_stores_part00${i}.mp4`); } catch(e){}
}

console.log('Encoding finished!');

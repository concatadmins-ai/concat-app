const { spawnSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const fs = require('fs');

function splitVideo(inputFile, outputPattern, durationLimit = 25) {
  console.log(`Splitting ${inputFile}...`);
  const result = spawnSync(ffmpeg, [
    '-i', inputFile,
    '-c', 'copy',
    '-map', '0',
    '-segment_time', durationLimit.toString(),
    '-f', 'segment',
    '-reset_timestamps', '1',
    outputPattern
  ], { stdio: 'inherit' });

  if (result.status !== 0) {
    console.error(`Error splitting ${inputFile}`);
    process.exit(1);
  }
}

splitVideo('public/real_ads/first_section_video.mp4', 'public/real_ads/first_section_part%03d.mp4', 20);
splitVideo('public/real_ads/new stores_video.mp4', 'public/real_ads/new_stores_part%03d.mp4', 25);

// Clean up original big files to avoid pushing them
fs.unlinkSync('public/real_ads/first_section_video.mp4');
fs.unlinkSync('public/real_ads/new stores_video.mp4');

console.log('Done splitting videos!');

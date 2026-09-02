import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/og.png', import.meta.url));
const W = 1200,
  H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1.3" cy="1.3" r="1.3" fill="#d8d4c9"/>
    </pattern>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbfaf8" stop-opacity="0"/>
      <stop offset="0.72" stop-color="#fbfaf8"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#fbfaf8"/>
  <rect width="${W}" height="360" fill="url(#dots)"/>
  <rect width="${W}" height="360" fill="url(#fade)"/>
  <g font-family="Georgia, 'Times New Roman', serif" fill="#1a1a19">
    <text x="90" y="250" font-size="94" font-weight="600">Boyuan Gao</text>
    <text x="92" y="322" font-size="38" font-style="italic" fill="#6b6a65">Learning agents &amp; intelligent systems</text>
  </g>
  <g font-family="'JetBrains Mono', 'DejaVu Sans Mono', monospace" fill="#9b998f" font-size="23" letter-spacing="3">
    <text x="90" y="500">LLM  ·  REINFORCEMENT LEARNING  ·  AGENTS</text>
    <text x="90" y="548" fill="#3a53c8">jackeyed.github.io</text>
  </g>
  <rect x="0" y="0" width="10" height="${H}" fill="#1a1a19"/>
</svg>`;

const buf = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, buf);
console.log('wrote', out, buf.length, 'bytes');

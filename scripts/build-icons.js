import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function createPawnSvg({ rounded = 0 } = {}) {
  const rxAttr = rounded > 0 ? `rx="${rounded}" ry="${rounded}"` : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Dark Slate Atmosphere -->
    <radialGradient id="slateBg" cx="50%" cy="38%" r="70%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="50%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#070A10"/>
    </radialGradient>

    <!-- Pawn Satin White-Slate Gradient -->
    <linearGradient id="pawnBodyGradient" x1="50%" y1="90" x2="50%" y2="420" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="30%" stop-color="#F8FAFC"/>
      <stop offset="70%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>

    <!-- Specular Highlight for Head -->
    <linearGradient id="specularGlow" x1="30%" y1="0%" x2="70%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>

    <!-- Dual Volumetric Drop Shadows -->
    <filter id="pawnShadow" x="-30%" y="-20%" width="160%" height="160%">
      <feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#000000" flood-opacity="0.55"/>
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.35"/>
    </filter>

    <!-- Fine Edge Rim Light -->
    <linearGradient id="frameRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.16)"/>
      <stop offset="50%" stop-color="rgba(255, 255, 255, 0.04)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.08)"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="512" height="512" ${rxAttr} fill="url(#slateBg)"/>
  <rect x="1" y="1" width="510" height="510" ${rxAttr} fill="none" stroke="url(#frameRim)" stroke-width="2"/>

  <!-- Minimalist Chess Pawn Composition -->
  <g filter="url(#pawnShadow)">
    <!-- 1. Head (Crown Sphere) -->
    <circle cx="256" cy="144" r="50" fill="url(#pawnBodyGradient)"/>
    <ellipse cx="242" cy="128" rx="20" ry="14" fill="url(#specularGlow)" transform="rotate(-25 242 128)"/>

    <!-- 2. Collar (Neck Ring) -->
    <rect x="220" y="190" width="72" height="15" rx="7.5" fill="url(#pawnBodyGradient)"/>

    <!-- 3. Stem / Waist Body -->
    <path d="M 234 200
             C 234 200, 237 236, 222 278
             C 207 318, 178 344, 178 344
             L 334 344
             C 334 344, 305 318, 290 278
             C 275 236, 278 200, 278 200
             Z"
          fill="url(#pawnBodyGradient)"/>

    <!-- 4. Pedestal Ring (Lower Torus) -->
    <rect x="166" y="342" width="180" height="18" rx="9" fill="url(#pawnBodyGradient)"/>

    <!-- 5. Base Plinth -->
    <path d="M 174 360
             L 152 384
             C 148 388, 146 394, 146 400
             L 146 412
             C 146 418, 150 422, 156 422
             L 356 422
             C 362 422, 366 418, 366 412
             L 366 400
             C 366 394, 364 388, 360 384
             L 338 360
             Z"
          fill="url(#pawnBodyGradient)"/>

    <!-- Minimalist Accent Grooves -->
    <line x1="222" y1="198" x2="290" y2="198" stroke="#94A3B8" stroke-width="1.5" stroke-opacity="0.4" stroke-linecap="round"/>
    <line x1="170" y1="352" x2="342" y2="352" stroke="#94A3B8" stroke-width="1.5" stroke-opacity="0.4" stroke-linecap="round"/>
  </g>
</svg>`;
}

const squareSvg = createPawnSvg({ rounded: 0 });
const squircleSvg = createPawnSvg({ rounded: 104 });

fs.writeFileSync('public/pawn-icon.svg', squircleSvg, 'utf-8');
fs.writeFileSync('temp-master.svg', squareSvg, 'utf-8');

// Render master 512x512 PNG
const html512 = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; }
  html, body { width: 512px; height: 512px; overflow: hidden; background: #070A10; }
  svg { width: 512px; height: 512px; display: block; }
</style>
</head>
<body>
${squareSvg}
</body>
</html>`;

fs.writeFileSync('temp-master.html', html512, 'utf-8');

execFileSync(edgePath, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  `--screenshot=${path.resolve('public/icon-512.png')}`,
  '--window-size=512,512',
  `file://${path.resolve('temp-master.html').replace(/\\/g, '/')}`
]);

fs.unlinkSync('temp-master.html');
fs.unlinkSync('temp-master.svg');

console.log('icon-512.png rendered successfully.');

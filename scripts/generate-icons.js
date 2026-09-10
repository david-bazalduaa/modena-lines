import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// Master SVG templates
// 1. Full square icon for apple-touch-icon, PWA maskable icons, and splash
function getMasterIconSvg({ rounded = 0 } = {}) {
  const rxAttr = rounded > 0 ? `rx="${rounded}" ry="${rounded}"` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Dark Slate Radial Atmosphere -->
    <radialGradient id="slateAtmosphere" cx="50%" cy="38%" r="68%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="55%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#080C14"/>
    </radialGradient>

    <!-- Pawn Light-Slate Gradient -->
    <linearGradient id="pawnShine" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="35%" stop-color="#F8FAFC"/>
      <stop offset="75%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>

    <!-- Ambient Occlusion / Drop Shadow for Volumetric Depth -->
    <filter id="pawnElevation" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#000000" flood-opacity="0.5"/>
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.35"/>
    </filter>

    <!-- Subtle Inner Rim Highlight for Sleek Apple Aesthetic -->
    <linearGradient id="rimHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.12)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)"/>
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="512" height="512" ${rxAttr} fill="url(#slateAtmosphere)"/>

  <!-- Subtle Border Rim -->
  <rect x="1" y="1" width="510" height="510" ${rxAttr} fill="none" stroke="url(#rimHighlight)" stroke-width="2"/>

  <!-- Centered Minimalist Chess Pawn with Brand Proportions & Safe-Zone Margin -->
  <!-- Bounding box: X: 147..365 (width ~218), Y: 88..424 (height ~336). Inset is ~17.2%, perfectly within iOS 15-20% safe-zone -->
  <g filter="url(#pawnElevation)" transform="translate(36, 45) scale(18.333)">
    <path
      d="M12 2.5a2.5 2.5 0 0 0-2.5 2.5c0 .67.27 1.28.7 1.73A4.5 4.5 0 0 0 8 11a4.49 4.49 0 0 0 2.22 3.89L10 18H8v2.5h8V18h-2l-.22-3.11A4.49 4.49 0 0 0 16 11a4.5 4.5 0 0 0-2.2-4.27c.43-.45.7-1.06.7-1.73A2.5 2.5 0 0 0 12 2.5z"
      fill="url(#pawnShine)"
    />
  </g>
</svg>`;
}

// 2. Favicon SVG with subtle rounded squircle corner for crisp tab display
function getPawnFaviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="favSlate" cx="50%" cy="38%" r="68%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="55%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#080C14"/>
    </radialGradient>
    <linearGradient id="favPawn" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="35%" stop-color="#F8FAFC"/>
      <stop offset="75%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <filter id="favElevation" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#000000" flood-opacity="0.5"/>
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
  </defs>
  <rect width="512" height="512" rx="112" ry="112" fill="url(#favSlate)"/>
  <rect x="2" y="2" width="508" height="508" rx="110" ry="110" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="3"/>
  <g filter="url(#favElevation)" transform="translate(36, 45) scale(18.333)">
    <path
      d="M12 2.5a2.5 2.5 0 0 0-2.5 2.5c0 .67.27 1.28.7 1.73A4.5 4.5 0 0 0 8 11a4.49 4.49 0 0 0 2.22 3.89L10 18H8v2.5h8V18h-2l-.22-3.11A4.49 4.49 0 0 0 16 11a4.5 4.5 0 0 0-2.2-4.27c.43-.45.7-1.06.7-1.73A2.5 2.5 0 0 0 12 2.5z"
      fill="url(#favPawn)"
    />
  </g>
</svg>`;
}

function renderHtmlToPng(svgString, outPath, width, height) {
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: transparent; }
  svg { width: 100%; height: 100%; display: block; }
</style>
</head>
<body>
${svgString}
</body>
</html>`;

  const tmpHtml = path.resolve(`temp-render-${width}x${height}.html`);
  fs.writeFileSync(tmpHtml, htmlContent, 'utf-8');

  const absOut = path.resolve(outPath);
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--screenshot=${absOut}`,
    `--window-size=${width},${height}`,
    `file://${tmpHtml.replace(/\\/g, '/')}`
  ];

  execFileSync(edgePath, args);
  fs.unlinkSync(tmpHtml);

  const buf = fs.readFileSync(absOut);
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  console.log(`✓ Rendered ${outPath}: ${w}x${h} (${buf.length} bytes)`);
}

async function main() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Write pawn-icon.svg (for browser tab and crisp vector rendering)
  const svgFavicon = getPawnFaviconSvg();
  const pawnIconSvgPath = path.join(publicDir, 'pawn-icon.svg');
  fs.writeFileSync(pawnIconSvgPath, svgFavicon, 'utf-8');
  console.log(`✓ Generated ${pawnIconSvgPath}`);

  // 2. Generate master square SVG for iOS apple-touch-icon and PWA manifest
  const squareSvg = getMasterIconSvg({ rounded: 0 });

  // 3. Render apple-touch-icon.png (180x180)
  const appleTouchPath = path.join(publicDir, 'apple-touch-icon.png');
  renderHtmlToPng(squareSvg, appleTouchPath, 180, 180);

  // 4. Render icon-192.png (192x192) for Web App Manifest
  const icon192Path = path.join(publicDir, 'icon-192.png');
  renderHtmlToPng(squareSvg, icon192Path, 192, 192);

  // 5. Render icon-512.png (512x512) for Web App Manifest
  const icon512Path = path.join(publicDir, 'icon-512.png');
  renderHtmlToPng(squareSvg, icon512Path, 512, 512);

  // 6. Render favicon.png (48x48)
  const favicon48Path = path.join(publicDir, 'favicon.png');
  renderHtmlToPng(svgFavicon, favicon48Path, 48, 48);

  console.log('All icons generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

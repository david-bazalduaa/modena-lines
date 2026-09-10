# Build master 512x512 PNG and pawn-icon.svg
Write-Host "1. Building master 512x512 and pawn-icon.svg..."
node scripts/build-icons.js

# Resize to all required standard dimensions using high-quality bicubic interpolation
Write-Host "2. Generating high-resolution variants..."
powershell -ExecutionPolicy Bypass -File scripts/resize.ps1 public/icon-512.png public/apple-touch-icon.png 180 180
powershell -ExecutionPolicy Bypass -File scripts/resize.ps1 public/icon-512.png public/icon-192.png 192 192
powershell -ExecutionPolicy Bypass -File scripts/resize.ps1 public/icon-512.png public/favicon.png 48 48

# Generate legacy favicon.ico
Add-Type -AssemblyName System.Drawing
$srcImg = [System.Drawing.Image]::FromFile("public/favicon.png")
$icoBmp = New-Object System.Drawing.Bitmap($srcImg, 32, 32)
$iconHandle = $icoBmp.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($iconHandle)
$fs = [System.IO.File]::OpenWrite("public/favicon.ico")
$icon.Save($fs)
$fs.Close()
$icon.Dispose()
$icoBmp.Dispose()
$srcImg.Dispose()
Write-Host "Generated public/favicon.ico (32x32)"

Write-Host "All assets generated successfully in public/!"
Get-ChildItem -Path public


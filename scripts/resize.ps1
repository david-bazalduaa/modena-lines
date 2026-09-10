param(
    [string]$SourcePath,
    [string]$DestinationPath,
    [int]$Width,
    [int]$Height
)

Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Image]::FromFile($SourcePath)
$dest = New-Object System.Drawing.Bitmap($Width, $Height)
$g = [System.Drawing.Graphics]::FromImage($dest)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.DrawImage($src, 0, 0, $Width, $Height)

$dest.Save($DestinationPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$dest.Dispose()
$src.Dispose()

Write-Host "Resized $SourcePath -> $DestinationPath ($Width x $Height)"

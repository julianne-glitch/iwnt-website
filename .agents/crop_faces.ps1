Add-Type -AssemblyName System.Drawing

$heroPath = "c:\Users\J.MOKOBO\Documents\iwnt-next\public\images\iwnt-hero.png"
$outDir = "c:\Users\J.MOKOBO\Documents\iwnt-next\public\images"

$img = [System.Drawing.Image]::FromFile($heroPath)
$w = $img.Width   # 1024
$h = $img.Height  # 574

# Man's face - move further right and up
$manSize = 110
$manX = 550
$manY = 220
$manRect = New-Object System.Drawing.Rectangle($manX, $manY, $manSize, $manSize)
$manBmp = New-Object System.Drawing.Bitmap($manSize, $manSize)
$g = [System.Drawing.Graphics]::FromImage($manBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($img, 0, 0, $manRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$manBmp.Save("$outDir\profile-man.png", [System.Drawing.Imaging.ImageFormat]::Png)
$manBmp.Dispose()
Write-Host "Saved profile-man.png from (${manX},${manY}) size ${manSize}"

$img.Dispose()
Write-Host "Done!"

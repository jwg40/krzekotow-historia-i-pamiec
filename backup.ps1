$Project = "C:\Users\noteb\cyfrowe-archiwum-krzekotowa"
$Backup = "C:\Kopie\Cyfrowe-Archiwum-Krzekotowa"

Write-Host ""
Write-Host "Tworzenie kopii projektu..." -ForegroundColor Cyan

if (Test-Path $Backup) {
    Remove-Item $Backup -Recurse -Force
}

New-Item -ItemType Directory -Path $Backup -Force | Out-Null

$Folders = @(
    "app",
    "components",
    "content",
    "lib",
    "public"
)

foreach ($Folder in $Folders) {
    $Source = Join-Path $Project $Folder

    if (Test-Path $Source) {
        Copy-Item $Source -Destination $Backup -Recurse -Force
    }
}

$Files = @(
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "next.config.ts",
    "next.config.js",
    "postcss.config.mjs",
    "eslint.config.mjs"
)

foreach ($File in $Files) {
    $Source = Join-Path $Project $File

    if (Test-Path $Source) {
        Copy-Item $Source -Destination $Backup -Force
    }
}

Write-Host ""
Write-Host "KOPIA GOTOWA." -ForegroundColor Green
Write-Host "Lokalizacja: $Backup" -ForegroundColor Yellow
Write-Host ""
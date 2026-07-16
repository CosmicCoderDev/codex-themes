[CmdletBinding(SupportsShouldProcess)]
param(
    [string]$Destination = (Join-Path $env:USERPROFILE '.codex\themes'),
    [switch]$Force
)

$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceDirectory = Join-Path $projectRoot 'themes'
$themeFiles = Get-ChildItem -LiteralPath $sourceDirectory -Filter '*.tmTheme' -File

if (-not $themeFiles) {
    throw "No .tmTheme files were found in $sourceDirectory"
}

if ($PSCmdlet.ShouldProcess($Destination, 'Create Codex theme directory')) {
    New-Item -ItemType Directory -Force -Path $Destination | Out-Null
}

foreach ($theme in $themeFiles) {
    $target = Join-Path $Destination $theme.Name
    if ((Test-Path -LiteralPath $target) -and -not $Force) {
        Write-Warning "Skipped existing theme: $target (use -Force to overwrite)"
        continue
    }

    if ($PSCmdlet.ShouldProcess($target, "Install $($theme.Name)")) {
        Copy-Item -LiteralPath $theme.FullName -Destination $target -Force
        Write-Host "Installed: $target"
    }
}

Write-Host 'Open Codex TUI and run /theme to preview and select a theme.'

[CmdletBinding()]
param(
    [string]$SourceDirectory = (Join-Path (Split-Path -Parent $PSScriptRoot) 'desktop\source'),
    [string]$OutputDirectory = (Join-Path (Split-Path -Parent $PSScriptRoot) 'desktop\share')
)

$ErrorActionPreference = 'Stop'
$prefix = 'codex-theme-v1:'
$hexPattern = '^#[0-9A-Fa-f]{6}$'
$requiredThemeFields = @('accent', 'contrast', 'fonts', 'ink', 'opaqueWindows', 'semanticColors', 'surface')
$requiredSemanticFields = @('diffAdded', 'diffRemoved', 'skill')

function Assert-HexColor {
    param([object]$Value, [string]$Path)

    if ($Value -isnot [string] -or $Value -notmatch $hexPattern) {
        throw "$Path must be a six-digit hex color."
    }
}

function Assert-ThemeDocument {
    param([pscustomobject]$Document, [string]$FileName)

    if ($Document.variant -notin @('light', 'dark')) {
        throw "$FileName has an invalid variant."
    }

    $expectedCodeTheme = if ($Document.variant -eq 'light') { 'codex-light' } else { 'codex-dark' }
    if ($Document.codeThemeId -ne $expectedCodeTheme) {
        throw "$FileName must use codeThemeId '$expectedCodeTheme'."
    }

    foreach ($field in $requiredThemeFields) {
        if ($Document.theme.PSObject.Properties.Name -notcontains $field) {
            throw "$FileName is missing theme.$field."
        }
    }

    Assert-HexColor $Document.theme.accent "$FileName theme.accent"
    Assert-HexColor $Document.theme.ink "$FileName theme.ink"
    Assert-HexColor $Document.theme.surface "$FileName theme.surface"

    if ($Document.theme.contrast -isnot [long] -or $Document.theme.contrast -lt 0 -or $Document.theme.contrast -gt 100) {
        throw "$FileName theme.contrast must be an integer from 0 through 100."
    }

    if ($Document.theme.opaqueWindows -isnot [bool]) {
        throw "$FileName theme.opaqueWindows must be boolean."
    }

    foreach ($fontField in @('code', 'ui')) {
        $font = $Document.theme.fonts.$fontField
        if ($null -ne $font -and $font -isnot [string]) {
            throw "$FileName theme.fonts.$fontField must be a string or null."
        }
    }

    foreach ($field in $requiredSemanticFields) {
        if ($Document.theme.semanticColors.PSObject.Properties.Name -notcontains $field) {
            throw "$FileName is missing theme.semanticColors.$field."
        }
        Assert-HexColor $Document.theme.semanticColors.$field "$FileName theme.semanticColors.$field"
    }
}

$sourceFiles = Get-ChildItem -LiteralPath $SourceDirectory -Filter '*.json' -File | Sort-Object Name
if ($sourceFiles.Count -eq 0) {
    throw "No desktop theme sources were found in $SourceDirectory"
}

New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)

foreach ($sourceFile in $sourceFiles) {
    $document = Get-Content -Raw -LiteralPath $sourceFile.FullName | ConvertFrom-Json
    Assert-ThemeDocument $document $sourceFile.Name
    $shareString = $prefix + ($document | ConvertTo-Json -Depth 10 -Compress)
    $outputName = [System.IO.Path]::GetFileNameWithoutExtension($sourceFile.Name) + '.theme.txt'
    $outputPath = Join-Path $OutputDirectory $outputName
    [System.IO.File]::WriteAllText($outputPath, $shareString, $utf8NoBom)
    Write-Output "Built: $outputPath"
}

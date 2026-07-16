[CmdletBinding(SupportsShouldProcess)]
param(
    [string]$Destination = (Join-Path $env:USERPROFILE '.codex\themes')
)

$ErrorActionPreference = 'Stop'
$managedThemes = @(
    'codex-nebula.tmTheme',
    'codex-hacker.tmTheme'
)

foreach ($themeName in $managedThemes) {
    $target = Join-Path $Destination $themeName
    if (-not (Test-Path -LiteralPath $target)) {
        Write-Host "Not installed: $target"
        continue
    }

    if ($PSCmdlet.ShouldProcess($target, "Remove $themeName")) {
        Remove-Item -LiteralPath $target
        Write-Host "Removed: $target"
    }
}

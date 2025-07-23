<#
.SYNOPSIS
    Finds and optionally removes duplicate files in a specified directory and its subdirectories.

.DESCRIPTION
    This script scans a target folder recursively to find files that are perfect duplicates based on their SHA256 hash.
    It groups duplicates, keeps the oldest file in each group, and deletes the rest.
    It includes robust error handling, progress reporting, and a mandatory -WhatIf switch for safety.

.PARAMETER Path
    The full path to the folder you want to scan for duplicates. This parameter is mandatory.

.PARAMETER Force
    A switch parameter that, when present, will execute the deletion. Without it, the script runs in "WhatIf" mode,
    showing what would be deleted without actually deleting anything.

.EXAMPLE
    # Perform a dry run to see what would be deleted in the "D:\Photos" folder.
    .\remove_duplicates_advanced.ps1 -Path "D:\Photos"

.EXAMPLE
    # Actually delete the duplicate files in "D:\Downloads". You will be prompted for confirmation.
    .\remove_duplicates_advanced.ps1 -Path "D:\Downloads" -Force

 .NOTES
    Author: Gemini Code Assist
    Always back up your data before running scripts that delete files.
#>
function Remove-DuplicateFiles {
    [CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'High')]
    param(
        [Parameter(Mandatory = $true, ValueFromPipeline = $false)]
        [string]$Path,

        [Parameter(Mandatory = $false)]
        [switch]$Force
    )

    if (-not (Test-Path -Path $Path -PathType Container)) {
        Write-Error "Folder not found: '$Path'. Please provide a valid directory path."
        return
    }

    Write-Host "Scanning folder: $Path" -ForegroundColor Yellow
    $allFiles = Get-ChildItem -Path $Path -Recurse -File -ErrorAction SilentlyContinue
    $fileHashes = @{}

    # Calculate hashes and show progress
    for ($i = 0; $i -lt $allFiles.Count; $i++) {
        $file = $allFiles[$i]
        Write-Progress -Activity "Calculating Hashes" -Status "Processing $($file.Name)" -PercentComplete (($i / $allFiles.Count) * 100)
        try {
            $hash = (Get-FileHash -Path $file.FullName -Algorithm SHA256 -ErrorAction Stop).Hash
            if ($fileHashes.ContainsKey($hash)) {
                $fileHashes[$hash] += @($file)
            } else {
                $fileHashes[$hash] = @($file)
            }
        } catch {
            Write-Warning "Could not process file: $($file.FullName). Error: $($_.Exception.Message)"
        }
    }

    # Filter for groups with more than one file (duplicates)
    $duplicateGroups = $fileHashes.Values | Where-Object { $_.Count -gt 1 }

    Write-Host "Found $($duplicateGroups.Count) sets of duplicate files." -ForegroundColor Cyan

    foreach ($group in $duplicateGroups) {
        # Sort by creation time to keep the oldest file
        $filesToProcess = $group | Sort-Object CreationTime
        $original = $filesToProcess | Select-Object -First 1
        $duplicatesToDelete = $filesToProcess | Select-Object -Skip 1

        Write-Host "--------------------------------------------------" -ForegroundColor White
        Write-Host "Keeping (oldest): $($original.FullName)" -ForegroundColor Green
        $duplicatesToDelete | ForEach-Object {
            Write-Host "Deleting (newer): $($_.FullName)" -ForegroundColor Red
            if ($Force) {
                # The -Confirm:$false is overridden by CmdletBinding if -Force is not used
                Remove-Item -Path $_.FullName -Force -Confirm:$false -WhatIf:(!$Force)
            }
        }
    }

    if (!$Force) {
        Write-Host "`nThis was a dry run. No files were deleted. Use the -Force switch to perform deletion." -ForegroundColor Yellow
    }
}

# To run the function, you can call it directly after loading it into memory:
# Remove-DuplicateFiles -Path "C:\Your\Folder\Path"
# Remove-DuplicateFiles -Path "C:\Your\Folder\Path" -Force
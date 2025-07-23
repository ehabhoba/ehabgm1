#!/bin/bash

# A more robust script to find and optionally delete duplicate files.
# It finds duplicates based on content (SHA256 hash).
# By default, it only reports duplicates. Use the --delete flag to enable deletion.

set -euo pipefail # Exit on error, undefined variable, or pipe failure

usage() {
    echo "Usage: $0 [--delete] <directory>"
    echo "  Finds duplicate files in <directory>."
    echo "  --delete    Prompts to delete duplicate files, keeping the newest one in each set."
    exit 1
}

# --- Argument Parsing ---
DELETE_MODE=0
TARGET_DIR=""

if [[ $# -eq 0 ]]; then
    usage
fi

for arg in "$@"; do
    case $arg in
        --delete)
        DELETE_MODE=1
        shift
        ;;
        -h|--help)
        usage
        ;;
        *)
        if [[ -z "$TARGET_DIR" ]]; then
            TARGET_DIR="$arg"
        else
            echo "Error: Too many arguments."
            usage
        fi
        shift
        ;;
    esac
done

if [[ -z "$TARGET_DIR" ]] || [[ ! -d "$TARGET_DIR" ]]; then
    echo "Error: Please provide a valid directory."
    usage
fi

# --- Dependency Check ---
if ! command -v sha256sum &> /dev/null; then
    echo "Error: 'sha256sum' command not found. Please install it."
    exit 1
fi

echo "Scanning for duplicates in '$TARGET_DIR'..."

# Find all files, calculate hash, and group by hash. Then process groups with more than 1 file.
find "$TARGET_DIR" -type f -print0 | xargs -0 sha256sum | sort | uniq -w 64 --all-repeated=separate | while read -r line; do
    if [[ -z "$line" ]]; then continue; fi # Handle separator lines from uniq

    echo "--------------------------------------------------"
    echo "Found duplicate set:"
    # Get all files in the current duplicate set, find the newest, and list others for deletion
    files_in_set=$(echo "$line" | sed 's/^[0-9a-f]*  //' | tr '\n' '\0')
    newest_file=$(find $files_in_set -type f -printf '%T@ %p\n' | sort -n | tail -1 | cut -d' ' -f2-)

    echo "$line" | while read -r hash filepath; do
        if [[ "$filepath" == "$newest_file" ]]; then
            echo "  [KEEPING - NEWEST] $filepath"
        else
            echo "  [DUPLICATE]        $filepath"
            if [[ $DELETE_MODE -eq 1 ]]; then
                read -p "    Delete this file? (y/N) " -n 1 -r
                echo
                if [[ $REPLY =~ ^[Yy]$ ]]; then
                    rm -i "$filepath" && echo "    DELETED."
                fi
            fi
        fi
    done
done

echo "--------------------------------------------------"
echo "Scan complete."
if [[ $DELETE_MODE -eq 0 ]]; then
    echo "This was a dry run. To enable deletion, use the --delete flag."
fi
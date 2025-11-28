#!/bin/bash

INPUT_DIR="assets/pdf"
OUTPUT_DIR="assets/img/publication_preview"

mkdir -p "$OUTPUT_DIR"

for pdf in $INPUT_DIR/*.pdf; do
    filename=$(basename "$pdf" .pdf)
    convert -density 200 "$pdf[0]" \
        -background white -alpha remove -alpha off\
        -quality 90 "$OUTPUT_DIR/$filename.png"
    echo "Generated preview for $pdf"
done

#!/bin/bash
# prerequisites:
#  - pandoc
#  - pdflatex

rm *.pdf
cat metadata.yml README.md \
  | sed 's/^# .*$//' \
  | sed 's/^##/#/g' \
  | pandoc --from=markdown --output=cypress-intro-$(git rev-parse HEAD).pdf --variable urlcolor=cyan

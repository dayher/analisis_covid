#!/bin/bash

# Exit immediately if any command fails
set -e

# Go to the root of the project
cd "$(dirname "$0")/.."

echo "======================================"
echo "Starting COVID Analysis Test Suite"
echo "======================================"

# 1. Clean and Rebuild
echo "Compiling the C program..."
make re

# 2. Regenerate binary names file
echo "Regenerating names.bin from CSV..."
python3 scripts/generate_names.py

# 3. Run the program on data.csv
echo "Executing the program with data.csv..."
./analisis_covid -in data.csv -out output_test.txt

# 4. Compare outputs
echo "Comparing output with expected results..."
if diff -u tests/expected_output.txt output_test.txt; then
    echo "======================================"
    echo " SUCCESS: All tests passed!"
    echo "======================================"
    # Cleanup temporary test output
    rm -f output_test.txt
    exit 0
else
    echo "======================================"
    echo " FAIL: Output differs from expected!"
    echo "======================================"
    exit 1
fi

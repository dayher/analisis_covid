#!/usr/bin/env python3
import os
import sys

def main():
    csv_path = "iso3166.csv"
    bin_path = "names.bin"
    max_char_name = 150

    if not os.path.exists(csv_path):
        print(f"Error: {csv_path} not found.", file=sys.stderr)
        sys.exit(1)

    # First pass: find the maximum code to determine the size of names.bin
    max_code = 0
    records = []
    with open(csv_path, "r", encoding="utf-8", errors="replace") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                name, code_str = line.rsplit(",", 1)
                code = int(code_str.strip())
                records.append((name.strip(), code))
                if code > max_code:
                    max_code = code
            except ValueError:
                print(f"Skipping invalid line: {line}", file=sys.stderr)

    # Size of the bin file is determined by (max_code * 150)
    # The last write starts at (max_code * 150 - 1) and can be up to 150 bytes.
    # So the total size needed is (max_code * 150) - 1 + 150 = max_code * 150 + 149.
    # To match the original size (134249 bytes) where max_code = 894 (Zambia):
    # 894 * 150 + 149 = 134249.
    total_size = max_code * max_char_name + 149
    bin_data = bytearray(total_size)

    for name, code in records:
        offset = code * max_char_name - 1
        if offset < 0:
            offset = 0
        name_bytes = name.encode("utf-8")
        # Ensure we do not exceed 150 bytes (leave room for null terminator)
        if len(name_bytes) >= max_char_name:
            name_bytes = name_bytes[:max_char_name - 1]
        
        # Write the name at the calculated offset
        for idx, b in enumerate(name_bytes):
            bin_data[offset + idx] = b
        # Ensure a null terminator is present after the name
        bin_data[offset + len(name_bytes)] = 0

    with open(bin_path, "wb") as f:
        f.write(bin_data)
    print(f"Successfully generated {bin_path} ({len(bin_data)} bytes) from {csv_path}")

if __name__ == "__main__":
    main()

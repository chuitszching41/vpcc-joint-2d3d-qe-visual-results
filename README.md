# V-PCC Quality Enhancement Visual Results

This repository hosts the project page and supplementary visual comparisons for V-PCC compressed point cloud quality enhancement.

The website presents visual comparisons between lossy V-PCC compressed point clouds and the enhanced results produced by our proposed method. The visual results are organized by rate configuration, including R6, R7, and R8.

## Project Page

The project page is available at:

```text
[]
```

## Repository Structure

```text
.
├── README.md
├── index.html
├── style.css
├── script.js
assets/
├── redandblack/
│   ├── r6_lossy.png
│   ├── r6_enhanced.png
│   ├── r7_lossy.png
│   ├── r7_enhanced.png
│   ├── r8_lossy.png
│   └── r8_enhanced.png
│   ├── r6_lossy.jpg
│   ├── r6_enhanced.jpg
│   ├── r7_lossy.jpg
│   ├── r7_enhanced.jpg
│   ├── r8_lossy.jpg
│   └── r8_enhanced.jpg
└── soldier/
    ├── r6_lossy.png
    ├── r6_enhanced.png
    ├── r7_lossy.png
    ├── r7_enhanced.png
    ├── r8_lossy.png
    └── r8_enhanced.png
    ├── r6_lossy.jpg
    ├── r6_enhanced.jpg
    ├── r7_lossy.jpg
    ├── r7_enhanced.jpg
    ├── r8_lossy.jpg
    └── r8_enhanced.jpg
```

## Visual Comparisons

The visual results include two-column comparisons:

| Rate | Lossy                 | Enhanced                 |
| ---- | --------------------- | ------------------------ |
| R6   | `assets/r6_lossy.png` | `assets/r6_enhanced.png` |
| R7   | `assets/r7_lossy.png` | `assets/r7_enhanced.png` |
| R8   | `assets/r8_lossy.png` | `assets/r8_enhanced.png` |

## How to Update Figures

1. Place the new images inside the `assets/` folder.
2. Use clear and consistent filenames, for example:

```text
r6_lossy.png
r6_enhanced.png
r7_lossy.png
r7_enhanced.png
r8_lossy.png
r8_enhanced.png
```

3. Update the image paths in `index.html` if the filenames are changed.
4. Commit and push the changes to GitHub.
5. The GitHub Pages website will be updated after the repository is deployed.

## Notes

The visual comparisons are provided as supplementary qualitative results. Quantitative evaluations are reported in the paper.

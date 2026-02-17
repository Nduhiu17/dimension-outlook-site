# Image Setup Guide for Local Installation

## Overview

This guide explains how to set up images for offline use when you download and run the project locally.

## Quick Setup

### Option 1: Images Already Included

If you downloaded the complete project package with images, they should already be in the `public/` folder:

```
project-root/
└── public/
    ├── signage/
    ├── screen-print/
    ├── laser-engraving/
    ├── large-format-printing/
    ├── heat-press/
    ├── digital-printing/
    └── cnc-laser-cutting/
```

Just run:
```bash
pnpm install
pnpm dev
```

### Option 2: Manual Image Organization

If images need to be added manually:

1. **Create the public folder structure:**
   ```bash
   mkdir -p public/signage
   mkdir -p public/screen-print
   mkdir -p public/laser-engraving
   mkdir -p public/large-format-printing
   mkdir -p public/heat-press
   mkdir -p public/digital-printing
   mkdir -p public/cnc-laser-cutting
   ```

2. **Copy your images into the respective folders:**
   - Rename images to match the numbering: `1.jpeg`, `2.jpeg`, etc.
   - Place them in the corresponding service folder

3. **Example structure:**
   ```
   public/
   └── screen-print/
       ├── 1.jpeg
       ├── 2.jpeg
       ├── 3.jpeg
       └── ... (up to 14 images)
   ```

## Image Requirements

### Naming Convention
- All images must be in `.jpeg` or `.jpg` format
- Name them sequentially: `1.jpeg`, `2.jpeg`, `3.jpeg`, etc.
- No spaces or special characters in filenames

### Recommended Image Sizes

For optimal performance, optimize images before adding them:

- **Service cards:** 800x600px or similar aspect ratio
- **Portfolio items:** 600x500px 
- **All images:** Compress to reduce file size (aim for < 500KB per image)

Use free tools like:
- [TinyJPG](https://tinyjpg.com/)
- [Squoosh](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/)

### Required Images

The website references these images in components:

**Services Section** (`components/services.tsx`):
- screen-print: 3+ images
- laser-engraving: 3+ images
- large-format-printing: 3+ images
- heat-press: 3+ images
- digital-printing: 3+ images
- cnc-laser-cutting: 3+ images

**Portfolio Section** (`components/portfolio.tsx`):
- signage: 1 image minimum
- screen-print: Multiple images (uses 5, 8, etc.)
- laser-engraving: Multiple images
- large-format-printing: Multiple images
- heat-press: Multiple images
- digital-printing: Multiple images
- cnc-laser-cutting: Multiple images

## Troubleshooting

### Images Not Showing?

1. **Check file paths:**
   - Verify images are in `public/` folder
   - Run `ls -la public/` to confirm directory structure

2. **Check file names:**
   - Ensure images are numbered sequentially
   - Verify `.jpeg` extension (not `.jpg`)

3. **Clear cache:**
   ```bash
   rm -rf .next
   pnpm dev
   ```

4. **Verify image quality:**
   - Ensure images open correctly in image viewer
   - Check they're not corrupted

### Performance Issues?

- Compress images further
- Check image file sizes in `public/` folder
- Images should be under 1MB each

## Adding New Images

To add new project images:

1. Place images in appropriate folder under `public/`
2. Name them sequentially after existing images
3. Update component files if adding new categories:
   - Edit `components/services.tsx` to add new service
   - Edit `components/portfolio.tsx` to add new portfolio items

## Offline Guarantee

Once the project is installed locally with images in the `public/` folder:

✅ All images load from local storage (no internet required)
✅ Images are served by Next.js static file server
✅ No external CDN or API dependencies
✅ Fast load times even on slow connections
✅ Can be built and deployed anywhere

## Next Steps

After setting up images:

1. Start the dev server: `pnpm dev`
2. Navigate to `http://localhost:3000`
3. Check that all images display correctly
4. Customize content as needed in component files

---

For questions, refer to the main `README.md` file.

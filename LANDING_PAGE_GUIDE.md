# Amazon Affiliate Landing Page - Setup Guide

## Overview
This repository contains a mobile-first responsive HTML5 landing page designed for Amazon affiliate marketing, specifically optimized for YouTube traffic.

## Quick Start

### 1. Customize Your Affiliate Link
Open `index.html` and replace `YOUR_AFFILIATE_LINK_HERE` with your actual Amazon affiliate link in **2 locations**:
- Main CTA button (around line 578)
- Sticky mobile CTA button (around line 662)

### 2. Update Product Details
Replace the following with your actual product information:

**Product Image:**
- Line ~559: Replace the placeholder image URL with your product image
- Recommended size: 600x600px or larger

**Product Information:**
- **Title** (line ~565): Update product name
- **Rating** (line ~569): Update star rating and review count
- **Price** (line ~596): Update the price
- **Benefits** (lines ~577-587): Customize the 5 key benefits

### 3. Customize Features Section
Update the 6 feature cards (lines ~607-665) with features specific to your product.

### 4. Update FAQ Section
Customize the FAQ questions and answers (lines ~671-726) to match common questions about your product.

## File Structure
```
Punji_The_Labrador/
├── index.html              # Main landing page (single file)
├── README.md              # Repository information
└── LANDING_PAGE_GUIDE.md  # This guide
```

## Features Included

### ✅ Mobile-First Design
- Responsive layout that works on all devices
- Sticky CTA button appears on mobile when scrolling
- Optimized for touch interactions

### ✅ SEO Optimized
- Meta tags for search engines
- Open Graph tags for social media sharing
- Semantic HTML5 structure
- Optimized page title and description

### ✅ Accessibility
- ARIA labels for screen readers
- Alt text on images
- Keyboard navigation support
- Proper heading hierarchy

### ✅ Performance
- Single file for fast loading
- Inline CSS (no external requests)
- Optimized for YouTube traffic
- Clean, minimal design

### ✅ Amazon Compliant
- Proper affiliate disclosure
- Required legal language
- rel="nofollow sponsored" on affiliate links

## Deployment

### Option 1: GitHub Pages
1. Push the `index.html` file to your GitHub repository
2. Go to Settings → Pages
3. Select your branch and save
4. Your page will be live at `https://yourusername.github.io/repositoryname/`

### Option 2: Any Web Server
Simply upload the `index.html` file to your web server. No build process or dependencies required.

### Option 3: Netlify/Vercel (Free)
1. Drag and drop the `index.html` file to Netlify or Vercel
2. Get an instant live URL
3. Optional: Connect a custom domain

## Customization Tips

### Colors
The page uses Amazon-inspired colors defined in CSS variables (lines ~66-74):
- `--primary-color: #FF9900` (Amazon Orange)
- `--secondary-color: #146eb4` (Links)
- Modify these to match your brand

### Product Badge
Update the discount badge (line ~561):
```html
<div class="discount-badge" aria-label="Discount">-25% OFF</div>
```

### Branding
Update the header logo and text (line ~538):
```html
<a href="https://www.youtube.com/@punji_the_labrador" class="logo">
    🐕 Punji's Pick
</a>
```

## Testing Checklist

Before launching:
- [ ] Replace all `YOUR_AFFILIATE_LINK_HERE` placeholders
- [ ] Update product image URL
- [ ] Customize product title, price, and benefits
- [ ] Test on mobile devices
- [ ] Test CTA buttons click to correct Amazon link
- [ ] Verify FAQ accordion works
- [ ] Test sticky mobile CTA appears on scroll
- [ ] Check all links work correctly
- [ ] Validate HTML (W3C Validator)
- [ ] Test page load speed (Google PageSpeed Insights)

## Analytics (Optional)

To track performance, add Google Analytics or other tracking code before the closing `</head>` tag (around line 35).

## Support

For issues or questions about this landing page, please refer to the main README or open an issue in the repository.

## YouTube Integration

This page is optimized for traffic from:
- YouTube video descriptions
- YouTube pinned comments
- YouTube community posts
- Social media sharing from YouTube

Link to this page in your YouTube content with a clear call-to-action!

---

**Important:** Always comply with Amazon's affiliate program policies and FTC disclosure requirements. This template includes the required disclosure, but it's your responsibility to ensure compliance with all applicable laws and regulations.

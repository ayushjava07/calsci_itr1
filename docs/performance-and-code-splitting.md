# Performance + code splitting changes (CalSci)

This document summarizes the performance optimizations that were implemented to reduce initial bundle size and defer non-critical work until it’s needed.

## What changed

### Router + route-based code splitting
- Added a minimal React Router setup so that pages can be code-split by route.
- The landing page still renders at `/` with the same layout/sections as before.
- New lazily-loaded placeholder routes:
  - `/privacy`
  - `/terms`
  - `/cookies`

Relevant files:
- `src/main.tsx` mounts the app via `RouterProvider`.
- `src/app/router.tsx` defines the route table and uses `lazy()` per route.
- `src/app/routes/RootLayout.tsx` provides the shared layout.

### Above-the-fold-first loading
On initial load of `/`, only the “above-the-fold” experience loads eagerly:
- `Header`
- `Hero`
- `AppsSection`

Everything else is deferred.

### Lazy-loading major components/sections
#### Waitlist modal (interaction-only)
`WaitlistModal` is now lazily imported and only downloaded the first time the user opens it from:
- `src/app/components/Header.tsx`
- `src/app/components/Hero.tsx`

This prevents modal code from inflating the initial JS bundle.

#### Below-the-fold sections (scroll-triggered)
`Newsletter` and `Footer` are lazily imported and gated behind an `IntersectionObserver` so they don’t even start downloading until the user scrolls near them.

Relevant files:
- `src/app/components/LazyOnVisible.tsx`
- `src/app/routes/LandingPage.tsx` (lazy `Newsletter`)
- `src/app/routes/RootLayout.tsx` (lazy `Footer`)

### Loading fallbacks (Suspense)
A consistent fallback loading UI was added and used for:
- router-level fallback (initial route hydration/loading)
- component-level Suspense boundaries (modal/sections)

Relevant file:
- `src/app/components/LoadingFallback.tsx`

### Hash/anchor navigation safety
Because the app now has routing, anchor links were updated to include the `/` prefix (e.g. `/#features`) so they continue to work from any route.

Additionally, `ScrollToTop` only scrolls for hashes that resolve to a real element id to avoid surprising “jump to top” behavior when a target doesn’t exist.

Relevant file:
- `src/app/routes/ScrollToTop.tsx`

## Image loading improvements

### LCP hero image priority
The hero image is explicitly prioritized to improve LCP:
- `loading="eager"`
- `fetchPriority="high"`
- `decoding="async"`

Relevant file:
- `src/app/components/Hero.tsx`

### Below-the-fold images
Below-the-fold images now use:
- `loading="lazy"`
- `decoding="async"`

Relevant files:
- `src/app/components/Newsletter.tsx`
- `src/app/components/Footer.tsx`

### Cloudinary image optimization
Cloudinary-hosted assets now use a single, reusable utility and React wrapper component so that all images share the same best-practice defaults:
- `f_auto` (auto format) and `q_auto` (auto quality)
- sensible default widths per usage (e.g. `hero`, `card`, `icon`)
- lazy-loading + async decoding in React components by default

Relevant files:
- `src/lib/cloudinary.ts`:
  - central Cloudinary client and helpers (`buildCloudImage`, `cloudImageUrl`)
  - enforces `f_auto`, `q_auto`, and resize-based width for all public IDs
- `src/components/CloudinaryImg.tsx`:
  - drop-in React `<img>` wrapper that:
    - builds the optimized URL via `cloudImageUrl`
    - defaults to `loading="lazy"` and `decoding="async"`
    - allows overriding to `loading="eager"` + `fetchPriority="high"` for LCP images

Usage examples:
- `Hero` uses a `hero` variant, eager loading, and high fetch priority for the main LCP image.
- Card/section images (e.g. app previews, pandas) use the `card` variant with lazy loading.

## What’s happening now (bundle outcome)
Production builds now emit separate chunks for deferred pieces, e.g.:
- `WaitlistModal-*.js`
- `Newsletter-*.js`
- `Footer-*.js`
- `PrivacyPage-*.js`, `TermsPage-*.js`, `CookiesPage-*.js`

This confirms code splitting is working and the initial bundle avoids unnecessary code.

## Recommended next improvements (highest ROI)

1. **Optimize images** (biggest impact): convert large PNGs to WebP/AVIF and serve appropriate sizes (responsive `srcset` or multiple assets).
2. **Bundle analysis**: add a visualizer to confirm the heaviest dependencies are not pulled into `index-*.js`.
3. **Memoization only where measured**: consider `React.memo`, `useMemo`, `useCallback` only after profiling (avoid premature complexity).


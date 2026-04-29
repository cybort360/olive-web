# olive-web

Marketing landing page for [Olive](https://github.com/cybort360/olive-web), a personal carbon tracking app for iOS and Android. Static site, no backend.

## Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS v4 (CSS-based config, no `tailwind.config.ts`)
- TypeScript
- Fraunces 600 + DM Sans 400 via `next/font/google`
- Deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Structure

```
app/
  layout.tsx          # Font loading, metadata, body background
  page.tsx            # Single page: hero, stat, how it works, Meet Olive, mission, FAQ, footer
  globals.css         # Tailwind v4 theme tokens, keyframes, grain overlay
  components/
    back-to-top.tsx   # Client component: scroll-aware back-to-top button
public/
  olive-branch.svg    # Brand mark
  app-screenshot.png  # Phone mockup screenshot (replace with real build)
```

## Replacing the app screenshot

Drop a real simulator screenshot at `public/app-screenshot.png`. Recommended size: 393×852px (iPhone 15 Pro logical resolution). The phone mockup applies a gradient mask over the top ~26% to hide the status bar, so the screenshot doesn't need to be cropped.

## Deployment

Vercel auto-detects Next.js. Push to `main` and it deploys. No environment variables needed.

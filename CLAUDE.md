# General Synthesis — landing page

@AGENTS.md

Single-page coming-soon site. Built per `docs/playbooks/01-landing-page-and-deployment-playbook.md`,
using its static-export / GitHub Pages path (no server, no form).

## Content rules (from the brief — do not relax without the founder asking)
- Copy is fixed: wordmark, "New possibilities in plant science.", one paragraph, unsigned founder note (last two sentences revised by the founder 2026-10-17).
- No products, flowers/orchids, specific research, genetic techniques, locations, investors,
  partners, institutions, other ventures, team, lab, results or funding.
- No personal name, contact info, social links, signup form, navigation or extra sections.
- No stock photos, plant illustrations or animation — EXCEPT what the founder has since asked for:
  the looping logo and the full-bleed hero video (2026-10-18, chose variation A from
  `docs/design/video-backgrounds.html`).
  For the same reason there is no footer/legal small print and no privacy page (nothing is collected).

## Design
- Off-white `#f4f2ed`, ink `#17181a`, muted `#5c5e62`, rule `#d9d6cf` — tokens in `app/globals.css` `@theme`.
- Newsreader (serif) for the statement and quote, Inter for the wordmark and body; self-hosted via `next/font`.
- Logo: `app/logo.tsx` — option B: two overlapping rings with the shared lens filled (abstract "synthesis", no plant imagery) + uppercase tracked Inter semibold wordmark. The rings meet/part on a 6s infinite loop (founder asked for a never-ending loop; overrides the brief's no-animation default). Static under prefers-reduced-motion. Other explored options live in `docs/design/logo-options.html` (local only, not committed).
- Favicon: same rings, `app/icon.svg` + `app/favicon.ico` rasterized with a throwaway sharp/to-ico script (not a project dep).

## Hero video
- `app/hero-video.tsx` (client component): full-bleed muted loop, poster frame, pause/play button.
  Autoplay is skipped under `prefers-reduced-motion` (poster only).
- Clip: `public/media/hero.mp4` = Mixkit "Small green leaves" (#125, 720p, 11s, ~3 MB), free Mixkit
  stock used as a stand-in — **replace with General Synthesis's own footage** when available
  (keep it muted, short, ≤720p, and regenerate `hero-poster.jpg` from its first frame).
  Avoid footage with flowers, people (implies a team) or labs (implies a lab) — brief forbids those.
- Video/poster src are prefixed with `NEXT_PUBLIC_BASE_PATH` (set in `next.config.ts`) because Next
  doesn't prefix plain media URLs.

## Deployment
- Repo: `ParadigmAI/general-synthesis` (public — Pages is free on public repos; org is on the free plan).
- Pages source = GitHub Actions. Workflow passes `configure-pages`' `base_path` as `PAGES_BASE_PATH`,
  which `next.config.ts` uses as `basePath`. Currently served at `https://paradigmai.github.io/general-synthesis/`.
- Custom domain not set yet. When it is: add `public/CNAME` with the domain, set it in repo Settings → Pages,
  DNS = four apex `A` records (185.199.108–111.153) + `www` CNAME → `paradigmai.github.io`, then Enforce HTTPS.
  base_path becomes empty automatically, so no config change needed.

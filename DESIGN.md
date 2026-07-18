# Design

Visual system for Holistic Hub v2. Concept: **a calm, light-filled apothecary** — unhurried, human, trustworthy. Turquoise used with confidence (a committed deep-turquoise closing band, soft aqua fields, bright CTAs), not as a timid wash.

## Color

Strategy: **Committed** — turquoise carries the surface. OKLCH throughout, tokens in `app/globals.css`.

| Token | Value | Role |
|---|---|---|
| `--surface` | `oklch(97.6% 0.017 192)` | page ground — pale turquoise wash |
| `--card` | `oklch(99.2% 0.006 192)` | raised surface — turquoise whisper, not pure white |
| `--tint` | `oklch(94.5% 0.03 190)` | soft aqua fields / wells |
| `--tint-2` | `oklch(91% 0.045 190)` | deeper aqua fields |
| `--deep` | `oklch(48% 0.105 196)` | links, active nav, deep bands (AA on white) |
| `--deep-2` | `oklch(38% 0.095 197)` | committed closing band ground |
| `--turq-bright` | `oklch(80% 0.12 187)` | primary CTA fill (ink text on it) |
| `--soft` | `oklch(66% 0.13 190)` | icons, small accents, focus ring |
| `--ink` | `oklch(32% 0.035 205)` | headings |
| `--body` | `oklch(47% 0.025 205)` | body text (≥4.5:1 on surface) |
| `--on-deep` | `oklch(96% 0.02 190)` | text on deep panels |

Rules: body text ≥4.5:1 always; on deep panels use `--on-deep` / hue-matched transparencies, never gray. No cream/sand neutrals — the tint direction is the brand's own turquoise hue.

## Typography

- **Headings: Spectral** (serif, 300–600). Calm, humane reading serif; large sizes use weight 300/400, letter-spacing ≥ -0.02em, `text-wrap: balance`.
- **Body/UI: Hanken Grotesk** (sans, 400–700). Friendly humanist sans, highly legible for older patients.
- Loaded via `next/font/google`, `display: swap`.
- Scale ratio ≥1.25; hero clamp max ≤ 5rem. Body measure 65–75ch. `text-wrap: pretty` on long prose.

## Imagery

- **One verified hero photo**: `https://images.unsplash.com/photo-1502082553048-f009c37129b9` (lone broadleaf tree, green field, blue sky) — the whole, living thing; roots-to-crown metaphor for whole-person care.
- Everywhere else: **custom botanical line-work SVG** (chamomile motif echoing the practice's own branding) in `--soft`/`--deep` strokes, plus soft turquoise fields. No other photography, no stock doctor imagery.

## Layout & structure

Editorial, asymmetric; deliberately NOT hero → 3 cards → CTA. Home spine: asymmetric hero → "the whole of you" (Body / Mind as two editorial panels) → what holistic care means → conditions as an editorial index (text columns, not icon cards) → Meet Dr. Madhavi (real credentials, no big-number stats) → Cochies USA milestone as a quiet feature → calm quote interstitial → committed deep-turquoise "Book" band → statement footer.

Pages: Home `/`, Physical Treatment `/physical-treatment`, Psychological Treatment `/psychological-treatment`, About `/about`, Blog `/blog`, Contact `/contact`.

Spacing: fluid `clamp()` section padding, varied rhythm (generous between sections, tight within groups). No tracked-uppercase eyebrows as section grammar; section cadence is set by Spectral headings and botanical rules.

## Motion

Quiet and organic: soft fade/rise reveals that enhance already-visible content (never gate visibility), a slow botanical line-draw accent, gentle CTA hover lifts. ease-out-quart/quint only; no bounce. Full `prefers-reduced-motion` alternatives (instant/crossfade).

## Components

- `SiteHeader` — pale ground, Spectral wordmark, text nav, bright-turquoise Book pill.
- `SiteFooter` — statement footer on `--deep-2`: large Spectral statement, contact block, nav, credentials line.
- `Botanical` — inline SVG line-work (chamomile sprigs) used as section accents.
- `BookBand` — committed deep-turquoise closing band with the online appointment request action.
- Mobile: easy access to the appointment request from every page. No personal contact details anywhere on the site.

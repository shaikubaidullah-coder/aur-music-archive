# DESIGN SYSTEM: THE LISTENING CHAMBER (AUR)

**Document:** `DESIGN.md`  
**Philosophy:** 70% Art & Atmosphere · 20% Typography · 10% UI  
**North Star:** A private music room discovered late at night. The music existed before the interface. The artwork is the protagonist; the UI is a quiet supporting cast.

---

## 1. Visual Thesis & Atmosphere

- **Emotional Stance:** Intimate, cinematic, contemplative, tactile, alive.
- **The Room Metaphor:** Selecting a song is entering a distinct room. The ambient lighting, backdrop tint, and typography adapt organically to the active artwork.
- **Subtlety Rule:** No neon, no futuristic glows, no sci-fi panels, no fake operating-system metadata. Pure print quality meets analog listening.

---

## 2. Dynamic Artwork-Derived Atmospheric Palettes

Each track defines the room's atmospheric color temperature:

1. **Kabhi Kabhi (Warm Studio Light):**
   - Base canvas: `#0d0d0f`
   - Atmosphere diffusion: `rgba(205, 145, 95, 0.12)` (Warm sepia & paper blush)
   - Accent tint: `#d89c66`

2. **Tu Hai Kahan (Nocturnal Midnight & Gold):**
   - Base canvas: `#090a0e`
   - Atmosphere diffusion: `rgba(212, 175, 55, 0.14)` (Amber lamplight in dark room)
   - Accent tint: `#e0be53`

3. **Shikayat (Rain-washed Charcoal & Indigo):**
   - Base canvas: `#0b0c10`
   - Atmosphere diffusion: `rgba(120, 140, 165, 0.12)` (Subtle melancholic mist)
   - Accent tint: `#8ba4be`

4. **Kya Chahiye (Twilight Terracotta & Rust):**
   - Base canvas: `#0e0b0b`
   - Atmosphere diffusion: `rgba(195, 90, 65, 0.13)` (Warm twilight car interior)
   - Accent tint: `#d46b4e`

---

## 3. Typography: Artistic Hierarchy

- **Title Display (`--font-display`):**
  - Font: `Instrument Serif`, Georgia, serif
  - Scale: `text-5xl` to `text-7xl` (Desktop), `text-4xl` to `text-5xl` (Mobile)
  - Quality: Elegant roman upright, tight tracking (`-0.02em`), natural leading (`1.05`)
- **Urdu Native Script:**
  - Font: Noto Nastaliq Urdu / Serif font pairing
  - Quality: Fluid, expressive, integrated side-by-side with English titles
- **Artist & Year (`--font-sans`):**
  - Font: `Plus Jakarta Sans`, sans-serif
  - Weight: 300 / 400 (Light, breathing)
  - Color: Muted bone (`#9ea2ad`)
- **Utility & Counter:**
  - Monospace used strictly as a whisper: track index (`01 — 04`), playback time (`02:14 / 04:23`). No fake technical system codes.

---

## 4. Hierarchy: Less UI, More Art

- **LEVEL 1 (Dominant):** The artwork object (poster print + organic vinyl disc) and poetic song title.
- **LEVEL 2 (Supporting):** Artist name, year, and short curatorial note.
- **LEVEL 3 (Functional):** Quiet floating player controls.
- **LEVEL 4 (Ambient):** Minimal navigation (`AUR`, `01 — 04`, `Notes`).
- **LEVEL 5 (Eliminated):** All fake metadata (`ACCESSION`, `REC-001`, `UTC time`, `SAMPLE RATE`, `SHORTCUTS`).

---

## 5. Motion & Physics (Organic & Weighted)

- **Song Transition:** 
  - Exiting artwork: Drift `x: -24px`, scale `0.98`, opacity `0` (400ms ease-in-out).
  - Entering artwork: Offset `x: 32px`, scale `0.96` to `1.0`, opacity `0` to `1` (700ms spring `stiffness: 180, damping: 24`).
  - Background atmosphere: 1200ms smooth cross-fade.
- **Vinyl Physics:** 
  - Glides smoothly from behind the sleeve upon playback.
  - Constant rotational velocity at 33⅓ RPM (2.8s per rev).
  - Halts with subtle inertia when paused (no jarring snap).
- **Interactive Hover:** 
  - Gallery prints lift slightly (`translate-y -6px`), casting a deeper, softer shadow.

---

## 6. Responsive Architecture

- **Mobile Viewports (320px – 430px):**
  - Pure vertical visual storytelling.
  - Sleeve scales gracefully with `max-w-[calc(100vw-2.5rem)]`, preserving native aspect ratios without clipping.
  - Floating player collapses into an ultra-sleek, compact glass pill with touch targets ≥ 44px.
  - Zero horizontal overflow. Natural vertical scroll.

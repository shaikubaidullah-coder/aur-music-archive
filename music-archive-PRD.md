# MUSIC ARCHIVE — PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Document:** `PRD.md`  
**Project type:** Personal music archive / interactive listening experience  
**Build mode:** AI-first frontend build using the project's existing AI builder  
**Primary input:** Local folders containing one poster image + one audio file per song  
**Design target:** Art-directed, editorial, cinematic, tactile, premium — never generic "AI website"

---

## 0. PRODUCT NORTH STAR

Build a personal website that feels like a **private record archive / digital music exhibition**, not a conventional music player, Spotify clone, portfolio template, or dashboard.

The website should make the user's favorite songs feel like **physical artifacts**.

Each song has:
- a poster / artwork image
- an audio file
- song metadata where available

The experience should combine:

**record store + film archive + editorial art direction + modern interactive web**

The user should be able to open the site and immediately feel:

> "This is someone's personal collection of music that has been carefully archived."

The design must feel authored and intentional. Every spacing decision, transition, typography choice, image crop, interaction, and sound behavior should have a reason.

### Core principle

**Do not build a website around features. Build an experience around the collection.**

---

# 1. REFERENCE ANALYSIS

Three visual references have been supplied.

## Reference A — White Noise on Vinyl

Observed characteristics:
- deep black / near-black environment
- large central physical object
- record-player / vinyl metaphor
- oversized editorial typography
- horizontal song/artwork carousel
- album artwork treated as physical objects
- centered composition
- subtle atmospheric lighting
- minimal controls
- strong sense of depth
- restrained interface chrome

What to extract:
- the feeling of a physical listening object
- centered visual hierarchy
- artwork carousel as the primary navigation
- dark cinematic atmosphere
- large editorial type
- physical-media metaphor

Do NOT reproduce the exact composition or artwork.

---

## Reference B — A24 / Marty Supreme

Observed characteristics:
- editorial / magazine-like typography
- extremely strong whitespace
- asymmetric composition
- large photographic objects
- typography integrated into the composition rather than placed inside UI cards
- restrained navigation
- premium art-direction
- information presented like a publication / archive
- objects partially leaving the viewport
- intentional cropping
- visual hierarchy created through scale rather than decoration

What to extract:
- editorial confidence
- asymmetric layouts
- art-directed cropping
- typography as a visual object
- minimal navigation
- information density without dashboard aesthetics

Do NOT clone the A24 website.

---

## Reference C — Local music-project folder

The actual project structure currently appears to be organized around song folders:

- `song-1/`
- `song-2/`
- `song-3/`
- `song-4/`

Each song folder contains:
- one audio file
- one poster / artwork image

This is important.

### The build must work with this constraint.

Do NOT invent a complex CMS requirement.

The first version should be able to consume a local/static collection where each song is represented by its media assets.

---

# 2. PRODUCT DEFINITION

## Working title

Use a temporary internal title until the user chooses one.

Possible conceptual directions:
- `SIDE A`
- `ARCHIVE`
- `MY RECORDS`
- `AFTER HOURS`
- `PERSONAL FREQUENCIES`
- `ROOM 01`
- `THE COLLECTION`

Do not hardcode one of these as the final brand.

The visual system should work regardless of the final name.

---

# 3. PRIMARY USER EXPERIENCE

The site should support this basic journey:

### Entry

User lands on the website.

They encounter a strong visual statement and immediately see that this is a collection of music.

### Discovery

They browse posters / records.

Artwork should feel like objects in space rather than flat cards.

### Selection

Hovering / focusing a song reveals subtle information.

Selecting a song makes it the active listening object.

### Listening

Audio begins only through an explicit user action unless browser policy permits otherwise.

The interface exposes:
- play / pause
- progress
- current time
- duration
- volume
- track title
- artist if available

### Immersion

While a song plays:
- the artwork becomes the visual anchor
- subtle motion responds to playback
- interface becomes quieter
- no unnecessary visual effects compete with the music

### Exploration

User can move:
- previous / next
- through keyboard
- through swipe / touch
- through carousel controls
- through an archive view

### Return

The site remembers useful local state where appropriate:
- last selected track
- playback position only if intentionally designed
- volume
- interface preferences

Do not introduce persistence if it makes the experience confusing.

---

# 4. INFORMATION ARCHITECTURE

The first version should preferably be a **single immersive experience**, not a collection of generic pages.

Recommended structure:

## Layer 1 — Opening / Hero

Purpose:
Establish the identity of the archive.

Elements:
- collection title
- short descriptor
- subtle index / collection count
- primary visual object
- artwork / record
- understated navigation

The hero must not look like:
- SaaS landing page
- portfolio hero
- startup landing page
- template website

---

## Layer 2 — Collection / Selection

Primary browsing surface.

Display songs as:
- posters
- vinyl records
- photographic artifacts
- editorial objects

Avoid conventional:
- rectangular cards
- rounded glass cards
- card grids with shadows
- generic carousel components

The active song should have a clearly different physical / visual state.

---

## Layer 3 — Active Listening

When a song is selected:

Display:
- large poster
- title
- artist / metadata if available
- play state
- progress
- duration
- volume
- next / previous

Optional:
- record rotation
- subtle artwork parallax
- grain
- light movement
- audio-reactive micro-motion

All motion must remain restrained.

---

## Layer 4 — Archive / Index

Provide an alternate way to browse the full collection.

Possible design:

A typographic index such as:

```
01   RHYTHM OF THE RAIN       03:42
02   HEARTH                   04:11
03   LAST TRAIN HOME          03:57
04   CORNER CAFE              02:58
```

The index should feel like:
- film credits
- library archive
- record catalog
- editorial index

Not:
- admin table
- spreadsheet
- SaaS data table

---

# 5. DESIGN DIRECTION

## Overall aesthetic

Target:

**quiet luxury + editorial music archive + tactile physical media**

Keywords:
- cinematic
- archival
- intimate
- tactile
- editorial
- analog
- restrained
- sophisticated
- atmospheric
- timeless
- personal

Avoid:
- futuristic AI
- neon
- cyberpunk
- excessive gradients
- glassmorphism
- excessive blur
- floating blobs
- purple-blue AI palettes
- generic black-and-white portfolio templates
- excessive rounded cards
- meaningless particles
- random 3D objects
- over-animated interfaces

---

# 6. COLOR SYSTEM

The system must be derived from the supplied artwork where possible.

### Base

Use a restrained neutral foundation.

Dark mode direction:

- Near Black
- Carbon
- Warm Black
- Soft Graphite
- Off White

Light editorial sections may use:

- Warm White
- Paper
- Bone
- Soft Gray

### Accent

Do NOT choose a random brand accent.

Accent colors should be sampled / derived from the current artwork when useful.

Examples:
- rust
- muted blue
- faded yellow
- cream
- dark red

Accent colors should remain subdued.

### Important

Never scatter hardcoded colors throughout the UI.

Create semantic design tokens first.

Example conceptual token structure:

```css
--color-bg
--color-surface
--color-paper
--color-text
--color-muted
--color-border
--color-accent
--color-accent-contrast
```

The final tokens must be documented in `DESIGN.md`.

---

# 7. TYPOGRAPHY

Typography is one of the main design elements.

Do NOT use typography merely for labels.

Recommended hierarchy:

### Display

Editorial serif or expressive high-contrast serif.

Use for:
- collection title
- active song title
- major statements

### Interface

Neutral grotesk / sans-serif.

Use for:
- navigation
- controls
- metadata
- timestamps

### Utility / metadata

Monospace may be used sparingly.

Use for:
- track number
- duration
- archive index
- technical metadata

Typography must feel like an art publication rather than a software product.

### Rules

- avoid excessive font weights
- avoid huge bold SaaS headings
- avoid all-caps everywhere
- use tracking intentionally
- use line breaks as composition
- allow typography to overlap imagery when appropriate
- use optical rather than purely mathematical alignment

---

# 8. LAYOUT SYSTEM

The layout should feel **art-directed rather than component-stacked**.

Use:
- asymmetric spacing
- controlled negative space
- large visual scale
- partial cropping
- off-center objects
- intentional overlaps
- editorial grids
- fluid positioning

Avoid:
- everything centered
- identical card widths
- repetitive spacing
- predictable 12-column SaaS layout
- excessive max-width containers

However, maintain an underlying responsive grid for engineering consistency.

---

# 9. SONG ARTWORK TREATMENT

Artwork is the heart of the product.

A poster should never feel like a thumbnail.

Possible states:

### Rest

Artwork is:
- slightly reduced
- low-motion
- naturally shadowed
- part of the collection environment

### Hover

Artwork may:
- lift slightly
- rotate by a tiny amount
- shift depth
- reveal title
- respond to pointer movement

### Active

Artwork becomes:
- larger
- sharper
- visually dominant
- optionally framed by a subtle physical-media treatment

### Playing

Artwork may:
- respond subtly to audio playback
- rotate a vinyl record if represented as a record
- shift lighting
- breathe / scale by an extremely small amount

Never make the artwork shake aggressively.

---

# 10. PHYSICAL MEDIA LANGUAGE

Use physical-media metaphors selectively.

Possible elements:
- vinyl record
- paper sleeve
- CD
- printed poster
- catalog sheet
- archival label
- handwritten metadata
- tape / sticker details
- record-player controls

These must feel integrated.

Do NOT turn the entire site into a fake 3D music-player gimmick.

The metaphor supports the music; it is not the product itself.

---

# 11. AUDIO SYSTEM

The audio player must be a first-class system.

## Required

- play
- pause
- seek
- current time
- duration
- next
- previous
- volume
- mute
- track loading state
- error state

## Audio behavior

Use HTML5 Audio or an appropriate lightweight audio abstraction.

The system must:
- preload intelligently
- avoid loading every audio file immediately
- release resources where appropriate
- handle slow loading
- handle missing/corrupt audio
- handle browser autoplay restrictions
- preserve state correctly

### Autoplay

Never depend on autoplay.

Initial playback requires a user gesture where necessary.

---

# 12. AUDIO VISUALIZATION

Optional but encouraged if implemented tastefully.

Possible visualization:
- subtle waveform
- minimal amplitude movement
- record rotation speed
- tiny pulse in metadata
- background light response

Do NOT build:
- EDM visualizer
- giant spectrum bars
- rainbow waveform
- neon equalizer

The audio visualization should feel editorial.

---

# 13. INTERACTION DESIGN

Every interaction should communicate physicality.

Examples:

### Hover

Poster:
- moves 2–8px
- rotates slightly
- shadow changes
- cursor interaction becomes visible

### Selection

Use:
- scale
- depth
- opacity
- position
- transition

Do not rely on:
- glowing borders
- random color changes

### Navigation

Transitions should feel like:
- turning a page
- moving between records
- sliding an archive drawer
- changing a film reel

Avoid:
- generic fade-only transitions everywhere

---

# 14. MOTION SYSTEM

Motion must be intentional and consistent.

Use the `apple-design` skill heavily.

### Motion principles

1. Fast response to direct input.
2. Smooth settling.
3. No unnecessary bounce.
4. Natural easing.
5. Motion hierarchy.
6. Respect reduced-motion settings.

### Suggested timing language

Micro interactions:
- ~150–250ms

UI transitions:
- ~300–600ms

Major scene transitions:
- ~600–1200ms

These are starting ranges, not rigid values.

Use spring/inertia where physically appropriate.

---

# 15. CURSOR

Desktop can have a custom cursor if it genuinely improves the experience.

Possible states:
- default
- artwork hover
- play
- drag
- navigation
- index

The cursor must remain subtle.

Do NOT create a giant glowing custom cursor that makes the site feel like an AI demo.

Mobile must use native touch interaction.

---

# 16. RESPONSIVE DESIGN

This is a major requirement.

The website must be designed for:

- desktop
- laptop
- tablet
- mobile portrait
- mobile landscape

Do NOT build desktop first and "make it responsive later."

### Mobile principles

Mobile should have its own composition.

Do not simply shrink the desktop layout.

Possible mobile experience:
- vertically stacked artwork
- horizontal poster rail
- bottom mini-player
- swipe between tracks
- tap artwork to play
- archive accessible through a compact index

### Critical mobile requirements

- no interaction should block scrolling
- no horizontal overflow
- no hover-dependent functionality
- no custom cursor
- touch targets >= comfortable finger size
- artwork must not become tiny
- player controls must remain accessible
- gestures must not conflict with page scrolling

---

# 17. ACCESSIBILITY

Required:

- keyboard navigation
- visible focus state
- semantic buttons
- accessible labels
- sufficient contrast
- reduced-motion support
- screen-reader-friendly player controls
- no interaction that exists only on hover
- logical tab order

Keyboard shortcuts may include:

`Space` → play/pause  
`←` → previous / seek backward depending on context  
`→` → next / seek forward depending on context  
`M` → mute  
`Esc` → close expanded view

Do not allow shortcuts to interfere with text input.

---

# 18. DATA MODEL

The application should use a clean song object.

Conceptual example:

```ts
type Song = {
  id: string
  title: string
  artist?: string
  album?: string
  year?: string
  duration?: number
  audioSrc: string
  posterSrc: string
  description?: string
  number?: number
}
```

Do not require every field.

The system should gracefully support:

```ts
{
  id,
  title,
  audioSrc,
  posterSrc
}
```

Minimum viable song = poster + audio.

---

# 19. LOCAL ASSET STRUCTURE

The builder should expect something conceptually similar to:

```text
music-project/
│
├── song-1/
│   ├── poster.jpg
│   └── song.mp3
│
├── song-2/
│   ├── poster.jpg
│   └── song.mp3
│
├── song-3/
│   ├── poster.jpg
│   └── song.mp3
│
└── song-4/
    ├── poster.jpg
    └── song.mp3
```

The implementation may choose a different internal structure if required by the framework.

The important rule:

**The user should be able to add another song without redesigning the application.**

---

# 20. CONTENT DISCOVERY

If metadata is unavailable from filenames, do not invent factual information.

Use:
- folder name
- filename
- optional local metadata file
- manually defined collection data

The builder should create a clear configuration point for metadata.

Example:

```ts
const songs = [...]
```

or a JSON data file.

Keep content separate from UI code.

---

# 21. PAGE / COMPONENT ARCHITECTURE

Recommended conceptual components:

```text
App
├── Intro / Entry
├── Header
├── CollectionStage
│   ├── ArtworkRail
│   ├── ArtworkItem
│   └── ActiveArtwork
├── SongInfo
├── AudioPlayer
│   ├── PlayPause
│   ├── Progress
│   ├── Time
│   ├── Volume
│   └── TrackNavigation
├── ArchiveIndex
├── MiniPlayer
└── Footer / Credits
```

Exact architecture may change based on the existing project.

Do not over-componentize tiny visual fragments.

---

# 22. STATE MODEL

Centralize important audio state.

Conceptually:

```text
currentTrack
isPlaying
currentTime
duration
volume
isMuted
isLoading
error
```

Collection state:

```text
tracks
currentIndex
selectedTrack
archiveOpen
```

Do not duplicate audio state across unrelated components.

There must be exactly one authoritative audio controller.

---

# 23. PERFORMANCE

This is an art-directed site, but performance still matters.

Requirements:

- lazy-load non-visible artwork where practical
- use responsive image sizes
- avoid huge uncompressed images
- do not decode every poster simultaneously
- avoid rendering hundreds of DOM elements if collection grows
- keep animation GPU-friendly
- prefer transform/opacity for motion
- avoid unnecessary layout thrashing
- clean up audio event listeners
- avoid memory leaks
- avoid excessive canvas effects

The site should feel immediate.

---

# 24. IMAGE HANDLING

Posters should support:

- portrait
- square
- landscape

Do not force all images into one crop if doing so destroys artwork.

Use intelligent object positioning.

Potential modes:

```text
contain
cover
art-directed crop
```

The active artwork may use a larger source than thumbnails.

---

# 25. LOADING EXPERIENCE

Avoid generic skeleton screens if possible.

A music archive should have a designed loading state.

Possible concept:

```text
COLLECTION 01
LOADING THE ARCHIVE
[ subtle progress ]
```

or a restrained record / poster preparation animation.

The loading experience must be short and purposeful.

Never show a 5-second fake loading animation just to look cinematic.

---

# 26. ERROR STATES

If audio fails:

Display a calm message such as:

`This recording could not be loaded.`

Then allow:
- retry
- next track

If artwork fails:
- preserve layout
- show a restrained fallback
- do not break the player

Errors should feel like part of a polished application, not browser defaults.

---

# 27. NAVIGATION

Keep navigation minimal.

Potential structure:

```text
COLLECTION     INDEX     ABOUT
```

But only include sections that have actual content.

Do not add:
- Services
- Contact
- Pricing
- Blog
- fake navigation
- unnecessary footer links

This is a personal music archive.

---

# 28. ABOUT / CONTEXT

Optional.

If included, it should be extremely short.

Example conceptual content:

```text
A collection of songs I return to.

Nothing algorithmic.
Nothing ranked.
Just records worth keeping.
```

Do not turn the site into a personal biography.

---

# 29. DESIGN SYSTEM REQUIREMENT

Before implementation, the builder must create:

`DESIGN.md`

It should contain:

- color tokens
- typography
- spacing
- grid
- border rules
- radii
- shadows
- motion
- interaction states
- responsive breakpoints
- artwork sizing
- player behavior
- component rules

The design system must be semantic.

No random values scattered throughout the code.

---

# 30. REQUIRED SKILLS

The builder must use the available skills deliberately.

## `hallmark`

Use first / early for:
- extracting the visual language from the references
- preventing generic AI design
- identifying editorial / art-directed patterns
- performing visual critique
- detecting template-like UI

The output should influence the design system.

---

## `design-md`

Use to create / maintain:

`DESIGN.md`

It must become the source of truth for the UI.

---

## `apple-design`

Use for:
- animation curves
- interaction feedback
- typography behavior
- spring / inertia
- micro-interactions
- responsive interaction
- perceived quality

Do not apply animation everywhere just because the skill exists.

---

## `design-taste-frontend`

Use for:
- visual hierarchy
- composition
- typography
- spacing
- responsive behavior
- component quality
- final visual polish

---

## `design-system-compliance`

Use after implementation.

Audit:
- hardcoded colors
- inconsistent spacing
- incorrect typography
- off-token values
- broken responsive states
- broken animation
- unusable controls
- contrast
- interaction inconsistencies

Fix every meaningful issue found.

---

# 31. ANTI-AI-SLOP RULES

This project must explicitly reject common AI-generated web patterns.

Never use these by default:

- purple gradient hero
- blue/purple glow
- glassmorphism cards
- excessive rounded rectangles
- giant "Welcome to my website"
- generic Inter + gradient combination
- floating gradient blobs
- meaningless particles
- 3D rotating cubes
- excessive shadows
- excessive pills
- fake metrics
- generic CTA buttons
- "Powered by AI"
- stock illustrations
- random icons
- excessive blur
- dashboard layouts
- cookie-cutter portfolio sections
- animations without semantic purpose

### Hard rule

If a visual element could appear on 1,000 unrelated AI-generated websites without modification, question whether it belongs here.

---

# 32. ORIGINALITY RULE

The references are inspiration, not templates.

Do not reproduce:
- exact layouts
- exact copy
- exact navigation
- exact object arrangement
- exact animations
- exact artwork treatment

The builder must combine the underlying principles into an original visual language.

---

# 33. VISUAL QUALITY BAR

The final site should pass this test:

### At first glance

It should look like a designed digital artifact.

### After 10 seconds

The user should understand:
- this is a personal music collection
- the artwork is the primary object
- songs are playable

### After 30 seconds

The user should discover:
- browsing
- active playback
- archive/index
- responsive interaction

### After 2 minutes

The experience should feel memorable because of:
- composition
- motion
- typography
- physical-media treatment
- sound interaction

Not because of gimmicks.

---

# 34. AUDIO UX DETAILS

When a song starts:

1. Artwork becomes active.
2. Play button transitions to pause.
3. Progress begins smoothly.
4. Metadata updates.
5. Optional physical-media animation begins.
6. Other artwork remains present but visually subordinate.

When a song ends:

1. Complete current animation.
2. Update state.
3. Move to next track only if auto-advance is explicitly enabled.
4. Otherwise remain paused at the end.

Do not unexpectedly start another song unless the user has clearly enabled / expects continuous playback.

---

# 35. MINI PLAYER

When user scrolls away from the primary listening area, optionally reveal a compact player.

Example:

```text
[poster]  SONG TITLE
         ARTIST
         ───────────────  02:14 / 03:42
         ◀   ❚❚   ▶
```

The mini player should feel like part of the editorial system.

It must not look like a Spotify clone.

---

# 36. ARCHIVE MODE

Archive mode can become the most information-dense part of the site.

Possible visual:

```text
THE ARCHIVE

01    Rhythm of the Rain          03:42
02    Hearth                      04:11
03    Last Train Home             03:57
04    Corner Cafe                 02:58
```

Hovering a row:
- reveals poster
- shifts typography
- exposes play state

Selecting a row:
- loads the track
- returns focus to listening stage where appropriate

---

# 37. OPTIONAL EXPERIMENTAL FEATURES

Only implement these if they improve the core experience.

### A. Vinyl rotation

A record rotates while playing.

### B. Artwork parallax

Poster reacts subtly to pointer movement.

### C. Audio-reactive lighting

Very subtle background response to amplitude.

### D. Film-grain layer

Very restrained grain.

### E. Metadata labels

Small archival labels such as:

```text
TRACK 04
ARCHIVE / 2026
02:58
```

### F. Listening history

Local-only recently played list.

### G. Random listening

A deliberately designed "surprise me" interaction.

### H. Visual themes

If implemented, derive the theme from the current poster.

Experimental features are subordinate to the music.

---

# 38. WHAT NOT TO BUILD IN V1

Do not add:

- authentication
- user accounts
- database
- social sharing system
- comments
- likes
- public profiles
- recommendation engine
- AI music analysis
- complex CMS
- payment system
- unnecessary backend
- analytics dashboard
- admin panel

This is a personal archive.

Complexity must earn its place.

---

# 39. BUILD PROCESS

The AI builder must work in this order.

## Phase 1 — Inspect

Before writing UI:

- inspect all project files
- inspect every supplied poster
- inspect audio filenames / formats
- inspect existing package configuration
- inspect existing framework
- inspect existing styles
- inspect existing components
- inspect assets
- determine the current runtime

Do not destroy an existing project without understanding it.

---

## Phase 2 — Analyze references

Extract:

- composition
- typography
- color
- spacing
- image treatment
- motion principles
- navigation patterns
- editorial techniques
- physical-media metaphors

Create an internal design brief.

---

## Phase 3 — Design system

Create:

`DESIGN.md`

Define:
- tokens
- typography
- spacing
- layout
- motion
- responsive behavior
- component principles

---

## Phase 4 — Architecture

Create:
- song data model
- audio controller
- artwork system
- navigation system
- responsive layout system

Do this before polishing visuals.

---

## Phase 5 — First visual implementation

Build:
- hero
- collection
- artwork selection
- audio player
- archive
- mobile experience

Focus on composition before micro-polish.

---

## Phase 6 — Motion

Apply:
- transitions
- hover
- selection
- player transitions
- artwork movement
- page transitions

Use `apple-design`.

---

## Phase 7 — Mobile

Test separately.

Do not merely resize desktop.

Test:
- scrolling
- swipe
- player
- poster selection
- navigation
- touch targets
- orientation
- viewport height
- browser chrome effects

---

## Phase 8 — Compliance audit

Use:

`design-system-compliance`

Check rendered UI against `DESIGN.md`.

Fix:
- off-token values
- inconsistent spacing
- typography errors
- broken animation
- contrast
- responsive problems
- unusable controls

---

## Phase 9 — Final visual audit

Use:

`hallmark`

Ask:

- Does this still look like AI-generated UI?
- Is anything generic?
- Is there unnecessary decoration?
- Is typography doing enough work?
- Are the artworks treated as objects?
- Is the composition memorable?
- Are animations meaningful?
- Is there visual clutter?
- Does mobile retain the art direction?

Then revise.

---

# 40. ACCEPTANCE CRITERIA

The build is not complete until all of these are true.

## Visual

- [ ] Looks like an authored music archive.
- [ ] Does not resemble a SaaS dashboard.
- [ ] Does not use generic AI aesthetics.
- [ ] References influence the design without being copied.
- [ ] Typography has strong hierarchy.
- [ ] Artwork is visually dominant.
- [ ] Composition uses intentional negative space.
- [ ] Desktop feels premium.
- [ ] Mobile feels intentionally designed.

## Audio

- [ ] Every valid audio file can play.
- [ ] Play / pause works.
- [ ] Seek works.
- [ ] Duration works.
- [ ] Volume works.
- [ ] Track switching works.
- [ ] Loading states work.
- [ ] Audio errors are handled.
- [ ] Browser autoplay restrictions are respected.

## Interaction

- [ ] Keyboard works.
- [ ] Touch works.
- [ ] Hover states work.
- [ ] Selection states are clear.
- [ ] Reduced motion is respected.
- [ ] No gesture blocks scrolling.

## Engineering

- [ ] Song content is separated from UI.
- [ ] Adding a new song is straightforward.
- [ ] No unnecessary backend.
- [ ] No duplicated audio controllers.
- [ ] No obvious memory leaks.
- [ ] Images are optimized.
- [ ] Animations are performant.
- [ ] Responsive layout has no horizontal overflow.

## Design system

- [ ] `DESIGN.md` exists.
- [ ] Tokens are used consistently.
- [ ] No unnecessary hardcoded colors.
- [ ] Typography is tokenized.
- [ ] Motion is documented.
- [ ] Responsive rules are documented.

---

# 41. DEFINITION OF DONE

The project is done when the result feels less like:

> "An AI builder made a music website."

and more like:

> "Someone designed a small digital museum for the music they love."

The technical implementation should disappear behind the experience.

The website should be:

**beautiful enough to explore, simple enough to use, fast enough to feel immediate, and distinctive enough to remember.**

---

# 42. FINAL BUILDER PRINCIPLE

Do not optimize for the number of features.

Optimize for:

**taste × interaction quality × artwork treatment × typography × sound × restraint**

The collection is the product.

Everything else exists to make the collection feel extraordinary.

# Hyperframes Composition Brief: CharityConnect

## Objective
Create a polished, interactive-feeling introductory tour of CharityConnect, following the journey from the public site through donor, charity, and admin page families.

## Output
- Composition directory: `brag-output-2026-11-09-153315/composition/`
- Rendered video: `brag-output-2026-11-09-153315/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 24.56 seconds

## Source Material
- Project root: `charityconnect/charityconnect/`
- Primary files read: `public/index.html`, `public/app.js`, `public/app.css`, `server/app.js`, `server/seed.js`, and `README.md`
- Product name: CharityConnect
- Tagline / strongest claim: “Small acts. Lasting change.” and “Support a cause. Make a difference.”
- Key UI or visual moment to recreate: mint/teal home hero, verified campaign cards with progress, and the three role-based dashboard shells.
- Copy that must appear verbatim:
  - “Small acts. Lasting change.”
  - “Support a cause. Make a difference.”
  - “SIMULATED”
  - “No real money moves.”

## Creative Direction
- Tone preset: app-store
- Creative direction: professional guided tour with real UI language and a visible cursor
- Interpretation: polished chapter-by-chapter pacing, source palette, readable feature labels, and restrained transitions.
- Angle: Follow a cause from discovery to donation history, then reveal how charities manage campaigns and admins review the work. Use a cursor to connect real source routes rather than presenting abstract feature claims.
- Hook: Begin on the actual home-page headline and tagline, then guide the cursor into campaign discovery.
- Outro / punchline: CharityConnect brand lockup with “Small acts. Lasting change.”
- Avoid:
  - Generic SaaS language or unsupported impact metrics
  - Abstract filler visuals or unrelated redesign
  - Showing real personal data or implying demo transactions move money
  - Claiming the exported video is clickable; the interactions are animated for the tour

## Visual Identity
- Background: #F7FAF9
- Text: #172B2A
- Accent: #07865F, with deep teal #073B3A
- Display font: Inter 700 (closest bundled weight to the source's 750)
- Body font: Inter (source stack begins with Inter; Plus Jakarta Sans is not bundled)
- Visual references from the project: mint hero, CharityConnect mark, campaign imagery, verified status mark, progress bars, role-based dashboard sidebar.

## Storyboard
Use `brag-plan.md` as the creative contract.

Scene summary:
1. The public front door — 3.01s — concise hero/tagline, campaign image, impact card, and simulated CTA click.
2. Discover and compare — 4.34s — search, causes, verified charities, progress cards, and detail/trust navigation.
3. Give with clarity — 4.12s — campaign detail, amount selection, and clearly simulated payment confirmation.
4. Your giving, organized — 3.81s — donor dashboard, donation history, profile completion, and notifications.
5. From idea to fundraiser — 4.36s — charity dashboard, create/manage campaign, update, and share link.
6. Review, report, repeat — 4.92s — admin review, users/donations/reports, then a 2.2s final brand hold.

## Audio
- Audio role: optimistic bed with sparse, professional interaction accents
- Audio arc: warm opening, discreet clicks on actual cursor actions, and a gentle logo resolution
- Music: `happy-beats-business-moves-vol-10-by-ende-dot-app.mp3`
- Music treatment: moderate-low bed with short edge fades; keep UI clicks and readable holds clear.
- Music cue guidance: bundled preset `assets/music/cues/happy-beats-business-moves-vol-10-by-ende-dot-app.music-cues.md` (~109.96 BPM); optional strong cues at 20.19s and 22.37s, with chapter cuts near 3.01, 7.35, 11.47, 15.28, and 19.64s.
- Audio-reactive treatment: none; prioritize a stable, legible product interface.
- Audio-coupled moments:
  - Explore CTA and filter selection — restrained click
  - Amount selection and simulated payment — one click and confirmation accent
  - Charity action and admin approval — sparse UI clicks
  - Final mark — soft accent, then quiet hold
- SFX selection guidance: choose low/medium high-frequency-risk UI clicks and one warm confirmation from the bundled licensed collection; avoid repeated ticks.
- SFX analysis guidance: `C:\Users\HP\.agents\skills\brag\assets\sfx\sfx-analysis.md`
- Exact SFX choice: select after the visual animation is implemented; keep filenames/timestamps matched to visible actions.
- Audio files: local copies in `composition/assets/`; no remote media at render time.

## Hyperframes Instructions
This is the `/brag` workflow. Do not write a `SPEC.md`, introduce a generic launch storyline, or add voiceover. Recreate the six source-grounded screen groups in a timeline-driven browser UI. The pointer and route changes are simulated visual demonstrations; the movie itself is not an interactive web app.

Show actual CharityConnect copy, colors, navigation labels, campaign progress, role-specific route families, and the simulated-payment warning. Keep all data fictional and generic. Maintain a readable browser frame and chapter label while allowing the product screen to remain the hero.

The music cue list is optional timing guidance; story and text readability take priority. Use local audio and image assets only. Run `npx hyperframes check --json` as the single pre-render gate, inspect snapshots, then preview and render locally.

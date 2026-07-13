# Team retreat options

Interactive decision artifact for a team split between Edinburgh and the El Segundo/LAX area. The planning window is October 2026 through January 2027, and the concept is a destination-led team retreat rather than conference attendance.

## Open it

The artifact has no build step or external dependencies.

- Open `index.html` directly in a browser, or
- From this folder run `python -m http.server 8080` and visit `http://localhost:8080`.

The shortlist is stored in browser `localStorage`; it does not modify these files.

Team size is a live scoring input. Selecting `6–10`, `11–29` or `30–40` replaces each destination's generic group-readiness score with a size-specific fit score and operating note.

The Big Sur → Scotland strategy section is connected to the same live ranking. It displays Big Sur's current rank and the current first-place destination, or reports that Big Sur is outside the active filters.

## Folder structure

```text
20260713_teamRetreatOptions/
├── index.html              # Interactive artifact
├── assets/
│   ├── app.js              # Option data, scoring and interactions
│   └── styles.css          # Responsive visual design
├── notes/
│   ├── decisions.md        # Living decision record
│   ├── research.md         # Assumptions, sources and verification items
│   └── revision-log.md     # Dated change history
└── README.md
```

## Updating it

1. Add or revise destination objects near the top of `assets/app.js`.
2. Keep each score on a 1–10 scale. Scores are directional, not precise measurements.
3. Add material sources to both `index.html` and `notes/research.md`.
4. Record meaningful changes in `notes/revision-log.md`.
5. When dates, headcount and budget are known, replace travel estimates with date-specific itineraries and property quotes.

## Current framing

- Current emotional favorite and optional sequence: whole team in Big Sur in 2026, then a potential whole-team Scotland retreat in 2027.
- Current expedition choice: Nuuk.
- Current top single-retreat result under the default weights: Hudson Valley.
- Current warm, neutral-ground wildcard: Bintan via Singapore.
- Fairness can be evaluated across a sequence: the entire team attends Big Sur in 2026 and, if committed, the entire team attends Scotland in 2027. This does not mean splitting the team into local retreats.

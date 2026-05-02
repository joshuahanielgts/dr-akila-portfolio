## Dr. K. Akila — Academic Portfolio

A premium, single-page academic portfolio with deep navy/slate palette, glassmorphism cards, soft shadows, and smooth scroll animations via Framer Motion.

### Design system

- **Palette (oklch in `src/styles.css`)**: deep navy background, slate surfaces, crisp white foreground, electric-blue + soft-teal accents. Add tokens: `--accent-electric`, `--accent-teal`, `--surface-glass`, `--gradient-hero`, `--shadow-glow`, `--shadow-elegant`.
- **Typography**: Inter (body) + Space Grotesk (display) via Google Fonts in `__root.tsx` head links.
- **Effects**: backdrop-blur glass cards, gradient borders, subtle grid/dot background pattern in hero.
- **Animation**: Framer Motion `whileInView` fade-up + stagger; animated counters for stats.

### Structure

Single-page site (all sections on `/`), with sticky glass nav that smooth-scrolls to section IDs. This is appropriate here since it's one cohesive CV, not multiple shareable pages.

```
src/
  routes/
    __root.tsx           (Google Fonts links, updated meta for Dr. Akila)
    index.tsx            (composes all sections)
  components/
    portfolio/
      Navbar.tsx         (glass sticky nav with smooth-scroll)
      Hero.tsx           (split layout, photo + identifiers + CTAs)
      Education.tsx      (timeline cards)
      Experience.tsx     (interactive timeline, 19.7 yrs)
      Research.tsx       (animated counter grid + highlighted research block)
      Awards.tsx         (custom-icon list)
      Skills.tsx         (animated pill badges, two groups)
      Contact.tsx        (form UI + direct details)
      Footer.tsx
      AnimatedCounter.tsx
      SectionHeading.tsx
  assets/
    akila.jpeg           (copied from upload)
  styles.css             (extended tokens, gradients, glass utility)
```

### Section details

1. **Hero** — Split grid. Left: name, title, objective, identifier icon row (Google Scholar, Scopus, ORCID, Web of Science, ResearchGate, Vidwan — lucide icons in glass circles, `href="#"` placeholders), two CTAs ("View Publications" → #research, "Contact Me" → #contact). Right: rounded portrait with gradient glow ring + soft shadow. Animated gradient + dot grid background.
2. **Education** — Vertical timeline, three glass cards (Ph.D., M.E., B.E.) with degree, specialization, institution, date.
3. **Experience** — Alternating timeline with role, institution, date range; total "19.7 Years" badge at top.
4. **Research & Accomplishments** — 5-up metric grid with Framer Motion animated counters (31 / 24 / 12 / 5 / 76). Below: emphasized blockquote card for "Robust Human Action Recognition for Closely Related Actions" mentioning SIO-HOG and CCHM-HAR.
5. **Awards** — Star/check icon list, 5 items.
6. **Skills** — Two grouped sections (Technical / Core Subjects) as staggered pill badges with hover lift.
7. **Contact + Footer** — Glass contact card (name/email/message form, presentational only — no backend), plus phone + email with icons. Minimal footer with copyright.

### Technical notes

- Install `framer-motion` via `bun add framer-motion`.
- Use `lucide-react` (already available) for all icons including academic identifiers (`GraduationCap`, `BookOpen`, `Award`, `Microscope`, etc. — academic networks use generic icons since brand icons aren't in lucide).
- All colors via semantic tokens in `styles.css` — no hardcoded hex in components.
- Update `__root.tsx` meta: title "Dr. K. Akila | Asst. Professor, CSE — SRM IST", proper description + OG tags.
- Replace placeholder `index.tsx` with composed sections.
- Default to dark theme by adding `className="dark"` on `<html>` for the navy aesthetic.
- Form is UI-only (no Lovable Cloud needed) — submit shows a toast via existing sonner.

### Out of scope

- No actual publication list / PDFs (not provided).
- Identifier links use `#` placeholders (URLs not provided).
- No backend; contact form is presentational.

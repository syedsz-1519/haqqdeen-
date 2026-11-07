# Implementation Plan: Enhanced Brand Name Representation

## User Alignment & Selected Design
Based on user feedback, the brand identity in the header, mobile drawer, and footer will be upgraded to match the official aesthetic:
1. **Brand Wordmark**: Modern dual-tone typographic styling:
   - **`HAQQ`** in bold Midnight Navy (`#0A1A3F`)
   - **`DEEN`** in vibrant Electric Blue (`#0075D6`)
   - Precision tracking and typographic hierarchy in Space Grotesk.
2. **Subtitle & Tagline**:
   - Clean, tracked uppercase tagline: **`ESTABLISH THE DEEN`** (`text-[9px] font-bold tracking-[0.2em] text-[#0A1A3F]/70`)
   - Integrated with elegant Arabic script: **`حَقّ الدِّين`** (`font-arabic text-xs font-semibold text-[#005CAB]`)
   - Balanced spacing and crisp alignment with the circular logo emblem.
3. **Waqf Badge Position**:
   - Refine the `100% Free` Waqf badge so it sits harmoniously beside the wordmark without crowding the text or causing baseline awkwardness.

---

## Proposed File Changes

### 1. `src/components/Navbar.tsx`
- Refactor the brand lockup button:
  - Larger, crisp display of the official logo (`w-11 h-11 object-contain rounded-xl p-0.5 bg-white border border-[#0A1A3F]/10 shadow-xs`).
  - Wordmark: `<span className="text-[#0A1A3F]">HAQQ</span><span className="text-[#0075D6]">DEEN</span>`.
  - Harmonious `100% Free` celestial gold badge with subtle borders.
  - Subtitle line: `ESTABLISH THE DEEN` in tracked uppercase with `•` separator and Arabic script `حَقّ الدِّين`.

### 2. `src/components/MobileDrawer.tsx`
- Update the mobile drawer header to match the new dual-tone wordmark and dual-script subtitle.

### 3. `src/components/Footer.tsx`
- Update the footer's brand identity block to maintain consistent dual-tone typography and tracked tagline.

---

## Verification Plan
1. **Compilation & Linting**: Run `compile_applet` and `lint_applet` in parallel to ensure zero errors.
2. **Visual Inspection**:
   - Verify proper letter-spacing, alignment, and optical balance on desktop and mobile viewports.
   - Confirm that the Arabic glyphs render smoothly without truncation or awkward baseline shifts.

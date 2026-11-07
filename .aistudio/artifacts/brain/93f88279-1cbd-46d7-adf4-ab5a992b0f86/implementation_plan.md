# Implementation Plan: Real YouTube Video Embed Previews & Interactive Player

## Overview & User Alignment
Based on user feedback:
1. **Real YouTube Video Embeds on Cards**: Each video card in the YouTube catalog (`YouTubeView.tsx`) will feature an embedded responsive YouTube player preview (`iframe` with `loading="lazy"`, official video embed IDs, and instant playback controls). Users can watch the preview directly within the card or click to open the expanded modal.
2. **Responsive YouTube Player Modal with Key Notes**: When opening any video in the modal, a responsive YouTube embed player (`aspect-video w-full iframe` with full controls, subtitles, and HD playback) will stream the lecture, paired with synchronized curriculum notes, key takeaways, and timestamps.
3. **Curated Canonical Video Embeds**: Provide verified authentic Islamic lecture and Khutbah YouTube IDs across all 8 catalog items and the featured hero masterclass.

---

## Detailed Proposed Changes

### 1. `src/data/youtubeData.ts` & `src/types.ts`
- Add valid YouTube video embed IDs to each video record:
  - Example real embed IDs for Khutbahs, Quranic Tadabbur, and Tazkiyah lectures (e.g. `dQw4w9WgXcQ` replaced with high-quality authentic Islamic lectures, or official embed URLs `https://www.youtube-nocookie.com/embed/{id}`).
  - Add `embedUrl` field constructed as `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`.

### 2. `src/views/YouTubeView.tsx` — Real Embedded Previews & Modal
- **Featured Hero Masterclass**:
  - Replace the static visual box with a responsive YouTube iframe embed player allowing 1-click immediate HD playback directly on the page.
- **Video Cards Grid**:
  - Add interactive toggle or direct responsive YouTube iframe preview in each card with `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"` and `allowFullScreen`.
  - Provide both "Watch Inline" and "Open Full Study Modal" actions.
- **Expanded Video Player Modal**:
  - Stream the video in an embedded responsive iframe (`aspect-video w-full`).
  - Alongside the video, display structured notes, timestamps, key takeaways, and direct links to the `@haqqdeen` channel.

---

## Verification Plan
1. **Compilation & Linting**: Run `compile_applet` and `lint_applet` in parallel to ensure zero errors.
2. **Interactive Testing**:
   - Verify that clicking play on any card streams the YouTube video smoothly inside the iframe.
   - Verify that opening the modal loads the full responsive YouTube player with accompanying curriculum notes.
   - Test responsive layout on mobile and desktop viewports to ensure zero iframe clipping or horizontal scroll.

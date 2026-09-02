# Plan: Instagram icon button in the footer

## Goal
Add a small Instagram logo button to the left of the `@bishacontractors` handle in the site footer. Colour it black to match the site, and make it a working link to `https://www.instagram.com/bishacontractors/`.

## What changes
File: `src/components/SiteFooter.tsx`

1. Add `import { Instagram } from "lucide-react";` (lucide-react is already a project dependency, v0.575).
2. In the contact column, replace the plain text link block with an icon + handle layout:
   - An `<a>` wrapping a lucide `Instagram` icon, sized ~18px, coloured `text-foreground` (the site's near-black warm dark, matching the rest of the footer type) so it matches the site rather than the default Instagram gradient.
   - `href="https://www.instagram.com/bishacontractors/"`, `target="_blank"`, `rel="noreferrer"`.
   - `aria-label="Instagram"` so the icon-only link is accessible.
   - A subtle hover (opacity) consistent with the existing links.
   - The existing `@bishacontractors` text link stays next to it, pointed at the same URL, so both the icon and the text are working links.

Layout: a small flex row — icon button on the left, handle text on the right — replacing the current standalone text link, so the rest of the footer column (phone, email) keeps its stack spacing.

## What does NOT change
- Hero image and placement: unchanged (confirmed).
- Footer copy, address, phone, email: unchanged.
- No fake content added anywhere.

## Result
A small black Instagram icon sits to the left of `@bishacontractors`; clicking either the icon or the text opens the Instagram profile in a new tab.

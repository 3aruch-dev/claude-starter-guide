# Claude Code Starter Guide

Beginner guide published as an Astro Starlight site on GitHub Pages.

## Commands
- `npm run dev`: preview at http://localhost:4321/claude-starter-guide/
- `npm run build`: must pass before any commit; it fails on broken internal links

## Where to edit
- Guide pages: `src/content/docs/` (only edit here, never built output)
- Sidebar and site settings: `astro.config.mjs`

## Writing rules
- Readers are beginners: plain English, short steps, explain jargon on first use
- When a step differs between Mac and Windows, give both
- Any factual change (command, package name, link) must cite an official source in the PR description
- When content changes, update the "Last reviewed" date in `src/content/docs/part-6-living-toolkit.md`

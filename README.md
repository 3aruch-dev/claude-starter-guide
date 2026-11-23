# The Claude Code Starter Guide

From zero to using AI better than 99% of your peers — for Mac and Windows.

**Read it here:** https://3aruch-dev.github.io/claude-starter-guide/

The guide's pages live in [`src/content/docs/`](src/content/docs/). The site is built with
[Astro Starlight](https://starlight.astro.build/) and published to GitHub Pages on every
push to `main`. Every Monday, a scheduled job asks Claude Code to check the guide against
official sources and open a pull request with any updates; a person reviews each one
before it goes live.

Suggestions are welcome: [open an issue](https://github.com/3aruch-dev/claude-starter-guide/issues).

Maintainers: see [MAINTAINING.md](MAINTAINING.md).

## Preview locally

Needs [Node.js](https://nodejs.org/) 22.23 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:4321/claude-starter-guide/.

`npm run build` builds the finished site into `dist/` and fails if any link between
pages is broken.

## Where things live

| What                                   | Where                                   |
| -------------------------------------- | --------------------------------------- |
| The guide's pages                      | `src/content/docs/`                     |
| Site settings, sidebar, social preview | `astro.config.mjs`                      |
| Colours and fonts                      | `src/styles/custom.css`                 |
| Home page cards, checklist, footer     | `src/components/`                       |
| Logo, hero picture                     | `src/assets/`                           |
| Favicon, LinkedIn preview image        | `public/`                               |
| Publishing and weekly update jobs      | `.github/workflows/`                    |

# The Claude Code Starter Guide

From zero to using AI better than 99% of your peers — for Mac and Windows.

**Read it here:** https://3aruch-dev.github.io/claude-starter-guide/

The guide's pages live in [`docs/`](docs/). The site is built with
[MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and published to
GitHub Pages on every push to `main`. Every Monday, a scheduled job asks Claude Code to
check the guide against official sources and open a pull request with any updates; a
person reviews each one before it goes live.

Suggestions are welcome: [open an issue](https://github.com/3aruch-dev/claude-starter-guide/issues).

Maintainers: see [MAINTAINING.md](MAINTAINING.md).

## Preview locally

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve
```

Then open http://127.0.0.1:8000.

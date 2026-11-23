# Maintainer setup — publish this guide and keep it updated weekly

*For the guide's owner only. Readers can skip this.*

## What you need first

Parts 1 and 2 done (Git, gh logged in, Claude Code working) and a Claude Pro or Max plan.

## Step A: Make a token for the weekly job

In your terminal run:

```bash
claude setup-token
```

It prints a long token (valid for about a year). Copy it somewhere safe for Step C. Never paste it into a file or chat.

## Step B: Paste this into Claude Code

Make a new folder, open Claude Code in it (`claude`), export this guide as Markdown, drop the file in the folder, then paste:

```text
Set up a public GitHub repo called claude-starter-guide for the guide in this folder.

1. Convert the guide into an MkDocs Material docs site: one page per Part, a home page,
   search, light/dark mode, and copy buttons on code blocks.
2. Add a GitHub Actions workflow that builds and publishes the site to GitHub Pages
   on every push to main. Turn on GitHub Pages for the repo.
3. Add a second workflow, .github/workflows/weekly-update.yml, that:
   - runs every Monday at 06:00 UTC (cron) and can also be run manually
   - uses anthropics/claude-code-action@v1 with
     claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
   - has permissions: contents write, pull-requests write
   - gives Claude this prompt: "Audit every install command, package name, slash command,
     tool and link in docs/ against the official sources listed in the Living Toolkit
     page and current web results. Fix anything deprecated, renamed or broken. Refresh
     the Living Toolkit recommendations. Update the 'Last reviewed' date. Open ONE pull
     request titled 'Weekly guide update <date>' listing every change and its source.
     If nothing changed, open no pull request."
   - allows the tools it needs: web search, web fetch, read, edit, git and gh.
4. Push everything to GitHub, then tell me the live site link and remind me to add
   the CLAUDE_CODE_OAUTH_TOKEN secret. Explain each step in plain English.
```

## Step C: Add the secret

On GitHub, open the repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**. Name: `CLAUDE_CODE_OAUTH_TOKEN`. Value: the token from Step A.

## Step D: Test it

Open the repo's **Actions** tab, choose **weekly-update**, and click **Run workflow**. Within a few minutes you should get a pull request (or none, if everything is current).

## Your weekly routine (two minutes)

GitHub emails you when the pull request arrives. Skim the list of changes and their sources, then click **Merge**. The website updates itself.

!!! note "Good to know"

    the token is tied to your Claude subscription and uses your plan's usage. Renew it with `claude setup-token` once a year. If several people maintain the guide, use an Anthropic API key (`ANTHROPIC_API_KEY`) instead.

---
title: 'Part 9: Going further'
description: For readers who've finished the guide — harnesses, subagents and agent teams, scheduled tasks, and agents that keep running in the cloud.
---

:::note[Intermediate–advanced]
You don't need this page to get started. Come back once Parts 1–4 feel comfortable. Each section explains one idea in plain English, says when you'd use it, and ends with a small **Try it** and the official sources it's based on. Several of these features are new, so check the linked docs if something looks different. *(Verified November 2026.)*
:::

## 9.1 Harnesses: what's actually running

A **model** (like Claude) only reads text and writes text. On its own it can't open a file, run a command or remember yesterday. A **harness** is everything wrapped around the model that lets it act: the instructions it starts with, the tools it's allowed to use, the loop that runs a tool and feeds the result back, and the way it manages its memory as a conversation grows.

Anthropic describes the harness as the *"system prompt, set of tools, and overall agent harness"* around the model, and calls its Agent SDK *"a powerful, general-purpose agent harness"*. The Agent SDK gives you *"the same tools, agent loop, and context management that power Claude Code"* — so when you use Claude Code, you're using that harness through a terminal.

Why it matters: the same model can do much better or worse work depending on its harness. Everything in Parts 2–4 — CLAUDE.md, permissions, skills, MCP servers, hooks, subagents — is you **customising your harness**. The rest of this page is more of the same.

**Try it:** open Claude Code in a project and ask *"What tools do you have available right now, and which come from MCP servers or plugins?"* That list is the "tools" half of your harness.

**Sources:** [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) · [Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)

## 9.2 Subagents and orchestrators

A big task can be split up: one **orchestrator** (a lead agent) breaks the work into pieces, hands each piece to a **worker**, then combines the results. Anthropic's name for this pattern is *orchestrator-workers*: *"a central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results."*

Claude Code gives you two ways to do it:

| | **Subagents** | **Agent teams** (experimental) |
| --- | --- | --- |
| What it is | Helpers your main Claude sends off on a task | Several full Claude Code sessions working together, one acting as team lead |
| Memory | Each has its own fresh context window and returns only a summary | Each teammate has its own context window, plus a **shared task list** |
| Talking to each other | Report back to the main agent | *"Teammates message each other directly"* |
| Cost | Lower | *"Significantly more tokens than a single session"* |
| Best for | Focused jobs where only the result matters: research, searching code, reviews | Bigger work that needs discussion, e.g. investigating a bug from several angles |

**Subagents** are the everyday tool. Their main benefit is keeping your conversation clean: *"the subagent does that work in its own context and returns only the summary."* You can save your own as small Markdown files in `.claude/agents/` (this project) or `~/.claude/agents/` (all your projects); the easiest way is to ask Claude to write one for you.

**Agent teams** are the "shared brain" version: a lead, a task list everyone can see, and teammates who message each other. They're switched off by default. To turn them on, add this to your personal settings file, `~/.claude/settings.json` (or ask Claude to add it for you):

```json title="~/.claude/settings.json"
{ "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" } }
```

Then describe the team you want in plain words. Start small: the docs suggest *"3-5 teammates for most workflows"*, and for routine work *"a single session is more cost-effective."*

**Try it (subagents):** in a project, ask *"Use a subagent to read through this project and summarise how it's organised, then tell me the three files I should read first."* Notice how little of the searching lands in your own conversation.

**Try it (agent team):** once enabled, ask *"Spawn three teammates to review this project: one on clarity for beginners, one on accuracy, one playing devil's advocate. Have them compare notes and give me one list."*

**Sources:** [Subagents](https://code.claude.com/docs/en/sub-agents) · [Agent teams](https://code.claude.com/docs/en/agent-teams) · [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)

## 9.3 Scheduled tasks

Some jobs are worth doing on a timer: a morning summary of new issues, a weekly check that links still work, a nightly tidy-up of notes. There are four ways, and the big difference is **where it runs** — which decides whether your computer needs to be on.

| Option | Runs on | Computer must be on? | Good for |
| --- | --- | --- | --- |
| `/loop` inside a session | Your computer | Yes, with Claude Code open | Checking something every few minutes while you work |
| Desktop app scheduled task | Your computer | Yes, app open and awake | Jobs that need your local files |
| Cloud scheduled task (`/schedule`) | Anthropic's cloud | **No** | Jobs on a GitHub repository |
| GitHub Actions on a schedule | GitHub's servers | **No** | Jobs that should live with the repo, reviewed by pull request |

- **`/loop`** repeats a prompt in your open session, for example `/loop 5m check whether the build has finished`. It stops when you close the session.
- **Desktop app:** in the **Code** tab, open **Scheduled** → **New task**, pick a folder and a schedule (hourly, daily, weekdays, weekly or custom). It only runs while the app is open and the computer is awake.
- **`/schedule`** (also called routines) saves a prompt plus a repository and runs it in the cloud, *"so they keep working when your laptop is closed."* Example: `/schedule daily PR review at 9am`. Available on paid plans; it's a research preview, and it can't run more than once an hour.
- **GitHub Actions** is how this guide updates itself every Monday — see [MAINTAINING.md](https://github.com/3aruch-dev/claude-starter-guide/blob/main/MAINTAINING.md) for the full setup.

:::tip[Which one for a nightly memory tidy-up?]
Your CLAUDE.md files and Claude's memory notes live **on your computer** (in `~/.claude/`), and cloud tasks can't see them. Use a **Desktop app scheduled task** pointed at that folder, with a prompt like *"Read my memory files, merge duplicates, delete anything out of date, and list what you changed."*
:::

**Try it:** in an open session, run `/loop 10m tell me if any files in this project changed`. Edit a file, wait, then ask Claude to cancel the loop.

**Sources:** [Cloud scheduled tasks](https://code.claude.com/docs/en/routines) · [`/loop` and scheduling options](https://code.claude.com/docs/en/scheduled-tasks) · [Desktop scheduled tasks](https://code.claude.com/docs/en/desktop-scheduled-tasks) · [GitHub Actions](https://code.claude.com/docs/en/github-actions)

## 9.4 Always-on agents in the cloud

Normally Claude Code stops when you close your laptop. There are three ways to keep an agent working, from easiest to most hands-on.

**1. Cloud sessions (easiest).** Send a task to Anthropic's cloud from your terminal:

```bash title="Terminal or PowerShell"
claude --cloud "Fix the broken link checker and open a pull request"
```

*"The session keeps running after you close your laptop, and you can check on it or steer it from any device"* — including the Claude app on your phone or [claude.ai/code](https://claude.ai/code). To pull it back into your terminal later, run `claude --teleport`. Works on GitHub repositories, on paid plans.

**2. Remote Control (your computer, steered from anywhere).** Run `claude --remote-control` (or type `/remote-control` in a session) and you can follow and steer that session from your phone or browser. Claude still runs on your machine, so *"your computer has to stay on and the `claude` process has to keep running."*

**3. Your own server with tmux (most control).** If you rent a cloud server (a "VPS") and connect to it over SSH, anything you start stops when the connection drops — unless you run it inside **tmux**. tmux keeps programs *"running in the background"* after you disconnect, and lets you reattach later.

Install it:

- **Mac:** `brew install tmux`
- **Linux server (Ubuntu):** `sudo apt install tmux`
- **Windows:** tmux doesn't run in plain PowerShell. Use it on the Linux server you connect to, or inside WSL (Ubuntu) with the Linux command. Or skip tmux and use option 1 or 2.

Then:

```bash title="Terminal (Mac or Linux)"
tmux new -s claude      # start a session named "claude"
claude                  # start Claude Code inside it
# press Ctrl+B, then D, to detach — Claude keeps running
tmux ls                 # list running sessions
tmux attach -t claude   # jump back in, even after reconnecting
```

:::caution
An agent running unattended still acts with your accounts and permissions. Keep the [safe permissions from Step 2.7](/claude-starter-guide/part-2-claude-code/#step-27-set-safe-permissions), work in a Git branch, and review what it did before merging.
:::

**Try it:** on your Mac, start `tmux new -s test`, run `claude`, detach with **Ctrl+B** then **D**, close the terminal window, open a new one and run `tmux attach -t test`. Your session is still there.

**Sources:** [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) · [Remote Control](https://code.claude.com/docs/en/remote-control) · [tmux: Getting started](https://github.com/tmux/tmux/wiki/Getting-Started) · [tmux: Installing](https://github.com/tmux/tmux/wiki/Installing) · [Using Claude Code in tmux](https://code.claude.com/docs/en/terminal-config)

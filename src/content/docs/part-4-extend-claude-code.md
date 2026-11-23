---
title: 'Part 4: Extend Claude Code'
description: Give Claude Code new abilities with MCP servers, skills, custom slash commands, subagents, hooks and plugins.
---

## 4.1 MCP servers: give Claude new abilities

MCP servers connect Claude to other tools: browsers, GitHub, databases, docs, Notion, Slack and more. Add one from the terminal, for example:

```bash title="Terminal or PowerShell"
claude mcp add <name> -- <command to start it>
```

Then check it inside Claude with `/mcp`. Each server's own page gives its exact command.

:::caution[Rule]
Only install MCP servers from sources you trust. They can access your data. Start with two or three; too many slows Claude down and clutters its thinking.
:::

## 4.2 Skills: teach Claude repeatable expertise

A skill is a folder with a `SKILL.md` file (instructions) plus any helper files. Claude loads it automatically when relevant.

- Personal skills: `~/.claude/skills/`
- Project skills: `.claude/skills/` inside the project

Easiest way to make one: *"Create a skill for how I like my weekly reports written."* Anthropic also publishes official skills (documents, spreadsheets, presentations, PDFs) — see [Part 6](/claude-starter-guide/part-6-living-toolkit/).

## 4.3 Your own slash commands (now part of skills)

Custom slash commands have been merged into skills. To save a prompt you use often, create `.claude/skills/review/SKILL.md` with a short name and description at the top, then type `/review` to run it. Old `.claude/commands/` files still work, but use skills for anything new. *(Verified November 2026.)*

## 4.4 Subagents

Run `/agents` to create specialists (a code reviewer, a researcher, a tester), each with its own instructions and tools. They keep your main conversation clean.

## 4.5 Hooks

Hooks run automatically at set moments, e.g. format code after every edit, or play a sound when Claude finishes. Set them up with `/hooks`. Intermediate level.

## 4.6 Plugins

Plugins bundle commands, agents, skills, hooks and MCP servers into one install. Browse with `/plugin`. This is the fastest way to adopt someone else's proven setup.

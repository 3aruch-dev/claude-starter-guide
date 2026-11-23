---
title: 'Part 6: The Living Toolkit'
description: The best current Claude Code tools, MCP servers, skills and community resources — reviewed every week against official sources.
---

:::note[Last reviewed: 23 November 2026]{icon="approve-check-circle"}
This section is updated regularly. Items marked **Core** have stayed useful over time; **Trending** items are newer and worth trying.
:::

## 6.1 Official sources to follow (check these first)

- Claude Code docs and changelog: [code.claude.com/docs](https://code.claude.com/docs)
- Anthropic official skills: [github.com/anthropics/skills](https://github.com/anthropics/skills)
- Claude Code repo and release notes: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)
- OpenAI Codex: [github.com/openai/codex](https://github.com/openai/codex)
- MCP server directory: [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

## 6.2 Recommended MCP servers

- **Core — Context7:** pulls up-to-date library documentation into Claude, so it stops using outdated code. Install it as a plugin with `/plugin install context7@claude-plugins-official`, or follow [context7.com/docs](https://context7.com/docs/installation).
- **Core — Playwright:** lets Claude open and control a browser to test what it built. Maintained by Microsoft; add it with `claude mcp add playwright -- npx @playwright/mcp@latest` ([setup page](https://playwright.dev/mcp/clients/claude-code)).
- **Core — GitHub:** issues, pull requests and repos (use the official [github/github-mcp-server](https://github.com/github/github-mcp-server); the older `modelcontextprotocol/servers` GitHub entry is archived), or just let Claude use the `gh` tool from [Step 1.5](/claude-starter-guide/part-1-foundations/#step-15-install-the-github-command-line-tool).
- **Situational:** Notion, Slack, Google Drive, Linear, Supabase, Figma — add only when you actually use that tool.

## 6.3 Recommended skills

- **Core — Anthropic document skills:** Word, Excel, PowerPoint and PDF creation. Install with `/plugin marketplace add anthropics/skills`, then `/plugin install document-skills@anthropic-agent-skills`.
- **Core — Skill creator:** helps you build your own skills properly.
- **Your own:** the best skills are the ones you write for your own repeated work.

## 6.4 Community resources

- Curated "awesome Claude Code" lists on GitHub (search *awesome claude code*).
- Plugin marketplaces, browsable via `/plugin`.

:::caution
**Safety rule for anything community-made:** check the stars, recent activity and author before installing. Read a skill's or plugin's files, or ask Claude to review them for anything risky, before using it.
:::

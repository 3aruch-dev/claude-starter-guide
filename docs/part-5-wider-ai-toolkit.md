# Part 5: Beyond Claude Code — the wider AI toolkit

Claude Code is your main tool. These work alongside it.

## 5.1 OpenAI Codex CLI

OpenAI's terminal coding agent. Useful as a second opinion: have Codex review what Claude built, or the other way around.

**Mac (official installer):** `curl -fsSL https://chatgpt.com/codex/install.sh | sh`  
**Windows (PowerShell, official installer):** `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`  
**Alternatives:** `brew install --cask codex` (Mac) or `npm install -g @openai/codex` (either). Update later with `codex update`. *(Verified November 2026.)*

Start it from a project folder:

```bash
codex
```

Sign in with your ChatGPT account. Its project instruction file is **AGENTS.md** (the equivalent of CLAUDE.md). Tip: keep one set of rules in AGENTS.md and have CLAUDE.md say *"Also follow AGENTS.md"*, so both tools share the same instructions.

## 5.2 Chat apps (for thinking, writing and research)

- **Claude app (desktop and mobile):** projects, research, file creation, connectors to Gmail, Calendar and Drive.
- **ChatGPT:** strong all-rounder; good second opinion.
- **Gemini:** strong with very long documents and Google Workspace.
- **Perplexity:** fast, cited web research.

## 5.3 AI code editors

- **VS Code + Claude Code extension:** the recommended starting point.
- **Cursor:** an AI-first editor; Claude Code also runs inside it.

## 5.4 Useful supporting tools

- **Python + uv:** many AI tools and MCP servers need Python. Install uv (Mac: `brew install uv`; Windows: `winget install astral-sh.uv`), which manages Python for you.
- **Docker Desktop:** runs some tools in isolated containers. Intermediate.
- **A password manager** (1Password, Bitwarden): store API keys safely.
- **Voice dictation** (built into Mac and Windows, or apps like Wispr Flow): talking your prompts is faster and you naturally give more context.

## 5.5 Which tool when?

- Building, automating, or working with files: **Claude Code**.
- Second opinion on code: **Codex**.
- Thinking, writing, brainstorming: **Claude app**.
- Quick researched answers with sources: **Perplexity** or Claude with web search.

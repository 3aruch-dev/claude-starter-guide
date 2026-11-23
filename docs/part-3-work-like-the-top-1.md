# Part 3: Work like the top 1%

The tool is the same for everyone. The habits are what separate people.

## 3.1 Explore, plan, then build

1. **Explore:** *"Read this project and explain how it works. Don't change anything yet."*
2. **Plan:** press **Shift + Tab** into **Plan mode**, describe the goal, and ask for a step-by-step plan. Push back on it before approving.
3. **Build:** approve the plan and let Claude work in small steps.
4. **Verify:** *"Test this and show me proof it works."*

## 3.2 Give context, not just commands

Weak: *"Make a budget tracker."*  
Strong: *"Make a simple budget tracker web page for me. I'm not technical. I want to enter expenses with a category and see a monthly total and a pie chart. Keep it to one page I can open in a browser. Ask me questions before you start if anything is unclear."*

The formula: **what** you want, **who** it's for, **what done looks like**, and **constraints**.

## 3.3 Ask Claude to interview you

For anything bigger than a small task: *"Before we build, interview me with questions one at a time until you fully understand what I want. Then write it into a spec file."*

## 3.4 Give Claude a way to check its own work

Claude does its best work when it can see results: tests, screenshots, error messages. Paste errors straight in. Drag in screenshots. Ask it to write tests. Say *"Keep going until it works."*

## 3.5 Keep context clean

- One task per conversation. Use `/clear` between tasks.
- Long sessions get worse over time. Start fresh rather than fighting it.
- Use `/compact` when a big task needs to continue.

## 3.6 Use Git as your safety net

Ask Claude to **commit after every working step**. If something breaks, say *"Go back to the last working commit."* Push to GitHub regularly so your work is backed up. You can say: *"Create a private GitHub repo for this project and push it."*

## 3.7 Pick the right model and effort

Use `/model` to switch. Rule of thumb: the most capable model for planning and hard problems, a faster one for simple, repetitive work. Add *"think hard"* to a request when a problem needs deeper reasoning.

## 3.8 Run things in parallel (intermediate)

Once comfortable, open two or three terminal windows on separate tasks, or ask Claude to use **subagents** for research while it builds. Advanced users use **git worktrees** so parallel Claudes don't collide.

## 3.9 Common beginner mistakes

- Starting Claude in your home folder instead of a project folder.
- Vague requests, then blaming the AI.
- Never using `/clear`, so sessions get confused.
- Approving changes without reading what they do.
- Not using Git, so there's no undo.
- Pasting passwords or API keys into chat. Keep secrets in a `.env` file and tell Claude never to commit it.

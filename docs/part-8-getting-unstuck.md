# Part 8: Getting unstuck

- **"command not found":** close and reopen the terminal. Still failing? Paste the error into the Claude app and ask what's wrong.
- **Windows "running scripts is disabled":** run PowerShell as administrator and run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`, then type **Y**.
- **Claude Code acting strange:** run `claude doctor`, update with `claude update`, or `/clear` and start over.
- **Claude is going in circles:** press Esc, `/clear`, and restate the goal more clearly, with an example of what you want.
- **Golden rule:** when stuck, ask Claude. Paste the exact error and say what you were trying to do.

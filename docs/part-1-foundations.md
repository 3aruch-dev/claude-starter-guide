# Part 1: Foundations — set up your computer

## Step 1.1: Create your accounts

1. **GitHub:** go to [github.com](https://github.com) and sign up for a free account. Pick a professional username; people will see it.
2. **Claude:** go to [claude.ai](https://claude.ai) and sign up. Claude Code needs a paid plan (Pro or Max) or an Anthropic API account. For most beginners, **Pro** is the place to start; upgrade to **Max** if you hit usage limits often.
3. **Optional — ChatGPT/OpenAI:** needed later for Codex.

## Step 1.2: Open your terminal

**Mac:** press **Cmd + Space**, type **Terminal**, press **Enter**.

**Windows:** press the **Windows key**, type **PowerShell**, then click **Windows PowerShell**. For installs, right-click it and choose **Run as administrator** when told to. Windows 11 users can also use the **Terminal** app, which opens PowerShell inside it.

!!! tip

    Pin the terminal to your Dock (Mac) or taskbar (Windows). You'll open it a lot.

## Step 1.3: Install a package manager

**Mac — Homebrew.** Go to [brew.sh](https://brew.sh), copy the install command shown on the home page, paste it into Terminal and press Enter. It will ask for your Mac password (you won't see the characters as you type; that's normal). When it finishes, it prints **Next steps** with two or three commands. **Run them**; beginners skip this and then `brew` doesn't work. Check it worked:

```bash
brew --version
```

**Windows — winget.** It comes built into Windows 10 and 11. Check it:

```powershell
winget --version
```

If you get an error, open the **Microsoft Store**, search for **App Installer**, and update it.

## Step 1.4: Install Git

**Mac:**

```bash
brew install git
```

**Windows:**

```powershell
winget install --id Git.Git -e
```

Then **close and reopen** your terminal (new installs only show up in a fresh window). Check it:

```bash
git --version
```

Tell Git who you are (use your GitHub email):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Step 1.5: Install the GitHub command-line tool

This lets you log in to GitHub from the terminal, and lets Claude create repos and pull requests for you.

**Mac:** `brew install gh`  
**Windows:** `winget install --id GitHub.cli -e`

Reopen the terminal, then log in and follow the prompts (choose **GitHub.com**, **HTTPS**, and **Login with a web browser**):

```bash
gh auth login
```

## Step 1.6: Install Node.js and npm

Many AI tools, including Codex and lots of MCP servers, need Node.

**Mac:** `brew install node`  
**Windows:** `winget install OpenJS.NodeJS.LTS`

Reopen the terminal and check both:

```bash
node --version
npm --version
```

Any version number means success. Use the **LTS** (long-term support) version; it's the stable one.

## Step 1.7: Install a code editor (recommended)

You won't write much code yourself, but you'll want to *see* what Claude builds. Install **Visual Studio Code**:

**Mac:** `brew install --cask visual-studio-code`  
**Windows:** `winget install Microsoft.VisualStudioCode`

## Step 1.8: Make a home for your projects

Keep all your AI projects in one folder.

**Mac:**

```bash
mkdir ~/projects
cd ~/projects
```

**Windows:**

```powershell
mkdir $HOME\projects
cd $HOME\projects
```

`mkdir` makes a folder; `cd` moves you into it.

## Five terminal commands worth knowing

- `pwd` — show which folder you're in.
- `ls` (Mac) / `dir` or `ls` (Windows PowerShell) — list what's in this folder.
- `cd foldername` — go into a folder. `cd ..` goes back up one.
- **Up arrow** — repeat a previous command.
- **Ctrl + C** — stop whatever is running. Your emergency exit.

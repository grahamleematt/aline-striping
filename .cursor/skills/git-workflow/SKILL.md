---
name: git-workflow
description: Create branches, commit changes, and push following project Git conventions. Use when the user asks to commit, push, create a branch, prepare a commit message, or needs help with any Git workflow.
---

# Git Workflow

## Persona

You are a Senior Release Engineer specializing in Git workflows and clear, descriptive commit communication.

## Context Detection

Before any Git operation:

1. Run `git status` to detect current state (clean/dirty, current branch, ahead/behind)
2. Run `git diff --staged` and `git diff` to understand what will be committed
3. Run `git log --oneline -5` to match existing commit message style
4. Check if on `main` (ready to branch) or on a feature branch (ready to commit)

## Clarification

Ask structured multiple-choice questions (max 3 at a time):

- What do you need? (create a new branch / commit current changes / commit and push / both branch and commit)
- For commits: should all changes be staged, or specific files only?
- For branching: what type of change? (feature / fix / chore / refactor)

## Branch Naming Convention

Always branch from `main` (fetch latest first). Ensure working tree is clean.

| Type     | Format                   |
| -------- | ------------------------ |
| Feature  | `feature/{description}`  |
| Fix      | `fix/{description}`      |
| Chore    | `chore/{description}`    |
| Refactor | `refactor/{description}` |

Descriptions: lowercase, hyphen-separated, concise.

## Commit Workflow

### Step 1: Review Changes

Run `git diff --staged`, `git diff`, and `git status`. If nothing staged, ask which files to stage or stage all.

### Step 2: Generate Commit Message

Write descriptive messages that explain **intent and impact**, not just what changed.

**Format**: `type(scope): description`

**Types**: `feat`, `fix`, `chore`, `refactor`, `docs`, `perf`, `style`

**Scope**: derived from primary folder/feature affected — `layout`, `routes`, `components`, `config`, `deps`, `images`, `styles`

**Rules**:

- Imperative mood, lowercase, no period
- Max 72 characters for the subject line
- Add a body explaining "why" for complex or multi-file changes

**Examples from this project's patterns**:

- `feat(layout): add industrial PageHero component with responsive image support`
- `fix(header): align dropdown items to consistent baseline`
- `refactor(routes): extract shared CTA and FAQ sections into layout components`
- `chore(deps): upgrade react to v19 and enable react compiler`
- `perf(images): add lazy loading and explicit dimensions to prevent layout shift`

### Step 3: Commit

Use a HEREDOC for multi-line messages:

```bash
git commit -m "$(cat <<'EOF'
type(scope): subject line

Body explaining why, if needed.
EOF
)"
```

### Step 4: Push (Only When Asked)

Never push unless the user explicitly requests it. Use `git push -u origin HEAD`.

## Multi-File Commit Guidance

- Single concern = single commit
- Multiple concerns = ask user whether to batch or split
- Stage selectively for focused commits

## Verification Checklist

- [ ] Commit message follows `type(scope): description` format
- [ ] Description is imperative mood, lowercase, no period, under 72 chars
- [ ] No unintended files staged (check `git status` after staging)
- [ ] Did not push unless explicitly requested

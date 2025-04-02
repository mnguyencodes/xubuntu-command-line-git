# My Git Commands Cheat Sheet

## Common Git Commands

- git init
- git clone git@github.com:USER-NAME/REPOSITORY-NAME.git
- git remote -v
- git status
- git add `file-name`
- git commit -m "message"
- git log
- git restore --staged `file-name`
- git push origin main
- git fetch origin
- git pull

## Git Branches

### Best Practice

For best practice, you should always make your changes on the correct branch.

Before you even start making any changes, switch over to the correct branch or create one!

Then, issue the command: `git pull`, to ensure that your local branch is up-to-date.

### Pushing Your Local Branch For The First Time

After creating a local branch, follow this workflow for best practice:

1. Make your changes (reminder that this must be done on the correct local branch, NOT on main!)
2. Add your changes with `git add`.
3. Commit your changes with `git commit`.
4. When you're ready to push your changes, use `git push -u origin branch-name`.

### Common Git Branch Commands

- git branch
- git switch `branch-name` / git checkout `branch-name`
- git switch --create `branch-name` / git checkout [-b] `branch-name`

- git push origin `branch-name`

Rename current branch:
- git branch -m `branch-name`

Create pull request (Requires Github CLI):
- gh pr create

### Oops, You Made Changes On The Wrong Branch By Mistake

Without thinking, you started making changes on Main but you want changes you made on Main to be brought over to `branch-name`.

To fix this, issue the following commands:

1. git stash
2. git switch [--create] `branch-name` / git checkout -b `branch-name`
3. git stash pop
4. git rebase main

Delete branch:
- git branch -d `branch-name`

Set tracking information for your current branch:
- git branch --set-upstream-to=origin/`branch` `current-branch`

For example:
- git branch --set-upstream-to=origin/main XCLI-42-Add-More-Commands

## Github CLI Commands

### Create Repo

1. git init
2. gh repo create `repo-name` --source=. --public

When pushing for the first time, be sure to run:

3. git push -u origin main

The -u flag creates a tracking relationship between the local branch and the remote branch. This means Git now associates your local branch (e.g., main) with the corresponding branch on the remote (e.g., origin/main).

### Pull Requests

- gh pr create
- gh pr list
- gh pr view `pr-number`
    - gh pr view 3
- gh pr merge `pr-number`
    - gh pr merge 3

## Issues

- gh issue create
- gh issue list
- gh issue list --state "closed"
- gh issue edit `issue-number`
- gh issue close `issue-number`
- gh issue reopen `issue-number`
- gh issue comment `issue-number`


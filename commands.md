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

- git branch
- git switch `branch-name`
- git switch --create `branch-name`
- git push origin `branch-name`

Rename current branch:
- git branch -m `branch-name`

Create pull request (Requires Github CLI):
- gh pr create

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


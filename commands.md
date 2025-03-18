# My Git Commands Cheat Sheet

## Common Git Commands

- git clone git@github.com:USER-NAME/REPOSITORY-NAME.git
- git remote -v
- git status
- git add [file name]
- git commit -m "message"
- git log
- git restore --staged [file name]
- git push origin main
- git fetch origin
- git pull

## Git Branches

- git branch
- git switch [branch-name]
- git switch --create [branch-name]
- git push origin [branch-name]

Rename current branch:
- git branch -m [branch-name]

Create pull request (Requires Github CLI):
- gh pr create

## Github CLI Commands

- gh pr create
- gh pr list
- gh pr view [pr number]
    - gh pr view 3
- gh pr merge [pr number]
    - gh pr merge 3

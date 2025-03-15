# My Git Commands Cheat Sheet

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

## Git Commit Message Editor

git config --global core.editor "code --wait"

## Git Branches

- git branch
- git switch [branch-name]
- git switch --create [branch-name]
- git push origin [branch-name]

Rename current branch:
- git branch -m [branch-name]

## Install Node.js

### Prerequisites

- sudo apt install curl
- sudo apt update && sudo apt upgrade
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"`
`[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`

Verify nvm is installed: 
- command -v nvm

### Installation

- nvm install --lts
- nvm use --lts

Verify Node.js is installed:
- node -v

## Node Console

You can use the Node console to debug snippets of code without opening your browser.
- node

To quit the console:
- .exit


# My Git Commands Cheat Sheet

## Git

### Installing Git

Upgrade your linux system first:
- sudo apt update
- sudo apt upgrade

Install Git using the following commands:
- sudo add-apt-repository ppa:git-core/ppa
- sudo apt update
- sudo apt install git

Ensure that your Git version is at least v2.28:
- git --version

Create your Github account at:
https://github.com/



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

### Git Commit Message Editor

git config --global core.editor "code --wait"

### Git Branches

- git branch
- git switch [branch-name]
- git switch --create [branch-name]
- git push origin [branch-name]

Rename current branch:
- git branch -m [branch-name]

Create pull request (Requires Github CLI):
- gh pr create

## Github CLI

### Installation

- sudo apt update
- sudo apt install gh
- sudo snap install gh
- gh auth login

? What account do you want to log into? 
`GitHub.com`

? What is your preferred protocol for Git operations? 
`SSH`

? Upload your SSH public key to your GitHub account? 
`Skip`

? How would you like to authenticate GitHub CLI? 
`Login with a web browser`

### Commands

- gh pr create
- gh pr list
- gh pr view [pr number]
    - gh pr view 3
- gh pr merge [pr number]
    - gh pr merge 3

### Github CLI Pull Request Message Editor

- gh config set editor "code --wait"

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

### Node Console

You can use the Node console to debug snippets of code without opening your browser.
- node

To quit the console:
- .exit


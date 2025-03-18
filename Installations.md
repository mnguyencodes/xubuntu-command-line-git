# My Git Installation Instructions

## Installing Git

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

### Configuring Git

Let Git know who you are:
- git config --global user.name "Your Name"
- git config --global user.email "yourname@example.com"

Git changed the default branch from master to main. Change the default branch for Git:
- git config --global init.defaultBranch main

Set your default branch reconciliation:
- git config --global pull.rebase false

Verify your Git configuration:
- git config --get user.name
- git config --get user.email

### Setup SSH Key

Check if you already have an Ed25519 algorithm SSH key installed:
- ls ~/.ssh/id_ed25519.pub

If the message, “No such file or directory”, shows up on the console, you'll want to create a new SSH key:
- ssh-keygen -t ed25519

You'll be prompted for a location to save the SSH key. Press enter.

Log into Github, click on your profile picture, click `Settings`.

On the left, click `SSH and GPG Keys`.

Click on the green button, `New SSH Key`.

On the console, enter the command:
- cat ~/.ssh/id_ed25519.pub

Copy the entire output and paste it into the key field on Github.

Follow the link below for instructions on testing your SSH connection:

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection?platform=linux

The goal is to see the following message output on the console:

"Hi username! You’ve successfully authenticated, but GitHub does not provide shell access."

When you see the message above, you have successfully added your SSH key.

### Git Commit Message Editor

git config --global core.editor "code --wait"

## Github CLI

### Installing Github CLI

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
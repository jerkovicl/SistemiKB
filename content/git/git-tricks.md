/*
Title: Git Tips & Tricks
Sort: 1
*/


**Table of Contents**

- [Git add](#git-add)
- [Git clone](#git-clone)
- [Git config](#git-config)
- [Pretty Git log](#pretty-git-log)
- [Navigate to folder with Git Bash](#navigate-to-folder-with-git-bash)
- [Store git credentials while using command line](#store-git-credentials-while-using-command-line)
- [A collection of useful .gitignore & .gitattributes templates](a-collection-of-useful-.gitignore-&-.gitattributes-templates)
- [Git Hooks](#git-hooks)
  - [Pre commit hook](#pre-commit-hook)
- [Useful learning material](#useful-learning-material)

## Git add

```git add -A .```  add **new**/**modified**/**deleted** files in the current directory, equivalent to ```git add --all```  
```git add .```  add **new**/**modified**/**deleted** files in the current directory  
```git add -u .``` stages **modified** and **deleted**, without **new**, equivalent to ```git add --update```  
```git add --ignore-removal .``` adds new/modified files in the current directory  
- without the dot, add all files in the project regardless of the current directory  

## Git clone
```git clone <url> <folder-name> ```

## Git config

The git config command lets you configure your Git installation (or an individual repository) from the command line.  
This command can define everything from user info to preferences to the behavior of a repository.  
Several common configuration options are listed below.

- Usage:

Define the author name to be used for all commits in the current repository.  
Typically, you’ll want to use the --global flag to set configuration options for the current user.  
```git config user.name <name>```

Define the author name to be used for all commits by the current user.  
```git config --global user.name <name>```

Define the author email to be used for all commits by the current user.  
```git config --global user.email <email>```

Create a shortcut for a Git command.  
```git config --global alias.<alias-name> <git-command>```

Open the global configuration file in a text editor for manual editing.  
```git config --global --edit```


- simple **.gitconfig** file, usually located in Users profile directory

```
[user]
        name = User1
        email = bla@bla.com
[color]
        ui = auto

[color "branch"]
        current = yellow reverse
        local = yellow
        remote = green

[color "diff"]
        meta = yellow bold
        frag = magenta bold
        old = red bold
        new = green bold
        whitespace = red reverse

[color "status"]
        added = yellow
        changed = green
        untracked = cyan

[core]
        whitespace=fix,-indent-with-non-tab,trailing-space,cr-at-eol

[alias]
        st = status
        ci = commit
        br = branch
        co = checkout
        df = diff
        dc = diff --cached
        lg = log -p
        pr = pull --rebase
        gr = log --all --graph --decorate --oneline
```

## Pretty Git log

```bash
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"
```

this will:  
-setup git alias  
-one commit per line  
-show graph of commits  
-abbreviated commit IDs  
-dates relative to now  
-show commit references (like git log --decorate)  
-lots of colour  
-show author of the commit  
-usage:
```bash
git lg
```

Or some alternative oneliners:

```bash
git log --decorate --oneline --graph
```

```bash
git log --decorate --graph --abbrev-commit --date=relative
```

```bash  
git log --graph --pretty=format:'%C(auto)%h -%d %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit  
```

## Navigate to folder with Git Bash

```bash
cd  /c/project/
```

Use the `pwd` command to see in which path you are currently in, handy when you did an right-click "Git Bash here..."

## Store git credentials while using command line

`git config --global credential.helper wincred //DEPRECATED`

- Install the new Git Credential Manager for Windows [here](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/latest)

## A collection of useful .gitignore & .gitattributes templates

* [.gitignore templates](https://github.com/github/gitignore)
* [.gitattributes](https://github.com/Danimoth/gitattributes)

## Git Hooks

### Pre commit hook

* put this in .git/hooks/pre-commit

```bash
#!/bin/sh
#
# A pre-commit hook to automatically generate a table of contents on top of each *.md file.
# you need doctoc for this hook to work:
# https://github.com/thlorenz/doctoc

doctoc --title "**Contents**" --github .
```
### Post commit hook

* put this in .git/hooks/post-commit

```bash
#!/bin/sh
git push
git push azure master
```

## Useful learning material

[Dealing with line endings](https://help.github.com/articles/dealing-with-line-endings/)  
[Keep your branch clean with fixup and autosquash](http://fle.github.io/git-tip-keep-your-branch-clean-with-fixup-and-autosquash.html)  
[GitHub Cheat Sheet](http://git.io/sheet)

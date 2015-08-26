

# Git Tips & Tricks

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

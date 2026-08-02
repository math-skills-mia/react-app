# Terminal & Git Command Notes

Mia Striebeck

---

## Terminal

Navigate to a folder

```
cd [insert folder name]
```

Go up one folder

```
cd ..
```

Go back to the previous folder

```
cd -
```

Open current folder in its own VS Code page

```
code .
```

Current directory/path

```
pwd
```

Create an empty file

```
touch [insert file name]
```

---

## Git Most Common Commands

Check current status

```
git status -s
```

Status results

| `M` | Modified |
| `A` | Added |
| `??` | Untracked |

Stage all changes

```
git add .
```

See staged changes

```
git diff --staged
```

Undo stage

```
git restore --staged [insert edited status path]
```

Commit

```
git commit
```

View commit history

```
git log --oneline --graph --decorate --all
```

Edit last commit message

```
git commit --amend
```

Undo the last commit (keep all code)

```
git reset --soft HEAD~1
```

---

### Branches

Create a new branch

```
git switch -c [insert branch name]
```

Equivalent to `git checkout -b [insert branch name]`

Switch branches

```
git switch [insert branch name]
```

Switch back to previous branch

```
git switch -
```

View all local branches

```
git branch
```

---

### Merging

Merge a finished branch into `main`

```
git switch main // go to main
git merge [insert branch name] // merge
git branch -d [insert branch name] // delete branch
```

After this, `main` contains all the code.

---

### GitHub

Push code to GitHub

```
git push
```

If Git says

```
Rejected.
Remote contains work that you do not have.
```

Then do git pull.

Pull code from GitHub

```
git pull
```

---

## Team Workflow

Beginning of the day

```
git switch main
git pull
```

Then go to your feature branch to continue code

```
git switch [insert branch name]
```

or create new feature branch

```
git switch -c [insert branch name]
```

### Keep You Feature Branch Updated

While working, occasionally update your feature branch with the latest changes from `main`.

```
git switch main
git pull
git switch [insert branch name]
git merge main
```

Resolve any merge conflicts before continuing to code.

Doing this regularly helps prevent a large backlog of commited code conflicts from your team.

---

### Future Topic to Learn: Fetch & Rebase

Rather than merging, many teams now prefer

```
git switch [insert feature name]
git fetch
git rebase origin/main
```

I should learn fetch and rebase in the future.

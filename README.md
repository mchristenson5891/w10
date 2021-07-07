[[_TOC_]]

# Week 1 - Command Line and git

# Learning Objectives

1. Use the command line to navigate your computer
1. Create a git repository locally
1. Use git commands e.g. add, commit, pull, push, and merge

# What is Bash

- Let's you interact with your computer
- It is used in your terminal program
  ​
  > Why do you think some developers use bash to navigate their computers vs using their mouse?

1 Create a folder

```sh
mkdir mern
```

2 Move into dirctory/folder
​

```sh
cd mern
```

3 Create a file
​

```sh
touch index.html
```

4 Add to the file
​

```sh
echo "Hello you" >> index.html
```

5 Delete file
​

```sh
rm index.html
```

6 Move out of the folder
​

```sh
cd ..
```

7 Create new folder
​

```sh
mkdir new_mern
```

8 Copy the folder
​

```sh
cp -R mern new_mern
```

9 Delete a folder
​

```sh
rm -R mern
```

​
​

# Git

​
1 Initialize a repository
​

```sh
git init
```

2 Add
​

```sh
git add .
```

3 Commit
​

```sh
git commit -m "your message here"
```

4 Push
​

```sh
git push origin <name of branch>
```

5 Pull
​

```sh
git pull origin <name of branch>
```

6 Merge
​

```sh
git merge <name of branch>
```

​

# Guided Practice (Pair Programming)

- Pair up (CF will chose pairs) and one person create a folder with a file inside then exit out of the terminal
- Have your partner open the terminal and navigate to the folder that was created and go inside of the file that was created and add something
- Pull GPA from remote repo
- Switch roles and redo steps 1 and 2

# Additional Resources

- [Git Basics](http://static.tlmworks.org/track2/youtube/git-tips/What_is_VCS_Git-SCM_Git_Basics_1-8oRjP8yj2Wo.mp4)
- [Learn Git Branching](http://static.tlmworks.org/track2/week2/wget/learngitbranching.js.org/index.html)
- [Intro to OS X Command Line](http://static.tlmworks.org/track2/youtube/Intro_to_the_OS_X_Command_Line_-_James_Stewart--ACo3MZV2Ss.mp4)

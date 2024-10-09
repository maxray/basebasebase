---
title: I was today old when I realised I could amend my git commits
date: 2024-10-08 07:00:00 Z
intro: >
  You may be a 'Git pro' - I know just enough to be dangerous... but I am learning.
thumbnail_image: "git.jpg"
categories:
  - Work
---

With so many languages, topics and processes, sometimes you just learn the bit you need to know to achieve your task. It has taken many years for me to embrace Git - it is something that I struggle to conceptualise. 

One of the bonuses of working with agencies as a freelancer is being exposed to different ways of working and as such I have been upping my  'Git Game' over the last year or so. 

### ADD, COMMIT, PUSH... and that is about it

My muscle memory to add all, commit m and push origin is locked in - so in instances where we don't want to just push all the things it catches me out. Reluctantly I have started just adding the files I am working on. However, one of my biggest failings is that I will push a branch and then when I look at it on test note a silly error, be it a typo or an oversight in how the css was going to work out with anything other than my test data. 

### A tip: instead of adding a new commit, you can amend the previous one with git commit --amend . That way blunders aren’t visible in the history, and you keep it clean. Anyway, squash the commits before you merge, please.  

I mean I am always up for hiding my blunders so when ['the oracle'](https://codepen.io/natszafraniec) pointed this out I thought I should have a look and try and add it to my Git arsenal. 


### So - what is git --amend? 

The git commit --amend command is used in Git to modify the most recent commit. It allows you to correct mistakes in your last commit without creating a new one.

**Stuff you might use it for:**

**Fixing a commit message:** If you realize you made a typo or want to change the description of your latest commit, you can use git commit --amend to edit the commit message.

**Adding forgotten files:** ~~Sometimes~~ Lots of the time, after making a commit, you realise you forgot to stage some files or made a small change that should have been part of the last commit. Instead of creating a new commit, you can add those files and amend the previous commit.


### How It Works
Technically, git commit --amend replaces the old commit with a new one that includes the updated content or message. It doesn’t modify the existing commit in place; it creates a new one with a different hash.


Try and avoid using --amend on pushed commits: If you’ve already pushed the commit to a shared repository (like GitHub), amending it can cause issues because it rewrites history. You'll need to force-push the changes (git push --force), which can disrupt other collaborators’ work.

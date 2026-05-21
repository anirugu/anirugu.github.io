---
title: "How To Compile The Project Faster In Visual Studio"
date: 2011-04-20T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
---
**UPDATED: 13 January 2013**

*Note: This post was originally written during the Visual Studio 2010 era, but the concepts still apply.*

***

By default, when you compile your solution in Visual Studio, it compiles every single project contained within that solution. This can be incredibly time-consuming for large enterprise solutions. 

To speed up your build times significantly, you should only compile the specific projects you are currently working on. You can do this by opening the **Configuration Manager** and unchecking the "Build" checkbox for any projects that you don't need to debug or that haven't changed.

For a more in-depth discussion on improving Visual Studio compile speeds, check out this excellent thread on Stack Overflow:

[Compile Speed in Visual Studio](http://stackoverflow.com/questions/14316591/compile-speed-visual-studio)

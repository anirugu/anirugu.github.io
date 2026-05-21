---
title: "My Ubuntu 20 04 Machine Run Faster Compare To Windows 10"
date: 2020-03-27T12:00:00-04:00
categories:
  - blog
tags:
  - Ubuntu
  - Mac
  - Android
  - Visual-Studio
  - Linux
  - Windows
---
For years, I was a dedicated Windows user. Windows 10 is a solid OS, especially when working primarily within the .NET ecosystem, where Visual Studio 2019 provides an unmatched developer experience.

However, I started facing significant friction when using my Windows machine for Docker and Node.js development. Things took a turn for the worse when a Docker update caused me to lose all my pulled images from Docker Hub. I attempted to use WSL2 (via the Windows Insider ISO) to resolve these issues. While WSL2 is a massive improvement, allowing you to use Linux CLI tools seamlessly alongside your Windows files, it still wasn't perfect. I experienced noticeably slow performance when running Linux tooling against the Windows file system.

As a result, I transitioned to Ubuntu—moving through versions 18.04, 19.10, and finally 20.04. On Ubuntu, everything just worked significantly better than on Windows.

When I ran Android Studio on Ubuntu 19.10, the performance was initially sluggish. Loading projects involved a lot of waiting. 

However, after upgrading to the daily build of Ubuntu 20.04, I noticed a dramatic improvement in productivity. The OS handles file caching much more aggressively and intelligently.

Back on Windows 10, startup times were terrible; my HDD usage would consistently spike to 100% due to `SysMain` (formerly Superfetch). I haven't encountered this issue on Ubuntu 20.04. Now, when I launch Android Studio, the OS caches the required files. If I close Android Studio and reopen it, it launches in mere seconds, and my projects load almost instantaneously.

My development machine has 12 GB of RAM. On Windows, booting the machine pegged the HDD at 100%. On Ubuntu 20.04, the exact same hardware feels like it grew wings. Files that normally read from the HDD are efficiently cached and served from RAM, which actually made me reconsider the urgent need to purchase an SSD.

I was planning to buy an SSD just to make my machine usable. A clean installation of Windows 10 with WSL and Visual Studio runs incredibly slow on a traditional mechanical HDD. The same hardware runs buttery smooth on Ubuntu 20.04. The only real trade-off is the loss of Visual Studio and other Windows-exclusive tools.

Happy Coding!

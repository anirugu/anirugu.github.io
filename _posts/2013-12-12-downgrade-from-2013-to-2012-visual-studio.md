---
title: "Why I Downgraded from Visual Studio 2013 to 2012"
date: 2013-12-12T12:00:00-04:00
categories:
  - blog
tags:
  - C#
  - .NET
  - Visual-Studio
  - MVC
  - HTML
  - ASP.NET
---
<p><strong>UPDATE: 19 December 2013</strong></p>

<p>I have been using Visual Studio 2013 since its preview release. However, this year's release includes buggy implementations of several newly added features. There are quite a few issues that need to be resolved. Here is my personal list:</p>

<p>1. **Lag and Freezes in Editor:** When working in ASP.NET MVC <code>.cshtml</code> files, the editor frequently hangs and displays a "waiting" status. This happens even in a freshly created demo project with no custom code. I have checked and confirmed that this freeze occurs in both <code>.cshtml</code> and <code>.cs</code> files.</p>

<p>2. **IntelliSense Outages:** I noticed that IntelliSense suddenly stops working at times. Initially, I thought it was a project-specific configuration issue. Closing and reopening the <code>.cs</code> file fixes it temporarily. This happened to me a few times; to document it, I recorded a video and submitted a bug report on connect.microsoft.com.</p>

<p>I have posted several threads on connect.microsoft.com containing video recordings, detailed descriptions, and screenshots to make reproducing these issues easier. You can find them here: <a href="http://connect.microsoft.com/VisualStudio/SearchResults.aspx?UserHandle=Anirudha%20Gupta">Visual Studio Feedback</a>.</p>

<p>After running into so many problems, I feel that Visual Studio 2013 is not yet a stable release. For instance, VS 2013 dropped out-of-the-box support for ASP.NET MVC 3. They changed many things that weren't very old. Due to these issues, I decided to downgrade back to Visual Studio 2012, which works perfectly fine. VS 2012 is very stable and easily handles all of my current development needs.</p>

<p>Looking at the issues other developers are reporting on Stack Overflow, it is clear that many features are broken in VS 2013. None of these issues seem to have been addressed in Update 1. Since I'm not confident they will be fixed in Update 2 either, sticking with Visual Studio 2012 remains the best choice for now.</p>

<p>Thanks for reading!</p>


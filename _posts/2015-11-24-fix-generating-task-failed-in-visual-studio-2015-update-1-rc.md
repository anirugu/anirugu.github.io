---
title: "How to Fix 'Generating Task Failed' in Visual Studio 2015 Update 1 RC"
date: 2015-11-24T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - .NET
  - Mac
---
<p>If you are building a Windows Forms project (regardless of the target version of the .NET Framework) and it fails to compile on another machine that does not have Visual Studio 2015 Update 1 RC installed, here is a simple trick to fix the issue.</p>

<p>Delete every <code>obj</code> folder at the root of each of your projects. If you have multiple projects in your solution, you can use the methods described in this <a href="http://stackoverflow.com/questions/755382/i-want-to-delete-all-bin-and-obj-folders-to-force-all-projects-to-rebuild-everyt" title="Delete all bin and obj folders">Stack Overflow post</a> to delete them all at once.</p>

<p>Once all <code>obj</code> folders are deleted, clean the solution and press <strong>F5</strong> to run the project. It should build and run without any issues.</p>

<p><img src="/2015_11_24_fix_generating_task_failed_Image1.png" alt="Smile" /></p>


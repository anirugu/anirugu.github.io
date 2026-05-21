---
title: "How To Compile Less In Visual Studio 2015"
date: 2015-07-28T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - CSS
---
<p>In the previous version of Visual Studio (specifically VS 2013), Web Essentials 2013 handled LESS compilation effortlessly. If you forked a project and started editing a LESS file, it would automatically save the compiled <code>.css</code> file in the same folder as the <code>.less</code> file.</p>

<p>In Web Essentials 2015, the LESS compilation feature was removed and no longer works. If you try to use third-party tools like SimpLESS or WinLESS as a replacement, you will run into issues. In my experience, both tools threw an error stating the file was already in use by another process, and Visual Studio kept showing a file-save dialog on every change — and even after saving, the compilation did not work reliably.</p>

<p>Don't worry though — it looks like Mads Kristensen, who removed the LESS compiler from Web Essentials, has since created a dedicated extension to bring the functionality back.</p>

<p><a href="https://visualstudiogallery.msdn.microsoft.com/3b329021-cd7a-4a01-86fc-714c2d05bb6c">https://visualstudiogallery.msdn.microsoft.com/3b329021-cd7a-4a01-86fc-714c2d05bb6c</a></p>

<p>You can download it from the link above. The only downside of this extension is that it does not compile LESS files automatically on save. You need to right-click the file and trigger the compilation manually to get it working.</p>

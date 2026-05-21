---
title: "C# Code Changes Not Reflected on Server in ASP.NET MVC 4"
date: 2013-06-28T12:00:00-04:00
categories:
  - blog
tags:
  - C#
  - MVC
---
<p>Today I ran into a problem where changes I made to my C# code were not being reflected on the live site after uploading via FTP. I checked the compiled DLL in the <code>bin</code> folder — the file was uploaded correctly, but the site was still behaving as though the old code was in place.</p>

<p>If you run into this problem, I suggest deleting the old <code>.pdb</code> and <code>.dll</code> files for your project from the server's <code>bin</code> folder. For example, if your project namespace is <code>xyz</code>, delete <code>xyz.pdb</code> and <code>xyz.dll</code>, then re-upload the new DLL from your local <code>bin</code> folder.</p>

<p>That should fix it! <img src="/2013_06_28_c#_code_not_take_Image1.png" alt="Smile" /></p>

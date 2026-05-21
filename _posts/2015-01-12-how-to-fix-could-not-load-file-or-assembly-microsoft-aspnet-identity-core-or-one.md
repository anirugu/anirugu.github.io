---
title: "How To Fix Could Not Load File Or Assembly Microsoft Aspnet Identity Core Or One"
date: 2015-01-12T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - ASP.NET
  - Windows
---
<p>On error page you will see something like this</p>

<p>On error page you will see something like this</p>

<p><code> LOG: Attempting download of new URL file:///C:/Windows/Microsoft.NET/Framework/v4.0.30319/Temporary ASP.NET Files/ </code></p>

<p>Open this folder, replace every / to \ because Windows understand the folder different way. Delete everything and compile again. For me it’s working.</p>

<p>If you still found this trouble try to update packages from this answer</p>

<p><a href="http://stackoverflow.com/a/12760677/713789" title="http://stackoverflow.com/a/12760677/713789">http://stackoverflow.com/a/12760677/713789</a></p>

<p>``</p>

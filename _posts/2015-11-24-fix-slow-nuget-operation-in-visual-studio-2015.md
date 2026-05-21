---
title: "How to Fix Slow NuGet Operations in Visual Studio 2015"
date: 2015-11-24T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - NuGet
---
<p>If downloading NuGet packages is slow or taking too much time in Visual Studio 2015, especially for common packages that you use in your daily routine, you can use the same offline caching trick that worked in VS 2013.</p>

<p>First, open the local AppData directory by navigating to the following path:</p>

<p><code>%localappdata%\NuGet\Cache</code></p>

<p>Once you copy this path, you can add it to your package sources in Visual Studio:</p>

<p>Go to <strong>Tools > Options > NuGet Package Manager > Package Sources</strong>, add a new package source pointing to that folder, and name it "Offline". The next time you install these packages, choose this offline package source to save both time and internet bandwidth.</p>


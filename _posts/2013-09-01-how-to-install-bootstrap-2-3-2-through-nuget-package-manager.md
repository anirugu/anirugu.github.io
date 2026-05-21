---
title: "How To Install Bootstrap 2.3.2 Through NuGet Package Manager"
date: 2013-09-01T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - NuGet
  - Bootstrap
---
<p>When you use Visual Studio Express or later and go to Manage NuGet Packages for this solution, you will see that it shows the latest version available to install. At this point, version 3.x has been released.</p>

<p>If you want to use the old 2.3.2 version, look at this: <a href="https://www.nuget.org/packages/Twitter.Bootstrap/2.3.2" title="https://www.nuget.org/packages/Twitter.Bootstrap/2.3.2">https://www.nuget.org/packages/Twitter.Bootstrap/2.3.2</a></p>

<p>Run this in the Package Manager Console:</p>

<p><code>Install-Package Twitter.Bootstrap -Version 2.3.2</code></p>

<p>This will add the old Bootstrap version you want to your project.</p>

<p><img src="/2013_09_01_how_to_install_bootstrap_Image1.png" alt="Smile" /></p>

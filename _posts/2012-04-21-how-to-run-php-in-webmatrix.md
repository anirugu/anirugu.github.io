---
title: "How To Run Php In Webmatrix"
date: 2012-04-21T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - PHP
  - ASP.NET
---
> [!NOTE]
> This post is now outdated. Please read the updated post instead: [How to Run PHP in WebMatrix (Updated)](/blog/how-to-run-php-in-webmatrix-updated/).

Have you tried running a PHP application inside WebMatrix? It is actually quite straightforward—WebMatrix can host PHP applications just as easily as ASP.NET applications using IIS Express under the hood.

If you are having trouble getting your PHP application to run, here are two things to check:

1. **Verify that PHP is installed for WebMatrix.**
   Check whether the directory `C:\Program Files (x86)\IIS Express\PHP\` exists on your machine. If it doesn't, it means PHP has not been installed for WebMatrix yet. You can install it easily using the **Web Platform Installer (WPI)**.

2. **Verify that PHP is enabled for your site.**
   Even if PHP is installed globally, it must be explicitly enabled per website in WebMatrix. If you have confirmed PHP is installed but your application still won't run, the site-level PHP setting is the most likely culprit. Check the next step.

To enable PHP for your site, go to **Site > Settings > PHP Settings** in WebMatrix and check the checkbox to enable PHP for that specific website.

**Additional Resources:**
- [Creating PHP Websites with WebMatrix](http://blogs.msdn.com/b/brian_swan/archive/2010/07/12/creating-php-websites-with-webmatrix.aspx) — by Brian Swan
- [How to Enable Xdebug in WebMatrix](http://ruslany.net/2011/02/how-to-enable-xdebug-in-webmatrix/) — by RuslanY

Thanks!

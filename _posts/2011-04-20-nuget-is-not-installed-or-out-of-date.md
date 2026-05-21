---
title: "Nuget Is Not Installed Or Out Of Date"
date: 2011-04-20T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - MVC
  - NuGet
  - ASP.NET
---
**UPDATED: 6 JAN 14**

Recently, I installed the MVC 3 update on my PC. Today, I finally got the chance to take a look at it. I created a sample project but immediately ran into an error message: **"NuGet is not installed or out of date."**

If you are experiencing this exact same issue, the fix is very straightforward:
1. In Visual Studio, navigate to **Tools > Extensions and Updates**.
2. Find the **NuGet Package Manager** extension.
3. Uninstall the extension, and then simply install it again.

After reinstalling, the error should disappear and NuGet will work perfectly. This specific bug seems to happen quite frequently in Visual Web Developer (VWD) 2010 Express SP1.

For context, MVC 3 came pre-installed in Visual Studio 2012, but support was later removed in Visual Studio 2013. Don't worry—your MVC 3 projects will still compile and run in VS 2013, but you might encounter editor issues when working with Razor files. 

If you want to resolve these editor issues, the best approach is to use a NuGet package to upgrade the project to MVC 4. MVC 4 can run on .NET 4 just as easily as MVC 3.

For more information on migrating, check out these posts:
- [Migration of MVC project to MVC 4?](http://geekswithblogs.net/anirugu/archive/2011/09/21/migration-of-asp.net-mvc3-project-to-vnext.aspx)
- [How to migrate ASP.NET MVC 3, MVC 4 project to ASP.NET MVC 5?](http://geekswithblogs.net/anirugu/archive/2013/10/16/how-to-migrate-asp.net-mvc-3--mvc4-project-to.aspx)

*Thanks to [Arun Mahendrakar](http://weblogs.asp.net/nmarun/) for correcting my spelling of NuGet in the original post—I didn't realize I had misspelled it!*

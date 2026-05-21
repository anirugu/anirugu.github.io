---
title: "How to Downgrade Razor 3 and Fix CSHTML Issues in VS 2010 and VS 2012"
date: 2013-11-04T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - Visual-Studio
  - MVC
  - HTML
  - NuGet
---
A few days ago, I migrated a project to ASP.NET MVC 4 and noticed that the project's CSHTML files were no longer working. This problem occurs because the project was upgraded to Razor 3 RC, which is not supported in Visual Studio 2012 by default (support was later shipped in VS 2012 Update 4). My migration had updated it to Razor 3, but MVC 4 uses Razor 2.

So, how do we fix this problem? Since Visual Studio Update 4 was still in development and MVC 3/4 support exists in the older versions of VS (2010 and 2012), it is better to downgrade Razor to a supported version so we can work on the project in Visual Studio 2010 or 2012.

If your project has Razor 3 and syntax highlighting is not working, I suggest using this NuGet package: [UpgradeMvc3ToMvc4](https://www.nuget.org/packages/UpgradeMvc3ToMvc4).

Note that this might not succeed immediately. First, you should delete the `packages` folder in your project directory and then open `packages.config` to remove the old package entries.

Then, run the following command in the Package Manager Console:

```powershell
PM> Install-Package UpgradeMvc3ToMvc4
```

If this fails, check the console output to see what caused the error. Often, you just need to manually remove the broken assembly references and try installing again.

After running this, you might encounter a version mismatch with the `WebGrease.dll` assembly. Simply update WebGrease to version 1.5.2 (or a matching version) and your project will be ready to target .NET 4. Additionally, if you perform a bin deployment, you do not need to install MVC 4 on the server itself.

Keep in mind that MVC 5 requires .NET 4.5, which means it cannot run in Visual Studio 2010. Furthermore, without Visual Studio 2012 Update 4, MVC 5 CSHTML pages will be treated as plain HTML files without Razor syntax highlighting or IntelliSense.

![Smile](/2013_11_04_how_to_downgrade_razor_Image1.png)

Thanks for reading my post! ![Winking smile](/2013_11_04_how_to_downgrade_razor_Image2.png)


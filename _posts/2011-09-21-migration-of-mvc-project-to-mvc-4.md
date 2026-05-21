---
title: "Migration Of Mvc Project To Mvc 4"
date: 2011-09-21T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - .NET
  - MVC
  - ASP.NET
---
In this post, I will show you how to migrate an existing ASP.NET MVC 3 project to MVC 4, and how to make it compatible with the next generation of Visual Studio tools (referred to here as "vNext", which was the pre-release codename for Visual Studio 2012).

### Migrating to MVC 4 in Visual Studio 2010

For Visual Studio 2010, you can install MVC 4 on your system using the **Microsoft Web Platform Installer (WPI)**. After installing it, follow the official migration guide from the ASP.NET team to upgrade your project's references and configuration files:

- [ASP.NET MVC 4 Release Notes – Upgrading from MVC 3](http://www.asp.net/learn/whitepapers/mvc4-release-notes#_Toc303253806)

### MVC 3 Support in Visual Studio 2012 (vNext)

Visual Studio 2012 (vNext) does not support MVC 3 projects out of the box. To open and work with MVC 3 projects in vNext, you need to install the **ASP.NET MVC 3 tooling update**:

- [Download ASP.NET MVC 3 Tooling Update](http://www.microsoft.com/download/en/details.aspx?id=1491)

If you don't have the Web Platform Installer yet, you can download it here:

- [Download Microsoft Web Platform Installer](http://www.microsoft.com/web/downloads/platform.aspx)

---
title: "Mysql Data Mysqlclient Version Mismatched"
date: 2011-04-20T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - MySQL
  - Visual-Studio
  - ASP.NET
  - NuGet
---
**UPDATED: 28 December 2013**

In this post, I will explain how to fix the `MySql.Data.MySqlClient` version mismatch issue that occurs when your production server uses a different version of the MySQL library than your development server.

> [!NOTE]
> Back in 2011, when working with MySQL, I preferred using the official .NET connector installer. However, as of late 2013, I no longer recommend the standalone .NET connector installer. I wrote about this in detail here: [Don’t use MySQL .NET connector, here is why?](http://geekswithblogs.net/anirugu/archive/2013/11/04/donrsquot-use-mysql-.net-connector-here-is-why.aspx). Using NuGet in Visual Studio is the best and easiest option, as it avoids the exact problems described in this post.

When you install the MySQL Connector via the standard Windows installer and add it to your project, you are simply adding a reference to the global library on your machine. This means the actual DLL isn't copied into your project folder. 

When you deploy your ASP.NET project, if the production server doesn't have the exact same version of the library installed in its Global Assembly Cache (GAC), it throws a version mismatch exception. The server might have a completely different version installed compared to your development machine.

### How to Fix the Version Mismatch

To fix this issue without using NuGet, you need to manually copy the DLL into your project's `bin` folder so that it deploys alongside your application.

1. Navigate to the MySQL assemblies folder on your development machine. For example:
   `C:\Program Files (x86)\MySQL\MySQL Connector Net 6.3.6\Assemblies`
   *(Note: 6.3.6 is the version I used back in 2011. You should navigate to whatever version you currently have installed).*

2. Inside the `Assemblies` folder, you will see subfolders like:
   - `v2.0` (for .NET 2.0 applications)
   - `v4.0` (for .NET 4.0 applications)
   
   *Remember: An older .NET application cannot use a library compiled for a newer version of the .NET Framework.*

3. **Copy** (do not cut/paste!) the appropriate `.dll` file from the folder corresponding to your framework version. 
   
   > [!WARNING]
   > Make sure you use **Copy**, not Cut. If you remove the DLL from the original MySQL directory, Visual Studio and other programs that rely on the connector will break.

4. Paste the `.dll` directly into your ASP.NET project's root `bin` folder, and update your project to reference this local DLL instead of the global one.

Now, when you deploy the project, you no longer need to worry about what version of the MySQL Connector the production server has installed. Your application will simply use the local library provided in its own `bin` folder. 

Of course, if you use NuGet, you don't have to worry about any of this manual copying. You can simply use the **Manage NuGet Packages for Solution** option in Visual Studio to handle your MySQL dependencies smoothly.

Thanks for reading! ![Smile](/2011_04_20_mysql.data.mysqlclient_version_mismatched_Image1.png)

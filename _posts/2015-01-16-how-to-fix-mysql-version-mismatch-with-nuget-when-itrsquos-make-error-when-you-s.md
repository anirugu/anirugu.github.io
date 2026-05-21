---
title: "How to Fix MySQL Version Mismatch with NuGet in Visual Studio"
date: 2015-01-16T12:00:00-04:00
categories:
  - blog
tags:
  - C#
  - Mac
  - .NET
  - MySQL
  - Visual-Studio
  - NuGet
---
Two years ago, I wrote a post sharing my views on MySQL and its NuGet packages: [Why I Don't Recommend MySQL .NET Connector Anymore](http://geekswithblogs.net/anirugu/archive/2013/11/04/donrsquot-use-mysql-.net-connector-here-is-why.aspx).

Using a NuGet package is a much better way to manage DLL references. You can simply run the command in the Package Manager Console, and the reference is added to your C# project. You don't have to manually update it every time; Visual Studio makes this process very easy.

Recently, however, I ran into an issue. When I shared my code with others, it failed to compile or run on machines that had the MySQL Connector installed locally on the system.

Every time I compiled their code on my machine and sent it back, it wouldn't work on theirs. Even though NuGet restored the packages, the local MySQL Connector installation conflicted with the project's references.

Although the project might compile, Visual Studio will display warnings or errors. Because the MySQL Connector installs a DLL in the Global Assembly Cache (GAC), it creates version mismatch conflicts.

To resolve this issue, you can try this trick:

Open the `.csproj` file of your project and search for "mysql". Replace that reference with the following code (previously it referenced the package from the packages folder; referencing it locally from your bin folder helps resolve this GAC conflict):

```xml
<Reference Include="MySql.Data, Version=6.9.5.0, Culture=neutral, PublicKeyToken=c5687fc88969c44d, processorArchitecture=MSIL">
  <SpecificVersion>False</SpecificVersion>
  <HintPath>..\projectname\bin\MySql.Data.dll</HintPath>
  <Private>True</Private>
</Reference>
```

Note: Replace `projectname` with your actual project's name, and change the path according to your project's directory structure.

Next, open your `packages.config` file and remove the MySQL dependency line.

If your solution contains multiple projects referencing MySQL, repeat these steps for each project.

Once updated, Visual Studio will build cleanly using the DLL from your local folder instead of attempting to fetch it from the GAC or packages folder each time.

Happy Coding! ![Smile](/2015_01_16_how_to_fix_mysql_Image1.png)


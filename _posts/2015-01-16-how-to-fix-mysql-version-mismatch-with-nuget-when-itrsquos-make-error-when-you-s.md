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
<p>Two years ago, I wrote a post sharing my views on MySQL and its NuGet packages: <a href="http://geekswithblogs.net/anirugu/archive/2013/11/04/donrsquot-use-mysql-.net-connector-here-is-why.aspx" title="Why I Don't Recommend MySQL .NET Connector Anymore">Why I Don't Recommend MySQL .NET Connector Anymore</a>.</p>

<p>Using a NuGet package is a much better way to manage DLL references. You can simply run the command in the Package Manager Console, and the reference is added to your C# project. You don't have to manually update it every time; Visual Studio makes this process very easy.</p>

<p>Recently, however, I ran into an issue. When I shared my code with others, it failed to compile or run on machines that had the MySQL Connector installed locally on the system.</p>

<p>Every time I compiled their code on my machine and sent it back, it wouldn't work on theirs. Even though NuGet restored the packages, the local MySQL Connector installation conflicted with the project's references.</p>

<p>Although the project might compile, Visual Studio will display warnings or errors. Because the MySQL Connector installs a DLL in the Global Assembly Cache (GAC), it creates version mismatch conflicts.</p>

<p>To resolve this issue, you can try this trick:</p>

<p>Open the <code>.csproj</code> file of your project and search for "mysql". Replace that reference with the following code (previously it referenced the package from the packages folder; referencing it locally from your bin folder helps resolve this GAC conflict):</p>

<p><code>&lt;Reference Include="MySql.Data, Version=6.9.5.0, Culture=neutral, PublicKeyToken=c5687fc88969c44d, processorArchitecture=MSIL"&gt;<br />
 &lt;SpecificVersion&gt;False&lt;/SpecificVersion&gt;<br />
 &lt;HintPath&gt;..\projectname\bin\MySql.Data.dll&lt;/HintPath&gt;<br />
 &lt;Private&gt;True&lt;/Private&gt;<br />
 &lt;/Reference&gt;</code></p>

<p>Note: Replace <code>projectname</code> with your actual project's name, and change the path according to your project's directory structure.</p>

<p>Next, open your <code>packages.config</code> file and remove the MySQL dependency line.</p>

<p>If your solution contains multiple projects referencing MySQL, repeat these steps for each project.</p>

<p>Once updated, Visual Studio will build cleanly using the DLL from your local folder instead of attempting to fetch it from the GAC or packages folder each time.</p>

<p>Happy Coding <img src="/2015_01_16_how_to_fix_mysql_Image1.png" alt="Smile" /></p>

---
title: "How To Use Bower To Install Packages"
date: 2017-04-01T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - Visual-Studio
  - MVC
  - ASP.NET
  - NuGet
---
<p>In VS 2017, you have the option to install UI components using Bower. If you have previously worked on an ASP.NET MVC project in Visual Studio, you know that NuGet was our go-to tool for installing everything from jQuery to Newtonsoft.Json.</p>

<p>To use Bower, right-click on your project and select "Manage Bower Packages." This option appears right next to "Manage NuGet Packages."</p>

<p>The Bower package manager window looks very similar to the NuGet window. Note that for back-end library dependencies, you should still use NuGet.</p>

<p><strong>Is there a way to install packages by just typing, like in NuGet?</strong></p>

<p>The great thing about Bower is that it maintains a <code>bower.json</code> file in your project's root directory, which you can edit directly. For example, if I need to install Moment.js in my .NET Core project, here is how easy it is:</p>

<p>Open <code>bower.json</code> and start typing "moment" under dependencies. Once you place the cursor after the colon, it will show you all available versions. Doesn't that sound both convenient and cool?</p>

<p>You will notice that some version numbers start with <code>~</code> and others with <code>^</code>. If you want to understand what those symbols mean and how they work, please refer to this Stack Overflow question: <a href="http://stackoverflow.com/questions/19030170/what-is-the-bower-and-npm-version-syntax" title="Bower and npm version syntax">http://stackoverflow.com/questions/19030170/what-is-the-bower-and-npm-version-syntax</a></p>

<p>Thanks for reading! Happy coding <img src="/2017_04_01_how_to_use_bower_Image1.png" alt="Smile" /></p>

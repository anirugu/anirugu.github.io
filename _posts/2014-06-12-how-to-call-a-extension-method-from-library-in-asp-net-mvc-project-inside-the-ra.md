---
title: "How To Call A Extension Method From Library In Asp Net Mvc Project Inside The Ra"
date: 2014-06-12T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - C#
  - MVC
---
<p>If you want to call a extension method from a c# library when you are working on views then here in this post I am showing you how you can do it.</p>

<p>just go to views and open the web.config file. (do all these step in VWD or VS 13 whatever you use for work)</p>

<p>inside the tag of system.web.webPages.razor you will find the tag namespaces which contain too many namespace which shown in intellisense when you work in Views inside your Visual studio.</p>

<p>now add line like this</p>

<p>  <add namespace="MyCustomDll" /></p>

<p>MyCustomDll is a namespace that came from library that I want to use in my views. Now whenever I am working in views I can see the extension method in views.</p>

<p>Cheers </p>

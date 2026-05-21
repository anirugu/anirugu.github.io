---
title: "How to Migrate an ASP.NET MVC 3 or MVC 4 Project to ASP.NET MVC 5"
date: 2013-10-16T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - MVC
  - ASP.NET
---
<p>With the release of Visual Studio 2013, ASP.NET MVC 5 is now the standard framework version. Out of the box, Visual Studio 2013 does not support MVC 3 (though you can use my workaround to make it work). This means developers working exclusively in VS 2013 on legacy MVC 3 projects will run into issues. This happens because the MVC 4 and MVC 5 installers do not include the assemblies for MVC 3.</p>

<p>Don't panic—upgrading your project is straightforward. Here is how you can do it.</p>

<p>When you first open your legacy project in Visual Studio 2013, you will likely see a yellow warning icon next to several assemblies in your project's <strong>References</strong> list. This indicates that these DLLs are missing on your system.</p>

<p>To resolve this, note the names of the missing DLLs, remove them from the project's References, and then add them back using the Reference Manager. Removing the old references first ensures that Visual Studio allows you to reference the newer versions of the same assemblies.</p>

<p>Typically, you will need to replace the following references:</p>

<ul>
  <li><code>System.Web.Mvc</code></li>
  <li><code>System.Web.Razor</code></li>
  <li><code>System.Web.WebPages</code></li>
  <li><code>System.Web.Helpers</code></li>
</ul>

<p>Once you have updated the references in your project, you will need to update your configuration files.</p>

<p>There are typically at least two <code>web.config</code> files in an MVC project: one in the project's root folder and another in the <code>Views</code> folder. You must update the assembly version numbers in both files. For example, if you see references to version <code>3.0.0.0</code> or <code>4.0.0.0</code>, update them to version <code>5.0.0.0</code> (or the exact version you installed). Do this for the Razor and WebPages assemblies as well.</p>

<p><strong>Note:</strong> While default Visual Studio templates place views in the <code>~/Views</code> directory, if your project uses custom view directories (such as in MVC Areas or custom themes) that contain their own <code>web.config</code> files, make sure to update those as well. Failing to do so might allow the project to compile without errors, but it will fail at runtime.</p>

<p>Once these updates are complete, clean and rebuild your project. It should now run smoothly on MVC 5! <img src="/2013_10_16_how_to_migrate_asp.net_Image1.png" alt="Smile" /></p>

<p>Thanks for reading! Follow me on Facebook and Twitter to stay updated. <img src="/2013_10_16_how_to_migrate_asp.net_Image2.png" alt="Smile" /></p>

---
title: "What to Do When Visual Studio 2013 Is Not Compiling Your TypeScript Files"
date: 2013-11-24T12:00:00-04:00
categories:
  - blog
tags:
  - PHP
  - Visual-Studio
  - MVC
---
<p>If you want to use TypeScript in Visual Studio 2013 but find that automatic compilation is not working, don't get frustrated. There is no need to wait for a patch.</p>

<p>Here are several alternative ways to compile your TypeScript files:</p>

<ol>
<li><p><strong>Sublime Text:</strong> You can use Sublime Text with the "TypeScript" or "Better TypeScript" packages. These packages provide syntax highlighting and enable instant compilation on save.</p></li>
<li><p><strong>Microsoft WebMatrix:</strong> If you are working on an ASP.NET MVC project, you can open your project directory in WebMatrix, which supports automatic compilation of TypeScript files out of the box.</p></li>
<li><p><strong>JetBrains WebStorm / PhpStorm:</strong> Both IDEs have native support and File Watchers for compiling TypeScript files seamlessly.</p></li>
</ol>

<p>Additionally, TypeScript can be compiled directly via the command line using Node.js and the NPM package manager (by installing the global <code>typescript</code> compiler package).</p>

<p>Thanks for reading! <img src="/2013_11_24_visual_studio_2013_not_Image1.png" alt="Smile" /></p>


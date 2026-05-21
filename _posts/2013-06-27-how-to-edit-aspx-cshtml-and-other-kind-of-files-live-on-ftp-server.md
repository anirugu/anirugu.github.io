---
title: "How to Edit ASPX, CSHTML, and Other Files Live on an FTP Server"
date: 2013-06-27T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - MVC
  - HTML
  - ASP.NET
---
<p>Sometimes we just want to make a small change to a live site without downloading the entire project. In this post, I will share some good ways to do that.</p>

<p>Users who have <strong>Expression Web 4</strong> can do this. I tried it and it works well with ASPX files. If your site uses ASP.NET with the ASPX view engine, this is a good option. Expression Web is now free (it was previously a paid product).</p>

<p>Another good option is <strong>Komodo Edit</strong>. You can use Komodo Edit with a few plugins to enable FTP-based file editing.</p>

<p>The problem with both of these apps is that they lack syntax highlighting and support for CSHTML files, which were introduced with MVC 3. For CSHTML files, I suggest using <strong>WebMatrix</strong>, which supports editing CSHTML files directly over FTP.</p>

<p>Keep in mind that WebMatrix does not support compiling MVC projects. You will need at least Visual Web Developer Express to compile your project.</p>

<p>If you are in a hurry, try <a href="https://c9.io/" title="Cloud9 IDE">Cloud9 (c9.io)</a>. Enter your FTP settings and you can immediately start making changes to your live site.</p>

<p>If you have any other suggestions, please share them in the comments.</p>

<p><img src="/2013_06_27_how_to_edit_aspx,_Image1.png" alt="Smile" /></p>

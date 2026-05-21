---
title: "How To Use Dapper For Mysql In C"
date: 2017-09-08T12:00:00-04:00
categories:
  - blog
tags:
  - C#
  - MySQL
---
<p>A few days ago, I was looking for a way to save time when writing CRUD operations. I found a great solution — it's called Dapper.</p>

<p>To generate a C# class from your database, you can use this Gist:</p>

<p><a href="https://gist.github.com/anirugu/9fb82ce773c45578f42f7a6d899f3221" title="Generate C# class from DB">https://gist.github.com/anirugu/9fb82ce773c45578f42f7a6d899f3221</a></p>

<p>Once done, add Dapper and Dapper.Contrib to your project via NuGet.</p>

<p>You will no longer need to manually open a DataReader and write the same boilerplate reading and mapping code over and over again.</p>

<p>Dapper.Contrib gives you convenient functionality for operations like Insert and Update. You still need to write your SQL queries, but the code becomes much cleaner and easier to maintain. Last year, I was working on a C# project where the codebase became a tangled mess — a single-line SELECT, INSERT, or UPDATE statement followed by 100+ lines of DataReader mapping code.</p>

<p>Dapper can save you a significant amount of time by eliminating that repetitive boilerplate, and it does the job very well.</p>

<p><a href="https://github.com/StackExchange/Dapper" title="Dapper on GitHub">https://github.com/StackExchange/Dapper</a></p>

<p><a href="https://stackoverflow.com/questions/tagged/dapper" title="Dapper questions on Stack Overflow">https://stackoverflow.com/questions/tagged/dapper</a></p>

<p>Happy Coding <img src="/2017_09_08_how_to_use_dapper_Image1.png" alt="Smile" /></p>

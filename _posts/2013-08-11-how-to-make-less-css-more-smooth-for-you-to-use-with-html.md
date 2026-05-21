---
title: "How to Make Writing LESS CSS a Smoother Experience"
date: 2013-08-11T12:00:00-04:00
categories:
  - blog
tags:
  - Mac
  - CSS
  - Visual-Studio
  - HTML
  - NuGet
---
<p>LESS is an effective way to write stylesheets for web design. The deeper you dive into any technology, the more rules and best practices you need to follow. The quality of your code depends on how easily you can refactor or modify it in the future. The better structured your code is, the easier it is to maintain. While CSS is easy to write, writing clean, reusable CSS can be a challenge.</p>

<p>Here are a few tips I would like to share to help you write better CSS and LESS:</p>

<h2>1. Avoid Over-nesting Selectors</h2>

<p>Suppose you write a selector chain like <code>.x .y .z .a .b .c</code>. If you nest selectors too deeply, the code becomes rigid and very hard to refactor later. Take a moment to think about which elements might need to move in the future.</p>

<p>For example, a header logo might move from the left side to the right, or a sidebar widget might be repositioned. Keeping your selectors shallow allows you to modify the layout easily without breaking your CSS rules.</p>

<h2>2. Format Your LESS Files Properly</h2>

<p>LESS has native support in Visual Studio 2012 (including Express editions with Update 2). Take advantage of features like hierarchical indentation. It is designed to make nested rules clean and easy to read at a glance.</p>

<h2>3. Choose the Right Compilation Tools</h2>

<p>You can use a NuGet package or a standalone tool to compile your LESS files. I personally prefer using a standalone compiler, which lets me inspect and tweak the compiled CSS easily.</p>

<h2>4. Be Creative and Adapt Rules to Your Needs</h2>

<p>Every CSS book contains a lot of rules and patterns to follow. However, every developer has their own style and approach to solving layout challenges. Do not feel constrained to follow every rule blindly. First, understand <em>why</em> a particular rule exists, and then apply it where it makes sense. CSS has fewer strict syntax constraints than other programming languages, so feel free to experiment. You might discover a better way of doing things by trying something unconventional.</p>

<p>If you spot any mistakes or have updates to suggest, please leave a comment! I want to make this article as helpful as possible for my readers.</p>

<p>Thanks for reading! <img src="/2013_08_11_how_to_make_less_Image1.png" alt="Smile" /></p>

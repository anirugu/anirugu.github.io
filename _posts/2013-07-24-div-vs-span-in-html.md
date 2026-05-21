---
title: "The Differences Between div and span in HTML"
date: 2013-07-24T12:00:00-04:00
categories:
  - blog
tags:
  - HTML
---
<p>There are several key differences between the <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> elements in HTML.</p>

<p>First, a <code>&lt;div&gt;</code> is a block-level element, whereas a <code>&lt;span&gt;</code> is an inline element. When applying properties like padding, margins, width, or height, they work natively on a <code>&lt;div&gt;</code>. However, these properties will not affect a <code>&lt;span&gt;</code> unless its <code>display</code> style is changed to <code>block</code> or <code>inline-block</code>.</p>

<p>Second, you can nest a <code>&lt;span&gt;</code> inside a <code>&lt;div&gt;</code>, but you should not nest a <code>&lt;div&gt;</code> inside a <code>&lt;span&gt;</code>. Doing so violates HTML standards and results in invalid markup.</p>

<p>For more details, check out this excellent discussion on Stack Overflow: <a href="http://stackoverflow.com/questions/183532/what-is-the-difference-between-html-tags-div-and-span" title="What is the difference between HTML tags div and span?">What is the difference between HTML tags div and span?</a></p>


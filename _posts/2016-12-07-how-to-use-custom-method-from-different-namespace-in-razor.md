---
title: "How To Use Custom Method From Different Namespace In Razor"
date: 2016-12-07T12:00:00-04:00
categories:
  - blog
tags:
  - General
---
<p>For using method from custom library what you need is adding namespace in views/web.config</p>

<p>for example if you want to use linq methods you need to put something like this</p>

<p><code>&lt;add namespace="System.Linq" /&gt;</code></p>

<p>``</p>

<p>When you open the web.config file you already see some namespace there. After add namespace you can use that method in any of your views.</p>

<p>if this still not work in VS 15 , Close the VS and Restart it. it should work.</p>

---
title: "How To Design Shadow Based Box In Css 3"
date: 2013-06-04T12:00:00-04:00
categories:
  - blog
tags:
  - HTML
  - CSS
---
<p>In this post, I will show you how to create a box and page wrapper with a shadow effect using CSS3.</p>

<p>To create this effect, we use the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow">box-shadow</a> property.</p>

<div class="container">

<div class="container-hold pull-left">

<div class="container-hold-top pull-left">

</div>

</div>

</div>

<p>Here is the CSS:</p>

<p>.container {</p>

<p>box-shadow: 10px 10px 5px #888;</p>

<p>}</p>

<p>.container .container-hold {</p>

<p>box-shadow: -8px 10px 5px #888;</p>

<p>width: 100%;</p>

<p>height: 100%;</p>

<p>}</p>

<p>.container .container-hold .container-hold-top {</p>

<p>box-shadow: 10px -10px 8px #888;</p>

<p>height: 100%;</p>

<p>width: 100%;</p>

<p>}</p>

<p>This code creates shadows on the left, right, and top sides of the wrapper.</p>

<p>Here is the formal syntax for <code>box-shadow</code>:</p>

<p><font style="font-size: 10.5pt" color="#333333">Formal syntax: none | [inset? &amp;&amp; [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#</font></p>

<p>Note that I did not use the <code>spread-radius</code> in my example. Feel free to experiment with it to expand the shadow further.</p>

<p>Here are some great related posts:</p>

<p><a href="http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/">http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/</a></p>

<p><a href="http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html">http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html</a></p>

<p><a href="http://www.css3.info/preview/box-shadow/">http://www.css3.info/preview/box-shadow/</a></p>

<p>If I missed anything, please leave a comment so I can improve this post.</p>

---
title: "How To Design Bullet List ul>li In HTML CSS"
date: 2013-06-12T12:00:00-04:00
categories:
  - blog
tags:
  - HTML
  - CSS
---
<p>In HTML, there are many ways to accomplish a simple task, and each approach produces a different result. In this post, I will show you how to style <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> elements in a better way. <img src="/2013_06_12_how_to_design_bullet_Image1.png" alt="Smile" /></p>

<ul>

<li>List item</li>

</ul>

<p>Here is a proper <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Lists">guideline</a> — using the <code>list-style-type</code> property, you can display a circle, disc, or square shape before each list item. This is a clean and simple approach.</p>

<p>If you want to use a custom icon instead of the default shapes that HTML provides, you need to use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image?redirectlocale=en-US&amp;redirectslug=CSS%2Flist-style-image">list-style-image</a>. If that does not fit your requirements, set it to <code>none</code> and use a non-repeated image via <code>background-image</code>, positioned wherever you want using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-position">background-position</a>.</p>

<p>If you already have a clear design theme in mind and just need to write the HTML to bring it to life, using an icon is a good choice. Keep in mind that you cannot change the color of an image (icon) using any CSS property — images are static and do not respond to the <code>color</code> property.</p>

<p>In the case of PNG images, some implementations allow you to modify the background color, but this behavior can be buggy in older browsers.</p>

<p>A better approach is to inject the icon via the CSS <code>content</code> property, which allows you to change its color at any time using the <code>color</code> property in CSS.</p>

<p>This works like the following:</p>

<p>li:before {</p>

<p>content: "xyz";</p>

<p>color: red;</p>

<p>}</p>

<p>Remember that <code>xyz</code> is a UTF-8 entity character — it can be a visually appealing icon displayed before each list item. You can change its color at any time.</p>

<p>For a practical example, suppose you have a font that contains many icons. You can use them in your web app through the HTML5 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face">@font-face</a> feature or a tool like <a href="http://cufon.shoqolate.com/generate/">Cufon</a> to embed custom fonts.</p>

<p>This approach lets you implement any typography style you like. A great example is <a href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a>, which provides a large library of icons.</p>

<p>With Font Awesome, you would normally write something like:</p>

<p><li><i class="icon-expand-alt"></i></li></p>

<p>However, if you have many list items, repeating this markup becomes messy.</p>

<p>A cleaner alternative is:</p>

<p>li:before {</p>

<p>content: "myiconcode";</p>

<p>font-family: "Fontawesome";</p>

<p>}</p>

<p>Open the browser inspector, copy the <code>content</code> value for your desired icon, and replace <code>"myiconcode"</code> with it. This way, you no longer need to add an <code>&lt;i&gt;</code> tag with an icon class to every list item, and your markup becomes much cleaner.</p>

<p>Since Font Awesome uses its own custom font, you can apply this same technique with any custom font. The additional benefit is that you can change the icon's color at any time, and you can increase or decrease the <code>font-size</code> to scale it up or down.</p>

<p>Thanks for reading! The information in this post is based on what I have learned from others. Although the title focuses on list icons, note that you can apply the <code>:before</code> pseudo-element to any HTML element — such as <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> — not just list items.</p>

<p>Cheers <img src="/2013_06_12_how_to_design_bullet_Image2.png" alt="Smile" /></p>

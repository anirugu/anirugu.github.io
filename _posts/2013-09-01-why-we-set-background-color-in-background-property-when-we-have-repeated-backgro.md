---
title: "Why We Set A Background Color When Using Repeated Background Images"
date: 2013-09-01T12:00:00-04:00
categories:
  - blog
tags:
  - Firefox
  - CSS
---
<p>This is just a CSS experiment.</p>

<p>You may have seen code like this:</p>

<p>background:url("/images/repeated_bg.png") repeat scroll center top red;</p>

<p>But wait, why is the color set to red when the image is repeated everywhere?</p>

<p>1.</p>

<p>In Firefox, install the Web Developer add-on. Now go to Images &gt; Disable All Images.</p>

<p>You can now see that the text is not visible if the text color is white. It worked earlier because there was a background image behind the text.</p>

<ol start="2">
<li><p>Suppose you design your UI for desktop users. Now someone uses a mobile or tablet device to access your website. Some browsers manipulate the code to make it work on mobile. At that point, it may break. If the text goes outside the image, it will not work well.</p></li>
</ol>

<p>3.</p>

<p>For example, look at <a href="http://emberjs.com/" title="http://emberjs.com/">http://emberjs.com/</a>, then open Web Developer and disable images once again. You will see that the navigation does not work well.</p>

<p>Open Firebug and check this code:</p>

<h1>header{</h1>

<p>background: url("/images/navigation_background.png") repeat scroll center top transparent;</p>

<p>}</p>

<p>Now change the transparent color to red, which is nearly the same as the background image color in the background property, and it will work.</p>

<p>--</p>

<p>If a non-repeated image is set in the background property, do I also need to define a background color?</p>

<p>This is a good question. Effectively, this color will be shown when your image is broken. When you define the image tag (<img />), it takes up space depending on the size of the image. If your code has CSS width and height properties on the img tag, the browser will make the image smaller. It will not crop it like Photoshop does. In that case, you can define the color that will be seen when the image is broken.</p>

<p>If you don't know about alt and title attributes, the alternative text from the alt attribute on the img tag will be shown when the image is broken. The title text from the title attribute on the img tag is shown when the image is hovered by the cursor.</p>

<p>I think this helps describe why we need to set the background color in the background property when we use repeated background images.</p>

<p><img src="/2013_09_01_why_we_set_background_Image1.png" alt="Smile" /></p>

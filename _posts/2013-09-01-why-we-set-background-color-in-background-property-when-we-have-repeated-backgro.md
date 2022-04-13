<p>This is just a css experiment.</p>

<p>You have seen the code something like this.</p>

<p>background:url("/images/repeated_bg.png") repeat scroll center top red;</p>

<p>but wait, why the color is set to red when image will be repeated all-over.</p>

<p>OK,</p>

<p>1</p>

<p>In firefox install the web-developer plugin in add-ons. Now go to images > disable all images.</p>

<p>Now see that text is not visible if the text have color that is white. This is working before because there is background behind the text.</p>

<ol start="2">
<li><p>Suppose you design your UI for desktop user. Now someone use mobile or tablet to access your website. Some browser manipulate the code to make it work in Mobile. that time it will be broken. The text if going outside the image will not work well.</p></li>
</ol>

<p>3.</p>

<p>suppose for example look at <a href="http://emberjs.com/" title="http://emberjs.com/">http://emberjs.com/</a> and now open the web-developer and disable the image once again. Now you see that navigation is not working well.</p>

<p>open Firebug and check this code</p>

<h1>header{</h1>

<p>background: url("/images/navigation_background.png") repeat scroll center top transparent;</p>

<p>}</p>

<p>now change the transparent color to RED (which is nearly same to the background-image in background property) then it will work.</p>

<p>--</p>

<p>If there is non-repeated image have set in background property then should I need to define background color also?</p>

<p>This is a good question, Effectively this color will be shown when your image are broken. When you define the image tag (<img />) it will take place depend on size of image. If your code have CSS property Width and Height on img tag then Browser will make them small (it will not crop it like photoshop do). In that case you can define the color that will be seen when image are broken.</p>

<p>If you don’t know about Alt and Title then alternative text (alt attribute on img) will be shown when image are broken. The title text (title attribute in img) is shown when image is hovered by cursor.</p>

<p>I thing this would be helpful to describe why we need to set the background color in image property when we use repeated background images.</p>

<p><img src="/2013_09_01_why_we_set_background_Image1.png" alt="Smile" /></p>

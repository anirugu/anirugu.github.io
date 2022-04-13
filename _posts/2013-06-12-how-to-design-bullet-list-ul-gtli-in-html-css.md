<p>in HTML there is too many option to accomplish a small task. Every kind of option make a different result. In this post I will show you how you can design ul li better way <img src="/2013_06_12_how_to_design_bullet_Image1.png" alt="Smile" /></p>

<ul>

<li> List item </li>

</ul>

<p>Here is a some <a href="http://www.w3schools.com/css/css_list.asp" title="w3schools is a crap. Never tried them in Real life"><strike>guideline</strike></a> proper <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Lists">Guideline</a> using list-style-type property you can show the circle, disk square shape just before the list item. This is nice way.</p>

<p>If you have icon instead of shape that html provided then you need to use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image?redirectlocale=en-US&amp;redirectslug=CSS%2Flist-style-image">list-style-image</a> If this thing not fit with your requirement then you need to set it to none and use non-repeated images (Through background-image) that will be shown at the position whichever you want through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-position">Background position</a></p>

<p>If you have the theme of page in your mind (Everything is ready and you just need to write html to make it finish) then setting icon is good choice. Remember that You can’t change the color of image (icon in this context) by using any property in css. Image is static which not allowed you to change their color by any css property.</p>

<p>in case of PNG some cased allowed you to modify the background color of image but maybe This implementation going buggy in old browser.</p>

<p>In this case I would like to set the icon through content property in Css and change the color whenever we want through color property in css.</p>

<p>This thing going something as</p>

<p>li:before{</p>

<p>content:”xyz”;</p>

<p>color:red;</p>

<p>}</p>

<p>Remember that xyz is utf8 based entity character which can be a pretty looking UTF8 icon shown before li. You can modified the color of this thing whenever you want. </p>

<p>For better example suppose you have font which contain a lot of pretty icon. Now you can use them in your web-apps through HTML5 features which allowed you to embedded the custom fonts (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face">font-face</a> , <a href="http://cufon.shoqolate.com/generate/">cufon</a>) </p>

<p>This way you can implement the typography you like to implement in your web-apps. For example see a nice example called <a href="http://fortawesome.github.io/Font-Awesome/">Font-awesome</a> which provide a lot of icon.</p>

<p>in Font-awesome you need to tried thing like </p>

<p><li><i class="icon-expand-alt"></i> </li></p>

<p>in this li you have shown the expand alternative icon in the list-item. If you have write a lot of li then this code is not looking good.</p>

<p>You can tried it also this way</p>

<p>li:before{</p>

<p>content:”myiconcode”;</p>

<p>font-family:”Fontawesome”;</p>

<p>}</p>

<p>Now open the firebug and copy the content value for the icon you have set and replace it with “myiconcode”. Now you not need to write I with icon class anymore. this way you code look some more beautiful.</p>

<p>As fontawesome use their own font we can implement our own fonts (or whatever we can do). Now remember that this thing have one more benefit . The benefit is setting color on anytime is possible. You can increase the font size to make icon bigger and smaller.</p>

<p>Thanks for read this post. The information I post in this blog-post is thing I learned from other people. The title of this post is about list-icon but you can applied the font-icon using x:before on any element like <div> , <span>.</p>

<p>Cheers <img src="/2013_06_12_how_to_design_bullet_Image2.png" alt="Smile" /></p>

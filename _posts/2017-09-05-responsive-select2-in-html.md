---
title: "Responsive Select2 In Html"
date: 2017-09-05T12:00:00-04:00
categories:
  - blog
tags:
  - HTML
  - Bootstrap
  - CSS
---
<p>For the past few years, I have been using Select2 to build effective dropdown menus in Bootstrap. Recently, I spent some time trying to make it responsive, but it didn't perform as well as expected out of the box.</p>

<p>Here is a useful thread that helped me get it working:</p>

<p><a href="https://github.com/select2/select2/issues/3278" title="Select2 responsive issue thread">https://github.com/select2/select2/issues/3278</a></p>

<p>Using the tricks in that thread, you can make the dropdown responsive, which is quite useful. However, something was still missing for my use case.</p>

<p>In my implementation, I needed a feature where the dropdown sits in a small space by default, but expands to use the full width when a user interacts with it.</p>

<p>So I inspected the HTML that the plugin generates. I noticed that the Select2 plugin inserts some <code>div</code> elements immediately after the <code>select</code> element. If you try to set the width on the Select2 container either before or after calling the Select2 initializer, it will not work correctly.</p>

<p>The solution is to write CSS that targets the generated <code>div</code>. For example:</p>

<p>.select2-container{</p>

<p>width: 90px;</p>

<p>}</p>

<p>This will constrain the Select2 element to 90px. That's how you modify the CSS of the generated HTML. But wait — what if you want the dropdown to expand to a wider width when the user clicks on it? I inspected further and found that the plugin generates another <code>div</code> to display the search bar and the options list.</p>

<p>The dropdown element has the following CSS classes:</p>

<p>select2-dropdown select2-dropdown—below</p>

<p>So, if you want the dropdown panel to be wider when opened, you target that container. For example:</p>

<p>.select2-dropdown{</p>

<p>width: 180px;</p>

<p>}</p>

<p>In this implementation, the Select2 element is 90px wide by default but expands to 180px when the user opens it to type or make a selection.</p>

<p>Here is a quick demo for this post: <a href="https://codepen.io/anirugu/pen/YxMaqR" title="Select2 responsive demo on CodePen">https://codepen.io/anirugu/pen/YxMaqR</a></p>

<p>Thanks for reading!</p>

<p>Happy coding <img src="/2017_09_05_responsive_select2_in_html_Image1.png" alt="Smile" /></p>

---
title: "How to Design a Shadow-Based Box in CSS3"
date: 2013-06-04T12:00:00-04:00
categories:
  - blog
tags:
  - HTML
  - CSS
---
In this post, I will show you how to create a box and page wrapper with a shadow effect using CSS3.

To create this effect, we use the [box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) property.

Here is the HTML structure:

```html
<div class="container">
  <div class="container-hold pull-left">
    <div class="container-hold-top pull-left">
    </div>
  </div>
</div>
```

Here is the CSS:

```css
.container {
  box-shadow: 10px 10px 5px #888;
}

.container .container-hold {
  box-shadow: -8px 10px 5px #888;
  width: 100%;
  height: 100%;
}

.container .container-hold .container-hold-top {
  box-shadow: 10px -10px 8px #888;
  height: 100%;
  width: 100%;
}
```

This code creates shadows on the left, right, and top sides of the wrapper.

Here is the formal syntax for `box-shadow`:

```css
box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
```

Note that I did not use the `spread-radius` in my example. Feel free to experiment with it to expand the shadow further.

Here are some great related posts:

- [Fun with Box Shadows - Markus Stange](http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/)
- [Box Shadow Inset Demo](http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html)
- [CSS3 Info: Box Shadow](http://www.css3.info/preview/box-shadow/)

If I missed anything, please leave a comment so I can improve this post.


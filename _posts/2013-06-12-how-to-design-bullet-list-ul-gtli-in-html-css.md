---
title: "How To Design Bullet List ul>li In HTML CSS"
date: 2013-06-12T12:00:00-04:00
---
title: "How To Design Bullet List ul>li In HTML CSS"
date: 2013-06-12T12:00:00-04:00
categories:
  - blog
tags:
  - HTML
  - CSS
---

In HTML, there are many ways to accomplish a simple task, and each approach produces a different result. In this post, I will show you how to style `<ul>` and `<li>` elements in a better way. ![Smile](/2013_06_12_how_to_design_bullet_Image1.png)

* List item

Here is a proper [guideline](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Lists) — using the `list-style-type` property, you can display a circle, disc, or square shape before each list item. This is a clean and simple approach.

If you want to use a custom icon instead of the default shapes that HTML provides, you need to use [list-style-image](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image?redirectlocale=en-US&redirectslug=CSS%2Flist-style-image). If that does not fit your requirements, set it to `none` and use a non-repeated image via `background-image`, positioned wherever you want using [background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position).

If you already have a clear design theme in mind and just need to write the HTML to bring it to life, using an icon is a good choice. Keep in mind that you cannot change the color of an image (icon) using any CSS property — images are static and do not respond to the `color` property.

In the case of PNG images, some implementations allow you to modify the background color, but this behavior can be buggy in older browsers.

A better approach is to inject the icon via the CSS `:before` pseudo-element, which allows you to change its color at any time using the `color` property in CSS.

This works like the following:

```css
li:before {
  content: "xyz";
  color: red;
}
```

Remember that `xyz` is a UTF-8 entity character — it can be a visually appealing icon displayed before each list item. You can change its color at any time.

For a practical example, suppose you have a font that contains many icons. You can use them in your web app through the HTML5 [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) feature or a tool like [Cufon](http://cufon.shoqolate.com/generate/) to embed custom fonts.

This approach lets you implement any typography style you like. A great example is [Font Awesome](http://fortawesome.github.io/Font-Awesome/), which provides a large library of icons.

With Font Awesome, you would normally write something like:

```html
<li><i class="icon-expand-alt"></i></li>
```

However, if you have many list items, repeating this markup becomes messy.

A cleaner alternative is:

```css
li:before {
  content: "myiconcode";
  font-family: "Fontawesome";
}
```

Open the browser inspector, copy the `content` value for your desired icon, and replace `"myiconcode"` with it. This way, you no longer need to add an `<i>` tag with an icon class to every list item, and your markup becomes much cleaner.

Since Font Awesome uses its own custom font, you can apply this same technique with any custom font. The additional benefit is that you can change the icon's color at any time, and you can increase or decrease the `font-size` to scale it up or down.

Thanks for reading! The information in this post is based on what I have learned from others. Although the title focuses on list icons, note that you can apply the `:before` pseudo-element to any HTML element — such as `<div>` or `<span>` — not just list items.

Cheers ![Smile](/2013_06_12_how_to_design_bullet_Image2.png)

---
title: "How To Write Css Only For Internet Explorer 10"
date: 2013-03-02T12:00:00-04:00
categories:
  - blog
tags:
  - CSS
  - Chrome
  - HTML
  - Firefox
  - Windows
---
When IE 10 launched for Windows 7, I started investigating what had changed from a web developer's perspective. I noticed that some CSS code that broke in IE 9 still wasn't rendering correctly in IE 10, even though the same code worked perfectly in Firefox and Chrome.

My first instinct was to apply IE-specific CSS using the classic **conditional comments** approach:

```html
<!--[if IE]>
  <link rel="stylesheet" href="assets/ie.css">
<![endif]-->
```

However, **Microsoft removed conditional comment support in IE 10**. This means the CSS hack that worked for all previous versions of IE will simply be ignored by IE 10. See the official references: [link1](http://blogs.msdn.com/b/ie/archive/2011/07/06/html5-parsing-in-ie10.aspx) and [link2](http://msdn.microsoft.com/en-us/library/ms537512(v=VS.85).aspx).

Additionally, if you were relying on `jQuery.browser()` for browser detection, note that it was **removed in jQuery 1.9**. See the [jQuery 1.9 Upgrade Guide](http://jquery.com/upgrade-guide/1.9/#jquery-browser-removed) for details.

### The Workaround: CSS Conditional Compilation

A technique that works in IE 10 is to use **JScript conditional compilation** to detect IE and dynamically add a class to the `<html>` element. Credit to the approach from [impressivewebs.com](http://www.impressivewebs.com/ie10-css-hacks/):

```javascript
if (/*@cc_on!@*/false) {
    document.documentElement.className += ' ie10';
}
```

This adds an `ie10` class to the root `<html>` element in IE 10 only, allowing you to scope styles specifically to it:

```css
.ie10 .my-element {
    /* IE 10-only CSS fix */
}
```

---

**UPDATE: 17 March**

There is actually no need to add a custom `ie10` class at all if your only goal is to load an IE-specific stylesheet. A simpler approach is to dynamically inject `ie.css` into the `<head>` using the same conditional compilation trick:

```javascript
if (/*@cc_on!@*/false) {
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML += '<link type="text/css" rel="stylesheet" href="assets/ie.css">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
}
```

This will inject `ie.css` directly into the `<head>` of the document in IE 10. Cheers!

---
title: "How To Get Started With Twitter Bootstrap"
date: 2012-12-16T12:00:00-04:00
categories:
  - blog
tags:
  - CSS
  - .NET
  - Visual-Studio
  - JavaScript
  - HTML
  - Bootstrap
  - Windows
---
**Updated: 15 May 2013**

In this post, I will give you a quick overview of how to get started using Twitter Bootstrap in your web project.

Twitter Bootstrap is a front-end framework built around a responsive grid system and a set of JavaScript-powered UI components. It allows you to build polished, well-structured user interfaces very quickly without writing everything from scratch.

### Step 1: Download Bootstrap

Download Bootstrap from [http://twitter.github.com/bootstrap](http://twitter.github.com/bootstrap) and copy all of the extracted folders into the root folder of your project. From there, link the CSS and JavaScript files in your HTML pages.

### Step 2: Working with LESS (Optional but Recommended)

Bootstrap's source files are written in LESS, and I personally prefer working with LESS directly rather than the pre-compiled CSS. It gives you much more control over customization and theming. A great tool for compiling LESS files is [SimpleLESS](http://wearekiss.com/simpless). If you are using Visual Studio or WebMatrix, there are also plugins available that will automatically compile your LESS files on save.

One benefit of working with LESS source files directly is better error reporting. For example, SimpleLESS highlights LESS compilation errors clearly:

[![SimpleLESS error reporting screenshot](/2012_12_16_how_to_get_started_Image1.png)](http://gwb.blob.core.windows.net/anirugu/Windows-Live-Writer/How-to-get-started-with-Twitter-boostra_13A2D/simpless_2.png)

### Step 3: Link Your Files

Here is an example of how I link the Bootstrap CSS files in my HTML `<head>`:

```html
<link rel="stylesheet" href="assets/normalize.css">
<link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
<link rel="stylesheet" href="assets/css/bootstrap-responsive.min.css"/>
<link rel="stylesheet" href="assets/style.css"/>
```

> [!NOTE]
> `normalize.css` does not ship with Bootstrap. You need to download it separately from its [GitHub repository](http://necolas.github.com/normalize.css/).

Bootstrap's JavaScript components require jQuery. Add it before your closing `</body>` tag:

```html
<script src="assets/jquery-1.8.3.js"></script>
<script type="text/javascript" src="assets/script.js"></script>
```

### Step 4: Learn the Components

Once your files are linked, start exploring the [official Bootstrap documentation](http://twitter.github.com/bootstrap/getting-started.html). There is also a large amount of community-written tutorials available online. If you run into any issues, Stack Overflow and Bootstrap's GitHub Issues page are your best resources.

Thanks for reading! Feel free to leave a comment with any questions or suggestions. ![Smile](/2012_12_16_how_to_get_started_Image3.png)

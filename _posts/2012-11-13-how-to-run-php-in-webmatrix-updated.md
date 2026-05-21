---
title: "How To Run Php In Webmatrix Updated"
date: 2012-11-13T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - PHP
  - Windows
---
A few months ago, I wrote [How to Run PHP in WebMatrix](/blog/how-to-run-php-in-webmatrix/). In this updated post, I'll explain the process more clearly.

### Enabling PHP for Your Website

When you create a website in WebMatrix, navigate to **Site > Settings**. Here you will find the option to enable PHP for your website on the local IIS Express server.

[![WebMatrix PHP Settings Screenshot](/2012_11_13_how_to_run_php_Image1.png)](http://gwb.blob.core.windows.net/anirugu/Windows-Live-Writer/How-to-run-PHP-in-Webmatrix-update-_B9BC/11_2.png)

### Installing PHP via WPI

You can also install PHP directly through the **Web Platform Installer (WPI)**. Once installed, PHP will be placed in the following directory:

`C:\Program Files (x86)\IIS Express\PHP\{version}\`

Where `{version}` corresponds to the specific version of PHP you chose to install.

For further help with installing and configuring PHP in WebMatrix, the [IIS.net PHP forums](http://forums.iis.net/1166.aspx) are a great resource. You can also post feature requests and suggestions on the WebMatrix UserVoice page.

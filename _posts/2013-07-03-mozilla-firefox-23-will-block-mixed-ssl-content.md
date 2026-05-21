---
title: "Mozilla Firefox 23 Will Block Mixed SSL Content"
date: 2013-07-03T12:00:00-04:00
categories:
  - blog
tags:
  - Firefox
---
<p>If you have a site running on SSL (HTTPS) that loads content from non-HTTPS URLs, you should be aware of this change in Firefox 23.</p>

<p>By default, Firefox 23 will block any content loaded from non-HTTPS addresses on an HTTPS page.</p>

<p>For example, a script referencing <a href="https://code.jquery.com/jquery-1.10.2.min.js">https://code.jquery.com/jquery-1.10.2.min.js</a> will not work if <code>code.jquery.com</code> cannot be reached over HTTPS. However, the CDN <code>ajax.googleapis.com</code> supports SSL, so you can use that as an alternative.</p>

<p>If you want to disable this setting, you can do so via <code>about:config</code>:</p>

<p><code>security.mixed_content.block_active_content</code></p>

<p>Change the value from <code>true</code> to <code>false</code> to disable the block. (This is shown here as an example only — it is generally not recommended to disable this security feature.)</p>

<p><img src="/2013_07_03_mozilla_firefox_23_will_Image1.png" alt="Smile" /></p>

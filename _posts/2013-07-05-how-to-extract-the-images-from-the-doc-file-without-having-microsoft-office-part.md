---
title: "How to Extract Images from DOC Files Without Microsoft Office (Part 2)"
date: 2013-07-05T12:00:00-04:00
categories:
  - blog
tags:
  - Mac
  - .NET
  - Chrome
  - Linux
  - Windows
---
<p>Last time, I wrote a post explaining how to extract images from a Microsoft Word file. The instructions in that <a href="http://geekswithblogs.net/anirugu/archive/2013/06/29/how-to-extract-the-images-from-the-doc-file-without.aspx">previous post</a> work without needing Microsoft Office installed.</p>

<p>In this post, I will share another simple method that doesn't even require you to be running Windows.</p>

<p>You can install the **Chrome Office Viewer** extension from the <a href="https://chrome.google.com/webstore/detail/chrome-office-viewer-beta/gbkeegbaiigmenfmjfclcdgdpimamgkj">Chrome Web Store</a>. Since it runs inside Google Chrome, this method works on Linux, macOS, and Windows. Once installed, follow these instructions to extract your images:</p>

<ol>
<li><p>Press <strong>Ctrl + O</strong> (or <strong>Cmd + O</strong> on Mac) and select your <code>.doc</code> or <code>.docx</code> file.</p></li>
<li><p>Your document will load directly inside Google Chrome.</p></li>
<li><p>Right-click the image you want and select <strong>Save image as...</strong>. Note: Chrome may save the file without a file extension, so you might need to append the correct extension (like <code>.png</code> or <code>.jpg</code>) manually.</p></li>
</ol>

<p>To determine the correct file extension, right-click the image and select <strong>Open image in new tab</strong>. You can inspect the first few characters of the image data or its URL path (e.g., PNG, GIF) to identify the format.</p>

<p>I have tested this method with several document files and verified that it works perfectly! <img src="/2013_07_05_how_to_extract_the_Image1.png" alt="Smile" /></p>


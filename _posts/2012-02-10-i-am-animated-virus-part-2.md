---
title: "I Am Animated Virus Part 2"
date: 2012-02-10T12:00:00-04:00
categories:
  - blog
tags:
  - Windows
  - .NET
  - Chrome
---
In my previous post, [I Am Animated Virus](/blog/i-am-animated-virus/), I discussed the frustrating problem with spell-checkers in various programs and how they completely fail on non-English names. I highlighted that it is very difficult to guarantee reliable spell-check behavior across tools, especially for words from non-English languages.

The good news is that Chrome has since addressed this issue! The feature first appeared in Chrome Canary and was rolled out in Chrome 19. It uses **Google's online spell-check suggestions**, which are far more accurate than the browser's built-in dictionary alone. When you type a misspelled word, Chrome can now query Google's servers for a better suggestion.

[![Chrome Google Spell-check Screenshot](/2012_02_10_i_am_animated_virus_Image1.png)](http://gwb.blob.core.windows.net/anirugu/Windows-Live-Writer/I-am-animated_F687/img1_6.png)

> [!NOTE]
> In the screenshot above, the `spellcheck` attribute was intentionally removed from the `<textarea>` element to better demonstrate how Google's suggestion engine works independently.

Chrome now handles spell-checking noticeably better than other programs I tested in the original post.

As a bonus tip: did you know that Google Translate also supports full **document translation**? You can upload a file and have the entire thing translated—check it out at [translate.google.com](http://translate.google.com/?tr=f&hl=en).

Thanks for reading!

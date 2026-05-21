---
title: "I Am Animated Virus"
date: 2012-01-25T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - Chrome
  - HTML
  - Firefox
  - Windows
---
When I wrote my last post, [Firefox 7 Released](http://geekswithblogs.net/anirugu/archive/2011/09/26/firefox-7-released.aspx), Mozilla had just launched version 7. Now they are on version 9, and soon they'll hit 12! Today, I want to highlight a frustrating problem with the spell-checking processors we use daily.

Let's take my name, **Anirudha**, as an example. Look at what happens when I type it into different software:

- **Windows Live Writer:** It offers absolutely no suggestions. It just highlights the word with a red squiggly line.
- **Microsoft Word 2007:** This handles it slightly better. When I type "anirudha", it auto-capitalizes it to "Anirudha" as an autocorrection.
- **Firefox Nightly:** When I write "anirudha" in a textbox, the spellchecker bizarrely suggests "Ludhiana". (For those wondering, [Ludhiana](http://en.wikipedia.org/wiki/Ludhiana) is a city in India).
- **Google Chrome:** In Chrome, the spellchecker completely loses its mind. It provides a list of highly inaccurate suggestions, including:
  1. Aniakchak
  2. Antivirus
  3. Animated
  4. Aniseed

In HTML5, if the `spellcheck` attribute is not explicitly set to `false`, the browser will automatically try to spell-check text inputs. However, these spell-check algorithms are clearly optimized exclusively for standard English dictionaries. They often hurt productivity rather than improve it when a user is typing non-English words or names. According to Chrome, I am an "animated virus"!

Thanks for reading!

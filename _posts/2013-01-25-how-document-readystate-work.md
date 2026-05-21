---
title: "How Document Readystate Work"
date: 2013-01-25T12:00:00-04:00
categories:
  - blog
tags:
  - JavaScript
  - HTML
---
In JavaScript, you can use `document.readyState` to check the current loading state of the page. This is particularly useful when you need to conditionally run code depending on how far along the page load process is.

### Possible States

| State | Description |
|---|---|
| `"loading"` | The page is still loading and the script is being executed before all resources are available. |
| `"interactive"` | The HTML document has been fully parsed, but sub-resources such as images and stylesheets may still be loading. |
| `"complete"` | The page and all its sub-resources are fully loaded. |

### Example Usage

```javascript
document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        // Safe to interact with all page elements
        console.log("Page fully loaded!");
    }
};
```

This is essentially what jQuery's `$(document).ready()` is built on under the hood. Using `document.readyState` directly gives you more fine-grained control without a framework dependency.

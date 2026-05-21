---
title: "How to Fix 'Could Not Load File or Assembly Microsoft.AspNet.Identity.Core' Error"
date: 2015-01-12T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - ASP.NET
  - Windows
---
On the ASP.NET error page, you will see a fusion log error message similar to this:

```text
LOG: Attempting download of new URL file:///C:/Windows/Microsoft.NET/Framework/v4.0.30319/Temporary ASP.NET Files/
```

To resolve this issue, you can clear the temporary compilation files:

1. Copy the path shown in the log. Make sure to replace the forward slashes `/` with backslashes `\` so Windows Explorer can open it: `C:\Windows\Microsoft.NET\Framework\v4.0.30319\Temporary ASP.NET Files\`.
2. Delete all files and folders inside this directory. (Note: You may need to stop IIS or IIS Express first if the files are locked).
3. Rebuild and compile your project again in Visual Studio.

If you are still experiencing issues, you can also try updating or restoring your NuGet packages as described in this [Stack Overflow answer](http://stackoverflow.com/a/12760677/713789).


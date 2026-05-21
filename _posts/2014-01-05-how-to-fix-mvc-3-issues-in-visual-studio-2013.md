---
title: "How to Fix MVC 3 Compatibility Issues in Visual Studio 2013"
date: 2014-01-05T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - MVC
---
In the initial release of Visual Studio 2013, direct support for MVC 3 was dropped. If Visual Studio fails to load your MVC 3 application and displays a "Project not supported" error, this post will help you.

First, create a new project with the same namespace and copy the generated `.sln` and `.csproj` files into your project directory (as detailed in our previous post).

Next, exclude all files and folders from the project in Solution Explorer, and then include them again. This forces Visual Studio to rebuild the file references inside the new `.csproj` file.

After getting the project to load, I encountered a Razor syntax error: `Invalid term ':'`. Even though the code itself was correct, the old MVC 3 Razor parser syntax was conflicting with the new VS 2013 editor. The best solution is to upgrade the project to MVC 4. After upgrading, the Razor views rendered perfectly and the syntax errors disappeared.

If you know of any other useful articles or guides for resolving MVC 3 compatibility issues in VS 2013, feel free to share them in the comments below! <img src="/2014_01_05_how_to_fix_mvc_Image1.png" alt="Smile" />

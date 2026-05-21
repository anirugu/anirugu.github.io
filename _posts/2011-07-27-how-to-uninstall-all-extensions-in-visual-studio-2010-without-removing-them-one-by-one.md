---
title: "How To Uninstall All Extensions In Visual Studio 2010 Without Removing Them One By One"
date: 2011-07-27T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - JavaScript
---
Visual Studio has great built-in support for extensions (plugins), making it easy to add new features directly from the Visual Studio Gallery. However, installing too many extensions can gradually degrade the IDE's performance, and some users eventually want a fresh start.

Unfortunately, Visual Studio 2010 does not have a built-in "Remove All" button. Extensions like JavaScript tools are composed of multiple components, meaning you would normally have to uninstall each component one by one—which is incredibly tedious.

### How to Remove All Extensions at Once

There is a much faster way to do this manually:

1. Open **Windows Explorer** (`Ctrl + E`).
2. In the address bar, type the following path and press Enter:
   `%LocalAppData%\Microsoft\VisualStudio\10.0\Extensions`
3. This will open the folder where Visual Studio stores all installed extension files.
4. Simply delete the contents of this folder to remove all extensions from your Visual Studio 2010 installation in one shot.

> [!WARNING]
> Make sure Visual Studio is **completely closed** before deleting this folder. Deleting files while Visual Studio is running may cause unexpected behavior or file lock errors.

---
title: "Things To Do After Installing Visual Studio Express 12"
date: 2013-06-25T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - HTML
  - Windows
  - CSS
---
Here is a list of recommended settings to configure immediately after installing Visual Studio Express 2012 (or Visual Web Developer).

1. **Environment > Documents > Auto-load changes**
   Enable this option. By checking this, you can modify files outside of Visual Studio, and the editor will automatically reload them without constantly prompting you for confirmation.

2. **Environment > Tabs and Windows > Preview Tab > Allow new files to be opened in the preview tab**
   Uncheck this option. Disabling the preview tab prevents files from opening temporarily when you single-click them in the Solution Explorer.

3. **Projects and Solutions > Track Active Item in Solution Explorer**
   Enable this setting. This automatically highlights the file you are currently editing within the Solution Explorer, making it much easier to figure out where you are in the project structure.

4. **Text Editor > All Languages > Word wrap**
   Enable word wrap so you don't have to scroll horizontally to read long lines of code.

5. **Text Editor > CSS > Formatting > Compact Rules**
   Enable this. This formatting option keeps your CSS rules compact, which makes the file physically smaller and easier to scan.

6. **Text Editor > HTML > Miscellaneous > Auto ID**
   Uncheck the "Auto ID elements on paste in Design view" option. By default, when you copy and paste HTML code, Visual Studio will automatically change the IDs to prevent duplicates. However, this is extremely frustrating if you are pasting blocks of HTML inside conditional statements (like an `if/else` block) where the duplicate IDs are intentional.

7. **Package Manager > General**
   Browse and copy the location of your local NuGet cache folder. Add this path as a new Package Source. This allows you to install NuGet packages completely offline, using versions you've previously downloaded!

Thanks for reading my post! ![Smile](/2013_06_25_things_to_do_after_Image1.png)

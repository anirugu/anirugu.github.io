---
title: "How To Solve \u201cgit Is Not Recognized Command In Windows\u201d When You Have In"
date: 2013-03-02T12:00:00-04:00
categories:
  - blog
tags:
  - Windows
---
If you have installed **GitHub for Windows** but still get a `'git' is not recognized as an internal or external command` error when running git commands in CMD, it is because the git executable's location hasn't been added to your system's `PATH` variable.

### Fix: Add Git to Your System PATH

1. Open **Windows Explorer** and navigate to the GitHub for Windows portable git installation. The path typically looks like:
   `C:\Users\myusername\AppData\Local\GitHub\PortableGit_93e8418133eb85e81a81e5e19c272776524496c6\libexec\git-core`
   *(The hash in the folder name will differ on your machine.)*

2. Copy this full path.

3. Go to **Start > Search for "Edit the system environment variables"** and open it.

4. Under **System Variables**, find the `Path` variable and click **Edit**.

5. Append a semicolon (`;`) followed by the path you just copied to the end of the existing value, then click **OK**.

6. Open a new CMD window and run `git --version` to verify it works.

### Still Getting a Missing DLL Error?

If you see an error about a missing DLL (such as `libiconv2.dll`), the GitHub for Windows portable git installation may be incomplete. In that case, download and install the full standalone Git client from [git-scm.com](http://git-scm.com/) and add its `bin` folder to your PATH instead.

For more details on resolving the missing DLL issue, see this [Stack Overflow answer](http://stackoverflow.com/questions/3431361/git-for-windows-the-program-cant-start-because-libiconv2-dll-is-missing).

Thanks for reading!

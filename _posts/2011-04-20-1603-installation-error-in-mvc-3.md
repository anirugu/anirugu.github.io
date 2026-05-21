---
title: "1603 Installation Error In Mvc 3"
date: 2011-04-20T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - .NET
  - MVC
  - ASP.NET
---
When attempting to install MVC 3 via the Microsoft Web Platform Installer (WPI), you might see a message stating that MVC 3 and other components installed successfully. However, reopening WPI may prompt you to install those exact same components again. This loop typically indicates a silent failure or a hidden error within WPI.

**How can you successfully install MVC 3 if you encounter Error 1603, your system fails to run the setup, or an installation error persists?**

First, try running WPI again. Select the MVC 3 option and click **Install**. A window should appear displaying the executable's location on the server. You can download the setup directly from this location or from the official Microsoft website.

When you run this downloaded setup, it will likely still fail—but this failure is actually the key to a workaround.

When the setup fails and displays a "setup did not succeed" error message, open the provided log file in your browser. Scroll to the bottom to verify that it shows **Error Code 1603**, which points to a specific issue with the MVC 3 installation. 

> [!WARNING]
> Do **not** close the failed setup window. If you close it, Windows will automatically delete all the temporary files extracted for the installation, which we need for the workaround.

While the failed setup window is still open, navigate to your temporary folder (usually `%temp%` or `C:\temp`). Inside, you will find several extracted executable files. You must run these executables individually to install the components manually:

- **ASP.NET MVC 3**: Required for MVC 3 core functionality.
- **ASP.NET MVC 3 for Visual Studio Tools**: Optional, but recommended if you have Visual Studio installed.
- **ASP.NET MVC 3 for VWD Tools**: Optional, for users with Visual Web Developer installed.
- **ASP.NET Web Pages**: Required for ASP.NET Web Pages functionality.
- **ASP.NET Web Pages for Visual Studio Tools**: Optional.
- **ASP.NET Web Pages for VWD Tools**: Optional.

*Note:* There is no harm in installing the optional executables. If you install Visual Web Developer (VWD) later, you won't have to install the MVC 3 tools again.

**Crucial Installation Tips:**
- Ensure Visual Studio and VWD are completely closed. Having them open can lock files and prevent the executables from installing properly.
- Do not run any executables that have "KB" in their filename. These are updates, not the main setup files, and running them may trigger the same Error 1603.
- Do not re-run the original main setup executable, as it will trigger a rollback of everything you just manually installed.

After you have manually installed the extracted executables, open Visual Studio or VWD to verify that MVC 3 is functioning correctly. Once you confirm it works, you can finally close the original setup window that displayed the failure message. Even though the main setup failed, your manual installation of its extracted components will allow MVC 3 to run perfectly on your system.
<p>This is an alternative method to install MVC 3 when the standard installation process fails.</p>
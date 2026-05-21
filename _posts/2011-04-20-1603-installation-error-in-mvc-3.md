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
<p>When a user tries to install MVC 3 using the Microsoft Web Platform Installer (WPI), they might receive a message indicating that MVC 3 and some other components have been installed successfully. However, when they open the WPI again, they are presented with the option to add those same components again. This indicates that they were not installed successfully or that an error occurred in the WPI.</p>
<p><strong>So, how can you install MVC 3 if you get error 1603, your system is unable to run the setup, or an error occurs during the installation?</strong></p>
<p>To install MVC 3, run the WPI again, select the option for MVC 3, and click the "Install" button. A new window will appear showing the executable's location on the server. You can download the setup from this location or directly from the official Microsoft website.</p>
<p>When you try to run the setup, it will likely fail. However, there is a trick to install MVC 3 indirectly.</p>
<p>When you run the setup and receive an error message stating that the setup did not succeed, open the log file in your browser. At the bottom, you will see an error code 1603 indicating an issue during the MVC 3 installation. Do not close the setup window; just ignore it.</p>
<p><em>Note:</em> If you close the setup window, all the temporary files extracted to your system for the MVC 3 installation will be deleted, so it is crucial not to close it.</p>
<p>While the setup is still open, navigate to your temporary folder (often <code>%temp%</code> or <code>C:\temp</code>) and you will find multiple executables. Run these setups individually to install them on your system. These executables include:</p>
<ul>
  <li>ASP.NET MVC 3 (Required for MVC 3 to work on your system)</li>
  <li>ASP.NET MVC 3 for Visual Studio Tools (Optional, for users with Visual Studio installed)</li>
  <li>ASP.NET MVC 3 for VWD Tools (Optional, for users with Visual Web Developer installed)</li>
  <li>ASP.NET Web Pages (Required for ASP.NET Web Pages to work on your system)</li>
  <li>ASP.NET Web Pages for Visual Studio Tools (Optional, for users with Visual Studio installed)</li>
  <li>ASP.NET Web Pages for VWD Tools (Optional, for users with Visual Web Developer installed)</li>
</ul>
<p><em>Note:</em> There is no harm in running the optional executables. If you install Visual Web Developer (VWD) in the future, you won't need to install the MVC 3 tools again.</p>
<p>During the installation, ensure that Visual Studio and VWD are closed. Running them might prevent the MVC 3 executables from installing properly. Also, avoid running any executables with "KB" in their names, as they are updates rather than the main setup files. Running them may result in the same error you received initially. Additionally, if you run the original setup executable again, it will roll back everything, so be careful.</p>
<p>After installing the extracted executables, and before closing the original setup window, open Visual Studio or VWD to verify that MVC 3 is now working. Once confirmed, you can safely close the initial setup window that showed the "setup did not succeed" message. Although the main setup failed, the manual installation of the components will allow MVC 3 to work on your system.</p>

<p>This is an alternative method to install MVC 3 when the standard installation process fails.</p>
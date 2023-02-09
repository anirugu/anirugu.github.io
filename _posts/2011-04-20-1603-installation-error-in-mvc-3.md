<p>When a user tries to install MVC 3 using the Microsoft Web Platform Installer, they receive a message that MVC 3 and some other components have been installed successfully. However, when they try to open the WPI again, they are given an option to add all those components that were installed last time, indicating that they were not installed successfully or that an error occurred in the WPI. </p>
<p><strong>So, how can I install MVC 3 when I get error 1603 or when my system is unable to run the setup or an error occurs during the setup?</strong></p>
<p>To install MVC 3, you need to run the WPI again, choose the option for MVC 3, and click on the "install" button. A new window will appear, showing the executable location on the server. You can either download the setup from this location or from the Microsoft official website. </p>
<p>When you try to run the setup, it will likely not succeed. However, there is a trick to install MVC 3 indirectly. </p>
<p>When you run the setup and receive an error message that the setup did not succeed, you can open the log file in your browser. At the bottom, you will see an error code 1603 that occurred during the MVC 3 installation. Do not close the setup, just ignore it. </p>
<p><em>Note:</em> If you close the setup, all files located in your system's temporary folder for installing MVC 3 will be deleted, so do not stop the setup. </p>
<p>If an error occurs without closing the setup, go to C:\temp and you will find multiple executables. Run these setups to install them on your system. These setups include:</p>
<ul>
  <li>ASP.NET MVC 3 (required for MVC 3 to work in your system)</li>
  <li>ASP.NET MVC 3 for Visual Studio tool (optional for those with Visual Studio in their system)</li>
  <li>ASP.NET MVC 3 for VWD tool (optional for those with Visual Web Developer in their system)</li>
  <li>ASP.NET WEB PAGE (required for ASP.NET WEB PAGE to work in your system)</li>
  <li>ASP.NET WEB PAGE for Visual Studio tool (optional for those with Visual Studio in their system)</li>
  <li>ASP.NET WEB PAGE for VWD tool (optional for those with Visual Web Developer in their system)</li>
</ul>
<p><em>Note:</em> There is no problem in running the optional executables, as in the future, when you install VWD, you may not need to install MVC 3 again. </p>
<p>During the installation, do not run Visual Studio or VWD tools, as they may not tell you to close, and you may receive a message when running the MVC 3 executable. Also, do not run any executables with "KB" in their name, as they are not the setup that you need to run. If you run them, they will not run and give you the same error you received from the executable that you ran first. If you run the setup, it will roll back everything, so be careful. </p>
<p>After that, before closing the setup that we ran first, you can open Visual Studio or VWD and find that it now works. Great, now you can close the setup which gave you the message that "setup did not succeed". It really didn't succeed, but it now works in your system.</p>

<p>Well, I have shown you a method to install MVC 3 alternatively. This works whenever there is no other option to install them.</p>
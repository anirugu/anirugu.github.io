---
title: "How To Set Exe To Run On Startup In Windows 8"
date: 2013-03-11T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - Windows
---
<p>Do you want to run an application automatically every time you start your system? Here is a simple way to do this in Windows 8.</p>

<p>Press <strong>Win + R</strong>, type <code>%appData%</code>, and press Enter.</p>

<p>This opens the Roaming folder in Windows Explorer.</p>

<p>Navigate to the following path: <code>Microsoft\Windows\Start Menu\Programs\Startup</code>.</p>

<p>Create a shortcut of the application you want to launch at startup and place it inside that Startup folder.</p>

<p>Windows will automatically launch it the next time you start your system.</p>

<p>To disable any startup entry you previously added, open <strong>Task Manager</strong>, go to the <strong>Startup</strong> tab, and disable the entry from there. See the image below for reference.</p>

<p><a href="http://gwb.blob.core.windows.net/anirugu/Windows-Live-Writer/How-to-set-exe-to-run-on-startup-in-Wind_7BAC/11_2.png"><img src="/2013_03_11_how_to_set_exe_Image1.png" alt="11" title="11" /></a></p>

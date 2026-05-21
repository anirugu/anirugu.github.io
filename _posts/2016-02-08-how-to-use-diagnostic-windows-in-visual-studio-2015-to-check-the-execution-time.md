---
title: "How to Use the Diagnostic Tools Window in Visual Studio 2015 to Measure Execution Time"
date: 2016-02-08T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - .NET
  - Windows
---
With the release of Visual Studio 2015, Microsoft introduced an extremely useful feature: the **Diagnostic Tools** debugger window.

Typically, when developers compare the performance of two different functions, they use the `Stopwatch` class or third-party profiling packages to measure execution times. Starting with Visual Studio 2015, you have a built-in option to easily inspect execution times directly inside the IDE.

[![Diagnostic Tools Execution Time Example](/2016_02_08_how_to_use_diagnostic_Image1.png "Diagnostic Tools Execution Time Example")](https://gwb.blob.core.windows.net/anirugu/Open-Live-Writer/How-to-use-Diagnostic-windows-in-Visual_12619/11_2.png)

To use it, open the **Diagnostic Tools** window, set a breakpoint at the start of your code segment, and another one at the end. When you debug and step through or run to the next breakpoint, the Diagnostic Tools window will display exactly how many milliseconds the execution took between the two breakpoints, as shown in the screenshot.

For more details, check out the official announcement by the Visual Studio team: [Diagnostic Tools debugger window in Visual Studio 2015](https://blogs.msdn.microsoft.com/visualstudioalm/2015/01/16/diagnostic-tools-debugger-window-in-visual-studio-2015/).


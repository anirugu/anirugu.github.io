---
title: "Visual Studio 2017 Version 15 4 Preview"
date: 2017-08-25T12:00:00-04:00
categories:
  - blog
tags:
  - C#
  - Mac
  - Windows
  - .NET
  - Android
  - Visual-Studio
  - Xamarin
  - HTML
  - NuGet
  - Linux
  - Azure
---
*Note: This article is copied from the official Visual Studio Blog (the original post has since been removed). I have no affiliation with Microsoft. Words like "I" and "we" refer to the original author.*

*We are looking to improve your experience on the Visual Studio Blog. It would be very helpful if you could share your feedback via this [short survey](https://www.research.net/r/M7GZL9D?title=Visual%20Studio%202017%20Version%2015.4%20Preview) that should take less than 2 minutes. Thanks!*

I’m happy to announce that the first Preview of Visual Studio 2017 version 15.4 is now available! You can either [download it from here](https://www.visualstudio.com/vs/preview/), or if you already have the Preview installed, you’ll receive a notification that the update is available. This latest Preview contains new tools and features in several key workloads such as Universal Windows Platform (UWP) development, .NET desktop development, and Mobile and Game development. It also continues our drive to improve and polish the fundamentals such as productivity and reliability and address customer-reported bugs. Read the feature highlight summary below, and check out the [Visual Studio 2017 version 15.4 Preview Release Notes](https://www.visualstudio.com/en-us/news/releasenotes/vs2017-preview-relnotes) for a detailed description of the new functionality contained in this Preview.

## Universal Windows Platform Development – Windows Fall Creators Update

First, Visual Studio 2017 version 15.4 brings first-class support for UWP developers targeting the upcoming Windows Fall Creators Update. To start building apps against this new Windows update, first make sure you are enrolled in the [Windows Insider Program](https://insider.windows.com/en-us/). Once you are enrolled, install the latest pre-release version of the [Windows Insider Preview SDK](https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewSDK).

### .NET Standard 2.0 Support

With the release of the Windows Fall Creators Update, you will be able to leverage the power of [.NET Standard 2.0](https://blogs.msdn.microsoft.com/dotnet/2017/08/14/announcing-net-standard-2-0/) when building UWP applications. .NET Standard 2.0 brings an additional 20,000+ .NET APIs to Windows 10 UWP developers – many of which will be familiar to Windows Desktop (WPF, Windows Forms, etc.) developers. .NET Standard 2.0 also allows for easier sharing of code between various .NET project types as project-to-project references, or as NuGet packages. We are starting to see a variety of NuGet packages show up on NuGet.org with support for .NET Standard 2.0, all of which will be available for consumption inside UWP projects.

To build UWP apps using the new .NET Standard 2.0 APIs, make sure you have the Windows Fall Creators Update Insider SDK Preview installed, and set the **minimum** version of your project to this version of the SDK.

### Windows Application Packaging Project

In Visual Studio 2017 version 15.4 Preview, you will get the first peek at a [new project template](https://www.visualstudio.com/en-us/news/releasenotes/vs2017-preview-relnotes) that enables Classic Windows Desktop apps created with .NET or C++ to be packaged inside an `.appx` package for easier distribution via side-loading or submission to the Windows Store. These templates work for both new Classic Windows Desktop projects, as well as for existing projects.

### XAML Edit & Continue Improvements

You can edit or remove XAML resources using XAML Edit & Continue. In addition, you can also add ControlTemplates to your XAML while using XAML Edit & Continue. To leverage these new features, make sure you are running the Windows Fall Creators Update Preview.

## Mobile and Game Development

### Unity

In Visual Studio 2017 version 15.4 Preview, we have made improvements and bugfixes in the tooling for Unity. There is better support for the latest released Unity 2017.1 runtime. This Preview also supports [user-defined managed assemblies](https://forum.unity3d.com/threads/example-project-assembly-definition-files.482313/), a feature coming in Unity 2017.2 that helps to drastically minimize script compilation times of projects. To help with debugging, you can now use "Set Instruction Pointer", which moves the execution point and sets the next statement of code to be executed.

### Xamarin

The [Xamarin Live Player](https://www.xamarin.com/live) is also included in Visual Studio 2017 version 15.4 Preview. This enables developers to develop, test, and debug mobile apps directly on their iOS and Android devices using only Visual Studio and a device. It’s meant to simplify getting started with mobile development. For instructions on how to try it out, please refer to the Preview Release Notes and, of course, please [tell us what you think](https://developercommunity.visualstudio.com/)!

[![Xamarin Live Player](/2017_08_25_visual_studio_2017_version_Image1.gif "Xamarin Live Player")](https://msdnshared.blob.core.windows.net/media/2017/08/clip_image0011.gif)

## The Fundamentals

### Installer Behavior and Acquisition Experience

Visual Studio 2017 version 15.4 Preview contains some notable install experience improvements. For example, if you encounter any installation errors, we now provide better assistance in discovering solutions. If some component fails to install and someone else had already reported a similar issue, then the installer error message will link back to the [Visual Studio Developer Community](https://developercommunity.visualstudio.com/spaces/8/index.html) and point you to info that should help you diagnose and resolve the problem.

### Productivity Improvements

There are a handful of new productivity features that will help you be more efficient and effective as you develop your code. For example, with this Preview, if you’re a C#, VB, or Python developer, you can navigate around your project faster because Ctrl+Click will now Go To Definition. We’ve continued to improve performance and memory usage as compared to earlier releases. Lastly, we’ve refined [Live Unit Testing](https://blogs.msdn.microsoft.com/visualstudio/2017/03/09/live-unit-testing-in-visual-studio-2017-enterprise/) by making it easier to initiate with a start command in the right-click context menu as well as in the Team Explorer window. Live Unit Testing is better integrated with MSTest for use in manual mode.

### C++ Development

You can now use [CMake for Linux C++ development in Visual Studio](https://aka.ms/vslinuxcmake), which allows you to use CMake-based projects that target Windows, Linux, or both. Simply open a folder with your CMake project, select Linux as your target, and upon connecting to your Linux machine your sources are synchronized for you. Once the CMake cache generation is complete, you’ll have full IntelliSense for your project and targets for building, running, and debugging within Visual Studio.

In addition to CMake support for Linux C++ development, with Visual Studio 2017 version 15.4 Preview you can now benefit from CMake version 3.9 and improved support for projects with multiple CMakeLists.

## Data Science Tooling

If you’re a Data Scientist using R, we’ve added some great new features to Visual Studio 2017 version 15.4 Preview. Now you can use the full power of Visual Studio to connect to an R session running on a remote computer that is running on Linux or Windows. We support running against on-premise and cloud (Azure) computers as well. In the IDE, we’ve added error squiggles (inline underlines) that will highlight places where you can improve your R code. Finally, we’ve added Live RMarkdown editing, which gives you a live preview of your markdown edits as you *type*.

## Try it out today!

If you’re not familiar with Visual Studio Previews, take a moment to read the [Visual Studio 2017 Release Rhythm](https://www.visualstudio.com/en-us/productinfo/vs2017-release-rhythm). Remember that Visual Studio 2017 Previews will install *side by side* with released bits, so they should not impact your machine. Previews provide an opportunity for you to receive fixes faster and try out upcoming functionality before it becomes mainstream. Similarly, the Previews enable the Visual Studio Engineering team to validate usage, incorporate suggestions, and detect flaws earlier in the development process. We are highly responsive to feedback coming in through the Previews and look forward to hearing from you.

Please [Install the Visual Studio 2017 Preview today](https://www.visualstudio.com/vs/preview/), exercise your favorite workloads, and tell us what you think. You can report issues or send feedback to us via [Report a Problem in the IDE](https://docs.microsoft.com/en-us/visualstudio/ide/how-to-report-a-problem-with-visual-studio-2017) or you can share a suggestion on [UserVoice](https://visualstudio.uservoice.com/forums/121579). You can also track your bugs, learn from others, and receive helpful information on the [developer community portal](https://developercommunity.visualstudio.com/).


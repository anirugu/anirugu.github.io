---
title: "How To Implement Net 3 5 Chart Control In Net 2 Winform App"
date: 2015-11-30T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - .NET
  - Windows
---
<p>A few months ago, I was working on a .NET project (a Windows Forms application) that I had to downgrade from .NET 4 to .NET 2.0 for specific reasons. Downgrading the project was not easy, but we ultimately succeeded.</p>

<p>For <code>System.Linq</code> support, I used LinqBridge: <a href="http://www.albahari.com/nutshell/linqbridge.aspx" title="LinqBridge">http://www.albahari.com/nutshell/linqbridge.aspx</a></p>

<p>The Chart control is not available in the Visual Studio toolbox unless your project targets .NET 3.5 or higher.</p>

<p>I researched quite a bit, and many of the workarounds I found online no longer work.</p>

<p>Here is the trick I used to get the Chart control working:</p>

<p>The chart itself runs fine in .NET 2 code — the issue was that Visual Studio refused to render it in the designer. My solution was to create a new Windows Forms project targeting .NET 3.5, add the Chart DLL reference, and drag the Chart control onto a form. That gives you all the generated designer code you need to copy over.</p>

<p>I compiled that .NET 3.5 project to confirm everything worked.</p>

<p>Then I copied the same Chart DLL into my .NET 2 project. You can reference this DLL in a .NET 2 project, and it will run on any system that has .NET 2.0 installed. Make sure to set "Copy Local" to true on the DLL reference so that the client machine does not need any additional dependencies.</p>

<p>When you open the .NET 2 form in the Visual Studio designer, the Chart control will not render — Visual Studio 2015 simply doesn't recognize it in that context. However, the application will run perfectly at runtime.</p>

<p>For debugging, you can maintain a separate .NET 3.5 copy of the project. Debug and fix issues there, then copy the corrected code back into the .NET 2 project — it will run without any problems.</p>

<p>The only limitation is that you cannot preview the Chart control in design mode within the .NET 2 project. You need to use the .NET 3.5 copy for that. Other than this constraint, the code works perfectly fine.</p>

---
title: "How To Fix Visual Studio Package Not Restore"
date: 2018-07-13T12:00:00-04:00
categories:
  - blog
tags:
  - Visual-Studio
  - C#
  - NuGet
  - Xamarin
---
<p><div>Today, I was busy working on one of the WPF apps that I have been developing over the last few days. Everything was going fine; I had even made a Release build two days ago on the 11th of July.</div><div><br />
</div><div>Suddenly, I needed to hand the project over to another developer. I deleted the package folder, handed over the code, came back, switched my build configuration to Release, and attempted to compile. Boom, the compile failed.</div><div><br />
</div><div>Suddenly, my main XAML file (specifically the Splash screen) also failed to work. This happened in the morning and could have been a disaster since I had just finished my work. I restored the package folder from the Recycle Bin, but still, nothing would compile.</div><div><br />
</div><div>At first, I went into `splash.xaml.cs` and manually imported all the required namespaces (I am not sure how they got removed just by switching to the Release configuration).</div><div><br />
</div><div>The root cause in my case was:</div><div><br />
</div><div>NuGet.org (the NuGet Gallery) did not have any information about version 1.0.3 (from 2016), causing the package restore from the NuGet site to fail. I noticed that the `.csproj` file still referenced version 1.0.3. I upgraded the package to version 1.0.8 (which is the latest version), but Visual Studio did not clean up the 1.0.3 reference from the `.csproj` file and failed to resolve it. Although my project was supposed to reference the 1.0.8 SQLite DLL, it was still pointing to version 1.0.3.</div><div><br />
</div><div>This meant:</div><div><br />
</div><div>Version 1.0.3 would not be copied to my output directory since the package folder was empty, missing, or did not contain that DLL.</div><div><br />
</div><div>Visual Studio wasn't able to resolve this automatically because the package didn't exist anymore. I'm not sure how VS handles this internally; perhaps it assumed the reference was local on my system.</div><div><br />
</div><div><strong>The Fix</strong></div><div><em>*<br />
*</em></div><div>I uninstalled version 1.0.3. Unfortunately, Visual Studio did not remove the 1.0.3 reference from the `.csproj` file (where it was actually mentioned twice). I had to open the `.csproj` file in a text editor and remove the references manually.</div><div><br />
</div><div>I then installed version 1.0.8 of SQLite in my WPF C# project, and now everything works beautifully. If you ever get stuck in a similar situation, it is always a good idea to keep a backup (or use a Git repository). Additionally, learning how `.csproj` files are structured is incredibly helpful when troubleshooting reference issues like this.</div><div><br />
</div><div>A few days ago, I was stuck on a Xamarin issue where the compiled code (XAML, C#, UWP) did not match the code I actually had. Later, I got help from Nico on Stack Overflow, and everything started running flawlessly.</div><div><br />
</div><div>Here is the reference to that helpful answer: <a href="https://stackoverflow.com/a/51166764/713789">https://stackoverflow.com/a/51166764/713789</a></div></p>

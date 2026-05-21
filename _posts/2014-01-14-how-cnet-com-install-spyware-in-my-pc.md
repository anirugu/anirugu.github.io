---
title: "How CNET Installed Spyware on My PC"
date: 2014-01-14T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - Chrome
---
CNET is one of the worst download services ever. Today, I downloaded a software installer from CNET because the tool wasn't hosted anywhere else on the internet.

When I ran the installer, it gave no indication that it would install additional software on my PC. The setup was likely designed to sneak spyware onto systems without the user's consent.

It installed two pieces of spyware. Initially, it downloaded the legitimate executable (which was expected), but even after I closed the installer window, it continued downloading the spyware in the background.

Suddenly, Google Chrome crashed. I was surprised since Chrome rarely crashes on my system, and I wasn't running any experimental flags. After restarting Chrome, I knew something was wrong. I checked my active extensions and found one that I had never installed.

Shortly after, Chrome crashed a second time. I disabled the rogue extension, only to find another unexpected extension in my browser. I definitely did not want these. After disabling both, I opened Task Manager, located the installer executable CNET used, and terminated it.

Be aware that CNET bundles bloatware and spyware with otherwise free software.

A similar issue happened with one of my SourceForge projects. A third-party website created a wrapper installer for my repository and distributed it on their site. Running that installer also attempted to install spyware.

Beware of download hubs like this. CNET and many similar wrapper installers bundle spyware to monetize their platforms.

Thanks for reading my post! <img src="/2014_01_14_how_cnet.com_install_spyware_Image1.png" alt="Smile" />

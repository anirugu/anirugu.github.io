---
title: "How To Install Multiple Version Of Firefox"
date: 2011-04-20T12:00:00-04:00
categories:
  - blog
tags:
  - Firefox
  - Windows
---
In this post, I will show you how to install and run multiple versions of Firefox simultaneously on the same system without encountering profile conflicts or plug-in incompatibilities.

The first thing to understand is that the standard Firefox installer will overwrite any existing Firefox installation on your machine. To prevent this, you must choose **Custom Installation** during the setup process and install the new version into a completely different directory.

However, just separating the installation directories isn't enough. When you run a different version of Firefox, it will attempt to use your default user profile. This leads to two major problems: plug-in incompatibility errors, and constant compatibility checks triggered whenever the browser detects a version mismatch from your last session. 

To solve these issues, you need to set up a dedicated profile for each version of Firefox.

### How to Create a Dedicated Firefox Profile

1. Close all active instances of Firefox.
2. Open the Windows Run dialog (`Win + R`) and run the command: `firefox.exe -P`
3. This opens the Firefox Profile Manager. Here, you will see your existing `default` profile. Click **Create Profile** to make a new one (for example, name it "Firefox 4").

### How to Link a Profile to a Specific Firefox Version

Once you have created the new profile, you need to instruct the specific version of Firefox to always launch using that profile.

1. Locate the desktop shortcut for your newly installed version of Firefox.
2. Right-click the shortcut and select **Properties**.
3. In the **Target** field, append `-P "YourProfileName"` to the end of the executable path.

It should look something like this:
`"C:\Program Files (x86)\Mozilla Firefox\firefox.exe" -P "Firefox 4"`

In this example, `"C:\Program Files (x86)\Mozilla Firefox\firefox.exe"` is the path to the executable, and `-P "Firefox 4"` is the command-line argument that forces Firefox to launch using the "Firefox 4" profile we just created.

By using this trick, you can safely run multiple versions of Firefox side-by-side with absolutely no plug-in incompatibility issues!

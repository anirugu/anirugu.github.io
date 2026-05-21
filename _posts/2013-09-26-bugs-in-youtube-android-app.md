---
title: "Bugs in the YouTube Android App"
date: 2013-09-26T12:00:00-04:00
categories:
  - blog
tags:
  - Android
---
<p>Recently, YouTube updated its Android app. In this post, I will demonstrate a few features that do not work correctly.</p>

<p>When a user wants to unsubscribe from a channel and taps the "Subscribed" button, it appears as though they have successfully unsubscribed, but they actually haven't. I tried this with several channels, and none of them were actually unsubscribed.</p>

<p>When I tap "Subscribed" for a channel I'm already subscribed to, it is removed from the left-side "What to Watch" panel, implying a successful unsubscription. However, it isn't actually removed. Sometimes, if you tap too quickly, the channel isn't even removed from the left panel.</p>

<p>When checking my subscriptions list on the YouTube website later, I noticed that none of the channels were removed. I ended up having to unsubscribe from them one by one directly on the website.</p>

<p>On my Android device, I navigated to <strong>Settings > Preloading</strong> and checked both options:</p>

<ul>
  <li>Preload subscriptions</li>
  <li>Preload Watch Later</li>
</ul>

<p>Enabling both of these options seems to introduce another bug. The app continues to show channels in the preloaded list that I had previously removed directly on the YouTube website. The list doesn't sync or update frequently, causing a lot of confusion.</p>

<p>To summarize, there are two primary issues in the YouTube Android app:</p>

<ol>
  <li>Removing a channel from your subscriptions inside the app does not actually unsubscribe you.</li>
  <li>The subscriptions list does not update frequently, and removing a channel sometimes fails to update the left-side navigation panel.</li>
</ol>

<p>Hopefully, YouTube will address these sync issues in the next update! <img src="/2013_09_26_bugs_in_youtube_android_Image1.png" alt="Smile" /> <img src="/2013_09_26_bugs_in_youtube_android_Image2.png" alt="Sad smile" /> <img src="/2013_09_26_bugs_in_youtube_android_Image3.png" alt="Smile with tongue out" /></p>


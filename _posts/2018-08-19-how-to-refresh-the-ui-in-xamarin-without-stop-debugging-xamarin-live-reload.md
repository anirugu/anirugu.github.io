---
title: "How to Refresh the UI in Xamarin Without Stopping Debugging: Xamarin Live Reload"
date: 2018-08-19T12:00:00-04:00
categories:
  - blog
---\n
Are you working on a Xamarin project and looking for Hot Reload? Check out Xamarin Live Reload!

To use Xamarin Live Reload, simply open the Extension Manager in Visual Studio, search for "live reload", and install the [Xamarin Live Reload](https://marketplace.visualstudio.com/items?itemName=Xamarin.XamarinLiveReload) extension. Once installed, open your Xamarin.Forms project and switch to a UI file—you should see a yellow bar with a **Connect** option. If this bar does not appear, go to **Tools > Options > Live Reload** and click **OK** to make it appear.

After clicking **Connect**, grant the necessary permissions. If you are working on an Android project and have already deployed the app, you will need to uninstall it from your device or emulator first.

Next, add these three lines of code in your Xamarin `App.xaml.cs` file:

```csharp
// Initialize Live Reload.
#if DEBUG
LiveReload.Init();
#endif
```

Now run the project and make changes to your UI—you will see the user interface update instantly on your Android device. Note that, as per the documentation, you will still need to stop debugging to modify C# code. For more details, check out this page:

[Xamarin Live Reload Documentation](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/live-reload)

Thanks for reading! Happy coding! :)


<p>Few months ago I work on a .net project (windows form actually) which I downgrade to .net 2.0 for some reason ( it was.net 4). Downgrade the project is not done easily but at the end we win the War. We finally downgrade the project to .net 2.</p>

<p>For System.Linq I use LinqBridge <a href="http://www.albahari.com/nutshell/linqbridge.aspx" title="http://www.albahari.com/nutshell/linqbridge.aspx">http://www.albahari.com/nutshell/linqbridge.aspx</a> </p>

<p>So Chart control will not show to you unless you have a project made in .net 3.5+</p>

<p>I research a lot and many trick is no longer works.</p>

<p>Here is the trick to implement the Chart control.</p>

<p>Actually my chart in winform is working (in .net 2 code is ready but only visual studio refuse to run it) so I make a new Winform project in .net 3.5 add the dll reference and add the chart to form. This is all I need to use it in my project.</p>

<p>When I compile it’s done (.net 3.5)</p>

<p>Now I copied the same dll to .net 2 project. You can add this dll in .net 2 and it will run on system those contain .net 2 framework. You need to copy local the chart dll (so it will not require anything on client pc).</p>

<p>Now When you open the form it will not show anything but it will run perfectly. My Visual studio 2015 simply refuse it because it’s doesn’t get it. But it will run perfectly. </p>

<p>For any debug issue you can simply make a copy and change it to .net 3.5 and debug it for fix. Copy the same code back in .net 2 and it will run. </p>

<p>The only thing that you will miss is you can’t see when you open the form in design mode. You need to use another copy in .net 3.5 to debug it. Except this, this code will work fine.</p>

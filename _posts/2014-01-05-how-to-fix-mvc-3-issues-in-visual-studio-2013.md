<p>In Initial release of Visual studio 2013 has been dropped. If your VS doesn’t take your MVC3 application and show you the error something like “Project not supported.” then this post will help you.</p>

<p>Create a new project with same namespace and copy the .sln and .csproj file into your project (that we discussed earlier).</p>

<p>Now Exclude all file and include all file once again. This will make entry for every file in .csproj or sln file (Visual studio remember every include file through these files). </p>

<p>When I able to run my project I got a new kind of error that Invalid term ‘:’. I correctly check the code and it doesn’t show me anything. After a lot of check I finally migrate it to MVC 4. After doing up-gradation to MVC 4 my code working fine. If you have problem with your Razor code then upgrade your project to MVC 4 and it will work fine for you <img src="/2014_01_05_how_to_fix_mvc_Image1.png" alt="Smile" /></p>

<p>If you have links for any Blog post or article that helpful for MVC 3 problem fix you can comment it here.</p>

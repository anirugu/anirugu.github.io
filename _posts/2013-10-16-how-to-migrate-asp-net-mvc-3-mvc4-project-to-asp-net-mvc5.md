<p>Soon you will see a new version of MVC5 in VS2013. MVC5 will be incorporated in VS2013. MVC3 will not be supported in VS2013 (<a href="http://geekswithblogs.net/anirugu/archive/2014/01/05/how-to-fix-mvc-3-issues-in-visual-studio-2013.aspx">but I found Any kind of MVC version can be used in MV by my tricks</a>). I confirmed it on channel9 last time. So People who have installed only VS2013 or doesn’t have old version will be got trouble with the project that is still in MVC3. This error happen because MVC4 and 5 installation doesn’t contain the DLL that is used in Version 3 of ASP.NET MVC.</p>

<p>Don’t be panic. You guys want to upgrade your project. Here is a trick to solve the issue.</p>

<p>When you open the project you have seen that in Reference there is some dll that have yellow icon. This means that dll are missing or not found in your configuration or system.</p>

<p>Now remember that dll name. Remove them from reference and add them from adding reference. I telling you to remove so VS will not prevent you to add new version of same assembly. Add all those assembly.</p>

<p>Those dll will be following :</p>

<p>System.Web.Mvc</p>

<p>Razor and Webpages Dll.</p>

<p>Remember that in MVC3 we use old version of these assembly. Now When you done by adding all assembly then now open web.config.</p>

<p>There is 2 web.config file in our mvc project. One is in root folder and second in Views folder. You need to update all those version no. This is not a big deal if you know the name of assembly. Now if you web.config show you assembly version as 3.000.00 then 3 would be replaced with 4 or 5 according to version no. Same thing need to applied all dll for both web.config.</p>

<p><font color="#ff0000">Note :- In VS Template Views goes in ~/Views folder but if someone use any other folder then Views for views and those folder have also web.config then remember to update them also. Your project will be compile and make no warning and error but that certainly not work. for examples areas/views and themes/views that contain web.config also need to be updated with newer assembly version no.</font></p>

<p>After done these thing you can compile your project and it will be work as it should be <img src="/2013_10_16_how_to_migrate_asp.net_Image1.png" alt="Smile" /></p>

<p>Thanks for read my post. Follow me on FB and Twitter to stay updated <img src="/2013_10_16_how_to_migrate_asp.net_Image2.png" alt="Smile" /></p>

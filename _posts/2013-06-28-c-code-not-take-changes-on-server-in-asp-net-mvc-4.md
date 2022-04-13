<p>Today I got a problem that When I make changes to My c# code and put them on FTP. The site still don’t take changes. I check the filesize of compile dll of my project in bin. Yes, File is uploaded but it’s not what my new code do.</p>

<p>If you ran into this problem Then I suggest you to delete old .pdb and .dll file of your project. for example your project namespace is xyz. delete the xyz.pdb and xyz.dll now upload your dll from bin to project bin on server.</p>

<p>it will work <img src="/2013_06_28_c#_code_not_take_Image1.png" alt="Smile" /></p>

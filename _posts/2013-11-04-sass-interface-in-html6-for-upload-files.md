<p>[This post is about experiment &amp; imagination]</p>

<p>From Windows XP (ever last OS I tried) I have seen a feature that is about send file to pen drive and make shortcut on Desktop. In XP, Win7 (Win8 have this too, not removed) just select the file right click > send to and you can send this file to many places. In my menu it’s show me Skype because I have installed it. this skype confirm that we can add our own app here to make it more easy for user to send file in our app.</p>

<p><a href="https://gwb.blob.core.windows.net/anirugu/Windows-Live-Writer/Sass-interface-in-html6_7255/Untitled1_2.png"><img src="/2013_11_04_sass_interface_in_html6_Image1.png" alt="Untitled1" title="Untitled1" /></a></p>

<p>Nowadays Many people use Cloud or online site to store the file. In case of html5 drag and drop you need to have site opened and have opened that page which is about file upload. You need to select all and drag and drop.</p>

<p>after drag and drop file is simply uploaded to server and site show you on list (if no error happen). but this file upload is seriously not worthy since I have to open the site when I do this operation.</p>

<p>Through this post I want to describe a feature that can make this thing better. This API is simply called <font color="#ff0000">SASS FILE UPLOAD API</font> Through This API when you surf the site and come into file upload page then the page will tell you that we also have SASS FILE API support. Enable it for better result.</p>

<p>How this work <img src="/2013_11_04_sass_interface_in_html6_Image2.png" alt="Smile" /></p>

<p>This API feature are activated on 2 basis. </p>

<ol>
<li><p>Feature are disabled by default on site (or you can change it if it’s not)</p></li>
<li><p>This API allow specific site to upload the files. Files upload may have some rule. For example (minimum or maximum size of file to uploaded, which format the site allowed you to upload). In case of resume site you will be allowed to use .doc (according to code of site)</p></li>
</ol>

<p>How browser recognize that Site have SASS service.</p>

<p>In HTML source of the site, the code have a meta tag similar to this</p>

<p><meta name=”sass-upload-api” path=”/upload.json”/></p>

<p>Remember that upload.json is one file that has define the value of many settings</p>

<p>{<br />
 "cookie<em>name": "ck</em>file",<br />
 "maximum<em>allowed</em>perday": 24,<br />
 "allowed<em>file</em>extensions","<em>.png,</em>.jpg,<em>.jpeg,</em>.gif",<br />
 "method": [<br />
 {<br />
 "get": "file/get",<br />
 "routing":"/file/get/{fileName}"<br />
 },<br />
 {<br />
 "post": "file/post",<br />
 "routing":"/file/post/{fileName}"<br />
 },<br />
 {<br />
 "delete": "file/delete",<br />
 "routing":"/file/delete/{fileName}"<br />
 },<br />
 {<br />
 "put": "file/put",<br />
 "routing":"/file/put/{fileName}"<br />
 },<br />
 {<br />
 "all": "file/all",<br />
 "routing":"/file/all/{fileName}"<br />
 }<br />
 ]<br />
}</p>

<p>cookie name is simply a cookie which should be stored in browser and define in json. we define the cookie_name so we can easily share then with service in Windows system. This cookie will be accessible with the service so it’s security based safe. other cookie will not be shared.</p>

<p>The cookie will be post,put, get from this location. The all location will be simply about showing a whole list of file. This will gave a treeview kind of json to show the directories on sever.</p>

<p>for example <strong>example.com</strong> if you have activated the API with this site then you will seen a send to option in your explorer.exe when you send you will got a windows open which folder you want to use to send the file.</p>

<p>The windows will also describe the limit and how much you can upload. This thing never required site to opened. </p>

<p>When you upload the file this will be uploaded through FTP protocol. FTP protocol are better for performance.</p>

<p>How this API make thing faster.</p>

<p>Suppose you want to ask a question and want to post image. you just do it and get it ready when you open stackoverflow.com now stackoverflow will only tell you which file you want to put on your current question that you asking for.</p>

<p>second use is about people use cloud app.</p>

<p>There is no need of drag and drop anymore. we just need to do it without drag and drop it. we doesn’t need to open the site either.</p>

<p><img src="/2013_11_04_sass_interface_in_html6_Image3.png" alt="Smile" /> This thing is still in experiment level. I will update this post when I got some progress on this API.</p>

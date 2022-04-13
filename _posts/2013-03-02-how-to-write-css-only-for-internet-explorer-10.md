<p>Recently I hear about IE 10 launch for windows 7. It’s sound pretty good to me. I have check if this have something good for me as a designer’s prospective. I start checking the code that is break in Ie9 or old browser. I found this code still not work in IE10 for me . Same way code work without any issue in Firefox and Chrome perfectly.</p>

<p>So all I want is writing Custom CSS for IE browser. Unfortunately it will not work In IE10. Microsoft have removed this feature in Ie10 see <a href="http://blogs.msdn.com/b/ie/archive/2011/07/06/html5-parsing-in-ie10.aspx">link1</a> <a href="http://msdn.microsoft.com/en-us/library/ms537512(v=VS.85).aspx">link2</a> This means the code I have written for legacy support doesn’t work in Ie10.</p>

<p>This means this code will no longer work in IE10</p>

<p><!–[if IE]><br />
 <link rel=”stylesheet” href=”assets/ie.css”><br />
 <![endif]—></p>

<p>if you tried to use trick like jQuery.browser() then after jQuery 1.9 it’s no longer work too. see jQuery <a href="http://jquery.com/upgrade-guide/1.9/#jquery-browser-removed">upgrade guide</a></p>

<p>script from <a href="http://www.impressivewebs.com/ie10-css-hacks/" title="http://www.impressivewebs.com/ie10-css-hacks/">http://www.impressivewebs.com/ie10-css-hacks/</a></p>

<p><!–[if !IE]><!–<script><br />
if (/<em>@cc_on!@</em>/false) {<br />
 document.documentElement.className+=’ ie10′;<br />
}<br />
</script><!–<![endif]—></p>

<p>Will not work. But you can use this code by remove comments and direct run the code without comments. Write above code this way.</p>

<script>   
if (/*@cc_on!@*/false) {   
 document.documentElement.className+=’ ie10′;   
}   
</script>

<p>Now you have class ie10 on your web-pages’s html tag. Now when you write Css you can write custom css for Ie10 this way. This will only work in Ie10</p>

<p><strong>UPDATE 17 MARCH</strong></p>

<p>There is no need to add extra class .ie10 for Ie10. Because we need to run the ie.css in IE10 as what we do for earlier version. adding Ie.css dynamically is enough to solve this issue.</p>

<p><script><br />
if (/<em>@cc_on!@</em>/false) {<br />
 var headHTML = document.getElementsByTagName(‘head’)[0].innerHTML;<br />
headHTML += ‘<link type=”text/css” rel=”stylesheet” href=”assets/ie.css”>’;<br />
document.getElementsByTagName(‘head’)[0].innerHTML = headHTML;<br />
}<br />
</script></p>

<p>This code will add ie.css in Ie10. Cheers</p>

---
title: "Running Isnanundefined Come True In Javascript"
date: 2013-01-17T12:00:00-04:00
categories:
  - blog
tags:
  - JavaScript
---
<p>In Javascript if you try to run this code then only #4 statement will print the value.</p>

<script type="text/javascript">   
function print(obj){   
 console.log(obj);   
}   
if(undefined){   
 print ("undefined");   
}   
if(null){   
 print('null');   
}   
if(isNaN(null)){   
 print('isNaN(null)');   
}   
if(isNaN(undefined)){ // only this statement will come true   
 print('isNaN(undefined)');   
}   
</script> 

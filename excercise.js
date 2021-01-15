'use strict'
<link rel="stylesheet" href="descarga.png">

<div class="icon-bar">
  <a class="active" href="#"><i class="fa fa-home"></i></a>
  <a href="#"><i class="fa fa-search"></i></a>
  <a href="#"><i class="fa fa-envelope"></i></a>
  <a href="#"><i class="fa fa-globe"></i></a>
  <a href="#"><i class="fa fa-trash"></i></a>
</div>
document.write("<h3> Lenguajes de programacion </h3>");

function verticalFullName()
	{
		var fullname= document.getElementById("fullname").value;
		if (fullname=="") {
			document.getElementById("output").innerHtml= "Please input name.";
	}

	else {

		var i=0;
		while (i< fullname.length)	{
			document.getElementById("output").innerHtml +=fullname [i] + "<br>";
			i++
		}

		}
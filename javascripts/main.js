console.log('Welcome, fork me :)');
var now = 0;

changeFont = function(){
	var fonts = ["Helvetica Neue, Helvetica, serif","Architects Daughter","Helvetica Neue, Helvetica, serif"]
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "header { font-family: " + fonts[(now)++] + " }";
	css.innerHTML += "body { font-family: " + fonts[(now)] + " }";
	now = now % 2;
	document.body.appendChild(css);
}

document.addEventListener("DOMContentLoaded", function(event) { 
	myToast = new Toast();
	myToast.stayOnFor(2100);
	myToast.start("BROWSE NOW", "Hi, page has just loaded");
});

window.addEventListener("keydown", function(k) {
	"use strict";
	switch(k.keyCode) {
		case 78:
			myToast.start("WELL DONE", "So, you have pressed key 'N'...", "images/awesome.png"); //timer, msg
		break;
		case 48:
			myToast.start("HI!", "Connected!"); //timer, msg
		break;
	}
});

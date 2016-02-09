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
	console.log('%cFork Me', 'font-size:100px;color:#fff;text-shadow:0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');﻿
	myToast = new Toast();
	myToast.stayOnFor(2100);
	myToast.start("Hi, page loaded", "BROWSE NOW");
});

window.addEventListener("keydown", function(k) {
	"use strict";
	switch(k.keyCode) {
		case 78:
			myToast.start("So, you have pressed key <kbd>n</kbd>...", "WELL DONE", "images/awesome.png"); //timer, msg
		break;
		case 84:
			myToast.start("Connected!", "HI!"); //timer, msg
		break;
	}
});

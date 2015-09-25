var toastHeight = 2.25 + "em";
var toastHeightMedia = 4.25 + "em";
var bgColor = "50, 50, 50";
/*jshint multistr: true */
/*eslint no-multi-str: 2*/
var cssToast = 	"body { \
						margin: 0 0 0 0; \
					} \
					.NotifyToast { \
						width: 100%; \
						height: " + toastHeight + "; \
						background-color: rgb(" + bgColor + "); \
						position: fixed; \
						bottom: -" + toastHeight + "; \
						-webkit-transition :0.3s ease-in-out; \
						-moz-transition: 0.3s ease-in-out; \
						-o-transition: 0.3s ease-in-out; \
						transition: 0.3s ease-in-out; \
					} \
					.NotifyHide { \
						bottom: -" + toastHeight + "; \
					} \
					.NotifyShow { \
						bottom: 0px; \
					} \
					.NotifyToastContainer { \
						position:relative; height:inherit; \
					} \
					.NotifyImg { \
						position: absolute;top: 0;  bottom: 0;  margin: auto; left: 4.25em; height: 32px; \
					} \
					.NotifyToastHint { \
						color: rgb(49, 192, 243); cursor: pointer; \
						transform: translateX(-50%) translateY(-50%);top: 50%;right: 4.25em;position: absolute; \
					} \
					.NotifyToastDesc { \
						position: absolute; width: 100%; text-align: center; \
						transform: translateY(-50%); top: 50%; color: rgb(244, 244, 244); \
					} \
					@media screen and (max-width:960px) {  \
						.NotifyToast { \
							height: " + toastHeightMedia + " \
						} \
					} \
					@media screen and (max-width:630px) {  \
						.NotifyImg { \
							left: 1.25em; \
						} \
					@media only screen and (-webkit-min-device-pixel-ratio: 1.3), \
							only screen and (-o-min-device-pixel-ratio: 13/10), \
							only screen and (min-resolution: 120dpi){ \
								.NotifyToast{ \
									//height: " + toastHeightMedia + " \
								} \
							} \
					}";


function Toast (hint, desc, img) {
	"use strict";

	this.hint = hint;
	this.desc = desc;
	this.img = img;

	var innerToast = 	"<div class='NotifyToastContainer'>";
	if (img.length > 0){
		innerToast += "<img class='NotifyImg' src='" + img + "'>";
	}		
	innerToast += "	<div class='NotifyToastDesc'>" + desc + "</div> \
					<div class='NotifyToastHint'>" + hint + "</div> \
					</div>";

	function createToast() { //Private
		var toastElement = document.createElement("div");
		//toastElement.innerHTML = innerToast
		return toastElement;
	}
	var toast = createToast();
	
	function styleToast() { //Private
		setTimeout(function() { toast.classList.add("NotifyToast");
								toast.innerHTML = innerToast; }, 0);
	}
	function appendToastToBody() { //Private
		document.body.appendChild(toast);
	}
	this.showToast = function() { //Public 
		setTimeout(function() { toast.classList.add("NotifyShow"); }, 90);
		toast.style.visibility = "visible";
	};
	this.hideToast = function() { //Public 
		toast.classList.remove("NotifyShow");
		toast.classList.add("NotifyHide");
		toast.style.visibility = "hidden";
		setTimeout(function() { document.body.removeChild(toast); }, 500);
	};

	styleToast();
	appendToastToBody();

	this.getToast = function() { // Public Getter
		return toast;
	};
}

function startToast(timer, hint, description, img) { //start all the process that show, wait and hide a toast
	"use strict";
	currentToast = new Toast(hint, description, img);
	currentToast.showToast();
	//setTimeout(currentToast.hideToast, timer)
}

document.addEventListener("DOMContentLoaded", function(){
	"use strict";
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = cssToast;
	document.body.appendChild(css);
});

window.addEventListener("keydown", function(k) {
	"use strict";
	switch(k.keyCode) {
		case 32: //up
			startToast(2000, "WATH NOW!", "Sei conesso!", "https://lh5.googleusercontent.com/-zpbBgPjMIbs/AAAAAAAAAAI/AAAAAAAAAAA/hwgFO6TObQE/s32-c/photo.jpg" ); //timer, msg
		break;
	}
});

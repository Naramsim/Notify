/*jshint multistr: true */
/*eslint no-multi-str: 0*/



function Toast () {
	"use strict";

	/* when a new toast is created, a new div is created*/
	function createToast() { //Private
		var toastElement = document.createElement("div");
		return toastElement;
	}
	var toast = createToast();
	var timer = 2000;
	appendToastToBody();
	
	function styleToast(inside) { //Private
		setTimeout(function() { toast.classList.add("NotifyToast");
								toast.innerHTML = inside; }, 0);
	}
	function appendToastToBody() { //Private
		document.body.appendChild(toast);
	}
	function showToast() { //Public 
		setTimeout(function() { toast.classList.add("NotifyShow"); }, 90);
		toast.style.visibility = "visible";
	}
	function hideToast(parameters, callback) { //Public 
		toast.classList.remove("NotifyShow");
		toast.classList.add("NotifyHide");
		toast.style.visibility = "hidden";
		callback.apply(this, parameters); //call the callback with all parameters inline
		setTimeout(function() { document.body.removeChild(toast); }, 500);
	}
	function prepareToast (hint, description, img) {
		var DomElement = 	"<div class='NotifyToastContainer'>";
		if (img != undefined){
			DomElement += "<img class='NotifyImg' src='" + img + "'>";
		}		
		DomElement += "	<div class='NotifyToastDesc'>" + description + "</div> \
						<div class='NotifyToastHint'>" + hint + "</div> \
						</div>";
		styleToast(DomElement);
	}

	this.start = function ( hint, description, img, callback, callbackParameters ) {
		prepareToast(hint, description, img);
		showToast();
		setTimeout( function(){
			hideToast(callbackParameters, callback);
		} , timer);
	};

	this.stayOnFor = function (milliseconds) {
		timer = milliseconds;
	}

	this.getToast = function() { // Public Getter
		return toast;
	};
}

function startToast(timer, hint, description, img, callback, callbackParameters) { //not setup required for this call
	"use strict";
	var currentToast = new Toast();
	console.log(timer)
	currentToast.stayOnFor(timer);
	currentToast.start(hint, description, img, callback, callbackParameters);
}






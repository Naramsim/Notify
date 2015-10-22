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
	var isOn = false;
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
		isOn = true;
	}
	function applyUserCallback(callback, parameters) { //Public 
		if(parameters !== undefined) {
			callback.apply(this, parameters); //call the callback with all parameters inline
		}else {
			callback.apply();
		}
	}
	function hideToast() {
		toast.classList.remove("NotifyShow");
		toast.classList.add("NotifyHide");
		toast.style.visibility = "hidden";
		isOn = false;
	}
	function prepareToast (hint, description, img) {
		console.log(img)
		var DomElement = 	"<div class='NotifyToastContainer'>";
		if (img !== undefined){
			if (img.indexOf("fa") > -1) { // FontAwesome
				DomElement += "<i class='NotifyImg AwesomeImg " + img + "'></i>"
			} else { // normal image link
				DomElement += "<img class='NotifyImg' src='" + img + "'>";
			}
			
		}		
		DomElement += "	<div class='NotifyToastDesc'>" + description + "</div> \
						<div class='NotifyToastHint'>" + hint + "</div> \
						</div>";
		styleToast(DomElement);
	}

	this.start = function ( hint, description, img, callback, callbackParameters ) {
		if(isOn === false) {
			prepareToast(hint, description, img);
			showToast();
			setTimeout( function(){
				if(callbackParameters !== undefined) {
					applyUserCallback(callback, callbackParameters);
				}else if(callbackParameters === undefined) {
					if(callback !== undefined){
						applyUserCallback(callback);
					}
				}
				hideToast();
			}, timer);
		}
	};

	this.stayOnFor = function (milliseconds) {
		timer = milliseconds;
	};

	this.getToast = function() { // Public Getter
		return toast;
	};
}

function startToast(timer, hint, description, img, callback, callbackParameters) { //not setup required for this call
	"use strict";
	var currentToast = new Toast();
	currentToast.stayOnFor(timer);
	currentToast.start(hint, description, img, callback, callbackParameters);
}






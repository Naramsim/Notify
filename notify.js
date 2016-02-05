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
	var queue = [];
	var comingFromQueue = false;
	var xDown = null;                                                        
	var yDown = null;                                                        

	appendToastToBody();
	
	function createDomElem(inside) { //Private
		toast.classList.remove("NotifyHide");
		setTimeout(function() { toast.classList.add("NotifyToast");
								toast.innerHTML = inside; }, 0);
	}
	function createDomElemContainer (inside) {
		setTimeout(function() { toast.innerHTML = inside; }, 0);
	}
	function appendToastToBody() {
		document.body.appendChild(toast);
	}
	function showToast(container) {
		if(container === true) {
			setTimeout(function() { 
			toast.children[0].classList.remove("NotifyHide");
			toast.children[0].classList.add("NotifyShow"); }, 90); //hide container
		}else {
			setTimeout(function() { toast.classList.add("NotifyShow"); }, 90); //hide toast
			toast.style.visibility = "visible";
		}
		isOn = true;
	}
	function applyUserCallback(callback, parameters) {
		if(parameters !== undefined) {
			callback.apply(this, parameters); //call the callback with all parameters inline
		}else {
			callback.apply();
		}
	}
	this.hideToast = function() {
		toast.classList.remove("NotifyShow");
		toast.classList.add("NotifyHide");
		toast.style.visibility = "hidden";
		isOn = false;
	}
	function hideContainer() {
		toast.children[0].classList.remove("NotifyShow");
		toast.children[0].classList.add("NotifyHide");
		isOn = false;
	}
	function addCloseEvent(tthis) {
		setTimeout(function(){
			toast.getElementsByClassName("close")[0].addEventListener('click', function() {
				tthis.hideToast();
			}, false);
			toast.addEventListener('touchstart', handleTouchStart, false);        
			toast.addEventListener('touchmove', function(e){handleTouchMove(e, tthis)}, false);
		}, 50);
	}
	function prepareToast (description, hint, img, container) {
		var DomElement = "";
		if(container){
			DomElement = 	"<div class='NotifyToastContainer NotifyHide'>";
		}else {
			DomElement = 	"<div class='NotifyToastContainer'>";
		}
		if(img !== undefined) {
			if (img.indexOf("fa") > -1) { // FontAwesome
				DomElement += "<i class='NotifyImg AwesomeImg " + img + "'></i>";
			} else { // normal image link
				DomElement += "<img class='NotifyImg' src='" + img + "'>";
			}
		}		
		DomElement += "	<div class='NotifyToastDesc'>" + description + "</div>";
		if(hint !== undefined ) {
			DomElement += " <div class='NotifyToastHint'>" + hint + "</div>";
		}
		DomElement +="<img class='close' src='http://i.imgur.com/TnQ4GIP.png'>"
		DomElement += "	</div>";
		if(container){
			createDomElemContainer(DomElement);
		}else {
			createDomElem(DomElement);
		}
	}


	function handleTouchStart(evt) {                                         
	    xDown = evt.touches[0].clientX;                                      
	    yDown = evt.touches[0].clientY;                                      
	};                                                

	function handleTouchMove(evt, toast) {
	    if ( ! xDown || ! yDown ) {
	        return;
	    }

	    var xUp = evt.touches[0].clientX;                                    
	    var yUp = evt.touches[0].clientY;

	    var xDiff = xDown - xUp;
	    var yDiff = yDown - yUp;

	    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
	        if ( xDiff > 0 ) {
	            /* left */
	        } else {
	            /* right */
	        }                       
	    } else {
	        if ( yDiff > 0 ) {
	            /* up swipe */ 
	        } else { 
	            toast.hideToast();
	        }                                                                 
	    }
	    /* reset values */
	    xDown = null;
	    yDown = null;                                             
	};

	this.start = function (description, hint, img, callback, callbackParameters) {
		if(isOn === false) { //show the notification
			prepareToast(description, hint, img, comingFromQueue);
			showToast(comingFromQueue);
			var tthis = this;
			if(timer !== "persistent"){
				toast.classList.remove("persistent");
				setTimeout( function(){
					if(callbackParameters !== undefined) {
						applyUserCallback(callback, callbackParameters);
					}else if(callbackParameters === undefined) {
						if(callback !== undefined){
							applyUserCallback(callback);
						}
					}
					if(queue.length > 0) {
						hideContainer();
						var nxt = queue[0];
						queue.splice(0,1);
						comingFromQueue = true;
						setTimeout(function(){tthis.start(nxt[0],nxt[1],nxt[2],nxt[3],nxt[4]);},500);
					}else {
						comingFromQueue = false;
						tthis.hideToast();
					}
				}, timer);
			}else if(timer === "persistent") {
				toast.classList.add("persistent");
				addCloseEvent(this);
			}
		}else { //queue the notification
			queue.push([description, hint, img, callback, callbackParameters]);
		}
	};

	this.stayOnFor = function (milliseconds) {
		timer = milliseconds;
	};

	this.getToast = function() {
		return toast;
	};
}

function startToast(timer, description, hint, img, callback, callbackParameters) { //not setup required for this call
	"use strict";
	var currentToast = new Toast();
	currentToast.stayOnFor(timer);
	currentToast.start(description, hint, img, callback, callbackParameters);
}






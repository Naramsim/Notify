var toast_height = 2.25 + "em"
var toast_height_media = 4.25 + "em"
var bg_color = "50, 50, 50"
var css_toast = 	"body { \
						margin: 0 0 0 0; \
					} \
					.NotifyToast { \
						width: 100%; \
						height: " + toast_height + "; \
						background-color: rgb(" + bg_color + "); \
						position: fixed; \
						bottom: -" + toast_height + "; \
						-webkit-transition :0.3s ease-in-out; \
						-moz-transition: 0.3s ease-in-out; \
						-o-transition: 0.3s ease-in-out; \
						transition: 0.3s ease-in-out; \
					} \
					.NotifyHide { \
						bottom: -" + toast_height + "; \
					} \
					.NotifyShow { \
						bottom: 0px; \
					} \
					.NotifyToastContainer { \
						position:relative; height:inherit; \
					} \
					.NotifyImg { \
						position: absolute;top: 0;  bottom: 0;  margin: auto; left: 4.25em; \
					} \
					.NotifyToastHint { \
						color: rgb(49, 192, 243); cursor: pointer; \
						transform: translateX(-50%) translateY(-50%);top: 50%;right: 4.25em;position: absolute; \
					} \
					@media screen and (max-width:960px) {  \
						.NotifyToast { \
							height: " + toast_height_media + " \
						} \
					} \
					@media screen and (max-width:630px) {  \
						.NotifyImg { \
							left: 1.25em; \
						} \
					}"


function Toast (hint, img) {
	this.hint = hint;
	this.img = img;

	var inner_toast = 	'<div class="NotifyToastContainer">'
	if (img.length > 0){
		inner_toast += '<img class="NotifyImg" src="' + img + '">'
	}		
	inner_toast +=	'<div class="NotifyToastHint">' + hint + '</div> \
					 </div>'
	
	function createToast() { //Private
		var toastElement = document.createElement('div')
		toastElement.innerHTML = inner_toast
		return toastElement
	}
	function styleToast() { //Private
		setTimeout(function() { toast.classList.add('NotifyToast'); }, 0);
	}
	function appendToastToBody() { //Private
		document.body.appendChild(toast)
	}
	this.showToast = function() { //Public 
		setTimeout(function() { toast.classList.add('NotifyShow'); }, 90);
		toast.style.visibility = 'visible'
	}
	this.hideToast = function() { //Public 
		toast.classList.remove('NotifyShow')
		toast.classList.add('NotifyHide')
		toast.style.visibility = 'hidden'
		setTimeout(function() { document.body.removeChild(toast) }, 500);
	}
    
	var toast = createToast()
	styleToast()
	appendToastToBody()

	this.getToast = function() { // Public Getter
        return toast;
    }
}

function startToast(timer, hint, img) { //start all the process that show, wait and hide a toast
	currentToast = new Toast(hint, img)
	currentToast.showToast()
	setTimeout(currentToast.hideToast, timer)
}

document.addEventListener('DOMContentLoaded', function(){
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = css_toast;
	document.body.appendChild(css);
});

window.addEventListener('keydown', function(k) {
    switch(k.keyCode) {
        case 32: //up
        	startToast(2000, "WATH NOW!", "https://lh5.googleusercontent.com/-zpbBgPjMIbs/AAAAAAAAAAI/AAAAAAAAAAA/hwgFO6TObQE/s32-c/photo.jpg" ) //timer, msg
        break;
    }
});
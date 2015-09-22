var toast_height = 36 + "px"

function Toast () {
	
	function createToast() { //Private
		var toastElement = document.createElement('div')
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

function startToast(timer, message) { //start all the process that show, wait and hide a toast
	currentToast = new Toast()
	currentToast.showToast()
	setTimeout(currentToast.hideToast, timer)
}

document.addEventListener('DOMContentLoaded', function(){
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "	body { \
							margin: 0 0 0 0; \
						} \
						.NotifyToast { \
							width: 100%; \
							height: " + toast_height + "; \
							background-color: black; \
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
						}";
	document.body.appendChild(css);
});

window.addEventListener('keydown', function(k) {
    switch(k.keyCode) {
        case 32: //up
        	startToast(2000) //timer, msg
        break;
    }
});
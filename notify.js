toast_height = 36 + "px"

function createToast () {
	var toast = document.createElement('div')
	return toast
}

function getToast () {
	return document.getElementById('NotifyToast')
}

function styleToast (toast) {
	toast.setAttribute('id', 'NotifyToast')
	toast.setAttribute('class', 'NotifyHide')
	toast.style.backgroundColor = 'Black'
	toast.style.width = '100%'
	toast.style.height = toast_height
	toast.style.position = 'fixed'
	toast.style.position = 'fixed'
	toast.style.bottom = "-" + toast_height
	toast.style["-webkit-transition"] = "0.3s ease-in-out";
	toast.style["-moz-transition"] = "0.3s ease-in-out";
	toast.style["-o-transition"] = "0.3s ease-in-out";
	toast.style.transition = "0.3s ease-in-out";
}

function appendToast (toast) {
	document.body.style.margin= "0 0 0 0"
	document.body.appendChild(toast)
}

function showToast (toast) {
	toast.classList.remove('NotifyHide')
	toast.style.visibility = 'visible'
	toast.style.bottom = '0px'
}

function hideToast (toast) {
	toast.classList.add('NotifyHide')
	toast.style.visibility = 'hidden'
	toast.style.bottom = "-" + toast_height
}

function startToast (timer, message) { //start all the process that show, wait and hide a toast
	toast = getToast()
	if ( (toast.classList.contains("NotifyHide")) ) {
		showToast(toast)
		setTimeout(hideToast, timer, toast)
	}
}

document.addEventListener('DOMContentLoaded', function(){
	toast = createToast()
	styleToast(toast)
	appendToast(toast)
});

window.addEventListener('keydown', function(k) {
    switch(k.keyCode) {
        case 32: //up
        	startToast(2000) //timer, msg
        break;
    }
});
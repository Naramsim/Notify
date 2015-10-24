## Notify
[![Toast Preview](http://i.imgur.com/PFDgc3s.png)](https://github.com/Naramsim/Notify)


[![bitHound Score](https://www.bithound.io/github/Naramsim/Notify/badges/score.svg)](https://www.bithound.io/github/Naramsim/Notify)
[![Code Climate](https://codeclimate.com/github/Naramsim/Notify/badges/gpa.svg)](https://codeclimate.com/github/Naramsim/Notify)
[![Codacy Badge](https://api.codacy.com/project/badge/65b028208d0d4fcb8dbb694170b6e33b)](https://www.codacy.com/app/igougi-ui/Notify)

Demo
---

Check it here: [Notify](http://naramsim.github.io/Notify/)

Usage
---

Include `Notify.js` in the document.

```html
    <link href="notify.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="notify.js"></script>
```

Quick usage: call `startToast()` _wherever_, _whenever_, _however_ you want.
```
    startToast(seconds to stay on, description, hint, URL of image, callback, callback parameters );
    startToast(int , str, str, str, function -> without parenthesis!, array );
    
    Example:
    startToast(2000,"First Toast","HI");
```

Font Awesome support!
``` javascript
	startToast(1000,"FontAwesome",,"AWESOME""fa fa-github") //just insert the classes needed and you are good to go
```
Or create a new Toast object
```javascript
    var myToast = new Toast(); //create the object
	myToast.stayOnFor(2100);//set the default time that toast will remain on
	myToast.start("Hi, page just loaded", "BROWSE ME");//display the toast
	setTimeout(function(){
	    myToast.start("You are connected!", "WATCH NOW!", "https://lh5.googleusercontent.com/-zpbBgPjMIbs/AAAAAAAAAAI/AAAAAAAAAAA/hwgFO6TObQE/s32-c/photo.jpg", changeBackground, ["green", "0.4"] );
	},5000);
```

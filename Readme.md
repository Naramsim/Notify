Notify
===

[![bitHound Score](https://www.bithound.io/github/Naramsim/Notify/badges/score.svg)](https://www.bithound.io/github/Naramsim/Notify)
[![Code Climate](https://codeclimate.com/github/Naramsim/Notify/badges/gpa.svg)](https://codeclimate.com/github/Naramsim/Notify)
[![Codacy Badge](https://api.codacy.com/project/badge/65b028208d0d4fcb8dbb694170b6e33b)](https://www.codacy.com/app/igougi-ui/Notify)


Usage
---

Include `Notify.js` in the document.

```html
    <script type="text/javascript" src="notify.js"></script>
```

Call `startToast` _wherever_, _whenever_, _however_ you want.
```
    startToast(seconds to stay on, hint, description, URL of image, callback parameters, callback );
    startToast(int , str, str, str, array, function -> without parenthesis! );
```

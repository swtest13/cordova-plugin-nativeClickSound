# Native Click Sound Cordova Plugin

* Now with support for iOS and Android *

Just specify an array of class strings and on an onclick event, it will trigger the default click sound for the platform.

Android part based on a blog post from [@pieterderycke](https://pieterderycke.wordpress.com/2014/01/20/native-tick-sound-on-button-click-with-phonegap/)

## Installation

``` bash
cordova plugin add https://github.com/swtest13/cordova-plugin-nativeClickSound.git
```

## Usage
The ngTouch librery in AngularJS overwrites the ngClick and, using stopPropagation(), prevents it from bubbling up.
So using the default nativeclick.js wan't work. The call needs to be made from with in the element.

```js
 nativeclick.trigger();
```

## License
[The MIT License (MIT)](http://www.opensource.org/licenses/mit-license.html)

Copyright (c) 2015 Matías Menich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

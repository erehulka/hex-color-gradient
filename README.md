# javascript HEX linear gradient generator

To use, simply include this class in .js script
``` javascript
import { Gradient } from './path/to/Gradient';
...
var gradient = new Gradient(color, degrees, percent);
...
```

### Where

* color is the basis color in HEX format (#XXXXXX)
* degrees represents tilt of the gradient
* percent means how significant should be the color change on both ends (darker and lighter)

### To save gradient in a variable
``` javascript
var var_name = gradient.getGradient();
```
This returns gradient in pattern `degrees, color1, color2`

### To apply gradient on a jQuery object
``` javascript
gradient.setGradient($('jquery_selector'));
```
This sets generated gradient on jQuery selected object via jQuery method `$(selector).css("propertyname","value")`
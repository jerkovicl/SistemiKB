<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Bridget makes jQuery plugins](#bridget-makes-jquery-plugins)
  - [Plugin constructor](#plugin-constructor)
  - [Usage](#usage)
  - [Bower](#bower)
  - [Component](#component)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Bridget makes jQuery plugins

Bridget makes a jQuery plugin out of a constructor.

It's based off of the [jQuery UI widget factory](http://jqueryui.com/widget/). You should probably use that, since it's very good. I use this, since it's a bit simpler. Used for [Masonry](http://masonry.desandro.com), [Isotope](http://isotope.metafizzy.co), and  [Packery](http://packery.metafizzy.co).

## Plugin constructor

A plugin constructor uses Prototypal pattern. It needs to have a `._init()` method used for its main logic.

``` js
// plugin constructor
// accepts two argments, element and options object
function NiceGreeter( element, options ) {
  this.element = $( element );
  this.options = $.extend( true, {}, this.options, options );
  this._init();
}
// defaults for plugin options
NiceGreeter.prototype.options = {
  greeting: 'hello',
  recipient: 'world'
};
// main plugin logic
NiceGreeter.prototype._init = function() {
  var message = this.getMessage();
  this.element.text( message );
};
// getter method
NiceGreeter.prototype.getMessage = function() {
  return this.options.greeting + ' ' + this.options.recipient;
};
```

## Usage

Bridget can make this constructor work as a jQuery plugin. The `namespace` is the plugin method - `$elem.namespace()`.

``` js
// convert constructor to jQuery plugin
$.bridget( 'niceGreeter', NiceGreeter );

// now the constructor can be used as a jQuery plugin
var $elem = $('#elem');
$elem.niceGreeter();
// >> h1 text will be 'hello world'

// set options
$elem.niceGreeter({
  greeting: 'bonjour',
  recipient: 'mon ami'
});
// >> text will be 'bonjour mon ami'

// access constructor instance via .data()
var myGreeter = $elem.data('niceGreeter');
```

Getter methods can still be used. For jQuery objects with multiple elements, getter methods will return the value of the first element.

## Bower

Bridget is a [Bower](http://bower.io) component.

``` bash
bower install jquery-bridget
```
## Component

Bridget can also be installed via [component](http://github.com/component/component).

``` bash
component install desandro/jquery-bridget
```

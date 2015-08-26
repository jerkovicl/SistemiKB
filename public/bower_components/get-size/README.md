<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [getSize](#getsize)
  - [Install](#install)
  - [Fractional values in IE8](#fractional-values-in-ie8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# getSize

Get the size of elements.

``` js
var size = getSize( elem );
// elem can be an element
var size = getSize( document.querySelector('#selector') )
// elem can be a string, used as a query selector
var size = getSize('#selector')
```

Returns an object with:  `width`, `height`, `innerWidth/Height`, `outerWidth/Height`, `paddingLeft/Top/Right/Bottom`, `marginLeft/Top/Right/Bottom`, `borderLeft/Top/Right/BottomWidth` and `isBorderBox`.

Tested in IE8, IE9 and good browsers.

## Install

Install with [Bower](http://bower.io) :bird:

``` bash
bower install desandro/get-size
```

Or [Component](http://github.com/component/component)

``` bash
component install desandro/get-size
```

## Fractional values in IE8

For percentage or `em`-based sizes, IE8 does not support fractional values. getSize will round to the nearest value.

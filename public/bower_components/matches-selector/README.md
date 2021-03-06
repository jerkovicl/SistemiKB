<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [matchesSelector helper](#matchesselector-helper)
  - [Package managers](#package-managers)
  - [MIT license](#mit-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# matchesSelector helper

[`matchesSelector`](https://developer.mozilla.org/en-US/docs/DOM/Element.mozMatchesSelector) is pretty hot :fire:, but has [vendor-prefix baggage](http://caniuse.com/#search=matchesSelector) :handbag: :pouch:. This helper function takes care of that, without augmenting `Element.prototype`.

``` js
matchesSelector( elem, selector );

matchesSelector( myElem, 'div.my-hawt-selector' );

// this DOES NOT polyfill myElem.matchesSelector
```

## Package managers

Install with [:bird: Bower](http://bower.io)

``` bash
bower install desandro/matches-selector
```

Install with [:nut_and_bolt: component](https://github.com/component/component)

``` bash
component install desandro/matches-selector
```

## MIT license

matchesSelector is released under the [MIT license](http://desandro.mit-license.org)

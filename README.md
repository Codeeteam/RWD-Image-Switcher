#Global

Plugin allow change background image for diffrent resolution.

## Example


## Install

1. Copy plugin (dist/js/plugin/rwd-image-switcher.js) to your project
2. Run plugin 

```javascript
$('.js__background').rwdImageSwitcher();
```

## Options

```javascript
$('.js__background').rwdImageSwitcher({
    log: 'false' // default,
    callbackAfterSwitch: function () {};
});
```

## Requirements

* jQuery v1.8+
* Modernizr with "mq" option (Modernizr.mq())

## Tested

* IE 10, IE 11,
* Microsoft Edge,
* Mozilla Firefox, 
* Google Chrome

## License

The code is released under the [MIT License](LICENSE).
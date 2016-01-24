
(function ($, window, document) {
    "use strict";
    
    window.EXAMPLE = window.EXAMPLE || {
        init: function () {
            this.initRWDImageSwitcher();
        },

        initRWDImageSwitcher: function () {
            $('.js__sec__bg').rwdImageSwitcher();
        }
    };

    $(document).on('ready', function () {
        window.EXAMPLE.init();
    });

}(jQuery, window, document));

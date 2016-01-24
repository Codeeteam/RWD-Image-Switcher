/*globals jQuery, document */
(function ($) {
    "use strict";

    var pluginName  = "rwdImageSwitcher",
        defaults = {
            log: false
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.$element = $(this.element);
        this.options = options;
        this.metadata = this.$element.data('options');
        this.settings = $.extend({}, defaults, this.options, this.metadata);

        this.$window = $(window);

        this.init();
    }

    Plugin.prototype = {
        /**
         * Init all methods
         * 
         * @return void
         */
        init: function () {
            this.variables();
            this.stepsResize();
        },

        /**
         * List all global variables
         * 
         * @return void
         */
        variables: function () {
            var that = this;

            that.currentIndex = null;
            that.firstInitSteps = true;
            that.stepsDisables = [];

            that.settingsSteps = that.settings.steps;
        },

        /**
         * Init and resize method of name: steps
         * 
         * @return void
         */
        stepsResize: function () {
            var that = this;

            that.steps();
            that.$window.on('resize', function () {
                that.steps();
            });
        },

        /**
         * I checking media query by Modernizr and set using index
         * 
         * @return void
         */
        steps: function () {
            var that = this,
                i = 0, k = 0, s = 0, items, itemsLength, step;

            items = that.settingsSteps; // object with all steps
            itemsLength = items.length; // count steps

            /**
             * First running plugin and set index
             */
            if (that.firstInitSteps) {
                for (k; k <= itemsLength - 1; k = k + 1) {
                    if (Modernizr.mq(items[k].query)) {
                        that.stepsDisables[k] = true;

                        that.currentIndex = k;
                    } else {
                        that.stepsDisables[k] = false;
                    }
                }

                that.firstInitSteps = false;
            }

            for (i; i <= itemsLength; i = i + 1) {
                step = items[i];

                if (step) {
                    if (Modernizr.mq(step.query) && that.stepsDisables[i]) {
                        if (that.settings.log) {
                            console.log(step.query);
                        }

                        that.currentIndex = i; // I set current index
                        that.stepsDisables[i] = false; // I set lock

                        that.setImage(); // I set background image

                        for (s; s <= itemsLength - 1; s = s + 1) {
                            if (i !== s) {
                                that.stepsDisables[s] = true;
                            }
                        }

                        if (that.settings.log) {
                            console.log(that.stepsDisables);
                        }
                    }
                }
            }
        },

        /**
         * I set background
         * 
         * @return void
         */
        setImage: function () {
            var that = this, 
                getStep;

            getStep = that.settingsSteps[that.currentIndex];

            that.$element.css('backgroundImage', 'url('+getStep.srcImage+')');
        },
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery));
/**
 * --------------------------------------------------------------------------
 *  common.js
 * --------------------------------------------------------------------------
 */
var front = front || {};

front.common = front.common || {};

front.common = (function () {

    var init = function () {
        this.a();
        this.commonHandler();
    }

    var a = function () {
        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
    }

    var commonHandler = function () {
        /* select */
        $('.custom-select').on('change', function() {
            var value = $(this).children("option:selected").attr('value');

            $('.custom-select').on('change', function() {
                var value = $(this).children("option:selected").attr('value');
                if (!value) {
                    $(this).css({
                        'font-weight' : 'normal',
                        'color' : '#666666',
                        'background' : '#fff url(../../img/common/ico-select-disabled.png) right 20px center/20px 20px no-repeat'
                    });
                } else {
                    $(this).css({
                        'font-weight' : 'bold',
                        'color' : '#444444',
                        'background' : '#fff url(../../img/common/ico-select.png) right 20px center/20px 20px no-repeat'
                    });
                }
            });
        });
    }

    return {
        a: a,
        commonHandler: commonHandler,
        init: init,
    }
})();

$(function () {
    front.common.init();
});

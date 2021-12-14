/**
 * --------------------------------------------------------------------------
 *  common.js
 v.0.1 선미 : tab 추가 -- 2021.12.13
 * --------------------------------------------------------------------------
 */
var front = front || {};

front.common = front.common || {};

front.common = (function () {

    var init = function () {
        this.a();
        this.commonHandler();
        this.tab();
    }

    var a = function () {
        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
    }

    var commonHandler = function () {
        /* select */
        $('.custom-select').each(function (){
            $(this).on('change', function() {
                var value = $(this).children("option:selected").attr('value');
                if (!value) {
                    $(this).css({
                        'font-weight' : 'normal',
                        'color' : '#666666',
                        'background-image' : 'url(../../img/common/ico-select-disabled.png)'
                    });
                } else {
                    $(this).css({
                        'font-weight' : 'bold',
                        'color' : '#444444',
                        'background-image' : 'url(../../img/common/ico-select.png)'
                    });
                }
            });
        })
    }

    var tab = function () {
        $('.tab .item a').on('click', function () {
            let idx = $(this).parent().index()
            let tabItem = $('.tab .item')
            let tabPane = $('.')
            tabItem.removeClass('active')
            tabItem.eq(idx).addClass('active')
            tabPane.removeClass('active')
            tabPane.eq(idx).addClass('active')
        })
    }

    return {
        a: a,
        commonHandler: commonHandler,
        init: init,
        tab: tab
    }
})();

$(function () {
    front.common.init();
});

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
        this.popupText();
        this.changeText();
        this.popupAge();
        this.changeAge();
        this.fullPopup();
        this.defaultPopup();
        this.introScroll();
    }

    var a = function () {
        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
    }

    var commonHandler = function () {
        /* header */
        $('._header-sticky').sticky({topSpacing:0})

        /* select */
        $('.custom-select').each(function (){
            $(this).on('change', function() {
                var value = $(this).children("option:selected").attr('value');
                if (!value) {
                    $(this).css({
                        'font-weight' : 'normal',
                        'color' : '#666666',
                        'background-image' : 'url(../../img/common/ico-select-disabled.svg)'
                    });
                } else {
                    $(this).css({
                        'font-weight' : 'bold',
                        'color' : '#444444',
                        'background-image' : 'url(../../img/common/ico-select.svg)'
                    });
                }
            });
        })
    }

    var tab = function () {
        $('._tab .item a').on('click', function () {
            let idx = $(this).parent().index()
            let tabItem = $('._tab .item')
            let tabPane = $('._tab').siblings('.tab-content').children('.tab-pane')
            tabItem.removeClass('active')
            tabItem.eq(idx).addClass('active')
            tabPane.removeClass('active')
            tabPane.eq(idx).addClass('active')
        })
    }
    var defaultPopup = function defaultPopup(){
        $('._toast-popup-open').click(function () {
            $('._toast-dim-no-title').removeClass('hide').addClass('fade show').css('display','block');
        });
        $('._toast-popup-close').click(function () {
            $('._toast-dim-no-title').addClass('hide');
            setTimeout(() => {
                $('._toast-dim-no-title').removeClass('fade show').css('display','none');
            }, 400);
        });
    }

    var popupText = function popup() {
        $('._toast-popup-open.text').on('click', function () {
            let select = $('._toast-popup.text')
            select.removeClass('hide').addClass('fade show').css('display', 'block');
        });
    }
    var changeText = function List() {
        let list = $('._toast-popup.text .select-list > .list');

        function hidePopup() {
            $('._toast-popup.text').addClass('hide');
            setTimeout(() => {
                $('._toast-popup.text').removeClass('fade show').css('display', 'none');
            }, 400);
        }

        /*클릭시 텍스트 변경*/
        $(document).ready(function () {
            list.on("click", function (e) {
                let textValue = $(this).find('span').text();

                function ChangeText() {
                    $('._toast-popup-open.text').find('span').text(textValue).css({
                        'color': '#444444',
                        'font-weight': 'bold'
                    });
                }

                if (list.hasClass("active")) {
                    list.removeClass("active");
                    $(this).addClass("active");
                    hidePopup();
                    ChangeText();
                } else {
                    $(this).addClass("active")
                    hidePopup();
                    ChangeText();
                }
            });
        });
    }
    var popupAge = function popupAge(){
        $('._toast-popup-open.age').on('click',function () {
            $('._toast-popup.age')
                .removeClass('hide')
                .addClass('fade show')
                .css('display', 'block');
        });
    }
    var changeAge = function changeAge() {
        let list = $('._toast-popup.age .select-list > .list');
        function hidePopup() {
            $('._toast-popup.age').addClass('hide');
            setTimeout(() => {
                $('._toast-popup.age').removeClass('fade show').css('display', 'none');
            }, 400);
        }
        /*클릭시 텍스트 변경*/
        $(document).ready(function () {
            list.on("click", function (e) {
                let textValue = $(this).find('span').text();

                function ChangeText() {
                    $('._toast-popup-open.age').find('span').text(textValue).css({
                        'color': '#444444',
                        'font-weight': 'bold'
                    });
                }

                if (list.hasClass("active")) {
                    list.removeClass("active");
                    $(this).addClass("active");
                    hidePopup();
                    ChangeText();
                } else {
                    $(this).addClass("active")
                    hidePopup();
                    ChangeText();
                }
            });
        });
    }
    var fullPopup = function fullPopup(){
        $('._toast-popup-open.full').on('click', function () {
            let select = $('._full-popup');
            select.removeClass('hide').addClass('show');
        });
        $('._toast-popup-close.full').on('click', function () {

            let select = $('._full-popup');
            select.removeClass('show').addClass('hide');
        });
    }
    var introScroll = function introScroll() {
        var lastScroll = 0;
        $('._full-popup > .popup-content').scroll(function () {
            var st = $(this).scrollTop();
            // console.log(st);
            if (st === 0) {
                // console.log('Down');
                $('._popup-header').removeClass('header-white');
            } else {
                // console.log('Up');
                $('._popup-header').addClass('header-white');
            }
            lastScroll = st;
        });
    }

    return {
        a: a,
        defaultPopup : defaultPopup,
        commonHandler: commonHandler,
        popupText : popupText,
        changeText : changeText,
        changeAge : changeAge,
        popupAge : popupAge,
        fullPopup : fullPopup,
        introScroll : introScroll,
        tab: tab,
        init: init
    }
})();

$(function () {
    front.common.init();
});

/**
 * --------------------------------------------------------------------------
 *  common.js
 v.0.1 선미 : tab 추가 -- 2021.12.13
 v.0.2 태윤 : 모달 관련 스크립트 추가 -- 2021.12.21
 v.0.3 태윤 : 모달 리팩토링 -- 2021.12.22
 * --------------------------------------------------------------------------
 */

var front = front || {};

front.common = front.common || {};

front.common = (function () {

    var init = function () {
        this.a();
        this.commonHandler();
        this.tab();
        this.popup();
        this.introScroll();
    }

    var a = function () {
        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
    }

    var commonHandler = function () {
        /* header */
        $('._header-sticky').sticky({topSpacing: 0})

        /* select */
        $('.custom-select').each(function () {
            $(this).on('change', function () {
                var value = $(this).children("option:selected").attr('value');
                if (!value) {
                    $(this).css({
                        'font-weight': 'normal',
                        'color': '#666666',
                        'background-image': 'url(../../img/common/ico-select-disabled.svg)'
                    });
                } else {
                    $(this).css({
                        'font-weight': 'bold',
                        'color': '#444444',
                        'background-image': 'url(../../img/common/ico-select.svg)'
                    });
                }
            });
        })

        /* modal-select */
        $('._toast-popup .select-list > .list').on('click', function (e) {
            let textValueParent = $(this).parents('._toast-popup');

            function hidePopup() {
                textValueParent.addClass('hide');
                setTimeout(() => {
                    textValueParent.removeClass('fade show').css('display', 'none');
                }, 400);
                /*클릭시 텍스트 변경*/
            }

            $(this).siblings().removeClass("active");
            $(this).addClass("active");
            hidePopup();
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

    /*popup Close&open*/
    var popup = function popup() {

        let buttonOpen = $('._toast-popup-open');
        let ButtonClose = $('._toast-popup-close');

        function popupOpens() {
            buttonOpen.on('click', function () {
                console.log(this);
                if ($(this).hasClass('text') === true) {
                    console.log(this);
                    let select = $('._toast-popup.text');
                    select.removeClass('hide').addClass('fade show').css('display', 'block');
                } else if ($(this).hasClass('age') === true) {
                    console.log(this);
                    let select = $('._toast-popup.age')
                    select.removeClass('hide').addClass('fade show').css('display', 'block');
                } else if ($(this).hasClass('full') === true) {
                    console.log(this);
                    let select = $('._full-popup');
                    select.removeClass('hide').addClass('show');
                }
            })
        }
        function popupClose(){
            ButtonClose.on('click', function () {

                if ($(this).hasClass('text') === true) {
                    let select = $('._toast-popup.text')
                    select.removeClass('show').addClass('hide');
                } else if ($(this).hasClass('age') === true) {
                    let select = $('._toast-popup.age')
                    select.removeClass('show').addClass('hide');
                } else if ($(this).hasClass('full') === true) {
                    let select = $('._full-popup');
                    select.removeClass('show').addClass('hide');
                }
            })
        }

        popupOpens();
        popupClose();
    }

    return {
        a: a, commonHandler: commonHandler, popup: popup, introScroll: introScroll, tab: tab, init: init,
    }
})();

$(function () {
    front.common.init();
});

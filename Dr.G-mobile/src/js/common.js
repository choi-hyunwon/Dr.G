/**
 * --------------------------------------------------------------------------
 *  common.js
 v.0.1 선미 : tab 추가 -- 2021.12.13
 v.0.2 태윤 : 모달 관련 스크립트 추가 -- 2021.12.21
 v.0.3 태윤 : 모달 리팩토링 -- 2021.12.22
 v.0.3 태윤 : 모달 관련 현재 주석처리 -- 2021.12.24
 * --------------------------------------------------------------------------
 */

var front = front || {};

front.common = front.common || {};

front.common = (function () {

    var init = function () {
        this.a();
        this.commonHandler();
        this.tab();
        this.OnclickModal();
        // this.introScroll();
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
            let textValueSelectPopup = $(this).parents('.select-popup').children('._toast-popup-open');
            let textValue = $(this).find('span').text();


            function hidePopup() {
                textValueParent.addClass('hide');
                setTimeout(() => {
                    textValueParent.removeClass('fade show').css('display', 'none');
                }, 400);
                /*클릭시 텍스트 변경*/
            }

            function ChangeText() {
                textValueSelectPopup.find('span').text(textValue).css({
                    'color': '#444444',
                    'font-weight': 'bold'
                });
            }

            if ($('._toast-popup .select-list > .list').hasClass("active")) {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                hidePopup();
                ChangeText();
            } else {
                $(this).addClass("active")
                hidePopup();
                ChangeText();
            }


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

    var OnclickModal = function OnclickModal(idx) {
        let popupOpen = $('._toast-popup-open');
        let popupClose = $('._toast-popup-close');
        let select = $('._toast-popup');
        let selectIndex = select.eq(idx);

        console.log(selectIndex);



        popupOpen.on('click',function(){
            selectIndex.eq(idx).removeClass('hide').addClass('fade show').css('display', 'block');
        });
        popupClose.on('click',function(){
            selectIndex.removeClass('show').addClass('hide').css('display', 'none');
        });
    }

    return {
        a: a,
        commonHandler: commonHandler,
        tab: tab,
        init: init,
        OnclickModal: OnclickModal,
        introScroll : introScroll

    }
})();

$(function () {
    front.common.init();
});

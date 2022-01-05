/**
 * --------------------------------------------------------------------------
 *  common.js
 v.0.1 선미 : tab 추가 -- 2021.12.13
 v.0.2 태윤 : 모달 관련 스크립트 추가 -- 2021.12.21
 v.0.3 태윤 : 모달 리팩토링 -- 2021.12.22
 v.0.3 태윤 : 모달 관련 현재 주석처리 -- 2021.12.24
 v.0.4 선미 : ani(스크롤애니메이션) 추가-- 2022.01.03
 v.0.5 태윤 : 모달 관련 현재 주석해제 및 모달 공통화 진행중 -- 2021.01.04
 v.0.6 태윤 : 모달 관련 현재 주석해제 및 모달 공통화 완료 (텍스트변경제외) -- 2022.01.05
 v.0.7 선미 : headerDetails 추가 --2022.01.06
 * --------------------------------------------------------------------------
 */

var front = front || {};

front.common = front.common || {};

front.common = (function () {

    var init = function () {
        this.a();
        this.commonHandler();
        this.tab();
        this.onClickModal();
        this.introScroll();
        this.ani();
        this.headerDetails();
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

        /*modal-select-close*/
        $('._toast-popup .select-list > .list').on('click', function () {
            let Popup = $(this).parents('.toast-dim');

            function hidePopup() {
                Popup.addClass('hide');
                setTimeout(() => {
                    Popup.removeClass('fade show').css('display', 'none');
                }, 400);
            }

            if ($('._toast-popup .select-list > .list').hasClass("active")) {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                hidePopup();
            } else {
                $(this).addClass("active")
                hidePopup();
            }

        })

        /*text-change*/
        // $('._toast-popup-open').on('click', function () {
        //     let btnText = $(this).find('span');
        //
        //
        //     btnText.text(textValue).css({
        //         'color': '#444444',
        //         'font-weight': 'bold'
        //     });
        // })
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
            if (st === 0) {
                $('._popup-header').removeClass('header-white');
            } else {
                $('._popup-header').addClass('header-white');
            }
            lastScroll = st;
        });
    }

    var onClickModal = function OnclickModal() {
        let popupOpen = $('._toast-popup-open');
        let popupClose = $('._toast-popup-close');
        let select = $('.toast-dim');

        popupOpen.on('click', function () {
            const idx = popupOpen.index(this);
            select.eq(idx).removeClass('hide').addClass('fade show').css('display', 'block');

        });
        popupClose.on('click', function () {
            select.removeClass('show').addClass('hide');
            setTimeout(() => {
                $('._toast-popup').removeClass('fade show').css('display', 'none');
            }, 400);
        });

        /*외부클릭시 삭제*/
        $('.toast-dim').mouseup(function (e) {
            let toastPopup = $('.toast-popup');
            if (toastPopup.has(e.target).length === 0) {
                $('.toast-dim').css('display','none');
            }
        })

    }

    var headerDetails = function () {
        let detailsScroll = 0;
        $(window).scroll(function (event) {
            if ($('.container').find('._static').length == false) {
                let st = $(this).scrollTop();
                if (st >= detailsScroll) {
                   // console.log("DOWN");
                    $('.header-details').hide()

                } else {
                   // console.log("UP");
                    $('.header-details').show().addClass('fixed')
                    if (window.pageYOffset == 0) {
                        $('.header-details').removeClass('fixed')
                    }
                }
                //Updates scroll position
                detailsScroll = st;
            }
        });
    }


    /*-----s 스크롤 애니메이션------*/
    var ani = function (){
        AOS.init();
    }
    /*-----e 스크롤 애니메이션------*/




    return {
        a: a,
        commonHandler: commonHandler,
        tab: tab,
        init: init,
        onClickModal: onClickModal,
        introScroll: introScroll,
        ani: ani,
        headerDetails: headerDetails
    }
})();

$(function () {
    front.common.init();
});

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
 v.0.8 태윤 : text-change-text & text-change-age 추가 -- 2022.01.12
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

        /* modal-select-close */
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

        /* text-change-text */
        $(document).ready(function () {
            let list = $('._toast-popup.text .select-list > .list');
            list.on("click", function (e) {
                let textValue = $(this).find('span').text();

                function ChangeText() {
                    $('._toast-popup-open.text').find('span').text(textValue).css({
                        'color': '#444444',
                        'font-weight': 'bold'
                    });
                    $('._toast-popup-open.text').css({
                        'background-image': 'url(../../img/common/ico-arrow-down-sm.svg)'
                    })
                }

                list.removeClass("active");
                $(this).addClass("active");
                ChangeText();
            });
        });

        /* text-change-age */
        $(document).ready(function () {
            let list = $('._toast-popup.age .select-list > .list');
            list.on("click", function (e) {
                let textValue = $(this).find('span').text();

                function ChangeText() {
                    $('._toast-popup-open.age').find('span').text(textValue).css({
                        'color': '#444444',
                        'font-weight': 'bold'
                    });
                    $('._toast-popup-open.age').css({
                        'background-image': 'url(../../img/common/ico-arrow-down-sm.svg)'
                    });
                }

                list.removeClass("active");
                $(this).addClass("active");
                ChangeText();
            });
        });

        /* vh 이슈 수정 */
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
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
            select.addClass('hide');
            setTimeout(() => {
                select.removeClass('fade show').css('display', 'none');
            }, 400);
        });

        /*외부클릭시 삭제*/
        $('.toast-dim').mouseup(function (e) {
            let toastPopup = $('.toast-popup');
            if (toastPopup.has(e.target).length === 0) {
                $('.toast-dim').css('display', 'none');
            }
        })

    }

    var headerDetails = function () {
        if ($('.container').find('._static').length == false) {
            // Hide header on scroll down
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var headerDetail = $('.header-details');
            var headerDetailHeight = headerDetail.outerHeight();

            $(window).scroll(function(event){
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                var st = $(this).scrollTop();

                // Make scroll more than delta
                if(Math.abs(lastScrollTop - st) <= delta)
                    return;

                // If scrolled down and past the navbar, add class .nav-up.
                if (st > lastScrollTop && st > headerDetailHeight){
                    // Scroll Down
                    headerDetail.removeClass('nav-down').addClass('nav-up');
                } else {
                    // Scroll Up
                    if(st + $(window).height() < $(document).height()) {
                        headerDetail.removeClass('nav-up').addClass('nav-down');
                    }
                }
                lastScrollTop = st;
            }
        }

        // let detailsScroll = 0;
        // $(window).scroll(function () {
        // });
        // if ($('.container').find('._static').length == false) {
        //     console.log('1')
        //     var didScroll;
        //     var lastScrollTop = 0;
        //     var delta = 5;
        //     var detailHeader = $('.header-details');
        //     var headerHeight = detailHeader.outerHeight();
        //
        //     $(window).scroll(function(){
        //         didScroll = true;
        //     });
        //
        //     setInterval(function() {
        //         if (didScroll) {
        //             hasScrolled();
        //             didScroll = false;
        //         }
        //     }, 250);
        //
        //     function hasScrolled() {
        //         var st = $(this).scrollTop();
        //
        //         if(Math.abs(lastScrollTop - st) <= delta)
        //             return;
        //
        //         if (st > lastScrollTop && st > headerHeight){
        //             // 스크롤을 내렸을 때
        //             console.log('1')
        //             detailHeader.hide();
        //         } else {
        //             // 스크롤을 올렸을 때
        //             console.log('2')
        //             detailHeader.show();
        //         }
        //         lastScrollTop = st;
        //     }
        //
        //     // let st = $(this).scrollTop();
        //     // if (st >= detailsScroll) {
        //     //     // console.log("DOWN");
        //     //     // $('.header-details').hide()
        //     //
        //     // } else {
        //     //     // console.log("UP");
        //     //     $('.header-details').show().addClass('fixed')
        //     //     if (window.pageYOffset == 0) {
        //     //         $('.header-details').removeClass('fixed')
        //     //     }
        //     // }
        //     // //Updates scroll position
        //     // detailsScroll = st;
        // }
    }


    /*-----s 스크롤 애니메이션------*/
    var ani = function () {
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

function showPopup() {
    $('.toast-dim').addClass('show fade').css('display', 'block');
}


function hidePopup() {
    $('.toast-dim').removeClass('show fade').css('display', 'none');
}

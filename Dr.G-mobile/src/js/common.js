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
 v.0.9 주연 : header-detail / header 수정 및 추가 -- 2022.01.21
 v.0.10 주연 : main header 추가 -- 2022.01.24
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
        this.header();
        this.headerDetails();
    }

    var a = function () {
        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
    }

    var commonHandler = function () {
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
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var headerDetail = $('.header-details');
        var headerDetailHeight = headerDetail.outerHeight();
        var stepHeading = $('.step-heading');
        var uppperPartHeight = headerDetail.outerHeight() + stepHeading.outerHeight();

        if ($('.container').find('._static').length == false) {
            /* normal case*/
            if($('.container').find('.step-heading').length == false) {
                $(window).scroll(function(){
                    didScroll = true;
                });

                setInterval(function() {
                    if (didScroll) {
                        hasScrolled();
                        didScroll = false;
                    }
                }, 10);

                function hasScrolled() {
                    var st = $(this).scrollTop();

                    if(Math.abs(lastScrollTop - st) <= delta)
                        return;

                    if (st > lastScrollTop){
                        // Scroll Down
                        if (st > lastScrollTop) {
                            if(st > headerDetailHeight) {
                                headerDetail.removeClass('scroll-down').addClass('scroll-up');
                            }
                        }
                    } else {
                        // Scroll Up
                        if(st + $(window).height() < $(document).height()) {
                            if(st < delta) {
                                headerDetail.removeClass('scroll-down');
                            } else {
                                headerDetail.removeClass('scroll-up').addClass('scroll-down');
                            }
                        }
                    }
                    lastScrollTop = st;
                }
            }
            /* 스킨멘토링 step이랑 있을 경우 */
           else {
                $(window).scroll(function(){
                    didScroll = true;
                });

                setInterval(function() {
                    if (didScroll) {
                        hasScrolled();
                        didScroll = false;
                    }
                }, 10);

                function hasScrolled() {
                    var st = $(this).scrollTop();

                    if(Math.abs(lastScrollTop - st) <= delta)
                        return;

                    if (st > lastScrollTop){
                        // Scroll Down
                        if (st > lastScrollTop) {
                            if(st > uppperPartHeight) {
                                headerDetail.removeClass('scroll-down').addClass('scroll-up');
                                stepHeading.removeClass('scroll-down').addClass('scroll-up');
                            }
                        }
                    } else {
                        // Scroll Up
                        if(st + $(window).height() < $(document).height()) {
                            if(st < delta) {
                                headerDetail.removeClass('scroll-down');
                                stepHeading.removeClass('scroll-down');
                            } else {
                                headerDetail.removeClass('scroll-up').addClass('scroll-down');
                                stepHeading.removeClass('scroll-up').addClass('scroll-down');
                            }
                        }
                    }
                    lastScrollTop = st;
                }
            }
        }
    }

    var header = function () {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var header = $('._header-sticky');
        var headerWhite = $('.header-white');
        var headerHeight = header.outerHeight();

        /* normal */
        if($('._header-sticky').length) {
            $(window).scroll(function(){
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 10);

            function hasScrolled() {
                var st = $(this).scrollTop();

                if(Math.abs(lastScrollTop - st) <= delta)
                    return;

                if (st > lastScrollTop){
                    // Scroll Down
                    if (st > lastScrollTop) {
                        if($('.inside-drg').find('._tab').length) {
                            var tabScrollPos = $('._tab').offset().top + $('._tab').outerHeight();
                            if(st > tabScrollPos) {
                                header.removeClass('scroll-down').addClass('scroll-up');
                                $('._tab').addClass('fixed').css('top','0')
                            }
                        } else {
                            if(st > headerHeight) {
                                header.removeClass('scroll-down').addClass('scroll-up');
                            }
                        }
                    }
                } else {
                    // Scroll Up
                    if (st + $(window).height() < $(document).height()) {
                        if ($('.inside-drg').find('._tab').length) {
                            var tabContentOffset = $('.tab-content').offset().top;
                            if (tabContentOffset > st) {
                                $('._tab').removeClass('fixed').css('top', 'auto')
                            } else {
                                $('._tab').addClass('fixed').css('top', headerHeight + 'px')
                            }
                            if(st < delta) {
                                header.removeClass('scroll-down');
                            } else {
                                header.removeClass('scroll-up').addClass('scroll-down');
                            }
                        } else {
                            if(st < delta) {
                                header.removeClass('scroll-down');
                            } else {
                                header.removeClass('scroll-up').addClass('scroll-down');
                            }
                        }
                    }
                }
                lastScrollTop = st;
            }
        }

        /* white header 경우 */
        if($('.header-white').length) {
            $(window).scroll(function(){
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 10);

            function hasScrolled() {
                var st = $(this).scrollTop();

                if(Math.abs(lastScrollTop - st) <= delta)
                    return;

                if (st > lastScrollTop){
                    // Scroll Down
                    // if (st > lastScrollTop) {
                    // }
                } else {
                    // Scroll Up
                    if(st + $(window).height() < $(document).height()) {
                        if(st < delta) {
                            headerWhite.addClass('header-transparent');
                        } else {
                            headerWhite.removeClass('header-transparent');
                        }
                    }
                }
                lastScrollTop = st;
            }
        }

        /* main header 경우 */
        if($('.header-main').length) {
            $(window).scroll(function(){
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 10);

            var mainHeader = $('.header-main');
            var mainHeaderHeight = $('.header-main').outerHeight();
            var bannerHeight = $('._mainBanner').outerHeight();

            function hasScrolled() {
                var st = $(this).scrollTop();

                if(Math.abs(lastScrollTop - st) <= delta)
                    return;

                if (st > lastScrollTop){
                    // Scroll Down
                    if(st > mainHeaderHeight + bannerHeight) {
                        mainHeader.removeClass('scroll-up').addClass('scroll-down');
                    }
                } else {
                    // Scroll Up
                    if(st + $(window).height() < $(document).height()) {
                        if(st < delta) {
                            mainHeader.addClass('header-transparent').removeClass('scroll-up','scroll-down');
                        } else {
                            mainHeader.removeClass('header-transparent','scroll-down').addClass('scroll-up');
                        }
                    }
                }
                lastScrollTop = st;
            }
        }
    }

    var ani = function () {
        AOS.init();
    }

    return {
        a: a,
        commonHandler: commonHandler,
        tab: tab,
        init: init,
        onClickModal: onClickModal,
        introScroll: introScroll,
        ani: ani,
        header: header,
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

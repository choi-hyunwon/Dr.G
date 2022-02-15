/**
 * --------------------------------------------------------------------------
 *  common.js
 v.0.1 주연 : 초기 작성 -- 2022.01.27
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
        this.floatBottom();
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
                    $('._showPopup.text').find('span').text(textValue).css({
                        'color': '#444444',
                        'font-weight': 'bold'
                    });
                    $('._showPopup.text').css({
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
                    $('._showPopup.age').find('span').text(textValue).css({
                        'color': '#444444',
                        'font-weight': 'bold'
                    });
                    $('._showPopup.age').css({
                        'background-image': 'url(../../img/common/ico-arrow-down-sm.svg)'
                    });
                }

                list.removeClass("active");
                $(this).addClass("active");
                ChangeText();
            });
        });

        /* 알림 팝업 */
        var $alertPopup = $('._noticePopup');
        var $btnClose = $('._noticePopupClose');

        $btnClose.on('click',function () {
            $alertPopup.removeClass('show');
        })

        $(window).scroll(function () {
            $alertPopup.removeClass('show');
        });

        $('html').click(function (e) {
            if($(e.target).is('._btnAlert')) {
                var $alertPopup = $('._noticePopup');
                $alertPopup.addClass('show');
            } else if($(e.target).is('._noticePopup .custom-control-input') || $(e.target).is('._noticePopup .custom-control-label') || $(e.target).is('._noticePopup .content') || $(e.target).is('._noticePopup .ico-delete') || $(e.target).is('._noticePopup .item') || $(e.target).is('._noticePopup .title') || $(e.target).is('._noticePopup .date') || $(e.target).is('._noticePopup .font-body-1')) {
                // return false;
            } else {
                if($('._noticePopup').hasClass('show')){
                    if (!$(e.target).is('.calendar-modal')) {
                        var $alertPopup = $('._noticePopup');
                        $alertPopup.removeClass('show');
                    }
                }
            }
        });

        /* 상단으로 이동 */
        var $btn = $('.uio-top-btn'),$win, actClass;
        if(!$btn.length) return;
        $win = $(window);
        actClass = 'show';
        $win.on('scroll load',function(){
            var c = $(this).scrollTop();
            if( c > 100 ) {
                $btn.addClass('show');
                TweenMax.to($btn,0.5,{opacity: 1,y: 0});
            } else {
                $btn.removeClass('show');
                TweenMax.to($btn,0.5,{opacity: 0,y: 200});
            }
        });
        $btn.on('click',function(){
            $('html,body').stop(true, true).animate({scrollTop: 0}, 500);
        })

        /* select box - 유형선택 */
        var $body = $('body')

        $('._selectBox .btn-select').on('click',function (e) {
            // if ($(this).hasClass('disabled')) return;
            e.stopPropagation();
            $(this).parent().toggleClass('down');
        })

        $('._selectBox li a').on('click',function (e) {
            let text = $(this).text();
            $(this).parent().addClass('on').siblings().removeClass('on');
            console.log($(this).parent().parents('.list').parent())
            $(this).parent().parents('.list').prev('.btn-select').children('.text').text(text);
            $(this).parent().parents('.list').prev('.btn-select').addClass('selected')
            $(this).parent().parents('.list').parent().removeClass('down');
        })

        $body.on('click', function(){
            $('._selectBox').removeClass('down');
        });
    }

    var tab = function () {
        $('._tab').each(function (){
            var tabItem = $(this).find('.item');
            var tabItemLink = tabItem.find('a');
            var pane = $(this).siblings('.tab-content');
            var paneItem = pane.children('.tab-pane');

            tabItemLink.on('click', function () {
                var idx = $(this).parent().index();
                tabItem.removeClass('active')
                tabItem.eq(idx).addClass('active')
                paneItem.removeClass('active')
                paneItem.eq(idx).addClass('active')
            })
        })
    }

    var introScroll = function introScroll() {
    }

    var onClickModal = function OnclickModal() {
        let popupOpen = $('._showPopup');
        let popupClose = $('._hidePopup');
        let popup = $('.popup-wrap');

        popupOpen.on('click', function () {
            showPopup()
        });
        popupClose.on('click', function () {
            hidePopup()
        });

        /* 외부클릭시 삭제 */
        popup.mouseup(function (e) {
            let popup = $('.popup');
            if (popup.has(e.target).length === 0) {
                hidePopup()
            }
        })
    }

    var headerDetails = function () {
    }

    var header = function () {
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var header = $('._header');

        /* normal */
        if (header.length) {
            $(window).scroll(function () {
                didScroll = true;
            });
            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 10);
            function hasScrolled() {
                var st = $(this).scrollTop();

                if (st > lastScrollTop) {
                    // Scroll Down
                    if ($('.inside-drg').find('._tab').length) {
                        var tabScrollPos = $('._tab').offset().top + $('._tab').outerHeight();
                        if (st > tabScrollPos - 64) {
                            header.addClass('_scroll')
                            $('._tab').addClass('fixed').css('top', 86 + 'px')
                        } else {
                            header.addClass('_scroll')
                        }
                    } else if ($('._AIResult').find('._tab').length) {
                        var tabScrollPos = $('._tab').offset().top + $('._tab').outerHeight();
                        if (st > tabScrollPos - 64) {
                            header.addClass('_scroll')
                            $('._tab').addClass('fixed').css('top', 86 + 'px')
                        } else {
                            header.addClass('_scroll')
                        }
                    } else if ($('._AiSubMain').find('._scrollTabWrap').length) {
                        var tabContentOffset = $('.section-wrap').offset().top;
                        // console.log(tabScrollPos)
                        if (st > tabContentOffset) {
                            header.addClass('_scroll')
                            $('._scrollTabWrap').addClass('fixed').css('top', 86 + 'px')
                        } else {
                            header.addClass('_scroll')
                        }
                    } else {
                        header.addClass('_scroll')
                    }
                } else {
                    // Scroll Up
                    if ($('.inside-drg').find('._tab').length) {
                        var tabContentOffset = $('.tab-content').offset().top;
                        if (tabContentOffset > st) {
                            $('._tab').removeClass('fixed').css('top', 86 + 'px')
                        } else {
                            $('._tab').addClass('fixed').css('top', 86 + 'px')
                        }
                        if (st < delta) {
                            header.removeClass('_scroll')
                        }
                    } else if($('._AIResult').find('._tab').length) {
                        var tabContentOffset = $('._scrollTabWrap').offset().top;
                        if (tabContentOffset > st) {
                            $('._tab').removeClass('fixed').css('top', 86 + 'px')
                        } else {
                            $('._tab').addClass('fixed').css('top', 86 + 'px')
                        }
                        if (st < delta) {
                            header.removeClass('_scroll')
                        }
                    } else if($('._AiSubMain').find('._scrollTabWrap').length) {
                        var tabContentOffset = $('.section-wrap').offset().top;
                        if (tabContentOffset > st) {
                            $('._scrollTabWrap').removeClass('fixed').css('top', 86 + 'px')
                        } else if (st < delta) {
                            header.removeClass('_scroll')
                        } else {
                            $('._scrollTabWrap').addClass('fixed').css('top', 86 + 'px')
                        }

                    } else {
                        if (st < 65){
                            header.removeClass('_scroll')
                        }
                    }
                }
                lastScrollTop = st;
            }
        }

        /* gnb */
        var $nav = $('._menu .item > a');
        var $navItem = $nav.parent();
        if( !$nav.length ) return;

        $(window).on('scroll load',function(e){
            if( e.type == 'scroll' ) {
                header.removeClass('hovering');
                $navItem.removeClass('hovering');
            }
        })

        $nav.each(function (){
            var $thisItem = $(this).parent();
            if($thisItem.index() !== 7){
                $thisItem.on('mouseenter',function(e){
                    $thisItem.addClass('hovering');
                    $thisItem.siblings().removeClass('hovering');
                    header.addClass('hovering');
                })
            } else {
                $thisItem.on('mouseenter',function(e){
                    header.removeClass('hovering');
                    $('._menu > .item').removeClass('hovering');
                })
            }
        })

        header.on('mouseleave',function(){
            header.removeClass('hovering');
            $('._menu > .item').removeClass('hovering');
        })
    }

    var floatBottom = function () {
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
        headerDetails: headerDetails,
        floatBottom: floatBottom
    }
})();

$(function () {
    front.common.init();
});

function showPopup() {
    var popup = $('.popup-wrap');
    var btnPopupTrigger = $('._showPopup');
    var idx = btnPopupTrigger.index(this);

    popup.eq(idx).removeClass('hide').css('display', 'block');
    popup.after(`<div class="popup-backdrop"></div>`);
    $('body').addClass('scrOff')

    setTimeout(function (){
        var popup = $('.popup-wrap');
        var popupBackDrop = $('.popup-backdrop');

        popupBackDrop.addClass('show')
        popup.eq(idx).removeClass('hide').addClass('show')
    },300)
}

function hidePopup() {
    var popup = $('.popup-wrap');
    var popupBackDrop = $('.popup-backdrop');

    popup.addClass('hide').removeClass('show');
    popupBackDrop.addClass('hide').removeClass('show');
    $('body').removeClass('scrOff')

    setTimeout(function (){
        var popup = $('.popup-wrap');
        var popupBackDrop = $('.popup-backdrop');

        popup.css('display', 'none');
        popupBackDrop.remove();
    },300)
}

function openPopup(className) {
    var target = `.${className}`;
    var popup = $(target);
    var btnPopupTrigger = $('._showPopup');
    var idx = btnPopupTrigger.index(this);

    popup.eq(idx).removeClass('hide').css('display', 'block');
    popup.after(`<div class="popup-backdrop"></div>`);
    $('body').addClass('scrOff')

    setTimeout(function (){
        var popup = $('.popup-wrap');
        var popupBackDrop = $('.popup-backdrop');

        popupBackDrop.addClass('show')
        popup.eq(idx).removeClass('hide').addClass('show')
    },300)
}

function closePopup(className) {
    var target = `.${className}`;
    var popup = $(target);
    var popupBackDrop = $('.popup-backdrop');

    popup.addClass('hide').removeClass('show');
    popupBackDrop.addClass('hide').removeClass('show');
    $('body').removeClass('scrOff')

    setTimeout(function (){
        var popup = $('.popup-wrap');
        var popupBackDrop = $('.popup-backdrop');

        popup.css('display', 'none');
        popupBackDrop.remove();
    },300)
}

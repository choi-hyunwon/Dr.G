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
        this.suggestPage();
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

    var suggestPage = function (){
        // 메인 슬라이더
        // https://swiperjs.com/swiper-api
        if($('.suggestion-slider').length === 1 ) {
            new Swiper(".suggestion-slider", {
                pagination: {
                    el: ".swiper-pagination",
                }
            });
        }

        // 리스트
        // http://suprb.com/apps/gridalicious/
        $(document).ready(function () {
            $('._subjectList').gridalicious({
                width: 158,
                gutter: 10,
            });

            $('._tab').eq(1).find('a').on("click", function (event) {
                setTimeout(function () {
                    $('._subjectList2').gridalicious({
                        width: 158,
                        gutter: 10,
                    });
                }, 200)
                $(this).off(event);
            });

            $('#list-tab-2').on("click", function (event) {
                setTimeout(function () {
                    $('._subjectList2').gridalicious({
                        width: 158,
                        gutter: 10,
                    });
                }, 200)
                $(this).off(event);
            });
        })

        // 좋아요 버튼 이벤트
        $('._likeBtn').on('click', function () {
            let number = Number($(this).children('.num').text())

            if ($(this).parent().hasClass('on')) {
                $(this).parent().removeClass('on')
                $(this).children('.num').text(number - 1)
            } else {
                $(this).parent().addClass('on')
                $(this).children('.num').text(number + 1)
            }
        })
    }

    return {
        a: a,
        commonHandler: commonHandler,
        init: init,
        tab: tab,
        suggestPage: suggestPage,
    }
})();

$(function () {
    front.common.init();
});

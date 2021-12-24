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
        this.modal();
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

    /*modal Close&open*/
    var modal = function modal() {
        let buttonOpen = $('._modal-open');
        let ButtonClose = $('._modal-close');
        let select = $('._modal')
        let funcs = [];

        for (var i = 0; i < buttonOpen.length; i++) {
            console.log(i);
        }

        for (var j = 0; j < select.length; j++) {
            console.log(j);
        }

        function popupOpens() {
            buttonOpen.on('click', function () {
                select.removeClass('hide').addClass('fade show').css('display', 'block');
            })
        }

        function popupClose() {
            ButtonClose.on('click', function () {
                select.removeClass('show').addClass('hide').css('display', 'none');
            })
        }

        popupOpens();
        popupClose();
    }


    // Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
//     function Modal(num) {
//         return function() {
//             // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
//             btns[num].onclick =  function() {
//                 modals[num].style.display = "block";
//                 console.log(num);
//             };
//
//             // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
//             spanes[num].onclick = function() {
//                 modals[num].style.display = "none";
//             };
//         };
//     }
//
// // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
//     for(var i = 0; i < btns.length; i++) {
//         funcs[i] = Modal(i);
//     }
//
// // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
//     for(var j = 0; j < btns.length; j++) {
//         funcs[j]();
//     }
//
// // Modal 영역 밖을 클릭하면 Modal을 닫습니다.
//     window.onclick = function(event) {
//         if (event.target.className == "modal") {
//             event.target.style.display = "none";
//         }
//     };

    return {
        a: a, commonHandler: commonHandler, modal: modal, introScroll: introScroll, tab: tab, init: init,
    }
})();

$(function () {
    front.common.init();
});

var front = front || {};

front.common = front.common || {};

front.common = (function () {

    var init = function () {
        this.a();
        this.commonHandler();
        this.floatBottom();
    }

    var a = function () {
        $('a[href="#"]').on('click', function (e) {
            e.preventDefault();
        });
    }

    var commonHandler = function () {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        })

        /* gnb show */
        $('._gnbShow').on('click', function () {
            $('._gnb').modal('show')
        })

        /* gnb menu */
        $(document).ready(function () {
            var gnbSet = {
                click: function (target, speed) {
                    var _self = this, $target = $(target);
                    _self.speed = speed || 300;
                    $target.each(function () {
                        if (findChildren($(this))) {
                            return;
                        }
                    });

                    function findChildren(obj) {
                        return obj.find('> ul').length > 0;
                    }

                    $target.on('click', 'a', function (e) {
                        e.stopPropagation();
                        var $this = $(this), $depthTarget = $this.next(), $siblings = $this.parent().siblings();
                        $this.parent('li').find('ul li').removeClass('on');
                        $siblings.removeClass('on');
                        $siblings.find('ul').slideUp(250);
                        if ($depthTarget.css('display') == 'none') {
                            _self.activeOn($this);
                            $depthTarget.slideDown(_self.speed);
                        } else {
                            $depthTarget.slideUp(_self.speed);
                            _self.activeOff($this);
                        }
                    })
                }, activeOff: function ($target) {
                    $target.parent().removeClass('on');
                }, activeOn: function ($target) {
                    $target.parent().addClass('on');
                }
            };

            gnbSet.click('._gnb #menu li', 300)

            $('._gnb #menu li').on('click',function (){
                console.log('123')
            })
        })
    }

    var floatBottom = function () {
        $('._openMenu').on('click', function () {
            // 열려있으면
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $('.menu-box').removeClass('open').hide();
                $('.menu-drg-img').removeClass('open').hide();
                $('.menu-drg-txt').removeClass('open').hide();
                $('.menu-link-box').removeClass('open').hide();
                $('body').removeClass('scrOff')
                $('.page-dim').hide()
            } else {
                // 닫혀있으면
                $(this).addClass('open');
                $('.menu-box').show().addClass('open')
                $('.menu-drg-img').show().addClass('open')
                $('.menu-drg-txt').show().addClass('open')
                $('.menu-link-box').show().addClass('open')
                $('body').addClass('scrOff')
                $('.page-dim').show()
            }
        })
    }

    return {
        a: a,
        commonHandler: commonHandler,
        init: init,
        floatBottom: floatBottom
    }
})();

$(function () {
    front.common.init();
});

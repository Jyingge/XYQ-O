let slider = (function () {
    let idSelector = '';
    let $autoPic = null,
        $slideWrap = null;
    let $cardBox = null;
    let $textCard = null;
    let $GF=null;
    let $HZ=null;
    let $a=null;
    let $sildeCard=null;
    let n = 0,
        timer = null;

    function initEle() {
        $autoPic = $(idSelector);
        $autoPic = $('.main-autopic');
        $slideWrap = $('.main-autopic .slide-wrap');
        $cardBox = $('.slide_card .card_box');
        $sildeCard=$('.slide_card'),
        $textCard = $('.auto-banner');
        $GF=$('#guanfang_banner');
        $HZ=$('#hezuo_banner');
        $a=$textCard.find('a');
        $slideWrap.eq(0).siblings().hide();
        autoMove();
    }

    function move() {
        n++;
        if (n >= $slideWrap.length) {
            n = 0;
        }
        $slideWrap.eq(n).css({
            opacity: 0
        }).show().animate({
            opacity: 1
        }, 800).siblings().animate({
            opacity: 0
        }, 300, function () {
            $slideWrap.eq(n).siblings().hide()
        })
        cardMove();
    }

    function autoMove() {
        timer = setInterval(() => {
            move();
        }, 4000)
    }

    function cardMove() {
        $cardBox.eq(n).addClass('play').siblings().removeClass('play');
        $cardBox.find('.play i').eq(n).addClass('card_f').siblings().removeClass('card_f');
    }

    function eventBind() {
        $autoPic.on('mouseenter', function () {
            clearInterval(timer)
        })
        $autoPic.on('mouseleave', function () {
            autoMove();
        })
        $cardBox.on('mouseenter', function (e) {
            let m = $(this).index();
            n = m;
            n--;
            move();
        })
        $a.on('click', function (e) {
            let tar = e.target || e.srcElement;
            if (tar.nodeName.toLowerCase() === 'a') {
                if (tar.getAttribute('type') === 'on') {
                    $(this).addClass('banner').siblings().removeClass('banner');
                    $GF.css({display:'block'});
                    $HZ.css({display:'none'});   
                    $sildeCard.css({display:'block'});
                }
                else{
                    $(this).addClass('banner').siblings().removeClass('banner');
                    $GF.css({display:'none'});
                    $HZ.css({display:'block'});
                    $sildeCard.css({display:'none'});
                }
            }

        })
    }
    return {
        init(id) {
            idSelector = id;
            initEle();
            eventBind()
        }
    }

})()
slider.init('#autoPic');
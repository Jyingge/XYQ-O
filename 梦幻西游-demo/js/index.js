// 这个是轮播图的
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: true, //可选选项，自动滑动
});


// 这个就是最上面文字滚动的
~(function () {
    let $header_free = $('.header_free'),
        $headerbox = $('.headerbox'),
        $a = $('.header_free a');
    let n = 0, timer = null;
    function autoMove() {
        timer = setInterval(() => {
            move();
        }, 3000);
    }
    function move() {
        n++;
        if (n >= $a.length) {
            $headerbox.css({ top: 0 });
            n = 1;
        }
        $headerbox.css({ opacity: 0 }).animate({ top: -n * 55 + 'px', opacity: 1 }, 900);
    }
    autoMove();
})();

let tabCardMove = (function () {
    let $tabBox = $('main .main-tabcard .TF');
    let $headerTab = $('main .main-tabcard .TH a');
    let tabMove = function () {
        $headerTab.on('mouseenter', function () {
            let n = $(this).index();
            console.log(n);
            $headerTab.eq(n).addClass('on').siblings().removeClass('on');
            $tabBox.eq(n).show().siblings().hide()
        })
    }
    return {
        tabMove
    }
})()
tabCardMove.tabMove();
// 这上下两种都是一样的，写法不一样

// 这个是选项卡的
function TabCard(id) {
    let $main = $(id);
    let $tabBox = $main.find(' .tab_foot');
    let $headerTab = $main.find(' .tab_header a');
    $headerTab.on('mouseenter', function () {
        let n = $(this).index();
        console.log(n);
        $headerTab.eq(n).addClass('on').siblings().removeClass('on');
        $tabBox.eq(n).show().siblings().hide()
    })
}
TabCard('.main_list5');
TabCard('.main_list3');
TabCard('.main_list2');
TabCard('.main_list4 .O');
TabCard('.main_list4 .F');




// 这个是小萌层运动的
let Fn = (function () {
    let move = function (id) {
        let $oDiv = $(id);
        $oDiv.on('mouseenter', function moveIn(e) {
            var resL = Math.abs(e.pageX - $oDiv.offset().left), //距离左边
                resT = Math.abs(e.pageY - $oDiv.offset().top), //距离上边
                resR = Math.abs(e.pageX - ($oDiv.offset().left + $oDiv.outerWidth())), //距离右边
                resB = Math.abs(e.pageY - ($oDiv.offset().top + $oDiv.outerHeight())); //距离下边
            var min = Math.min(resL, resB, resR, resT);
            let $oMask = $(this).find('.wall-mark');
            //console.log(resL, resB, resR, resT, min);
            if (min === resL) {
                console.log('左边移入', $(this));
                $oMask.css({
                    left: -$oDiv.outerWidth()
                }).animate({
                    left: 0,
                    opacity: 1
                }, 400)
            } else if (min === resT) {
                console.log('上边移入');
                $oMask.css({
                    top: -$oDiv.outerHeight()
                }).animate({
                    top: 0,
                    opacity: 1
                }, 400)
            } else if (min === resR) {
                console.log('右边移入');
                $oMask.css({
                    left: $oDiv.outerWidth()
                }).animate({
                    left: 0,
                    opacity: 1
                }, 400)
            } else {
                console.log('下边移入');
                $oMask.css({
                    top: $oDiv.outerHeight()
                }).animate({
                    top: 0,
                    opacity: 1
                }, 400)
            }
        })
        $oDiv.on('mouseleave', function moveOut(e) {
            var resL = Math.abs(e.pageX - $oDiv.offset().left), //距离左边
                resT = Math.abs(e.pageY - $oDiv.offset().top), //距离上边
                resR = Math.abs(e.pageX - ($oDiv.offset().left + $oDiv.outerWidth())), //距离右边
                resB = Math.abs(e.pageY - ($oDiv.offset().top + $oDiv.outerHeight())); //距离下边
            var min = Math.min(resL, resB, resR, resT);
            let $oMask = $(this).find('.wall-mark');
            //console.log(resL, resB, resR, resT, min);
            if (min === resL) {
                console.log('左边移出');
                $oMask.animate({
                    left: -$oDiv.outerWidth()
                }, 400).animate({
                    left: 0,
                    opacity: 0
                }, 1)
            } else if (min === resT) {
                console.log('上边移出');
                $oMask.animate({
                    top: -$oDiv.outerHeight()
                }, 400).animate({
                    top: 0,
                    opacity: 0
                }, 1)
            } else if (min === resR) {
                console.log('右边移出');
                $oMask.animate({
                    left: $oDiv.outerWidth()
                }, 400).animate({
                    left: 0,
                    opacity: 0
                }, 1)
            } else {
                console.log('下边移出');
                $oMask.animate({
                    top: $oDiv.outerHeight()
                }, 400).animate({
                    top: 0,
                    opacity: 0
                }, 1)
            }
        })
    }
    let piano=function (id) {
        let $open=$(id).find('.plist');
        let $Piano=$(id).find('.part-List li');
        let $Pa=$(id).find('.part-List li .p_img');
        let $Pl=$(id).find('.part-List li .p_img i');
        $open.on('mouseenter',function () {
            let i=$(this).index();
            $open.eq(i).addClass('open').siblings().removeClass('open');
        })
        $Piano.on('mouseenter',function () {
            let n=$(this).index();
            $Piano.eq(n).addClass('on').siblings().removeClass('on');
            $Pa.eq(n).addClass('white')
            $Pl.eq(n).addClass('light')
        });
        $Piano.on('mouseleave',function () {
            let m=$(this).index();
            $Pa.eq(m).removeClass('white');
            $Pl.eq(m).removeClass('light')
        })
    }
    return { move,piano }
})()

Fn.move('.main-Tan .imgbox')
Fn.move('.main_list3 .wall-big')
Fn.move('.main_list4 .wall-big')
Fn.move('.main_list3 .wall-small .small-pic')
Fn.move('.main_list4 .wall-small .small-pic')
Fn.piano('.piano')

// 这个是手风琴的


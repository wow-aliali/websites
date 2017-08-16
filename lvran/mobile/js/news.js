/*
* @Date:   2017-06-21 21:51:10
* @Last Modified time: 2017-06-22 22:49:17
*/

$(document).ready(function(){
    $('.ad').owlCarousel({
        itemsDesktopSmall: [900,2],
        itemsTablet: [640,1],
        autoPlay: 4000,
        stopOnHover: true
    });

    /** 导航栏点击事件 **/
    $("header ul li a").mousedown(function(){
        $(this).css('color','#3B8EDE');
        $(this).next().css('display','block');
    });
});


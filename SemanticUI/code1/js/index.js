$(document).ready(function(){
    $('.leader .column').transition({
        animation : 'fade up in',
        duration  : 2600,
        interval  : 400,
        onComplete : function() {
            $('.leader .column').css('opacity','1');
        }
    });
    $('header > img').transition('tada');

    /** 手机汉堡菜单 **/
    var num=0;
    $('.mobile-menu-button').click(function(){
        if(num++ %2 == 0){
            $('.menu-mobile').animate({marginTop:"0"},600);
        }else{
            if($(window).width() < 400){
                $('.menu-mobile').animate({marginTop:"-92px"},600);
            }else{
            $('.menu-mobile').animate({marginTop:"-138px"},600);
            }
        }

        $(this).toggleClass("is-active");
    });

    /** 返回顶部 **/
    $('.return-top').click(function(){
        var top = $(window).scrollTop();
        $('body,html').animate({scrollTop:0},300);
    });
});

/** 返回顶部 **/
 $(window).scroll(function(){
    var sc = $(window).scrollTop();
    if(sc > 300){
        $(".returnTop").slideDown();
    }else{
        $(".returnTop").slideUp();
    }
 });

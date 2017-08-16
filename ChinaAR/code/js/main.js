$(document).ready(function(){

    /** 头部搜索框 **/
    $(".search a").click(function(e){
        $(".search_input").fadeToggle(500);
    });
    $(".search_input input").focus(function(){
        $(this).val("");
    });
    $(".search_input input").blur(function(){
        $(this).val("请输入搜索关键词...");
    });

    /** banner滚动图 **/
    $('.banner').owlCarousel({
        items: 1,
        autoPlay: 4000,
        stopOnHover: true,
        paginationSpeed: 500,
        singleItem: true
    });
    $('.owl-page').css('transform','scale(1.3)');

    /** 返回顶部 **/
    $(".returnTop").hide();
    $('.returnTop').click(function(){
        var top = $(window).scrollTop();
        $('body,html').animate({scrollTop:0},300);
    });

    /** 侧滑栏 **/
    var num=0;
    $('.siderbarBtn').click(function(){
        if(num++ %2 == 0){
            $('.siderbar').animate({left:"0px"},300);
            $('body').css('overflow-y','hidden');
            $(this).children().attr('src','img/shut.svg');
        }else{
            $('.siderbar').animate({left:"-50%"},300);
            $('body').css('overflow-y','scroll');
            $(this).children().attr('src','img/Category.svg');
        }
    });
    $('.container,.empty').click(function(){
        $('.siderbar').animate({left:"-50%"},300);
        $('.siderbarBtn').children().attr('src','img/Category.svg');
        $('body').css('overflow-y','scroll');
    });

});

/** 返回顶部 **/
$(window).scroll(function(){
    var sc=$(window).scrollTop();
    if(sc > 300){
        $(".returnTop").slideDown();
    }else{
        $(".returnTop").slideUp();
    }
});


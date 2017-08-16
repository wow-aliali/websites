$(document).ready(function(){
    $('.ui.dropdown').dropdown();

    /** 区块高度 **/
    $('.jonbomtron').height($('.jonbomtron > img').height());
    $('.divide-section').height($('.divide-section > img').height());
    $('.client').height($('.client > img').height());

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

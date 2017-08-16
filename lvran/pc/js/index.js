$(document).ready(function(){

    /** 各个产品鼠标移入移除事件 **/
    $('.product_list > a').mouseenter(function(){
        $(this).children('p').show();
    });
    $('.product_list > a').mouseleave(function(){
        $(this).children('p').hide();
    });

});
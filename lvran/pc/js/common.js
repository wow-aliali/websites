$(document).ready(function(){
    $('#ad').owlCarousel({
        items: 1,
        autoPlay: 4000,
        stopOnHover: true
    });

    /** 搜索框 - 获取焦点事件 **/
    $('.topNav_right input').focus(function(){
        $(this).val(' ');
    });
    $('.topNav_right input').blur(function(){
        $(this).val('请输入你想要搜索的内容');
    });

});
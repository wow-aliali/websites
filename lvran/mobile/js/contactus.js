/*
* @Date:   2017-06-22 20:50:13
* @Last Modified time: 2017-06-27 13:54:27
*/

$(document).ready(function(){
    $('.ad').owlCarousel({
        itemsDesktopSmall: [900,2],
        itemsTablet: [640,1],
        autoPlay: 4000,
        stopOnHover: true
    });

    /** 输入框获取焦点事件 **/
    $(".message input:first-of-type,.message input:nth-of-type(2),.message textarea").focus(function(){
        $(this).val(" ");
    });

    /** 重置信息 **/
    $(".message input:last-of-type").click(function(){
        $(".message input:first-of-type").val("请输入您的姓名");
        $(".message input:nth-of-type(2)").val("请输入您的手机/邮箱/QQ");
        $(".message textarea").val("请输入您的留言");
    });

    /** 提交按钮水波纹效果 **/
    $(".message .submit").click(function(){
        $(".circle").addClass("waterRipple");
        setTimeout(function () {
            $(".circle").removeClass("waterRipple");
        }, 600);   //600毫秒之后执行的操作
    });

});
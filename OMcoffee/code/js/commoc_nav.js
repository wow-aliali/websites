// JavaScript Document


$(document).ready(function(){
	
	/***** 指标滑动效果 配合SuperSlide.2.1.js*****/
	var nav = $(".nav");
	var init = $(".nav li").eq(ind);
	var arrow = $(".nav .nav_selected");
	arrow.css({
        "left": init.position().left - 3
    });
    nav.hover(function() {},
    function() {
        arrow.stop().animate({
            "left": init.position().left - 3
        },
        300);
    });
	$(".nav").slide({
        type: "menu",
        titCell: "li",
        delayTime: 500,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: ind,
        startFun: function(i, c, s, tit) {
            arrow.stop().animate({
                "left": tit.eq(i).position().left - 3
            },
            350);
        }
    });
	
	/**** 会员中心二级菜单 ****/
	$(".nav li:eq(5)").mouseenter(function(){
		$(".subnav").slideDown(600);
	}).mouseleave(function(){
		$(".subnav").hide();
	})
	$(".subnav").mouseenter(function(){
		$(this).show();
	}).mouseleave(function(){
		$(this).hide();
	})

	
    /**** 页脚图标切换 *****/
	$(".footer_img #img1").mouseover(function(){
		$(this).attr("src","images/footer_changeimg1.png");
	}).mouseleave(function(){
		$(this).attr("src","images/footer_img1.png");
	})
	$(".footer_img #img2").mouseover(function(){
		$(this).attr("src","images/footer_changeimg2.png");
	}).mouseleave(function(){
		$(this).attr("src","images/footer_img2.png");
	})
	$(".footer_img #img3").mouseover(function(){
		$(this).attr("src","images/footer_changeimg3.png");
	}).mouseleave(function(){
		$(this).attr("src","images/footer_img3.png");
	})
})
	

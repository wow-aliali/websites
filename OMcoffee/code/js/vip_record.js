// JavaScript Document
$(document).ready(function(){
    	
	/**** 导航切换 *****/
	$(".nav li:not(:first :eq(5))").mouseover(function(){
		$(this).css("color","#CE1D2D");
	}).mouseleave(function(){
		$(this).css("color","#FFF");          
	})
	
	/**** 滚动条 ****/
	$("#scroll_content").niceScroll({
		cursorcolor:"#C91C2B",  
        cursoropacitymax:0.8,  
        touchbehavior:false,  
        cursorwidth:"6px",
		cursorheight:"10px",  
        cursorborder:"0",  
        cursorborderradius:"7px",
		background:"#9B591E",
		autohidemode:false  
	})
	
    /**** 购买物品列表 ****/
	
	/** 购买记录下拉 **/
	$("#right_submenu").click(function(){
		$(".right_menu ul").slideDown(300);
	})
	$(".right_menu ul li").mouseenter(function(){
		$(".right_menu ul").show();
		$(this).css({"background":"#A66339","color":"#FFF"});
	}).mouseleave(function(){
		$(".right_menu ul").hide();
		$(this).css({"background":"#F4D9AA","color":"#803D13"});
	})
    /** 鼠标移入加框 **/
	$(".recordList_nth").mouseover(function(){
		$(this).css("border","#B9915E 2px solid");
	}).mouseleave(function(){
		$(this).css("border","transparent solid 2px");
	})
    /** 记录删除 **/
    $(".recordList_nth #cancel").click(function(){
		$(this).parent().parent().parent().fadeOut(800);
	})
})



/**** 设置开始时顶部导航指标的位置 *****/
var ind = 5;
//设置
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_quwan'//风格
});


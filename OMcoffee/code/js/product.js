// JavaScript Document
$(document).ready(function(){
    	
	/***** 导航切换 ******/
	$(".nav li:not(:first :eq(3))").mouseover(function(){
		$(this).css("color","#CE1D2D");
	}).mouseleave(function(){
		$(this).css("color","#FFFEFF");          
	})
		/*** 滚动条 ***/
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
})



/**** 设置开始时指标的位置 *****/
var ind = 3;
//设置
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_quwan'//风格
});
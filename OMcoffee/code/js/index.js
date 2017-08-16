// JavaScript Document
$(document).ready(function(){
    	
	/***** 导航切换 ******/
	$(".nav li:not(:first :eq(0))").mouseover(function(){
		$(this).css("color","#CE1D2D");
	}).mouseleave(function(){
		$(this).css("color","#FFFEFF");          
	})
	
	
	/*** 中间product 购买图标切换 ***/
	$("#productImg img").mouseenter(function(){
		$(this).attr("src","images/index_product_buy2.png");
	}).mouseleave(function(){
		$(this).attr("src","images/index_prodeuct_buy.png");
	})
	
})



/**** 设置开始时指标的位置 *****/
var ind = 0;
//设置
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_quwan'//风格
});
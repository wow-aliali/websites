// JavaScript Document
$(document).ready(function(){
    	
	/***** 导航切换 ******/
	$(".nav li:not(:first :eq(5))").mouseover(function(){
		$(this).css("color","#CE1D2D");
	}).mouseleave(function(){
		$(this).css("color","#FFFEFF");          
	})
	
	 /**** 合作账号登录 图标切换 *****/
	$(".accountsImg #img1").mouseover(function(){
		$(this).attr("src","images/footer_changeimg1.png");
	}).mouseleave(function(){
		$(this).attr("src","images/footer_img1.png");
	})
	$(".accountsImg #img2").mouseover(function(){
		$(this).attr("src","images/footer_changeimg2.png");
	}).mouseleave(function(){
		$(this).attr("src","images/footer_img2.png");
	})
	$(".accountsImg #img3").mouseover(function(){
		$(this).attr("src","images/footer_changeimg3.png");
	}).mouseleave(function(){
		$(this).attr("src","images/footer_img3.png");
	})
    
	/****账号密码 输入框****/
    $("#textInput1,#textInput2").focus(function(){
		$(this).val("").css({"color":"#000","font-size":"16px"});
	})


})

/**** 设置开始时指标的位置 *****/
var ind = 5;
//设置
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_quwan'//风格
});
// JavaScript Document
/*****大小图切换*******/
$(function(){
	$(".box img").mouseover(function(){
		var big_src=$(this).attr("src");     //获取小图的src属性
		$("#pic").attr("src",big_src);   	 //设置大图的src属性
		})
	})

/****open****/
$("#open").click(function(){
	 $("#open_in").slideDown(800);
	
});
$("#open").mouseleave(function(){
	 $("#open_in").slideUp(800);
});

	/*** 滚动条 ***/
$(document).ready(function(){
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
	});
});
/****选择购买数量****/
$(function(){
		/***** 导航切换 ******/
	$(".nav li:not(:first :eq(3))").mouseover(function(){
		$(this).css("color","#CE1D2D");
	}).mouseleave(function(){
		$(this).css("color","#FFFEFF");          
	})
	
	
 //$("#number").find("input").css({borderBottom:'none'})
 //获得文本框对象
  var t = $("#number");
    //数量增加操作
	     $("#increase").click(function(e){
        var c1=parseInt($("#number").val());
	        $("#number").val(c1+1);
      e.preventDefault()
	        setTotal();
      });  
	   //数量减少操作
	    $("#decrease").click(function(e){
	    var c1=parseInt($("#number").val());
	    if(c1>=1){
	      $("#number").val(c1-1);
	    };
      e.preventDefault()
	  setTotal();
 }); 
})

/**** 设置开始时指标的位置 *****/
var ind = 3;
//设置
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_quwan'//风格
});




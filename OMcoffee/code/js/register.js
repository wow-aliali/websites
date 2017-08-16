// JavaScript Document
$(document).ready(function(){
    	
	/***** 导航切换 ******/
	$(".nav li:not(:first :eq(5))").mouseover(function(){
		$(this).css("color","#CE1D2D");
	}).mouseleave(function(){
		$(this).css("color","#FFFEFF");          
	})


})

 /**** 表单注册验证 ****/
$(document).ready(function (){

     var v = $('#reg-form').easyform();

     $('#demo-form').easyform();

     v.is_submit = false;

     v.error = function (ef, i, r)
     {
         //console.log("Error事件：" + i.id + "对象的值不符合" + r + "规则");
     };

     v.success = function (ef)
     {
         //console.log("成功");
     };

     v.complete = function (ef)
     {
         console.log("完成");
     };

     $('#tip-test1').easytip();
     $('#tip-test2').easytip();
     $('#tip-test3').easytip();
     $('#tip-test4').easytip();


});

    function ajax_demo(p)
    {
        $("#uid").trigger("easyform-ajax", true);
    }


/**** 设置开始时指标的位置 *****/
var ind = 5;
//设置
myFocus.set({
	id:'myFocus',//ID
	pattern:'mF_quwan'//风格
});
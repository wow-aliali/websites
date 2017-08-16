$(function(){
	var wid=$('.box li:first').outerWidth(true),
		index=1,
		timer,
		len=$('.box ul li').length,
		uls=$('.box ul li');
	console.log(wid)
	$('.box').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			play(index+1)
		},2000)
	}).mouseleave();


	$('.box ol li').bind('click',function(){
		play($(this).index()+1)
	})

	$('.next').bind('click',function(){play(index+1)});
	$('.prev').bind('click',function(){play(index-1)});
	
	function play(nums){
		var dir=nums>index?-1:-1;
		if(nums>len){
			nums=1;
		}else if(nums<=0){
			nums=len;
		}
		index=nums;
		$('.box ul').animate({left:wid*dir*(index-1)},500);
		$('.box ol li').eq(index-1).addClass('on').siblings().removeClass('on');
	}


})
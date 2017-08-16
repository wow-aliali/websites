// JavaScript Document
//定义数组
var picsArr=new Array();
picsArr[0]="images/product_detail 01.png";
picsArr[1]="images/product_detail 02.png";
picsArr[2]="images/product_detail 03.png";
picsArr[3]="images/product_detail 04.png";
picsArr[4]="images/product_detail 05.png";

var timer,i=0;          //timer定时器变量，i用于控制数组下标
window.onload=showPic;      //页面加载时初始调用图片向后轮换显示函数showpic

//定义向后轮流播放图片的函数
function showPic(){
document.getElementById("pic").src=picsArr[i];
if(i<=3) i++;
else
i=0        //通过模运算i值的取值范围在0~4之间

}
//定义向前轮流播放图片的函数
function showPrepic(){
	if(i>0)
	i--;
	
else
i=4;
document.getElementById("pic").src=picsArr[i];

}

//定义向前向后"按钮"效果函数
function showNext(){
clearTimeout(timer);
showPic();	
}

function showPre(){
clearTimeout(timer);
showPrepic();	
}









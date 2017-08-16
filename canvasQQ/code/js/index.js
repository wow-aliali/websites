$(document).ready(function(){
    /**** 全屏滚动插件 ****/
    startOnePage({
        frame: "#container",
        container: "#frame",
        sections: ".op-section",
        radio: "#radio",
        radioOn: "#radioOn",
        speed: 800,
        easing: "swing"
    });

    /**** 全屏滚动 - 滚动动效 ****/
    $('.first').bind('mousewheel', function(event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        if (dir == 'Up') {

        } else {
            /** 页面二动效 **/
            $('.second .leftContent').addClass('second-leftContent-animation');
            $('.second .rightImg img').addClass('second-rightImg-animation');
        }
    });
    $('.second').bind('mousewheel', function(event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        if (dir == 'Up') {
            /** 页面二动效重置 **/
            $('.second .leftContent').removeClass('second-leftContent-animation');
            $('.second .rightImg').removeClass('second-rightImg-animation');
        } else {
            /** 页面二动效重置 **/
            $('.second .leftContent').removeClass('second-leftContent-animation');
            $('.second .rightImg').removeClass('second-rightImg-animation');
            /** 页面三动效 **/
            $('.third .centerContent > img').addClass('third-img-animation');
            $('.third .leftLabel img,.third .rightLabel img').addClass('third-circle-animation');
        }
    });
    $('.third').bind('mousewheel', function(event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        if (dir == 'Up') {
            /** 页面二动效 **/
            $('.second .leftContent').addClass('second-leftContent-animation');
            $('.second .rightImg').addClass('second-rightImg-animation');
            /** 页面三动效重置 **/
            $('.third .centerContent > img').removeClass('third-img-animation');
            $('.third .leftLabel img,.third .rightLabel img').removeClass('third-circle-animation');
        } else {
            /** 页面四动效 **/
            $('.fourth img').addClass('fourth-img-animation');
            /** 页面三动效重置 **/
            $('.third .centerContent > img').removeClass('third-img-animation');
            $('.third .leftLabel img,.third .rightLabel img').removeClass('third-circle-animation');
        }
    });
    $('.fourth').bind('mousewheel', function(event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        if (dir == 'Up') {
            /** 页面三动效 **/
            $('.third .centerContent > img').addClass('third-img-animation');
            $('.third .leftLabel img,.third .rightLabel img').addClass('third-circle-animation');
            /** 页面四动效重置 **/
            $('.fourth img').removeClass('fourth-img-animation');
        } else {
            /** 页面五动效 **/
            $('.fifth img').addClass('fifth-img-animation');
            /** 页面四动效重置 **/
            $('.fourth img').removeClass('fourth-img-animation');
        }
    });
    $('.fifth').bind('mousewheel', function(event, delta) {
        var dir = delta > 0 ? 'Up' : 'Down';
        if (dir == 'Up') {
            /** 页面五动效重置 **/
            $('.fifth img').removeClass('fifth-img-animation');
            /** 页面四动效 **/
            $('.fourth img').addClass('fourth-img-animation');
        } else {

        }
    });
    /**** 全屏滚动 - 圆点导航点击动效 ****/
    $('#radio li:nth-child(2)').click(function(){
        /** 页面二动效 **/
        $('.second .leftContent').addClass('second-leftContent-animation');
        $('.second .rightImg').addClass('second-rightImg-animation');
        /** 页面二动效重置 **/
        setTimeout(function(){
            $('.second .leftContent').removeClass('second-leftContent-animation');
            $('.second .rightImg').removeClass('second-rightImg-animation');
        }, 4000);
    });
    $('#radio li:nth-child(3)').click(function(){
        /** 页面三动效 **/
        $('.third .centerContent > img').addClass('third-img-animation');
        $('.third .leftLabel img,.third .rightLabel img').addClass('third-circle-animation');
        /** 页面三动效重置 **/
        setTimeout(function(){
            $('.third .centerContent > img').removeClass('third-img-animation');
            $('.third .leftLabel img,.third .rightLabel img').removeClass('third-circle-animation');
        }, 4000);
    });
    $('#radio li:nth-child(4)').click(function(){
        /** 页面四动效 **/
        $('.fourth img').addClass('fourth-img-animation');
        /** 页面四动效重置 **/
        setTimeout(function(){
            $('.fourth img').removeClass('fourth-img-animation');
        }, 4000);
    });
    $('#radio li:nth-child(5)').click(function(){
        /** 页面五动效 **/
        $('.fifth img').addClass('fifth-img-animation');
        /** 页面四动效重置 **/
        setTimeout(function(){
            $('.fifth img').removeClass('fifth-img-animation');
        }, 4000);
    });


});

/**** 页面一变换图 ****/
var curIndex = 0;
var timeInterval = 1500;
var arr=new Array();
arr[0]="1.png";
arr[1]="2.png";
arr[2]="3.png";
arr[3]="4.png";
setInterval(changeImg,timeInterval);
function changeImg()
{
    var obj=document.getElementById("changImg");
    if (curIndex==arr.length-1)
    {
        curIndex=0;
    }
    else
    {
       curIndex+=1;
    }
    obj.src='img/pageOne_0' + arr[curIndex];
}
$(document).ready(function(){

    /** 手机端下滑栏控制 **/
    var num=0;
    $('#collapse-button').click(function(){
        if(num++ %2 == 0){
            $(this).attr('src','img/topNav_close.svg');
        }else{
            $(this).attr('src','img/topNav_open.svg');
        }
    });
});
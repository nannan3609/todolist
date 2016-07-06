/**
 * Created by nannan on 16/6/30.
 */
$("#back").click(function(){
    window.location.href="/";
});
$("#save").click(function(){
    var d=new Date();
    var y= d.getFullYear();
    var m= d.getMonth()+1;
    var t= d.getDate();
    //设置添加时间
    var date=y+"年"+m+"月"+t+"日";
    $.ajax({
        url:'/insert',
        data:{
            title:$("#title").val(),
            content:$("#content").val(),
            addtime:date
        },
        dataType:'json',
        type:'post',
        success:function(data){
            console.log(data);
            console.log("插入成功");
        },
        error: function (error) {
            console.log(error);
        }
    });
    window.location.href="/";
});
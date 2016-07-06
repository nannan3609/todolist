/**
 * Created by nannan on 16/7/1.
 */
$("#back").click(function(){
    window.location.href="/";
});
$("#save").click(function(){
    $.ajax({
        url:'/update',
        data:{
            num:$("#num").val(),
            title:$("#title").val(),
            content:$("#content").val(),
            states:$("#status").val()
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
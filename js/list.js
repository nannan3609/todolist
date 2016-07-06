/**
 * Created by nannan on 16/6/30.
 */
var img;
$.ajax({
    url: '/select',
    data: {
        listTable: "list"
    },
    dataType: 'json',
    type: 'get',
    success: function (data) {
        // 把json形式以html输出
        for (var i = 0; i < data.length; i++) {
            var container = $('<div class="mission"></div>');
            //容器
            if (data[i]['status'] == "unfinish") {
                img = $('<img src="img/dot.png" class="status"/>');
            }
            //未完成状态
            else {
                img = $('<img src="img/complete.png" class="status"/>');
            }
            //完成状态
            var missionTop = $('<p class="missionName" data-id="' + data[i]['id'] + '"></p>');
            var missionName = '任务' + data[i]['id'] + ' ' + data[i]['title'];
            //任务名
            missionTop.text(missionName);
            var time = $(' <p class="time"></p>');
            time.text(data[i]['time']);
            //添加时间
            img.appendTo(container);
            missionTop.appendTo(container);
            time.appendTo(container);
            $('<button type="button" class="btn btn-default change"  data-id="' + data[i]['id'] + '">修改</button>').appendTo(container);
            //修改按钮
            $('<button type="button" class="btn btn-danger del"  data-id="' + data[i]['id'] + '">删除</button>').appendTo(container);
            //删除按钮
            container.appendTo($(".content"));
            $(".change").click(function () {
                var num = $(this).attr("data-id");
                $.ajax({
                    url: '/select/once',
                    data: {
                        num: num
                    },
                    dataType: 'json',
                    type: 'get',
                    success: function (data) {
                        window.location.href = "/change/" + data[0]['id'] + "/" + data[0]['title'] + "/" + data[0]['time'] + "/" + data[0]['status'] + "/" + data[0]['content'];
                    },
                    error: function (error) {
                        console.log("wrong");
                        console.log(error);
                    }
                });
            });
            $(".del").click(function () {
                var dnum = $(this).attr("data-id");
                $.ajax({
                    url: '/delete',
                    data: {
                        num: dnum
                    },
                    dataType: 'json',
                    type: 'post',
                    success: function (data) {
                        console.log("删除成功");
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
                window.location.href = "/";
            });
        }
    },
    error: function (error) {
        console.log("wrong");
        console.log(error);
    }

});

$("#add").click(function () {
    $(".contianer").empty();
    $(".contianer").load("setting.html");
});
//添加数据


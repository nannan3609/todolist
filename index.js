/**
 * Created by nannan on 16/7/1.
 */
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
// 引入
app.use(bodyParser.json());  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: false
}));
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'missionList'
});
conn.connect();
// 连接数据库
app.set('view engine', 'ejs');
//设置模板引擎
app.set('views', __dirname + '/views');
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.render('list.ejs');
});
app.get('/select', function (req, res) {
    var selectSQL = "select * from "+req.query.listTable;
    //倒序查找
    conn.query(selectSQL, function (err, rows) {
        if (err) console.log(err);
        res.json(rows);
        // 以JSON输入查询结果
    });
    //查询
});
app.get('/select/once', function (req, res) {
    var selectSQL = "select * from  list WHERE id=" + req.query.num;
    console.log(selectSQL);
    conn.query(selectSQL, function (err, rows) {
        if (err) console.log(err);
        res.json(rows);
        // 以JSON输入查询结果
    });
    //查询
});
app.post('/insert', function (req, res) {
    var insertSQL = 'insert into list ( title, content,time,status) VALUES ( "' + req.body.title + '","' + req.body.content + '","' + req.body.addtime + '","unfinish")';
    console.log(insertSQL);
    conn.query(insertSQL, function (err1, res1) {
        if (err1) console.log(err1);
        else{
           console.log(res1);
        }
    });
    //插入数据
});
app.get('/change/:num/:tit/:t/:states/:con',function(req,res){
    var local={num:req.params.num,tit:req.params.tit,time:req.params.t,states:req.params.states,con:req.params.con};
    res.render('update.ejs',local);
});
//修改页面
app.post('/update', function (req, res) {
    var updateSQL = 'update list set `title`="' + req.body.title + '",`content`="' + req.body.content + '",`status`="'+req.body.states+'" where id=' + req.body.num;
    console.log(updateSQL);
    conn.query(updateSQL, function (err3, res3) {
            if (err3) {
                console.log(err3);
            }
            else{
                console.log(res3);
            }
    });
});
//修改数据
app.post('/delete', function (req, res) {
    var deleteSQL = 'delete from list where id=' + req.body.num;
    console.log(deleteSQL);
    conn.query(deleteSQL, function (err, res1) {
        if (err) console.log(err);
        console.log(res1);
    });
});
//删除数据
//app.listen(3000,"192.168.1.105");
app.listen(3000);
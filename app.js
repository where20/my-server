var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    random = require('./utils/random');

var WXBizDataCrypt = require('./utils/WXBizDataCrypt');
// 跨域问题
var cors = require('cors');

global.xmyy = {
    port: "2140",
    wxCode: "023G3NQw0kaRDj1yPuOw0kqxQw0G3NQD",
    wxAppID: "wxcfcff1cc105112d3",
    wxAppsecrert: "8f52b4682b396f16e7a48ab8e3a363f7",
};


app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cors());


//把app通过传参的方式传到index.js中
routes(app);
/*
数据库 测试
*/
// mongoose.connect('mongodb://127.0.0.1:27017/weapp-server');
// var PersonModel = require('./model/person')
// var db = mongoose.connection;
// db.on('error', function (error){
//     console.log('数据库连接失败：' + error); 
// });
// db.once('open', function (callback) {
//   // yay!
//   console.log('——数据库连接成功！——'); 
// });

app.listen(xmyy.port, function() {  
    console.log('Your server is running on port ' + xmyy.port);
});

app.all('/hello', function (req, res) {
    res.json('Hello World!');
});
//接口测试
app.get('/person', function (req, res) {
    var data = []
    for(var i=0; i<10; i++){
        data.push({
            name: random.getName(),
            moble: random.getMoble(),
            idNo: random.getId_no(),
            bankAccount: random.getBank_account('0102'),

        })
    }
    
	res.json(data);
});

module.exports = app;


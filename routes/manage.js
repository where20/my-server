var request = require('request'); 

// 公共GET方法
exports.getTest = function(req, res) {
    console.log('reqUrl', req.url);
    res.json(req.url);
}


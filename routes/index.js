var express = require('express'),
    router = express.Router();
var manage = require('./manage');

module.exports = function (app) {
    app.get('/test', manage.getTest);
}

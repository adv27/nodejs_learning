var fs = require('fs');
var request = require('request');


var options = {
    uri: 'http://chuyencuadev.com/59d5861832b5ab7a3f933fe8'
};

r = request(options, function (error, response, body) {
    console.log('error: ', error);
    console.log('statusCode: ', response && response.statusCode);
    console.log('body: ', body);
});
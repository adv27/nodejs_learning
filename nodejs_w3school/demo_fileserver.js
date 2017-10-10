var http = require("http");
var url = require("url");
var fs = require("fs");
var events = require('events');

var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
    console.log('Wooooffffff Wooooooooooff');
};

var cwd = function () {
    console.log(__dirname);
};

eventEmitter.on('bark',myEventHandler);
eventEmitter.on('cwd',cwd);

eventEmitter.emit('bark');
eventEmitter.emit('cwd');


var rs = fs.createReadStream('./winter.html');
rs.on('open', function () {
    console.log('Winter is open!!!');
});

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var file_name = "." + q.pathname;
    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html"});
            return res.end("404 Not Found!");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    })
}).listen(8080);
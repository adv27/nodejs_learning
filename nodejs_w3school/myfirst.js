var http = require("http");
var url = require("url");
var fs = require("fs");
var dt = require("./myfirstmodule");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("The date and time currently: " + dt.myDateTime());
    res.write("\n" + req.url);
    // res.end("Hello World!");

    var queries = url.parse(req.url, true).query;

    res.write("Length: " + queries.length);

    //res.write("To String: " +  queries.toString());

    // res.write("Type: "  + typeof queries);

    for (var query in queries) {
        res.write("Key: " + query + " " + "Value: " + queries[query]);
    }
}).listen(8080);
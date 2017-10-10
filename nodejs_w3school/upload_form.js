var http = require('http'),
    formidable = require('formidable'),
    util = require('util'),
    fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            //moving file
            if (files.filetoupload == null) {
                res.writeHead(404, {"Content-Type": "text/html"});
                return res.end("404 Not Found!");
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('File uploaded and moved');
            res.end(util.inspect({fields: fields, files: files}));
        }).on('progress', function (bytesReceived, bytesExpected) {
            var percent_complete = (bytesReceived / bytesExpected) * 100;
            console.log(percent_complete.toFixed(2));
        }).on('error', function (err) {
            console.error(err);
            throw err;
        }).on('fileBegin', function (name, file) {
            var name = file.name;
            file.path = __dirname + '/' + 'upload_files/' + name;
        });

        // form.on('end', function () {
        //     var oldpath = form.files.path;
        //     var file_name = form.files.name;
        //     var newpath = __dirname + '/' + 'upload_files/' + file_name;
        //     fs.rename(oldpath, newpath, function (err) {
        //         if (err) throw err;
        //     });
        // });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);
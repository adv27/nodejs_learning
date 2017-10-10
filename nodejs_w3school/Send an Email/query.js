var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    var query = {
        //address: /^S/  //regex
        address: 'Mountain 21'
    };

    var mysort = {
        name: 1,
        address: -1
    };

    db.collection('customers').find({}).sort(mysort).toArray(function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        db.close();
    })
});
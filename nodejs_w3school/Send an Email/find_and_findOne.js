var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    db.collection('products').findOne({}, function (err, result) {
        if (err) throw err;
        console.log('Find One');
        console.log(result);
        db.close();
    });

    db.collection('products').find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log('Find All');
        console.log(result);
        db.close();
    });

    db.collection('customers').find({}, {
        address: false,
        _id: false
    }).toArray(function (err, result) {
        if (err) throw err;
        console.log('Find Some');
        console.log(result);
        result.forEach(function (t, number) {
            console.log('index[' + number + ']: ' + t.name);
        });
        db.close();
    });

});
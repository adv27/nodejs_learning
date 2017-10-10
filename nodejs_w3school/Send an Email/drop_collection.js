var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    //db.dropCollection('pets',function (err, delOK) {
    db.collection('pets').drop(function (err, delOK) {
        if (err) {
            throw err;
        }
        if (delOK) {
            console.log('Collection deleted');
        } else {
            console.log('Unable to delete');
        }
        db.close();
    });
});
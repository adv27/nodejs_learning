var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    var my_query = {
        address: /^O/
    };
    db.collection('customers').deleteOne(my_query, function (err, obj) {
        if (err) {
            throw err;
        }
        //console.log(obj);
        console.log(obj.deletedCount, 'document deleted');
        db.close();
    });
});
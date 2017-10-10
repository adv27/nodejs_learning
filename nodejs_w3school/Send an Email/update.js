var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw err;
    }
    var query = {
        address: /^H/
    };
    var new_values = {
        $set: {
            address: 'The Great Wall'
        }
    };
    db.collection('customers').updateMany(query, new_values, function (err, res) {
        if (err) {
            throw err;
        }
        console.log(res.modifiedCount);
        console.log(res.result.nModified);
        console.log('Value updated');
        db.close();
    });
});
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';


// //inserting value
// MongoClient.connect(url, function (err, db) {
//     if (err) {
//         throw err;
//     }
//     var my_objs = [{
//         _id: 197,
//         product_id: 154,
//         status: 1
//     }];
//     db.collection('orders').insertMany(my_objs, function (err, res) {
//         if (err) {
//             throw err;
//         }
//         console.log(res);
//         db.close();
//     });
// });

MongoClient.connect(url, function (err, db) {
    if (err) {
        throw  err;
    }
    db.collection('orders').updateOne({
        _id: 1
    }, {
        $set: {
            product_id: 197
        }
    }, function (err, res) {
        if (err) {
            throw err;
        }
        console.log(res.modifiedCount);
        console.log(res.result.nModified);
        console.log('Value updated');
    });
    db.collection('orders').aggregate([{
        $lookup: {
            from: 'products',
            localField: 'product_id',
            foreignField: '_id',
            as: 'orderdetails'
        }
    }], function (err, res) {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify(res));
        db.close();
    });
});


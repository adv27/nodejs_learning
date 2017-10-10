var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

// /**
//  * Insert 1
//  */
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var myobj = {
//         name: 'Billy',
//         type: 'dog',
//         gender: 'male'
//     };
//     db.collection('pets').insertOne(myobj, function (err, res) {
//         if (err) {
//             db.close();
//             throw err;
//         }
//         console.log(res.toString());
//         console.log('1 Document inserted');
//         db.close();
//     });
// });


// /**
//  * Insert many
//  */
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var myobj = [
//         {name: 'John', address: 'Highway 71'},
//         {name: 'Peter', address: 'Lowstreet 4'},
//         {name: 'Amy', address: 'Apple st 652'},
//         {name: 'Hannah', address: 'Mountain 21'},
//         {name: 'Michael', address: 'Valley 345'},
//         {name: 'Sandy', address: 'Ocean blvd 2'},
//         {name: 'Betty', address: 'Green Grass 1'},
//         {name: 'Richard', address: 'Sky st 331'},
//         {name: 'Susan', address: 'One way 98'},
//         {name: 'Vicky', address: 'Yellow Garden 2'},
//         {name: 'Ben', address: 'Park Lane 38'},
//         {name: 'William', address: 'Central st 954'},
//         {name: 'Chuck', address: 'Main Road 989'},
//         {name: 'Viola', address: 'Sideway 1633'}
//     ];
//     db.collection('customers').insertMany(myobj, function (err, res) {
//         if (err) {
//             db.close();
//             throw  err;
//         }
//         console.log(res);
//         console.log('Number of documents inserted: ', res.insertedCount);
//         db.close();
//     });
// });

/**
 * Insert with specific _id attribute
 */
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myobj = [
        {_id: 197, name: 'Coca Cola'},
        {_id: 198, name: 'Pepsi'},
        {_id: 199, name: 'Marshall'}
    ];

    db.collection('products').insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

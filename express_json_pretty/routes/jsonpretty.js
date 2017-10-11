var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('jsonpretty', {title: 'JSON Pretty'});
});

router.post('/', function (req, res, next) {
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(req.body.text));
    console.log(JSON.stringify(req.body.text));
});

module.exports = router;

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contact', {title: 'Contact'});
});


router.post('/send', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anhvdse04605@fpt.edu.vn',
            pass: '2711@2711a'
        }
    });

    var mailOptions = {
        to: 'Dinh Anh <vd.anh2711@gmail.com>',
        from: 'anhvdse04605@fpt.edu.vn',
        subject: 'Nodejs mailer',
        text: 'You have new submission with the following detail . . . Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<p>You got a new submission with the following details</p><ul><li>Name:  ' + req.body.name + '<li>' + '<li>Name:  ' + req.body.email + '<li>' + '<li>Name:  ' + req.body.message + '<li>' + '</ul>'
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(error);
            res.redirect('/');

        } else {
            console.log('Message Sent ' + info.response);
        }
        res.redirect('/');
    });
});
module.exports = router;

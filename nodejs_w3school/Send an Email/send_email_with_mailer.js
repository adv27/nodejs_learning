var nodemailer = require('nodemailer');

var receivers = ['vd.anh2711@gmail.com', 'dinhanh27111997@gmail.com'];

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anhvdse04605@fpt.edu.vn',
        pass: '2711@2711a'
    }
});


var mailOptions = {
    from: 'anhvdse04605@fpt.edu.vn',
    to: receivers,
    subject: 'Mail include html code',
    text: 'So easy!',
    // language=HTML
    html: '<input type="button" id="btn" value="Click Me">'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: 'ranjan.apporva@gmail.com',
        pass: 'Rit4kir#40'
    }
});

var mailOptions = {
  from: 'ranjan.apporva@gmail.com',
  to: '21ranjanritesh@gmail.com',
  subject: 'Love Email using Node.js',
  html: '<h1>Welcome</h1><br/><img scr="https://www.shutterstock.com/image-vector/illustration-love-valentine-dayorigami-made-hot-548198155" alt="logo"/><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
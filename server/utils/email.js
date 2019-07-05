var nodemailer = require('nodemailer');

var config = {
  host: 'smtp.126.com', 
  port: 25,
  auth: {
    user: 'leooo9527@126.com',
    pass: 'leo730811'
  }
}

var transporter = nodemailer.createTransport(config)

module.exports = function (mail) {
  transporter.sendMail(mail, function(error, info){
    if (error) {
      return console.log(error)
    }
    console.log('mail sent:', info.response)
  })
}
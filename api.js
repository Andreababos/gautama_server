const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
//
// /* GET api listing. */
// router.get('/', (req, res) => {
//
//     console.log(res);
//   console.log(req);
//   var smtpConfig = {
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//           user: 'pottyosandi@gmail.com',
//           pass: 'totyimotyi'
//       }
//   };
//
//  var transporter = nodemailer.createTransport(smtpConfig);
//
//  var mailOptions = {
//      from: 'pottyosandi@gmail.com',
//      to: 'tokestamas97@gmail.com',
//      subject: 'Test',
//      text: 'faszcsi'
//  };
//
//  transporter.sendMail(mailOptions, function(error, info){
//      if(error){
//          return console.log(error);
//      }
//      console.log('Message has been sent: ');
//  });
//  res.send('api works');
//
//
// });


router.get('/sendEmail', (req, res) => {
  //console.log(res);
  //console.log(req);
    console.log(req.query.name);
  var smtpConfig = {
      host: 'smtp.websupport.sk',
      port: 465,
      secure: true,
      auth: {
          user: 'noreply@gautamagroup.com',
          pass: 'gautama.group'
      }
  };

  var transporter = nodemailer.createTransport(smtpConfig);

  var mailOptions = {
      from: 'noreply@gautamagroup.com',
      to: 'andrea@netdevelop.dk',
      subject: req.query.subject.toString(),
      text: "Email: "+req.query.email.toString()+"\n"+req.query.name.toString()+" wrote: "+req.query.message.toString()+"\n"
  };

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    res.type('application/json');

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          var jsonres = {message : 'FAILED'};
          res.send(jsonres);
          return console.log(error);
      }
      else{
          var jsonres = {message : 'OK'};
          res.send(jsonres);
      }
      console.log('Message sent: ');
  });


});

module.exports = router;

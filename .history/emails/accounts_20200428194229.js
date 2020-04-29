const sgMail = require('@sendgrid/mail')
require('dotenv').config();

// const sendgridApikey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
    to: 'laljiyadav04121995@gmail.com',
    from: 'laljiyadav04121995@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  
  sgMail.send(msg);

// sgMail.send({
//   to: 'laljiyadav04121995@gmail.com',
//   from: 'laljiyadav04121995@gmail.com',
//   subject: 'my first test app ',
//   text: 'it working ',
//  // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// })

// const sendWelcomeEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'anubhavya246@gmail.com',
//         subject: 'Thanks for joining',
//         text: 'welcome to our app , ${name}. rgh6'
//     })

// }

// module.exports = {
//     sendWelcomeEmail
// }
